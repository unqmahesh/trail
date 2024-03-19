import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import './header.css'

import Logo from '../../assets/logo.jpg'


const Header = () => {

  const menu= useRef(null)

  function handleMenuClick(){
    menu.current.classList.toggle('nav-menu-active')
  } 

  
  return (
    <div className='header'>
      <div className='logo-section'>
        <img className='logo' src={Logo} />
        <p className='font-logo'>Wallpaper</p>
      </div>
      <div className='menu-btn' onClick={handleMenuClick}>
        <div className='top-line menu-btn-line'></div>
        <div className='middle-line menu-btn-line'></div>
        <div className='bottom-line menu-btn-line'></div>
      </div>
      <nav className='nav-menu' ref={menu}>
        <ul>
          <li><Link className='link' to='home'>Home</Link></li>
          <li><Link  className='link' to='explore'>Explore</Link></li>
          <li><Link  className='link' to='authenticate/signup'>Signup</Link></li>
          <li><Link  className='link' to='authenticate/signin'>Signin</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header