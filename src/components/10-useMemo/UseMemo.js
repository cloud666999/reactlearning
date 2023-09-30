import React, { useState, useMemo } from "react";

function expensiveFunction(number) {
  console.log("bat dau");
  const start = new Date();

  // tại vị trí này sẽ đợi 3s cho đến khi kết thúc xuât hiện
  while (new Date() - start < 3000); // 3s = 3000ms

  console.log("ket thuc", new Date() - start, "ms");
  return number * number;
}

function UseMemo() {
  // useMemo lưu trữ các phép toán expensive để tối ưu hóa hiệu suất của 1 component bằng cách ghi nhớ
  // các kết quả tính toán có thể 'expensive' về thời gian CPU hoặc thời gian kết xuất
  const [count, setCount] = useState(0);
  const [num,setNum] = useState(20);
//   const number = expensiveFunction(10);
  // vậy với useMemo , khi thực hiện phép toán với đầu vào là 10, nó sẽ ko cần phải thực thi lại phép toán khi
  // component được re render mà lấy kết quả của lần thực thi trước đó từ trong bộ nhớ ra -> gán vào number
  const number = useMemo(() => {
    // return expensiveFunction(10);
    return expensiveFunction(num);
  },[num]);
  //(1) nếu ko truyền gì vào dependency thì useMemo này  thì đoạn code sẽ thực thi 1 lần khi được mount vào
  //và sẽ không thực thi lại khi bị re-render lại
  
  //(2) nếu dependency có tham số giả tử tôi tạo 1 [num,setNum] = useState(20), vì nếu biến num có thay đổi
  // thì tôi cũng cần thực thi lại function ở trong useMemo để lấy ra được giá trị mới nhất của expensive function
  // ngoài ra nếu còn truy xuất tới các biến khác , cũng có thể nhét vào trong dependency này
  return (
    <div>
      <p>Count {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <p>Number: {number}</p>
    </div>
  );
}

export default UseMemo;
