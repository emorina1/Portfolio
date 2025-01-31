import React, { useState } from 'react';
import './navbar.css';
import photo from "../../assets/photo.png";
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={photo} alt="Photo" className="photo" />
      
      <div className="desktopMenu">
        <Link 
          activeClass="active" 
          to="intro" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link 
          activeClass="active" 
          to="skills" 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link 
          activeClass="active" 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
      
      <button 
        className="desktopMenuBtn" 
        onClick={() => {
          const contactElement = document.getElementById('contact');
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.error('Element with ID "contact" not found.');
          }
        }}
      >
        <img src={contactImg} alt="Contact" className="desktopMenuImg" /> 
        Contact Me
      </button>
      
      <img 
        src={menu} 
        alt="Menu" 
        className="mobMenu" 
        onClick={() => setShowMenu(!showMenu)} 
      />
      
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link 
          activeClass="active" 
          to="intro" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="listItem" 
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link 
          activeClass="active" 
          to="skills" 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className="listItem" 
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link 
          activeClass="active" 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className="listItem" 
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
