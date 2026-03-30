import React from 'react'
import '../navbar/Navbar.css'
import logo from '../../assets/logo.png'
function Navbar() {
  return (
    <div className=' navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-right"></div>

    </div>
  )
}

export default Navbar
