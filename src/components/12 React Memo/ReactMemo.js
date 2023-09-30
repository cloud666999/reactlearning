import React, { useCallback, useState } from "react";
import ChildComponentReactMemo from "./childcomponents/ChildComponenReactMemot";

// giả sử tôi thêm viewCount tại đây , nếu viewCount thay đổi thì toàn bộ Child Component bên trong cũng sẽ bị
//re-render

// tôi có 2 kỹ thuật ko cần sử dụng React.memo mà Child Component ko bị re-render lại
// tôi tạo 1 Component khác chứa <p></p> và <button></button>

function Count({ children }) {
  // KHI BIẾN COUNT NÀY THAY ĐỔI STATE COUNT SẼ BỊ THAY ĐỔI THEO VÀ CHỈ HOẠT ĐỘNG BÊN TRONG NỘI BỘ COMPONENT
  //COUNT NÀY KHÁC VỚI VIỆC TA ĐỂ count vào trong component ReactMemo , khi biến count thay đổi nó sẽ làm
  // component ReactMemo bị re-render lại ---> dẫn tới các component con bị re-render theo
  // do ta đã di chuyển biến count vào trong component Count  , khi state trong Count bị thay đổi --->
  // không làm ảnh hưởng tới các Component khác ở trong ReactMemo
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {children}
      {/* ở đây Childcomponent ko bị re render lại vì dối với Count , biến children ko hề bị thay đổi
      và nó cùng tham chiếu tới Childcomponent ở phía component ReactMemo */}
    </div>
  );
}

function ReactMemo({ viewCount }) {
  const [name, setName] = useState("YEN");

  const getUsers = useCallback(() => {
    return fetch("https://reqres.in/api/users");
  }, []);
  // nguyên lý hoạt động của React , nếu component cha bị render lại thì component con cũng sẽ bị render lại theo
  return (
    <div>
      <Count>
      {/* nếu gán 1 biến là 1 function  --> khi Component được render lại thì biến đó cũng được tạo lại --> biến đó
      là 1 biến mới */}
      <ChildComponentReactMemo name={name} getUsers={getUsers} />
      </Count>
    </div>
  );
}

export default ReactMemo;
