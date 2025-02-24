import React from "react";
import "./Mywork.css";
import theme from "../../assets/theme_pattern.svg";
import APKCinema from "../../assets/Apkcinema.png";
import gadgetwiz from "../../assets/ecommerce.png";
import blog from "../../assets/blog1.png";
import school from "../../assets/scl1.png";
import porfolio from "../../assets/puskarporfolio.png";
import rockpaperscissor from "../../assets/paper.png";
import arrowIcon from "../../assets/arrow_icon.svg";
import myportfolio from "../../assets/portfolio.png";
import youtube from "../../assets/yt1.png";
import satya from "../../assets/homepage.png";
import countryAPI from "../../assets/dark.png";
const Mywork = () => {
  const myworkData = [
    {
      w_no: 1,
      w_name: "Satya Khabar",
      w_img: satya,
      tech: "Laravel, MySQL",
      description: "News website with Laravel",
    },
    {
      w_no: 2,
      w_name: "Blog Platform",
      w_img: blog,
      tech: "React, Laravel, MySQL",
      description: "Full-stack blog platform",
    },
    {
      w_no: 3,
      w_name: "Pragya Academy",
      w_img: school,
      tech: "React, Laravel, MySQL",
      description: "School management system",
    },
    {
      w_no: 5,
      w_name: "Portfolio",
      w_img: myportfolio,
      websiteLink: "https://puskarsimkhada.com.np/",
      tech: "React",
      description: "Personal portfolio site",
    },
    {
      w_no: 9,
      w_name: "CountryAPI",
      w_img: countryAPI,
      websiteLink: "https://countryapi-by-puskar.netlify.app/",
      tech: "React",
      description: "Country details API app",
    },
    {
      w_no: 4,
      w_name: "Gadgetwiz",
      w_img: gadgetwiz,
      description: "Simple E-commerce website",
    },
    {
      w_no: 6,
      w_name: "Portfolio",
      w_img: porfolio,
      tech: "HTML, CSS, JavaScript",
      description: "Basic portfolio website",
    },
    {
      w_no: 7,
      w_name: "Rock Paper Scissor",
      w_img: rockpaperscissor,
      websiteLink: "https://rock-paper-scissor-by-puskar.netlify.app/",
      tech: "HTML, CSS, JavaScript",
      description: "Classic game implementation",
    },
    {
      w_no: 8,
      w_name: "Youtube Clone",
      w_img: youtube,
      tech: "HTML, CSS, JavaScript",
      description: "YouTube clone with categories",
    },
  ];
  
  window.addEventListener("scroll", reveal);
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if (revealTop < windowHeight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  return (
    <div id="portfolio" className="mywork reveal">
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <img src={theme} alt="Theme" />
      </div>
      <div className="mywork-container">
        {myworkData.map((work, index) => {
          return (
            <><div class="project">
              <a href={work.websiteLink} target="_blank">
                <img key={index} src={work.w_img} />
              </a>
              <div class="overlay">
                <h3>{work.w_name}</h3>
                <p>Tools: {work.tech}</p>
                <p>{work.description}</p>
                <a href={work.websiteLink} target="_blank" class="btn">
                  Live Demo
                </a>
                {/* <a href="github-link" class="btn">
                  View Code
                </a> */}
              </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="ArrowIcon" />
      </div> */}
    </div>
  );
};

export default Mywork;
