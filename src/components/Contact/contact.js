import React, { useRef, useState } from 'react';
import './contact.css';
import FacebookIcon from "../../assets/FacebookIcon.png";
import InstagramIcon from "../../assets/InstagramIcon.png";
import LinkedInIcon from "../../assets/LinkedInIcon.png";
import YoutubeIcon from "../../assets/YoutubeIcon.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    emailjs
      .sendForm('service_swlub2k', 'template_vtiy4zj', form.current, '30NTbrPtuwxryuN2G')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setMessage('SUCCESS! Your message has been sent.');
          setLoading(false);
          form.current.reset(); // Optional: reset the form after submission
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          setMessage('FAILED... Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact">
      <div>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" required />
          <input type="email" className="email" placeholder="Your Email" name="your_email" required />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="submitBtn" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
          {message && <div className="formMessage">{message}</div>}
          <div className="links">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={FacebookIcon} alt="Facebook" className="link" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt="Instagram" className="link" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInIcon} alt="LinkedIn" className="link" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <img src={YoutubeIcon} alt="YouTube" className="link" />
      </a>
    </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
