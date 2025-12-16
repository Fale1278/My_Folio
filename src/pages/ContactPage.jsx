import React from 'react';
import '../styles/Contact.css'; // We will update the CSS to match the new layout

const ContactPage = () => {

  // Replace these placeholders with your actual links and email
  const contactInfo = {
    email: 'your.professional@email.com',
    github: 'https://github.com/YourUsername',
    linkedin: 'https://linkedin.com/in/YourUsername',
    twitter: 'https://twitter.com/YourHandle',
  };

  return (
    <section className="contact-page section-padding">
      <h1 className="page-title">Get In Touch</h1>
      <p className="page-tagline">
        I am currently seeking new opportunities and projects. The best way to reach me is directly via email or through my social platforms listed below.
      </p>

      <div className="contact-links-container">
        
        {/* Direct Email Link */}
        <a 
          href={`mailto:${contactInfo.email}`} 
          className="contact-link email-link"
          aria-label="Send email to my professional address"
        >
          <span className="icon">📧</span>
          <span>{contactInfo.email}</span>
        </a>

        {/* Social Media Links Grid */}
        <div className="social-links-grid">
          
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            <span className="icon">🔗</span>
            LinkedIn
          </a>
          
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="social-link github">
            <span className="icon">💻</span>
            GitHub
          </a>
          
          <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">
            <span className="icon">🐦</span>
            Twitter
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ContactPage;