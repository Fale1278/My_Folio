import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>King.</h2>
          <p>
            Frontend Engineer focused on crafting high-performance,
            visually refined web experiences.
          </p>
        </div>

        {/* NAV */}
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* SOCIALS */}
        <div className="footer-socials">
          <a
            href="https://github.com/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://twitter.com/YourHandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} King. All rights reserved.</span>
        <span className="footer-note">
          Built with React & modern CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
