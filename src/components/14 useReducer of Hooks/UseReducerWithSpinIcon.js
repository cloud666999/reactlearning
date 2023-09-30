import React, { useReducer } from "react";

const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        // ghi đè lại loading
        loading: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        // api đã trả về dữ liệu --> trạng thái ko còn là loading nữa
        loading: false,

        // giá trị trả về từ API , và ta sẽ ghi đè lại data trước đó là 1 emty array
        data: action.data,
      };

    case "GET_USER_ERROR":
      return {
        ...state,
        data: [],
        error: action.data,
      };

    default:
  }
};

const initState = {
  loading: false,
  data: [],
  error: null,
};

function UseReducerWithSpinIcon() {
  const [user, userDispatch] = useReducer(userReducer, initState);

  const getUsers = () => {
    // trước khi fetch chúng ta sẽ thực hiện dispatch 1 action
    userDispatch({
      // khi ta thực hiện , thì userReducer sẽ được thực thi và chạy đoạn code tương ứng theo case
      type: "GET_USER_REQUEST",
    });

    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        // convert về dạng json
        .then((res) => res.json())
        .then((res) => {
          // khi trả về dữ liệu thành công , chúng ta cũng nên dispatch 1 action
          userDispatch({
            type: "GET_USER_SUCCESS",
            data: res,
          });
        })
        .catch((err) => {
          userDispatch({
            type: "GET_USER_ERROR",
            data: err,
          });
        });
    }, 3000);
  };
  // user tại thời điểm này sẽ là object  với field loading là false , data là emty array
  return (
    <div>
        {/* convert user to string */}
        {user.loading ? <p>Loading ...</p> : <p>{JSON.stringify(user)}</p>}
      <button onClick={getUsers}>Get User</button>
    </div>
  );
}

export default UseReducerWithSpinIcon;
