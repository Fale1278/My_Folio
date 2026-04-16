import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import "../styles/ProjectDetails.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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
      <section className="project-not-found section-padding">
        <h1>404</h1>
        <p>Project not found</p>
        <Link to="/projects" className="cta-button primary">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail-page section-padding">
      <div className="detail-container">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link to="/projects" className="back-nav">
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </motion.div>

        <motion.div 
          className="detail-header"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="detail-tag glass">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="detail-hero-section"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={project.image} alt={project.title} className="detail-main-img" />
        </motion.div>

        <div className="detail-content-grid">
           <motion.div className="detail-info" {...fadeUp}>
              <h3>Overview</h3>
              <p>{project.longDescription}</p>
           </motion.div>
           
           <motion.div className="detail-sidebar" {...fadeUp}>
              <div className="sidebar-card glass">
                 <h3>Project Links</h3>
                 <div className="sidebar-actions">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="cta-button primary full-width">
                        Live Preview <ExternalLink size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="cta-button secondary full-width">
                        Codebase <Github size={18} />
                      </a>
                    )}
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;