import React from 'react'
import './Mywork.css'
import theme from '../../assets/theme_pattern.svg'
import APKCinema from '../../assets/Apkcinema.png'
import gadgetwiz from '../../assets/ecommerce.png'
import porfolio from '../../assets/puskarporfolio.png'
import rockpaperscissor from '../../assets/paper.png'
import arrowIcon from '../../assets/arrow_icon.svg'
import myportfolio from '../../assets/portfolio.png'
const Mywork = () => {
  const myworkData = [
    {
      w_no: 1,
      w_name: "APK Cinema",
      w_img: APKCinema
    },
    {
      w_no: 2,
      w_name: "Gadgetwiz",
      w_img: gadgetwiz 
    },
    {
      w_no: 3,
      w_name: "myPortfolio",
      w_img: myportfolio 
    },
    {
      w_no: 4,
      w_name: "Portfolio",
      w_img: porfolio 
    },
    {
      w_no: 5,
      w_name: "Rock Paper Scissor",
      w_img: rockpaperscissor 
    },
  ];

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
    <div id='portfolio' className='mywork reveal'>
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <img src={theme} alt="Theme" />
      </div>
      <div className="mywork-container">
          {myworkData.map((work, index) => {
            return <img key={index} src={work.w_img}/>
          })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="ArrowIcon" />
      </div>
    </div>
  )
}

export default Mywork