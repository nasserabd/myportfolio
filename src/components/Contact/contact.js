import React, { useRef } from 'react';
import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gaw6caa', 'template_w5aohxe', form.current, 'L_qaAe-fAwXexFsvS')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!  ');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="contactPage">
        <div id="contact">
               <h1 className="contactPageTitle">Contact Me</h1>
               <span className="contactDesc">Please fill out the form below to discuss any work oppurtiniites.</span>
               <form className="contactForm" ref ={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name = "from_name" /> 
                <input type="email" className="email" placeholder= 'Your Email' name = "from_email"/>
                <textarea className= 'msg 'name= "   "  rows="5" placeholder='Your Message' ></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src= {linkedinIcon} alt="" className="link" />
                </div>
               </form>
        </div>
    </section>
        
  );
}

export default Contact