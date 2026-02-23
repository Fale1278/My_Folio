import React from "react";
import "../styles/About.css";
import profile from "../assets/hero.jpg";

const TimelineItem = ({ title, date, description }) => (
  <div className="timeline-item">
    <div className="timeline-marker"></div>

    <div className="timeline-body">
      <span className="timeline-date">{date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Stat = ({ number, label }) => (
  <div className="stat-card">
    <h3>{number}</h3>
    <p>{label}</p>
  </div>
);

const AboutPage = () => {
  const skills = [
    "React.js",
    "JavaScript",
    "Modern CSS",
    "UI Architecture",
    "Design Systems",
    "Performance Optimization",
    "Accessibility",
    "Git & Version Control",
  ];

  const experience = [
    {
      title: "Frontend Developer",
      date: "2023 — Present",
      description:
        "Building scalable, modern interfaces with React, focusing on performance, scalability, and design systems.",
    },
    {
      title: "Freelance Developer",
      date: "2022 — 2023",
      description:
        "Designed and developed responsive websites and digital products for startups and individuals.",
    },
    {
      title: "B.Sc. Computer Science",
      date: "2018 — 2022",
      description:
        "Built strong software engineering fundamentals and frontend specialization.",
    },
  ];

  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <h1>Designing Interfaces That Feel Effortless</h1>
        <p>
          I build scalable, modern web applications with precision,
          performance, and exceptional user experience.
        </p>
      </div>

      {/* PROFILE SECTION */}
      <div className="about-profile">

        <div className="profile-image">
          <img src={profile} alt="Profile" />
        </div>

        <div className="profile-content">
          <h2>Frontend Developer & UI Engineer</h2>

          <p>
            I specialize in building modern web applications using React and
            modern frontend architecture. My focus is on creating intuitive,
            performant, and scalable digital experiences.
          </p>

          <p>
            I combine engineering precision with design thinking to create
            systems that are both functional and beautiful.
          </p>

          <a href="/cv/King-Frontend-Developer-CV.pdf" className="cv-button">
            Download CV
          </a>
        </div>

      </div>

      {/* STATS */}
      <div className="stats-container">

        <Stat number="3+" label="Years Experience" />
        <Stat number="15+" label="Projects Built" />
        <Stat number="10+" label="Technologies Mastered" />
        <Stat number="100%" label="Performance Focused" />

      </div>

      {/* SKILLS */}
      <div className="skills-section">

        <h2>Core Expertise</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>

      </div>

      {/* TIMELINE */}
      <div className="timeline-section">

        <h2>Experience</h2>

        <div className="timeline">
          {experience.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default AboutPage;