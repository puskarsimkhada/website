import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Privacy from './Components/Privacy/Privacy'
import Term from './Components/Term/Term'
const App = () => {

    const [showPrivacy, setshowPrivacy] = useState(false);

    const togglePrivacy = () =>{
      setshowPrivacy(!showPrivacy);
    };

  const closePrivacy = () => {
    setshowPrivacy(false);
    // Restore scrolling when Privacy component is closed
    document.body.style.overflow = 'auto';
};

// Disable scrolling when Privacy component is open
if (showPrivacy) {
    document.body.style.overflow = 'hidden';
}


const [showTerm, setshowTerm] = useState(false);

    const toggleTerm = () =>{
      setshowTerm(!showTerm);
    };

  const closeTerm = () => {
    setshowTerm(false);
    // Restore scrolling when Privacy component is closed
    document.body.style.overflow = 'auto';
};

// Disable scrolling when Privacy component is open
if (showTerm) {
    document.body.style.overflow = 'hidden';
}



  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <Mywork></Mywork>
      <Contact></Contact>
      
      {/* <Privacy></Privacy> */}
      {/* <Term></Term> */}
      <Footer togglePrivacy = {togglePrivacy} toggleTerm = {toggleTerm}></Footer>
      {showPrivacy && <div onClick={closePrivacy}></div>}
      {showPrivacy && <Privacy closePrivacy={closePrivacy} />}
      {showTerm && <div onClick={closeTerm}></div>}
      {showTerm && <Term closeTerm={closeTerm} />}
    </div>
  )
};

export default App

