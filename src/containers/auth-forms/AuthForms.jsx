import React, { useState, useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'

import './authforms.css'

import { authenticatedContext } from '../../context-api/authenticated.jsx'

import userSignUp from '../../backend-api/user-signup.js'
import userSignIn from '../../backend-api/user-signin.js'

const SignUpForm = () => {

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const {authenticated, setAuthenticated} = useContext(authenticatedContext)


  function handleInputChange(event){
    const inputName = event.target.name
    const inputValue = event.target.value
      switch(inputName){
      case 'userName':
        setUserName(inputValue)
        break;
      case 'userEmail':
        setUserEmail(inputValue)
        break;
      case 'userPassword':
        setUserPassword(inputValue)
        break;
    }
  }

  async function handleSubmit(e){
    e.preventDefault()
    const responseData = await userSignUp(userName, userEmail, userPassword)
    if(responseData){
      if(responseData.success){
        setAuthenticated(true)
      }
    }
  }


  return (
    (!authenticated ?     
    <div className='signup-form form'>
        <form onSubmit={handleSubmit}>
          <input type= "text" placeholder='Name' name='userName' value={userName} onChange={handleInputChange}/>
          <input type= "text" placeholder='Email' name='userEmail' value={userEmail} onChange={handleInputChange}/>
          <input type= "text" placeholder='Password' name='userPassword' value={userPassword} onChange={handleInputChange}/>
          <input type='submit' value='signup' />
        </form>
        <p>Already have an account ? <span><Link className='link' to='/root/authenticate/signin'>signin</Link></span></p>
    </div>
  : <Navigate to='/root/home' />)
  )

}

const SignInForm = () => {

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const {authenticated, setAuthenticated} = useContext(authenticatedContext)

  function handleInputChange(event){
    const inputName = event.target.name
    const inputValue = event.target.value
      switch(inputName){
      case 'userEmail':
        setUserEmail(inputValue)
        break;
      case 'userPassword':
        setUserPassword(inputValue)
        break;
    }
  }

  async function handleSubmit(e){
    e.preventDefault()
    const responseData = await userSignIn(userEmail, userPassword)
    if(responseData)
      if(responseData.success){
        setAuthenticated(true)
      }
  }

    return(
      (!authenticated ? 
      <div className='signin-form form'>
      <form onSubmit={handleSubmit}>
      <input type= "text" placeholder='Email' name='userEmail' value={userEmail} onChange={handleInputChange}/>
          <input type= "text" placeholder='Password' name='userPassword' value={userPassword} onChange={handleInputChange}/>
        <input type='submit' value='signin' />
      </form>
      <p>Don't have an account ? <span><Link className="link" to='/root/authenticate/signup'>signup</Link></span></p>
  </div>
  : <Navigate to='/root/home' /> )
    )
}

export {SignUpForm, SignInForm}