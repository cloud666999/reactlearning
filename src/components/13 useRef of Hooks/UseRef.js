import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  // 1 useRef thường được sử dụng để lưu trữ 1 tham chiếu
  // useRef là 1 function và sẽ nhận vào 1 giá trị khởi tạo giống useState
  const countRef = useRef(0);
  //useRef này sẽ trả về cho chúng ta 1 object có 1 field
  // {
  //    current: 0
  // }
  // điểm khác nhau giữa object thuần và giá trị trả về của useRef cũng là 1 object , đó là giữa những lần
  // app component bị re render, nó đều tham chiếu tới 1 object duy nhất và ko bị khởi tạo lại 1 object mới
//   const obj = {
//     current: 0
//   }  
  const [count,setCount] = useState(0);

  const handleClick = () => {
    // setCount(count + 1);
    countRef.current = countRef.current + 1;
    // obj.current = obj.current + 1;
  }


  //với useRef thì Component đã ko re render lại nên console.log trên ko bị bắn ra sau khi re render
  // mặc dù ta đã có sự thay đổi với countRef nhưng nó đã khiến cho Component ko bị re render lại


//   useEffect(() => {
//     setInterval(() => {
//         // setCount(count + 1);
//         countRef.current = countRef.current + 1;
//         console.log({countRef: countRef.current})
//     },1000);
//   },[])
  // điều xảy ra ở đây là tôi đã setCount tăng thêm 1 sau 1 s nhưng tại console.log() giá trị vẫn là 0
  // đây là vấn đề về Stale Closure  -> vì closure đã lưu trữ lại giá trị của count tại thời điểm mà function
  // setInterval được khởi tạo --> nó ko truy vấn tới biến count mới nhất --> để giải quyết --> dùng useRef

//   console.log({count, countRef});
  // điểm giống nhau giữa useRef và useState có 1 điểm giống nhau  đó là nó đều có thể lưu lại được giá trị
  // của 1 biến giữa những lần mà 1 component bị re render lại , nó sẽ không bị mất đi , nó luôn lưu trữ lại được
  // những giá trị trước đó . Còn sự khác biệt đó là
  // với useState khi setCount thay đổi nó sẽ cập nhật lại useState khiến cho component bị re render lại
  // nhưng đối với useRef thì sẽ ko re render lại


  // console.log({count, countRef, obj});
  // object thuần ko tăng giá trị sau mỗi lần re render lại , chỉ có count và countRef là tăng , đây là điểm khác
  // nhau, giữa mỗi lần re -render useRef sẽ trả về một object trước đó chứ ko tạo ra 1 object mới
  return (
    <div>
        <p>{count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default UseRef;
