import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import '../styles/Contact.css';

const ContactPage = () => {
  const contactInfo = {
    email: 'kingnanmuafale@email.com',
    github: 'https://github.com/Fale1278',
    linkedin: '#',
    twitter: 'https://twitter.com/YourHandle',
  };

  return (
    <section className="contact-page section-padding">
      <motion.header
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="page-title">Let’s Start a <br/> <span className="accent-text">Conversation</span></h1>
        <p className="page-tagline">
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>
      </motion.header>

      <div className="contact-layout">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-card glass">
            <h2>Reach Out Directly</h2>
            <p>I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <a href={`mailto:${contactInfo.email}`} className="email-link">
              <Mail size={20} className="accent-text" />
              {contactInfo.email}
            </a>

            <div className="social-grid">
              <a href={contactInfo.github} target="_blank" rel="noreferrer" className="social-pill glass">
                <Github size={18} /> Github
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="social-pill glass">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={contactInfo.twitter} target="_blank" rel="noreferrer" className="social-pill glass">
                <Twitter size={18} /> Twitter
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
           className="contact-form-container"
           initial={{ opacity: 0, x: 40 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form className="contact-form glass">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What's this about?" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="6" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="cta-button primary full-width">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;

