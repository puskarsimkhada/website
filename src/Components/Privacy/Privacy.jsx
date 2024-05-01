import React from 'react'
import './Privacy.css'
import menu_close from '../../assets/menu_close.svg'
const Privacy = ({closePrivacy}) => {
  return (
    <div className='privacy'>
      <div className="privacy-container">
        <div className="privacy-title">
          <h2>Privacy Policy</h2>
          <img onClick={closePrivacy} src={menu_close} alt="Close" />
        </div>
        <div className="privacy-para">
          <p><span>Introduction:</span> We value your privacy and are committed to protecting your personal information.</p>
          <p><span>Information Collection:</span> We collect only the necessary personal information for website functionality and do not share it with third parties.</p>
          <p><span>Data Security:</span> We employ industry-standard security measures to safeguard your data.</p>
          <p>Contact Information: If you have any questions or concerns, please contact us.</p>
        </div>
      </div>
    </div>
  )
}

export default Privacy
