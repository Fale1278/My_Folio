import React from "react";
import { motion } from "framer-motion";
import { Award, Code, Globe, Zap } from "lucide-react";
import "../styles/About.css";
import profile from "../assets/hero.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const AboutPage = () => {
  const skills = [
    "React.js", "JavaScript", "TypeScript", "Three.js",
    "Framer Motion", "UI Architecture", "Design Systems",
    "Performance Optimization", "Accessibility", "CSS/SCSS"
  ];

  return (
    <div className="about-page">
      <section className="about-hero-section section-padding">
        <motion.div className="about-hero-content" {...fadeIn}>
          <h1 className="page-title">The Mind <br/> <span className="accent-text">Behind the Code</span></h1>
          <p className="page-tagline">
            Merging technical excellence with creative vision to build the future of the web.
          </p>
        </motion.div>
      </section>

      <section className="about-profile-section">
        <div className="profile-grid">
           <motion.div 
             className="profile-image-container"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
             <img src={profile} alt="Fale King" className="about-img" />
             <div className="experience-badge glass">
               <span className="years">3+</span>
               <span className="exp-text">Years of <br/> Excellence</span>
             </div>
           </motion.div>

           <motion.div className="profile-text" {...fadeIn}>
             <h2 className="section-subtitle">Crafting Digital Excellence</h2>
             <p>
               I'm a Frontend Engineer with a passion for building interfaces that are not just functional, but memorable. 
               My approach combines robust engineering principles with a deep understanding of user psychology and design aesthetics.
             </p>
             <p>
               Over the past 3 years, I've specialized in the React ecosystem, mastering the art of building scalable, 
               performant, and accessible web applications for a variety of industries.
             </p>
             
             <div className="about-features">
                <div className="feature-item">
                  <Zap className="accent-text" size={24} />
                  <div>
                    <h3>Fast Performance</h3>
                    <p>Optimized for speed and fluid interactions.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Award className="accent-text" size={24} />
                  <div>
                    <h3>Quality Focused</h3>
                    <p>Pixel-perfect implementation with clean code.</p>
                  </div>
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      <section className="skills-section section-padding">
        <motion.div className="skills-container" {...fadeIn}>
          <h2 className="section-subtitle centered">Core Tech Stack</h2>
          <div className="skills-marquee">
             {skills.map((skill, index) => (
               <div key={index} className="skill-tag glass">
                 {skill}
               </div>
             ))}
          </div>
        </motion.div>
      </section>

      <section className="experience-section section-padding">
         <motion.div className="experience-header" {...fadeIn}>
            <h2 className="section-subtitle centered">My Journey</h2>
         </motion.div>
         
         <div className="timeline-container">
            <div className="timeline-item">
               <div className="timeline-date">2023 — Present</div>
               <div className="timeline-content glass">
                  <h3>Senior Frontend Engineer</h3>
                  <p>Leading development of complex web architectures, focusing on React and modern UI systems.</p>
               </div>
            </div>
            <div className="timeline-item">
               <div className="timeline-date">2022 — 2023</div>
               <div className="timeline-content glass">
                  <h3>UI Developer</h3>
                  <p>Specialized in creating interactive prototypes and high-performance React components.</p>
               </div>
            </div>
            <div className="timeline-item">
               <div className="timeline-date">2018 — 2022</div>
               <div className="timeline-content glass">
                  <h3>B.Sc. Computer Science</h3>
                  <p>Graduated with honors, focusing on Software Engineering and Human-Computer Interaction.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;