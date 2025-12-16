import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import '../styles/Projects.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const ProjectsPage = () => {
  return (
    <section className="projects-page section-padding">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Selected Work
      </motion.h1>

      <motion.p
        className="page-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        A curated selection of projects demonstrating frontend engineering,
        interaction design, and UI craftsmanship.
      </motion.p>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsPage;
