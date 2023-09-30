import React, { useReducer } from "react";

const reducer = (state, action) => {
    // reducer ở đây luôn nhận 2 tham số đó là state và action
    // state ở đây = 0 do useReducer có giá trị khởi tạo là 0
    switch(action) {
        // kiểm tra xem action này có giá trị là gì
        case 'increase':
            return state + 1;
            // giá trị trả về này sẽ gán vào state 
        case 'decrease':
            return state - 1;
        case 'delete':
            return 0;
        default:
            return state;           
    }
}

    const reducer2 = (state, action) => {
        // action tại đây sẽ nhận lại 1 object
        switch(action.type) {
            case 'type1':
                return action.data
                // vậy state và count 2 sẽ được gán giá trị là 10
            default:
                return state;    
        }
    }

function UseReducer() {
    // nhận vào 2 tham số , 1 là reducer , 2 là giá trị khởi tạo
    const [count, dispatch] = useReducer(reducer, 0);
    // dispatch hãy hiểu đơn giản là 1 function truyền đi 1 action nào đó
    const [count2, dispatch2] = useReducer(reducer2,0);
  return (
    <div>
        <div>{count}</div>
        {/* khi chúng ta sử dụng bất kỳ function nào là dispatch , thì reducer này sẽ được chạy 
        với tham số thứ 2 là action mà chúng ta truyền vào làm tham số , nó sẽ kiểm tra action trên reducer là 
        loại case gì rồi sẽ thực hiện action tương tự */}
     <button onClick={() => dispatch('increase')}>increase</button>
     <button onClick={() => dispatch('decrease')}>decrease</button>
     <button onClick={() => dispatch('delete')}>delete</button>
    {/* các function trên đã hoạt động dựa theo loại action được gán trong dispatch */}

        <div>
            {count2}
        </div>
        {/* thay vì dispatch với action truyền string như trên , ở đây sẽ truyền vào 1 object */}
        <button onClick={() => dispatch2({
            type: 'type1',
            data: 10
        })}>assign value</button>
    </div>
  );
}

export default UseReducer;
// cần phải hiểu rõ
// ACTION: ('ADD_NEW_ITEM')


// VIEW: giả sử nhấn lên 1 button ---> dispatch('ADD_NEW_ITEM')

// khi chúng ta thực hiện bắn đi 1 action --> truyền vào trong reducer là tham số thứ 2 tức action

//REDUCERS là 1 function chứa 2 tham số  (state, action) => {
// nó sẽ kiểm tra xem action này có phải ADD_NEW_ITEM ko
// switch(action) {
    // case 'ADD_NEW_ITEM':
    // state = state  + 1;
    // case 'ABC':
        // logic here

        // vậy tương ứng với từng action , ta sẽ có đoạn logic tương ứng để thay đổi đoạn state trước đó --> 
        // return về 1 state mới sau khi đã thực thi các logic cho từng action
//}
//}
