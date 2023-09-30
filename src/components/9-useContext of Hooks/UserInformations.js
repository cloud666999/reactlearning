import React, { useContext, useEffect } from 'react'
import { RenderContext } from './UseContext/RenderContext'

function UserInformations() {
    const { userData } = useContext(RenderContext);
    console.log(userData);

  return (
    <div>
      <h5>User Information</h5>
      <div>{userData.name}</div>
      <p>{userData.year}</p>
    </div>
  )
}

export default UserInformations
