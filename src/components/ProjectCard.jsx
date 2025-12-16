import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ title, description, tags, slug, image }) => {
  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      whileHover={{ y: -6 }}
    >
      <Link to={`/projects/${slug}`}>
        <div
          className="project-image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </Link>

      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <Link to={`/projects/${slug}`} className="view-details-btn">
          View Case Study →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
