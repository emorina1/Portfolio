import React, { useState } from 'react';
import './AboutUs.css';
import profileImage from '../../assets/elsu.jpg';
import cvFile from '../../assets/Elsa Morina.pdf'; // Shto CV-në këtu

const certificates = [
  { name: "Digital Skills Training on Python Programming", fileName: "c1.jpg", imageUrl: require("../../assets/c1.jpg") },
  { name: "Introduction to Programming-JAVA", fileName: "elsa2.png", imageUrl:require("../../assets/c2.jpg") },
  { name: "Summer Academy Ueb Mobile", fileName: "elsa3.png", imageUrl:require("../../assets/c3.jpg")},
  { name: "JavaScript Problem Based", fileName: "elsa4.png", imageUrl: require("../../assets/c4.jpg") },
  { name: "Full Stack Development", fileName: "elsa5.png", imageUrl:require("../../assets/c5.jpg") },
  { name: "Summer Academy AI Robotics", fileName: "elsa6.png", imageUrl: require("../../assets/c6.jpg") },
];

const AboutUs = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <div className="image-section">
          <img src={profileImage} alt="Profile" />
          <h3 className="name-title">
            Emri: Elsa <br/>
            Mbiemri: Morina <br />
            Datelindja: 10/06/2004 <br/>
            VendLindja: Prishtinë
          </h3>
          
          {/* Butoni për shkarkimin e CV-së */}
          <a href={cvFile} download="Elsa_Morina_CV.pdf" className="download-btn">
            📄 Shkarko CV
          </a>
        </div>

        <div className="content">
          <h2>About Me</h2>
          <p>
            My name is Elsa, and I am an enthusiastic student in the field of Computer Science.
            Currently, I am pursuing my studies in this area and focusing on the development of applications and websites. 
            I have strong knowledge of web development technologies, including HTML, CSS, JavaScript, and I’ve also started exploring frameworks like React. 
            I am passionate about technology and always looking for opportunities to learn more and grow as a web developer. 
            During my studies, I have worked on several practical projects related to web development, and I hope to contribute to creating innovative solutions to problems faced in the digital world.
          </p>
          <div className="sections">
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="certifications">
              <h3>Certifications</h3>
              {certificates.map((cert, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => openLightbox(cert.imageUrl)}
                >
                  {cert.name}
                </a>
              ))}
            </div>
          </div>
          {lightboxImage && (
            <div className="lightbox" onClick={closeLightbox}>
              <span className="close" onClick={closeLightbox}>&times;</span>
              <img className="lightbox-content" src={lightboxImage} alt="Full view" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
