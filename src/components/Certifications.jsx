import React from 'react'
import { motion } from "framer-motion";

const Certifications = () => {

    const projects = [
        {
            id: 3,
            title: "SDE Intern",
            description: "Bluestock Fintech - Dec 2024-Jan 2025",
            image: "https://i.imgur.com/JS9Dyzo.jpeg",
            link: "https://imgur.com/a/Z4rA123",
          },
        {
          id: 1,
          title: "Full stack Java developement",
          description: "Edubridge Pvt. Ltd. - May 2024 - Sept 2024.",
          image: "https://i.imgur.com/RTfPe9a.jpeg", // Replace with your project image
          link: "https://imgur.com/a/full-stack-java-development-certificate-HSvfkLC",
        },
          {
            id: 2,
            title: "Web Development Basic to Advance",
            description: "Coursera - Dec 2022-Jan 2023",
            image: "https://i.imgur.com/fnrFBMo.jpeg",
            link: "https://imgur.com/a/coursera-certificate-zzRSuc5",
          },
        ];

  return (
    <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
            CERTIFICATION
          </h2>
          <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl orbitron font-extrabold text-center text-gray-900 dark:text-white"
          >
            Certifications
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
                  View Certificate →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
  )
}

export default Certifications