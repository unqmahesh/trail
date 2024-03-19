import React from 'react'
import './App.css'

import {Routes, Route, Navigate} from 'react-router-dom'


import RootPage from './pages/Root-page/RootPage.jsx'

import HomePage from './pages/Home-page/HomePage.jsx'
import ExplorePage from './pages/Explore-page/ExplorePage.jsx'
import AuthenticatePage from './pages/Authenticate-page/AuthenticatePage.jsx'
import { SignUpForm , SignInForm } from './containers/auth-forms/AuthForms.jsx'

const App = () => (
  <Routes>
    <Route path='/' element={<Navigate to='/root' />} />
    <Route path='/root/*' Component={RootPage}>

      <Route path='home/*' Component={HomePage} />

      <Route path='explore/*' Component={ExplorePage} />

      <Route index element={<Navigate to='authenticate' /> } />
      <Route path='authenticate/*' Component={AuthenticatePage}>

        <Route index element={<Navigate to='signup' />}/>
        <Route path='signup/*' Component={SignUpForm} />
        <Route path='signin/*' Component={SignInForm} />
      </Route>

    </Route>
  </Routes>
)

export default App