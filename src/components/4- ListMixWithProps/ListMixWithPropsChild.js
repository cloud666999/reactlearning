import React from 'react'

const ListMixWithPropsChild = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.position}</p>
    </div>
  )
}

export default ListMixWithPropsChild
