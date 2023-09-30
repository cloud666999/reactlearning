import React, { useState } from "react";

const ChangeColor = () => {
  const [textColor, setTextColor] = useState("black");

  const handleClick = () => {
    setTextColor(textColor === "black" ? "red" : "black");
  };

  return (
    <div>
      <div>
        <h1>Click to Change Color</h1>
        <button onClick={() => handleClick()}>click</button>
        <div style={{ color: textColor }}>Hi</div> 
      </div>
    </div>
  );
};

export default ChangeColor;
