import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/hero.jpg';

/* ===============================
   Typing Effect
================================ */
const TEXTS = [
  "I'm Fale King Nanmua.",
  "I am a -",
  "Front-End Engineer.",
  "UI / UX Designer.",
  "React & Interface Architect."
];

const TYPING_SPEED = 90;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1400;

const TypingHeadline = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && subIndex === TEXTS[index].length) {
      setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      return;
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % TEXTS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <h1 className="hero-headline">
      {TEXTS[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </h1>
  );
};

/* ===============================
   Counter
================================ */
const Counter = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-card">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
};

/* ===============================
   Home Page
================================ */
const HomePage = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">

        {/* LEFT: TEXT CONTENT */}
        <div className="hero-content">
          <h2 className="glitch-text" data-text="Hi There!!!">
          Hi There!!!
          </h2>

          <TypingHeadline />

          <p className="hero-tagline">
            I design and build <strong>clean, scalable, and high-performance</strong> web
            interfaces with strong attention to usability, accessibility,
            and modern frontend architecture.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="cta-button primary">
              View Selected Work
            </a>
            <a href="/contact" className="cta-button secondary">
              Hire Me
            </a>
          </div>

          <div className="hero-stats">
            <Counter value={10} label="Projects Built" />
            <Counter value={3} label="Core Focus Areas" />
            <Counter value={100} label="Commitment to Growth" />
          </div>
        </div>

        {/* RIGHT: HERO IMAGE */}
        <div className="hero-image-wrapper">
          <div className="hero-image-glass">
            <img src={heroImage} alt="King — Frontend Engineer" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePage;
