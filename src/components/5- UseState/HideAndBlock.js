import React, { useState } from 'react'

const HideAndBlock = () => {
    const [hide, SetHide] = useState(true);
    const [textColor, setTextColor] = useState("black");

    const handleClick = () => {
        SetHide(!hide);
        setTextColor("green")
        // setTextColor(textColor === 'black' ? 'red' : 'black');
    }

  return (
    <div>
        <h1>Click to Hide and Appear</h1>
      <button onClick={() =>handleClick()}>click</button>
      {hide ? <div style={{color: textColor}}>Hi</div>: null}
    </div>
  )
}

export default HideAndBlock
