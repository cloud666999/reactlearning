import axios from "axios";
import React, { useState, useEffect } from "react";

const Text = () => {
  const [hide, SetHide] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    // do cấu trúc nghiêm ngặt StrictMode tại index.js nên khi component được Mounted sẽ hiện ra 2 lần
    console.log("Mounted");
    //1 --- Mounting Phase: useEffect với một dependency trống ([]) phục vụ mục đích tương tự như  componentDidMount.

    //2 ---Updating Phase: dependency ở đây quyết định props hay state nào thay đổi
    // hãy thử sử dụng text vào dependency

    //3 -- Unmounting Phase: thực thi một hành động khi component biến mất

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // fetch("https://639b1c53d5141501974b8c46.mockapi.io/persons")
  // .then(async (res) => {
  //   const data = await res.json();
  //   console.log(data);
  // })

  // axios.get("https://639b1c53d5141501974b8c46.mockapi.io/persons").then((res) => {
  //     console.log(res.data);
  // })

  const handleClick = () => {
    SetHide(!hide);
  };
  return (
    <div>
      <h1>This is useEffect Hook</h1>
      <div>
        <button onClick={() => handleClick()}>click</button>
        {hide && <input onChange={(e) => setText(e.target.value)} />}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Text;
