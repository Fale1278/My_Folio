import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2 className="footer-logo">King</h2>
          <p>
            Architecting the future of web interfaces with precision and aesthetic excellence.
          </p>
        </div>

        <nav className="footer-nav">
          <div className="footer-nav-col">
            <h4>Sitemap</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-nav-col">
            <h4>Social</h4>
            <a href="https://github.com/Fale1278" target="_blank" rel="noreferrer">Github</a>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </nav>

        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <a href="mailto:contact@king.dev" className="footer-email">contact@king.dev</a>
          <div className="footer-social-icons">
             <a href="https://github.com/Fale1278" target="_blank" rel="noreferrer"><Github size={20} /></a>
             <a href="#" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
             <a href="#" target="_blank" rel="noreferrer"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} King. Designed & Developed with Passion.</p>
      </div>
    </footer>
  );
};

export default Footer;

