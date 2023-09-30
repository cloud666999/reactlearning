import React from 'react'
import Props from './Props';

const ComponentRender = () => {
  const name = "Xin chào , đây là";
  const description = "cách sử dụng props trong React";
  return (
    <div>
      <h1>Xin chào , đây là cách sử dụng Component đã được thêm vào App.js , và tương lai có thể được tái sử dụng 
        tại nơi khác
      </h1>
      <Props name={name} description={description} />
    </div>
  )
}

export default ComponentRender
