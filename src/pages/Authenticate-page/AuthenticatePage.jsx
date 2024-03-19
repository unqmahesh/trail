import React from 'react'

import {Outlet} from 'react-router-dom'

import './authenticatepage.css'

const AuthenticatePage = () => {
  return (
    <section className='authenticate-page'>
      <Outlet />
    </section>
  )
}

export default AuthenticatePage