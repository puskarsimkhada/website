import React from 'react'
import './Term.css'
import menu_close from '../../assets/menu_close.svg'
const Term = ({closeTerm}) => {
  return (
    <div className='term'>
      <div className="term-container">
        <div className="term-title">
          <h2>Terms of Services</h2>
          <img onClick={closeTerm} src={menu_close} alt="Close" />
        </div>
        <div className="term-para">
          <p><span>Scope:</span> I provide frontend development services, including website and web application development.</p>
          <p><span>Timeline:</span>Projects typically take 4-8 weeks, depending on complexity</p>
          <p><span>Intellectual Property:</span> Clients own the final deliverables; I retain the right to showcase work in portfolios.</p>
          <p><span>Governing Law:</span> These terms are governed by the laws of Nepal.</p>
          <p><span>Contact:</span> For inquiries, contact me at puskarsimkhada4554@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Term
