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
      <div className='menu-btn' onClick={handleMenuClick}>menu</div>
      <nav className='nav-menu' ref={menu}>
        <ul>
          <li><Link className='link'>Home</Link></li>
          <li><Link  className='link'>Explore</Link></li>
          <li><Link  className='link'>Signup</Link></li>
          <li><Link  className='link'>Signin</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header