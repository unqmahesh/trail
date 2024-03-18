import React from 'react'
import './rootpage.css'

import Header from '../../containers/header-container/Header.jsx'
import Footer from '../../containers/footer-container/Footer.jsx'

import {Outlet} from 'react-router-dom'

const RootPage = () => {
  return (
    <div className='root'>
        <header className='header-main'>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
        <footer className='footer-main'>
          <Footer />
        </footer>
    </div>

  )
}

export default RootPage 