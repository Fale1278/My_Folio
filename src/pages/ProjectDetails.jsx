import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import "../styles/ProjectDetails.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-not-found">
        <h1>404</h1>
        <p>Project not found</p>
        <Link to="/projects" className="back-button">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail-page">

      {/* Back Navigation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>
      </motion.div>


      {/* Title */}
      <motion.h1
        className="project-title-detail"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {project.title}
      </motion.h1>


      {/* Tags */}
      <motion.div
        className="project-meta"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </motion.div>


      {/* Hero Image */}
      <motion.div
        className="project-hero-wrapper"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-hero-image"
        />
      </motion.div>


      {/* Content */}
      <motion.div
        className="project-content"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="project-description-detail">
          {project.longDescription}
        </p>


        {/* CTA Buttons */}
        <div className="project-links">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              View Live Project
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              View Source Code
            </a>
          )}

        </div>

      </motion.div>

    </section>
  );
};

export default ProjectDetails;