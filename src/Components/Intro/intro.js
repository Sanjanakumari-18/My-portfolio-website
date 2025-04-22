import React from 'react';
import './intro.css';
import video from '../../assets/video.mp4'
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sanjana</span><br />
          <span className="rotating-wrapper">
            <span className="rotating-text">
            <span>Frontend Developer</span>
              <span>Website Designer</span>
              <span>UI Specialist</span>
            </span>
          </span>
        </span>
        <p className="introPara">
        I'm a Front-end developer with Experience in Website and Software <br /> development. Check out my projects and skills
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <video className='bg' autoPlay loop muted>
        <source src={video} type='video/mp4'/>
      </video>
    </section>
  );
};

export default Intro;
