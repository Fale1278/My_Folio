import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const ContactPage = () => {
  const contactInfo = {
    email: 'your.professional@email.com',
    github: 'https://github.com/YourUsername',
    linkedin: 'https://linkedin.com/in/YourUsername',
    twitter: 'https://twitter.com/YourHandle',
  };

  return (
    <section className="contact-page section-padding">
      {/* Animated Background */}
      <div className="contact-bg" />

      <motion.header
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="page-title">Let’s Build Something Remarkable</h1>
        <p className="page-tagline">
          Whether you’re hiring, collaborating, or building a product — I’m always open to meaningful conversations.
        </p>
      </motion.header>

      <div className="contact-layout">
        {/* LEFT — INFO */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Contact Details</h2>

          <a href={`mailto:${contactInfo.email}`} className="contact-pill">
            <span>📧</span>
            {contactInfo.email}
          </a>

          <div className="social-links">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={contactInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={contactInfo.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>

          <p className="contact-note">
            I typically respond within 24 hours. For urgent opportunities, email is best.
          </p>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          className="contact-form"
          action={`mailto:${contactInfo.email}`}
          method="POST"
          encType="text/plain"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Send a Message</h2>

          <div className="form-group">
            <label>Your Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea name="message" rows="5" required />
          </div>

          <button type="submit" className="submit-button">
            Send Message →
          </button>

          <p className="form-hint">
            This opens your email client — no data is stored.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactPage;
