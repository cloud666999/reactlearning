import React from 'react'
import ListMixWithPropsChild from './ListMixWithPropsChild'

const ListMixWithPropsParent = () => {
    const users = [
        {
            name: "Trương Hồng Hạnh",
            age: 22,
            position : "DEV",
            isActive : true
        },
        {
            name: "Hoàng Ngọc Dung",
            age: 27,
            position : "DEV",
            isActive : false
        },
        {
            name: "Nguyễn Yến Linh",
            age: 25,
            position : "DEV",
            isActive : true
        }
    ]
  return (
    <div>
        <h1>Đây là List kết hợp với Props</h1>
        {users.map((user, key) => {
           return(user.isActive ?
            <ListMixWithPropsChild key={key} name={user.name} age={user.age} position={user.position} isActive={user.isActive} />
            : <div>not active</div>
            ) 
        })}
    </div>
  )
}

export default ListMixWithPropsParent
