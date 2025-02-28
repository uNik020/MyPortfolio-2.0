import React from 'react'
import { motion } from "framer-motion";


const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/400", // Replace with your project image
    link: "https://yourportfolio.com",
  },
    {
      id: 2,
      title: "E-commerce Store",
      description: "A full-stack MERN e-commerce website with payment integration.",
      image: "https://via.placeholder.com/400",
      link: "https://yourstore.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A simple and efficient task management app with authentication.",
      image: "https://via.placeholder.com/400",
      link: "https://yourtaskapp.com",
    },
  ];
  
  const Projects = () => {
    return (
      <section className="w-full py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white"
          >
            My Projects
          </motion.h2>
  
          {/* Projects Grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: project.id * 0.2 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-48 object-cover"
                />
                <h3 className="font-bold text-lg mt-4 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-purple-500 font-semibold"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  