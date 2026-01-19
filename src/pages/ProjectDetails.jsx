import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-not-found section-padding">
        <h1>404</h1>
        <Link to="/projects">Back to projects</Link>
      </section>
    );
  }

  return (
    <section className="project-detail-page section-padding">
      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <motion.h1
        className="project-title-detail"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {project.title}
      </motion.h1>

      <div className="project-meta">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <motion.div
        className="project-hero-image"
        style={{ backgroundImage: `url(${project.image})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <div className="project-content">
        <p>{project.longDescription}</p>

        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;