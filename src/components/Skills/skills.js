import React from 'react';
import './skills.css';
import htmlcss from '../../assets/htmlcss.png';
import javascript from '../../assets/javascript.png';
import reactpng from '../../assets/react.png';
import backend from '../../assets/react.png'; // Shto ikonën për Backend
import css from '../../assets/react.png'; // Shto ikonën për CSS

function Skills() {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>
        "I am in the early stages of learning programming. In the near future, 
        I aspire to become a programmer."
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={htmlcss} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Frontend</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={javascript} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={reactpng} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>React</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={backend} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Backend</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={css} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>CSS</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
