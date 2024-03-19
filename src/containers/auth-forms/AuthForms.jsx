import React from 'react'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  return (
    <div className='signup-form form'>
        <form>
          <input type= "text" placeholder='Name' />
          <input type= "text" placeholder='Email' />
          <input type= "text" placeholder='Password' />
          <input type='submit' value='signup' />
        </form>
        <p>Already have an account ? <span><Link to='/root/authenticate/signin'>signin</Link></span></p>
    </div>
    
  )
}

const SignInForm = () => {
    return(
      <div className='signin-form form'>
      <form>
        <input type= "text" placeholder='Email' />
        <input type= "text" placeholder='Password' />
        <input type='submit' value='signin' />
      </form>
      <p>Don't have an account ? <span><Link to='/root/authenticate/signup'>signup</Link></span></p>
  </div>
    )
}

export {SignUpForm, SignInForm}