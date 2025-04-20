import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const Skills = () => {
  return (
    <section id="skills">
       <span className="skillTitle">What I do</span>
       <span className="skillDesc">I'm a passionate web designer with a strong focus on creating visually appealing and user-friendly websites. Proficient in HTML, CSS, JavaScript, and framework like React, I combine technical skills with tools like Figma and Canva to design clean, functional, and engaging digital experiences.</span>
       <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                 <div className="skillBarText">
                    <h2>UI/UX design</h2>
                    <p>I recently designed a user interface for a pizza delivery and ordering app, focusing on intuitive navigation, engaging visuals, and a seamless user experience. The design emphasizes ease of use, visual appeal, and efficient user interaction, aligning with modern UI/UX principles.</p>
                 </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                 <div className="skillBarText">
                    <h2>Website design</h2>
                    <p>I recently designed a custom website for a friend, tailored to their specific needs and preferences. The project focused on creating a personalized and user-friendly design that aligned with their goals and brand identity</p>
                 </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                 <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>I specialize in designing intuitive and visually appealing mobile app interfaces that prioritize user experience and functionality. My approach focuses on creating clean, responsive layouts, thoughtful user flows, and engaging UI elements that enhance usability across different devices and platforms.</p>
                 </div>
            </div>
       </div>
    </section>
  );
}

export default Skills