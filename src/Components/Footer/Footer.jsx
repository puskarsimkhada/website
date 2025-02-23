import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/logoo.png'
import userIcon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = ({togglePrivacy, toggleTerm}) => {
  return (
    <div className='footer'>
      {/* <div className="footer-top">
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
          <h2>My Socials</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div> */}
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>Copyright © 2025 Puskar Simkhada - All Rights Reserved</p>
        <div className='footer-bottom-right'>
          {/* <p onClick={togglePrivacy}>Privacy Policy</p>
          <p onClick={toggleTerm}>Terms of Services</p> */}
          <div className="footer-right">
          <p>My Socials : </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/puskarsimkhada10/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://github.com/puskarsimkhada" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
          {/* <p><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></p> */}
          <a
            className="anchor-link resume"
            href="/puskarResume.pdf"
            target="_blank"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer