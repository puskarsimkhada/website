import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logoo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = (selectedMenu) => {
    if (selectedMenu) {
      setMenu(selectedMenu);
    }
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="mylogo" />
      <img src={menu_open} alt="" onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          onClick={() => closeMenu()}
          className="nav-mob-close"
        />
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#home"
            onClick={() => closeMenu("home")}
          >
            <p>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => closeMenu("about")}
          >
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="underline" /> : null}
        </li>
        {/* <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#service"
            onClick={() => closeMenu("service")}
          >
            <p>Services</p>
          </AnchorLink>
          {menu === "service" ? <img src={underline} alt="underline" /> : null}
        </li> */}
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#portfolio"
            onClick={() => closeMenu("portfolio")}
          >
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? (
            <img src={underline} alt="underline" />
          ) : null}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => closeMenu("contact")}
          >
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="underline" /> : null}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          offset={50}
          href="#contact"
          onClick={() => closeMenu("contact")}
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
