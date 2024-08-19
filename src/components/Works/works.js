import React from 'react';
import './works.css';  
import HTMLLogo from '../../assets/html.png';
import CSSLogo from '../../assets/css.png';
import JavaScriptLogo from '../../assets/javascript.png';
import BootStrapLogo from '../../assets/bootstrap.png';
import NodeJSLogo from '../../assets/nodejs.png';
import ReactLogo from '../../assets/react.png';
import MongoDBLogo from '../../assets/mongodb.png';
import JavaLogo from '../../assets/java.png';
import PythonLogo from '../../assets/python.png';
import SQLLogo from '../../assets/sql.png';
import SeleniumLogo from '../../assets/selenium.png';
import PowerBILogo from '../../assets/powerBI.png';



const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">Software Development Skills </h2>
        <div className = "worksImgs"> 
          <img src={ReactLogo} alt="React logo" className="worksImg"/>
          <img src={NodeJSLogo} alt=" NodeJS logo" className="worksImg"/>
          <img src={HTMLLogo} alt=" HTML logo" className="worksImg"/>
          <img src={CSSLogo} alt="CSS logo" className="worksImg"/>
          <img src={JavaScriptLogo} alt="JavaScript logo" className="worksImg"/>
          <img src={JavaLogo} alt="Java logo" className="worksImg"/>
          <img src={BootStrapLogo} alt="Bootstrap logo" className="worksImg"/>
          <img src={MongoDBLogo} alt="MongoDB logo" className="worksImg"/>
          <img src={PythonLogo} alt="Python logo" className="worksImg"/>
          <img src={SQLLogo} alt="SQL Logo" className='worksImg'/> 
          <img src={SeleniumLogo} alt="SeleniumLogo" className='worksImg'/> 
          <img src={PowerBILogo} alt="PowerBI Logo" className='worksImg'/> 

          
          
        </div>
        {/* <span className="worksDesc">
            I take pride in paying attention to the smallest details and making sure my work is pixel perfect. 
            I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.  
        </span> */}
        {/* <div className="worksImgs">
            <img src={Portfolio1} alt="Portfolio 1" className="worksImg" />
            <img src={Portfolio2} alt="Portfolio 2" className="worksImg" />
            <img src={Portfolio3} alt="Portfolio 3" className="worksImg" />
            <img src={Portfolio4} alt="Portfolio 4" className="worksImg" />
            <img src={Portfolio5} alt="Portfolio 5" className="worksImg" />
            <img src= {Portfolio6} alt="Portfolio 6" className="worksImg" />
        </div> */}
        <button className="worksBtn">See More</button>
    </section>
  );
}

export default Works