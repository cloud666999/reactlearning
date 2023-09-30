import React, { useState } from 'react'

const UseState = () => {
  const [number, setNumber]  = useState(0);

  const handleClick = () => {
      setNumber(number + 1);
  }

  const handleDecrease = () => {
    setNumber(number -1);
  }
  return (
    <div>
        <h1>đây là React Hook useState</h1>
        <div>{number}</div>
        <button onClick={handleClick}>increase</button>
        <button onClick={handleDecrease} disabled={number === 0}>decrease</button>
    </div>
  )
}

export default UseState

