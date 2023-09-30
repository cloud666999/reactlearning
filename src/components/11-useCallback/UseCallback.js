import React, { useCallback, useState } from "react";
import ChildComponent from "./childcomponents/ChildComponent";

function UseCallback() {
  const [users, setUsers] = useState([]);

  // ở trong js khi thực hiện việc gán 1 biến = 1 function , array , object thì đó là 1 tham chiếu
  //# với tham trị
  // ví dụ về tham trị : let a = 3 , let b = 3 , a === b -> true

  // nhưng ngược lại với object, array , function khi chúng ta thực hiện việc gán giá trị cho 1 biến
  // ví dụ  let a = function c , let b = function c , a === b  -> false  ở đây nó ko gán giá trị mà là gán
  // 1 địa chỉ trong bộ nhớ vậy nên a và b đang tham trị tới 2 ô nhớ khác nhau

  //  khi Component UseCallBack  bị render lại -> lệnh gán được thực thi lại -> getData đã tham chiếu tới
  // 1 ô nhớ mới # ô nhớ đầu tiên
  // const getData = (type) => {
  //     return fetch(`https://reqres.in/api/${type}`)
  // };

  //SOLUTION : useCallBack , đối số thứ nhất là 1 function , 2 là 1 array dependency
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  },[]);
  // sau khi dùng useCallback , api comments đã ko bắn ra 1 lần nữa , vậy là lợi ích của nó giúp chúng ta
  // nếu trong useEffect ở các component con bị thực thi l lại khi nhận 1 function từ component cha
  // mục đích cuối cùng là để getData được truyền vào component con ChildComponent  tránh bị thực thi lại

  //tại f12 - Network , tôi check thì khi gọi dữ liệu thì 1 API comments được render ra 1 lần nữa
  // lý do vì tại setUsers , state users đã được thay đổi  ---> Component sẽ bị re- render lại --->
  // toàn bộ đoạn code sẽ bị thực thi lại ---> nên getData truyền vào trong ChildComponent sẽ gặp vấn đề
  // tương tự
  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };
  return (
    <div>
      <p>Data:</p>
      <button onClick={handleClick}>Get users Data</button>
      <p>{JSON.stringify(users)}</p>
      {/* getData ở đây đã có sự thay đổi trong ChildComponent -> khi getData ở trong ChildComponent
      có sự thay đổi thì đoạn code trong useEffect cũng được thực hiện lại*/}
      <ChildComponent getData={getData} />
    </div>
  );
}

export default UseCallback;
