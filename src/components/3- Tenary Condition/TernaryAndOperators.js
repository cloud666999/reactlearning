import React from 'react'

const TernaryAndOperators = () => {
    const age = 19;
    const age1 = 23;
    const isGreen = true;
  return (
    <div>
        <h1>Xin chào , đây là toán tử 3 ngôi (Terany Operator)</h1>
        {age >= 19 && age1 > 22 ? <div>Accept</div> : <div>Denied</div>}
        <div style={{color: isGreen ? "green" :"red"}}>đây là toán tử 3 ngôi dùng trong style color</div>
        {isGreen ? <button>button green</button> : <button>button red</button>}
    </div>
  )
}

export default TernaryAndOperators
