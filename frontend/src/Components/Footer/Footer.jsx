import React from 'react'
import './Footer.css'
import logo_icon from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo_icon} alt="" />
        <h1>VertuMart</h1>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-links'>
        <div>
            <img src={insta_icon} alt="" />
            <a/>
        </div>
        <div>
            <img src={pintester_icon} alt="" />
            <a/>
        </div>
        <div>
            <img src={whatsapp_icon} alt="" />
            <a/>
        </div>
      </div>
      <hr />
      <div>
        <p>Copyright @2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
