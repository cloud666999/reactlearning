import React, { useEffect, useState } from 'react'
import useReducer from './hooks/useReducer';

// ý tưởng : từ phía UI , ta có thể dispatch  action  , và ta sẽ có reducer sẽ nhận type hiện tại 
// của action đó là gì, chúng ta sẽ cập nhật dữ liệu đó trong store chung
function fetchReducer(state, action) {
    switch(action.type) {
        case 'fetchAPI/request':
            return {...state, isLoading: action.isLoading}
        case 'fetchAPI/success':
            return {...state, isLoading: action.isLoading, error: action.error, data: action.data}
        case 'fetchAPI/error':
            return {...state, isLoading: action.isLoading, error: action.error, data: action.data}
        default:
            return state;
    } 
}


function CustomHook() {
    const [state, dispatch] = useReducer(fetchReducer, {
        data: [],
        isLoading: true,
        error: null
    })
    // thay vì khai báo 3 state này , ta có thể 

    const {data: users, isLoading, error} = state;
    // const [users,setUsers]= useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    // nếu muốn custom react Hook phải đặt chữ use ở đầu  -> nếu ko React sẽ ko biết đây là react hook
    // và nó sẽ ko thể kiểm tra được thứ hiện tại đang vi phạm rule gì

    // vậy sử dụng custom hook khi nào ? . Khi các đoạn code có những phần lặp đi lặp lại rất nhiều lần
    // về ý tưởng  ----> tách ra làm function riêng , chỗ nào cần sử dụng mới gọi lại function đó
    // dễ maintain code khi cần cập nhật 
    const fetchUsers = async () => {
        // setIsLoading(true);

        dispatch({
            type: 'fetchAPI/request'
        })
        try {
            const res = await fetch("https://reqres.in/api/users");
            const  {data } = await res.json();

            // setUsers(data);
            // setError(null);
            // setIsLoading(false);
            // thay vì viết 3 dòng code như thế này , ta chỉ cần thực hiện dispatch
            dispatch({
                type: 'fetchAPI/success',
                isLoading : false,
                error: null,
                data
            })
        } catch (err) {
            // setIsLoading(false);
            // setError(err);
            // setUsers([]);
            dispatch({
                type: 'fetchAPI/error',
                isLoading: false,
                error: null,
                data: []
            })
        }
    }

    useEffect(() => {
        // khi component được mount, sẽ gọi tới function fetchUser();
        fetchUsers();
    },[])

    if(error) {
        return 'Error';
    }
  return isLoading ? (<p>Loading ....</p>) : (users.map((user) => (
    <p>
        {user.first_name} {user.email}
    </p>
  )));
}

export default CustomHook

