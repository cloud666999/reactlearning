import React, { useState } from 'react'

const UseStateWithText = () => {
    const  [text, setText] = useState("");
    const  [text2, setText2] = useState("");

    const handleClick = () => {
        setText(document.getElementById("input").value);
    }

    const handleChange = (e) => {
        setText2(e.target.value);
    }


  return (
    <div>
        <div>
            <h1>Change with click button</h1>
            <input id="input" type='text' />
            <button onClick={handleClick}>update state</button>    
        </div>   
        <div>{text}</div>


        <div>
            <h1>Change with type in</h1>
            <input type='text' onChange={(e) => handleChange(e)}/>
        </div>
        <div>{text2}</div>
    </div>
  )
}

export default UseStateWithText
