import React, { useState } from 'react';
import './skills.css';

const skills = [
  {
    title: 'Rent-A-Car',
    description: 'A car rental platform built with React, Express, and MongoDB. The platform allows users to browse, rent, and return cars with ease...',
    image: require('../../assets/rent.png'),
    github: 'https://github.com/emorina1/Rent-A-Car.git',
    live: 'https://rent-a-car-three-swart.vercel.app/'
  },
  
  {
    title: 'Universal Hospital',
    description: 'A hospital management system developed using ASP.NET and MySQL. The system helps manage patient records, appointments...',
    image: require('../../assets/spital.png'),
    github: 'https://github.com/emorina1/Universal-Hospital.git',
    live: 'https://yourproject2.com'
  }

];

function Skills() {
  const [lightboxImage, setLightboxImage] = useState(null); // State to store the image clicked

  const handleImageClick = (imgSrc) => {
    setLightboxImage(imgSrc); // Set image for the lightbox
  };

  const closeLightbox = () => {
    setLightboxImage(null); // Close the lightbox by clearing the state
  };

  return (
    <section id="Skills">
      <div className="projectGallery">
        {skills.map((project, index) => (
          <div key={index} className="projectCard">
            <div className="projectContentWrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="projectImg" 
                onClick={() => handleImageClick(project.image)} // Trigger the lightbox
              />
              <div className="projectContent">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projectLinks">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Image */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>&times;</span>
          <img className="lightbox-content" src={lightboxImage} alt="Full view" />
        </div>
      )}
    </section>
  );
}

export default Skills;
