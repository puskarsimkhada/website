import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/logoo.png'
import userIcon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import puskarResume from '../../assets/PuskarResume.pdf'
const Footer = ({togglePrivacy, toggleTerm}) => {
  return (
    <div className='footer'>
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
            href={puskarResume}
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