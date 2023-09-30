import React from 'react'

const List = () => { 
    const listName = ["NTT","NBB","DDD","CCC","EEE"];
  return (
    <div>
        <h1>Xin Chào đây là 1 List được map ra </h1>
        {/* sử dụng callback function  */}
        {listName.map((index,key) => {
            return(
                <div key={key}>{index}</div>     
            )
        })}
    </div>
  )
}

export default List
 
