import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import waveIcon from '../../assets/wave.png'; // Importo ikonën e valës
import { Link } from 'react-scroll';

const Intro = () => {
  const [showDescription, setShowDescription] = useState(false);

  // Trigger the description animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 3000); // 3 seconds delay before description shows
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="intro">
      <div className={`imageContainer ${showDescription ? 'moveImage' : ''}`}>
        <img src={bg} alt="Profile" className="bg" />
      </div>
      {showDescription && (
        <div className="introContent slideIn">
          <span className="hello">Hello</span>
          <img src={waveIcon} alt="Hello Icon" className="helloIcon" />
          <span className="introText">
            I'm <span className="introName">Elsa</span>
            <br />
            Web Developer
          </span>
          <br/>
          <div class="fade-zoom-container">
  <p>My name is Elsa, and I am an enthusiastic student in the field of Computer Science. <br/>I am in the early stages of learning programming.
In the near future,
I aspire to become a programmer.</p>
</div>
<p class="fade-in">🚀 I love technology and innovation!</p>


          <Link to="contact" smooth={true} duration={500}>
            <button className="btn" aria-label="Hire Me">
              <img src={btnImg} alt="Hire Me" className="btnImg" />
              Hire Me
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Intro;
