import React from 'react';
import '../styles/About.css';

const TimelineItem = ({ title, date, description }) => (
  <div className="timeline-item">
    <div className="timeline-date">{date}</div>
    <div className="timeline-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const AboutPage = () => {
  const skills = [
    'React.js',
    'JavaScript (ES6+)',
    'HTML5 & Modern CSS',
    'Responsive UI Architecture',
    'Design Systems',
    'Performance Optimization',
    'Accessibility (a11y)',
    'Git & Version Control',
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      date: '2023 — Present',
      description:
        'Building scalable, component-driven user interfaces with React, focusing on performance, accessibility, and clean frontend architecture.',
    },
    {
      title: 'Freelance Web Designer & Developer',
      date: '2022 — 2023',
      description:
        'Delivered responsive websites, landing pages, and UI redesigns for individuals and small teams with a strong emphasis on usability and clarity.',
    },
    {
      title: 'B.Sc. Computer Science',
      date: '2018 — 2022',
      description:
        'Developed a strong foundation in problem-solving, software principles, and frontend-focused development.',
    },
  ];

  return (
    <section className="about-page section-padding">
      <h1 className="page-title">About Me</h1>

      <div className="about-intro-card">
        <p className="about-lead">
          I’m a <strong>Frontend Developer</strong> focused on crafting thoughtful,
          high-performance user interfaces that balance aesthetics with
          functionality.
        </p>

        <p>
          My work sits at the intersection of <strong>engineering and design</strong>.
          I enjoy transforming complex ideas into clean, intuitive digital
          experiences using modern frontend technologies.
        </p>

        <p>
          I value maintainable code, attention to detail, and continuous
          improvement — always refining both the experience and the system behind
          it.
        </p>

        <a
          href="/cv/King-Frontend-Developer-CV.pdf"
          download
          className="cv-button"
        >
          Download CV
        </a>
      </div>

      <h2 className="section-subtitle">Core Expertise</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      <h2 className="section-subtitle">Experience & Education</h2>
      <div className="timeline-container">
        {experience.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
