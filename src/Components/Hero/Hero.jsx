import React, { useState } from "react";
import "./Hero.css";
import profile from "../../assets/mypicture.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span> I'm Puskar Simkhada, </span> frontend developer
      </h1>
      <p>
        I'm a frontend developer from Chitwan, Nepal specializing in creating
        user-friendly websites and bringing designs to life through code.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        {/* <div className="hero-resume">My resume</div> */}
        <div className="hero-resume">
          <a
            className="anchor-link"
            href="/Resumee.pdf"
            target="_blank"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
