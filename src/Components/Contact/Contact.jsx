import React from 'react'
import { motion } from "framer-motion";
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'
const Contact = () => {
  

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1b573802-b7c2-4762-bf5c-f2230cc33e74");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };

    window.addEventListener('scroll', reveal);
  function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    for(var i=0; i<reveals.length;i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if(revealTop < windowHeight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }

    return (
    <div id='contact' className='contact reveal'>
      <div className="contact-title">
        {/* <h1>Get in touch</h1>
        <img src={theme} alt="" /> */}
         <motion.h1
            className="heading-contact"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          > Get in Touch
         <motion.span
              className="head-line-contact"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            </motion.h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          
          <p>I'm currently available to take on the projects, so feel free to send message about anything that you want to work on.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Email" /><p>puskarsimkhada22@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="Call" /><p>+977 9865429962</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location" /><p>Chitwan, Nepal</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="10" placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact