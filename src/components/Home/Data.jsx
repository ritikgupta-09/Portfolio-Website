import React from 'react';
import { motion } from 'framer-motion';

const Data = () => {
  return (
    <motion.div
      className="home__data"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        className="home__title"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Ritik Gupta
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand"
        >
          {/* SVG paths here */}
        </svg>
      </motion.h1>

      <motion.h3
        className="home__subtitle"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full-Stack Developer
      </motion.h3>

      <motion.p
        className="home__description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
       
      I’m a passionate Full-Stack Developer specializing in ReactJS for frontend and Spring Boot (Java) for backend. Currently in my final year of MCA, I love building robust and scalable web applications that solve real-world problems With a strong command of both modern UI development and enterprise-level backend systems, I focus on creating clean, efficient, and impactful solutions.Welcome to my portfolio —where I share my a journey through my skills, projects, and constant growth as a developer.
      </motion.p>

      <motion.a
        href="#contact"
        className="button button--flex"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Say Hello
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* SVG paths here */}
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default Data;
