import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logoo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu,setmenu] = useState("home");
  const menuref =useRef();

  const openMenu = () =>{
    menuref.current.style.right = "0";
  }
  const closeMenu = () =>{
    menuref.current.style.right = "-350px";
  }
  return (
    <div className='navbar'> 
      <img src={logo} alt="Logo" className='mylogo' />
      <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open' />
      <ul ref={menuref} className='nav-menu'>
        <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" offset={50} href='#home'><p onClick={() => setmenu("home")}>Home</p></AnchorLink>{menu === "home"? <img src={underline}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={() => setmenu("about")}>About Me</p></AnchorLink>{menu === "about"? <img src={underline}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#service'><p onClick={() => setmenu("service")}>Services</p></AnchorLink>{menu === "service"? <img src={underline}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#portfolio'><p onClick={() => setmenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio"? <img src={underline}/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={() => setmenu("contact")}>Contact</p></AnchorLink>{menu === "contact"? <img src={underline}/>:<></>}</li>
        
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
    
  )
}

export default Navbar
