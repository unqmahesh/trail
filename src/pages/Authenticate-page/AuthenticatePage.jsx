import React from 'react'

import {Outlet} from 'react-router-dom'

import './authenticatepage.css'

const AuthenticatePage = () => {
  return (
    <div className='authenticate-page'>
      <Outlet />
    </div>
  )
}

export default AuthenticatePage