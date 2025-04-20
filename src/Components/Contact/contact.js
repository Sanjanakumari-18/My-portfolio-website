import React, { useRef } from 'react';
import './contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import LikedinIcon from '../../assets/Linkedin.png'
import GitHubIcon from '../../assets/GitHub.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xvje01b', 'template_7ycdine', form.current, {
        publicKey: 'fNJmoCO_-4qV4gRTN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        
        <div id="contact">
           <h1 className="contactPageTitle">Contact Me</h1>
           <span className="contactDesc">Please fill out the form below to discuss any job opportunities</span>
           <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name' />
            <input type="email" placeholder='Your Email' className="email" name='your_email' />
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className="submitBtn">Submit</button>
            <div className="links">
                <a href="https://www.facebook.com/profile.php?id=61560450698774" target='blank'><img src={FacebookIcon} alt="Facebook" className="link" /></a>
                <a href="https://www.linkedin.com/in/sanjana-kumari-9aa07823b/" target='blank'><img src={LikedinIcon} alt="Linkedin" className="link" /></a>
                <a href="https://github.com/Sanjanakumari-18" target='blank'><img src={GitHubIcon} alt="GitHub" className="link" /></a>
                <a href="https://www.instagram.com/_miss..mehta__?igsh=MnZnenk4anZxNjhw" target='blank'><img src={InstagramIcon} alt="Instagram" className="link" /></a>
            </div>
           </form>
        </div>
    </section>
  )
}

export default Contact