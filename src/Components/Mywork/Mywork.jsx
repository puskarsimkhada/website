import React, { useState, useEffect } from "react";
import "./Mywork.css";
import { motion } from "framer-motion";
import theme from "../../assets/theme_pattern.svg";
import arrowIcon from "../../assets/arrow_icon.svg";
// Images
import satya from "../../assets/homepage.png";
import blog from "../../assets/blog1.png";
import busLocationTracker from "../../assets/busadmin.png";
import school from "../../assets/scl1.png";
import myportfolio from "../../assets/portfolio.png";
import countryAPI from "../../assets/dark.png";
import gadgetwiz from "../../assets/ecommerce.png";
import rockpaperscissor from "../../assets/paper.png";
import youtube from "../../assets/yt1.png";
import loopix from "../../assets/loopix.png";

const Mywork = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      name: "Loopix",
      img: loopix,
      link: "https://loopix.netlify.app/",
      tech: "React",
      desc: "Design and Development company website",
    },
    {
      name: "Bus Location Tracker",
      img: busLocationTracker,
      tech: "React",
      desc: "Student Bus Location Tracker",
    },
    {
      name: "Satya Khabar",
      img: satya,
      tech: "Laravel, MySQL",
      desc: "News Platform",
    },
    {
      name: "Blog Platform",
      img: blog,
      link: "https://www.blog.oxfordcollege.edu.np/",
      tech: "React, Laravel, MySQL",
      desc: "Full-stack blog platform",
    },
    
    {
      name: "Pragya Academy",
      img: school,
      tech: "React, Laravel, MySQL",
      desc: "School management system",
    },
    {
      name: "Portfolio",
      img: myportfolio,
      link: "https://puskarsimkhada.com.np/",
      tech: "React",
      desc: "Personal Portfolio Website",
    },
    {
      name: "CountryAPI",
      img: countryAPI,
      link: "https://countryapi-by-puskar.netlify.app/",
      tech: "React",
      desc: "Country details API app",
    },
    {
      name: "Gadgetwiz",
      img: gadgetwiz,
      tech: "Html, CSS, JavaScript",
      desc: "Simple E-commerce website",
    },
    {
      name: "Rock Paper Scissor",
      img: rockpaperscissor,
      link: "https://rock-paper-scissor-by-puskar.netlify.app/",
      tech: "HTML, CSS, JavaScript",
      desc: "Classic game implementation",
    },
    {
      name: "Youtube Clone",
      img: youtube,
      tech: "HTML, CSS, JavaScript",
      desc: "YouTube clone with categories",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".mywork").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 150) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section id="portfolio" className="mywork reveal">
      <div className="mywork-header">
        {/* <h1>My Latest Work</h1>
        <img src={theme} alt="Background Theme" className="mywork-theme" /> */}
         <motion.h1
            className="heading-work"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          > My Latest Work
         <motion.span
              className="head-line-work"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            </motion.h1>
      </div>

      <div className="projects-grid">
        {visibleProjects.map(({ name, img, tech, desc, link }, idx) => (
          <article key={idx} className="project-card">
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="project-img-link">
                <img src={img} alt={name} />
              </a>
            ) : (
              <div className="project-img-link">
                <img src={img} alt={name} />
              </div>
            )}

            <div className="project-info">
              <h3>{name}</h3>
              <p className="project-tech">{tech}</p>
              <p className="project-desc">{desc}</p>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <button
        className="show-more-btn"
        onClick={() => setShowAll((prev) => !prev)}
        aria-label={showAll ? "Show less projects" : "Show more projects"}
      >
        <span>{showAll ? "Show Less" : "Show More"}</span>
        <img
          src={arrowIcon}
          alt=""
          className={`arrow-icon ${showAll ? "rotated" : ""}`}
          aria-hidden="true"
        />
      </button>
    </section>
  );
};

export default Mywork;
