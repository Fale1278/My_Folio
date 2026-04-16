import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Hero.css';
import heroImage from '../assets/hero.jpg';

const TEXTS = [
  "Fale King Nanmua.",
  "Front-End Engineer.",
  "UI / UX Designer.",
  "React Architect."
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TEXTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Available for new opportunities
          </motion.span>
          
          <h1 className="hero-title">
            Creative <br />
            <span className="accent-text">
              <AnimatePresence mode="wait">
                <motion.span
                  key={TEXTS[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {TEXTS[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="hero-description">
            I craft high-performance, pixel-perfect digital experiences. 
            Focused on building scalable frontend systems with aesthetic precision.
          </p>

          <div className="hero-actions">
            <motion.a 
              href="/projects" 
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work <ArrowRight size={18} />
            </motion.a>
            <div className="social-links">
              <a href="https://github.com/Fale1278" target="_blank" rel="noreferrer"><Github size={20} /></a>
              <a href="#" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
              <a href="mailto:contact@example.com"><Mail size={20} /></a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="image-blob-container">
             <div className="blob-gradient"></div>
             <img src={heroImage} alt="King" className="hero-profile-img" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

