import React from 'react'
import '../navbar/Navbar.css'
import logo from '../../assets/logo.png'
import search_iocn from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
function Navbar() {
  return (
    <div className=' navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home </li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browser By Language </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_iocn} className='icons' />
        <p> children</p>
        <img src={bell_icon} className='icons' />

        <div className="navbar-Profile">
            <img src={profile_img} alt=""  className=''/>
            <img src={caret_icon} alt="" />
            <div className="dropdown">
                <p>sign out of Netflix</p>
            </div>
        </div>
      </div>
      

    </div>
  )
}

export default Navbar
