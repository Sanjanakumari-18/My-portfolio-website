import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => setShowMenu(!showMenu);
  const handleCloseMenu = () => setShowMenu(false);

  return (
    <nav className="navbar">
      <img src={logo} type="logo.jpg" className='logo' />

      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Skill</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Project</Link>
      </div>

      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
      </button>

      <img src={menu} alt="menu" className='mobMenu' onClick={handleMenuClick} />

      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-95} duration={500} className="listItem" onClick={handleCloseMenu}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={handleCloseMenu}>Skills</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={handleCloseMenu}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-95} duration={500} className="listItem" onClick={handleCloseMenu}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
