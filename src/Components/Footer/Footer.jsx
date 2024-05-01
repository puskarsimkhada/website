import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/logoo.png'
import userIcon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Footer = ({togglePrivacy, toggleTerm}) => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-left">
          <img src={footerlogo} alt="Footer" />
          <p>I'm a frontend developer from Chitwan, Nepal specializing in creating user-friendly websites and bringing designs to life through code.</p>
        </div>
        <div className="footer-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>Copyright © 2024 Puskar Simkhada - All Rights Reserved</p>
        <div className='footer-bottom-right'>
          <p onClick={togglePrivacy}>Privacy Policy</p>
          <p onClick={toggleTerm}>Terms of Services</p>
          <p><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></p>
        </div>
      </div>
    </div>
  )
}

export default Footer