import React from 'react'
import './works.css'
import portfolio1 from '../../assets/portfolio-1.jpg'
import portfolio2 from '../../assets/portfolio-2.jpg'
import portfolio3 from '../../assets/portfolio-3.jpg'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio6 from '../../assets/portfolio1.jpg'
import portfolio7 from '../../assets/portfolio2.jpg'
import portfolio8 from '../../assets/portfolio3.jpg'
import portfolio9 from '../../assets/portfolio4.jpg'

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        I have worked on a variety of projects, including The Bag Company, ThisIsMagma(Clone), and a prototype portfolio.
      </span>

      <div className="worksImgs">

        {/* Card 1 */}
        <div className="worksImgWrapper">
          <div className="worksImgInner">
            <div className="worksImg">
              <img src={portfolio1} alt="Project Front" />
            </div>
            <div className="worksImg1">
              <img src={portfolio6} alt="Project Back" />
              <div className="backContent">
              <p>The Bag Company is a sleek and responsive web interface. Built using HTML, CSS, and Tailwind CSS, the website features a minimalistic and modern layout optimized for performance and user experience.</p>
              <a href="https://www.linkedin.com/posts/sanjana-kumari-9aa07823b_frontenddev-webdesign-css-activity-7301477722881474560-ok4m?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuh4pIB06sN4cX0lziTW1sZpxFVeo0nZ1k" target="_blank">
              <button className="workBtn">
              <i className="bx bx-link-external"></i> Info
              </button>
              </a>
            </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="worksImgWrapper">
          <div className="worksImgInner">
            <div className="worksImg">
              <img src={portfolio2} alt="Project Front" />
            </div>
            <div className="worksImg1">
              <img src={portfolio7} alt="Project Back" />
              <div className="backContent1">
              <p>This project demonstrates my proficiency in front-end development, made using Canvas for animation Tailwind Css and JavaScript.</p>
              <a href="https://magma-fhfk.onrender.com/" target="_blank">
              <button className="workBtn">
              <i className="bx bx-link-external"></i> Info
              </button>
              </a>
            </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="worksImgWrapper">
          <div className="worksImgInner">
            <div className="worksImg">
              <img src={portfolio3} alt="Project Front" />
            </div>
            <div className="worksImg1">
              <img src={portfolio8} alt="Project Back" />
              <div className="backContent2">
              <p>I have designed a portfolio - prototype website to showcase my skills, experience, and projects. </p>
              <a href="https://github.com/Sanjanakumari-18/Portfolio-Prototype" target="_blank">
              <button className="workBtn">
              <i className="bx bx-link-external"></i> Info
              </button>
              </a>
            </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="worksImgWrapper">
          <div className="worksImgInner">
            <div className="worksImg">
              <img src={portfolio4} alt="Project Front" />
            </div>
            <div className="worksImg1">
              <img src={portfolio9} alt="Project Back" />
              <div className="backContent3">
              <p>A modern and clean user interface for a food ordering application designed in Figma. </p>
              <a href="https://github.com/Sanjanakumari-18/Figma-project/blob/main/README.md" target="_blank">
              <button className="workBtn">
              <i className="bx bx-link-external"></i> Info
              </button>
              </a>
            </div>
            </div>
          </div>
        </div>

      </div>

      <button className="workBtn">See more</button>
    </section>
  )
}

export default Works;
