import React from 'react'
import './App.css'

import {Routes, Route, Navigate} from 'react-router-dom'


import RootPage from './pages/Root-page/RootPage.jsx'

import AuthenticatePage from './pages/Authenticate-page/AuthenticatePage.jsx'
import SignUp from './components/auth-form/SignUp.jsx'
import SignIn from './components/auth-form/SignIn.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/root/authenticate' />} /> 
        <Route path='/root/*' Component={RootPage} > 
          <Route index path='home' element={<h1>hello</h1>} /> 
          <Route path='authenticate/*' Component={AuthenticatePage} >
              <Route index path='signup' Component={SignIn} />
              <Route path='signin' Component={SignUp} />
          </Route>
        </Route>
    </Routes>
  )
}

export default App