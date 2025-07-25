import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({user, children}) => {
  return (
    <div>
      {user ? children : <Navigate to="/login" />}
    </div>
  )
}

// user 값이 있으면 todo 페이지로 이동하고, 없으면 login 페이지로 이동한다.

export default PrivateRoute