import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className="navbar Container">
        <div className="Logo">
            <img src={logo} alt="" />
        </div>
        <div className="Right">
            <ul>
                <li>Residencies</li>
                <li>Our Value</li>
                <li>About</li>
                <li>Get Started</li>
                <li><button className='button'>Contact Us</button></li>
                <li><i class="ri-menu-line"></i></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar