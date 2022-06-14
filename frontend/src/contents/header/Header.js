import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='head'>
     <div className='headTitle'>
      <span className='small'>React and Redux</span>
      <span className='large'>Blog</span>
     </div>
     <img src='/images/gallery1.jpg' alt='header' className='headerImg' />
    </div>
  )
}

export default Header;