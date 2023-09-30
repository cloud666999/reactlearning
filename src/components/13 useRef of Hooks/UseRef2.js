import React, { useEffect, useRef} from 'react'

function UseRef2() {
    //tại đây mô phỏng việc useRef truy xuất  tới phần tử (element) của  DOM
  const ref = useRef(null);

  useEffect(() => {
    //function bên trong useEffect sẽ được thực hiện 1 lần duy nhất khi component được render lần đầu tiên
    ref.current.focus();
    // mặc định focus vào input do đã truy xuất tới DOM elements
  },[])

  console.log({ref});
    return (
    <div>
        <input type='text' ref={ref}/>
        <button>Click</button>
    </div>
  )
}

export default UseRef2
