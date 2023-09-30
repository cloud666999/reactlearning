import React from 'react'

const User = () => {
    const user = [
        {
            name: "Nguyễn Hồng Tước",
            age: 16,
            department : "Department A"
        },
        {
            name: "Nguyễn Ngọc Anh",
            age: 18,
            department : "Department B"
        },
        {
            name: "Nguyễn Linh Ánh",
            age: 19,
            department : "Department C"
        }
    ]
  return (
    <div>
        <h1>Xin chào , đây là 1 List chứa danh sách thông tin nhân viên được map ra</h1>
      {user.map((user,key) => {
        return(
            <div key={key}>
                <p>{user.age}</p>
                <p>{user.name}</p>
                <p>{user.department}</p>
            </div>
        )
      })}
    </div>
  )
}

export default User
