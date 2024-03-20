import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './authforms.css'

const SignUpForm = () => {

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  function handleInputChange(event){
    const inputName = event.target.name
    const inputValue = event.target.value
    console.log(inputName, inputValue)
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

  function handleSubmit(e){
    e.preventDefault()
    console.log(userName, userEmail, userPassword)
  }


  return (
    <div className='signup-form form'>
        <form onSubmit={handleSubmit}>
          <input type= "text" placeholder='Name' name='userName' value={userName} onChange={handleInputChange}/>
          <input type= "text" placeholder='Email' name='userEmail' value={userEmail} onChange={handleInputChange}/>
          <input type= "text" placeholder='Password' name='userPassword' value={userPassword} onChange={handleInputChange}/>
          <input type='submit' value='signup' />
        </form>
        <p>Already have an account ? <span><Link className='link' to='/root/authenticate/signin'>signin</Link></span></p>
    </div>
    
  )
}

const SignInForm = () => {

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  function handleInputChange(event){
    const inputName = event.target.name
    const inputValue = event.target.value
    console.log(inputName, inputValue)
      switch(inputName){
      case 'userEmail':
        setUserEmail(inputValue)
        break;
      case 'userPassword':
        setUserPassword(inputValue)
        break;
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(userEmail, userPassword)
  }

    return(
      <div className='signin-form form'>
      <form onSubmit={handleSubmit}>
      <input type= "text" placeholder='Email' name='userEmail' value={userEmail} onChange={handleInputChange}/>
          <input type= "text" placeholder='Password' name='userPassword' value={userPassword} onChange={handleInputChange}/>
        <input type='submit' value='signin' />
      </form>
      <p>Don't have an account ? <span><Link className="link" to='/root/authenticate/signup'>signup</Link></span></p>
  </div>
    )
}

export {SignUpForm, SignInForm}