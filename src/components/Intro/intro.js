import React from 'react';
import './intro.css';
import bg from '../../assets/nasserPortfolioImage.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I'm <span className="introName">Nasser</span> <br/>Website Developer/Designer</span>
        <p className="introPara">I am a skilled web developer with experience in creating visually<br/>appealing and user friendly websites. 
        I am a skilled and passionate <br/> web developer & designer with experience in creating functional,<br/> visually appealing, and 
        user-friendly websites. I have a strong <br/>understanding of development and design and I believe the <br/> difference that makes a 
        website special lies in the detail. I am <br/>  proficient in HTML, CSS, JavaScript, React, as well as databases <br/> such as Firebase, mongoDB,and SQL. 
        Whether it is a personal website <br/>such as a portfolio,or a database-scraping application that updates <br/>requested data periodically, 
        or even a fun social media application <br/>that allows "dogs" to share their daily thoughts, I have experience with <br/>different forms of 
        Software Development  and can help you with your <br/>desired application too. This website was made using React.
        </p>
        <Link><button className="btn" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}><img src={btnImg} alt="Hire Me" className='btnImg' />Hire me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
        
    </section>
  )
}

export default Intro