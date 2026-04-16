import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, slug, image, live, github }) => {
  return (
    <motion.div
      className="project-card glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-img" />
        <div className="project-overlay">
          <div className="overlay-links">
             {github && <a href={github} target="_blank" rel="noreferrer"><Github size={20} /></a>}
             {live && <a href={live} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>}
          </div>
        </div>
      </div>

      <div className="project-info">
        <div className="project-header">
           <h3 className="project-title">{title}</h3>
           <div className="project-tags">
            {tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="project-description">{description}</p>
        
        <Link to={`/projects/${slug}`} className="view-case-study">
          Case Study <span className="arrow">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

