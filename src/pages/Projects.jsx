import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfiniteMenu from "../blocks/Components/InfiniteMenu/InfiniteMenu.jsx";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    console.log("Updated hoveredProject state:", hoveredProject);
  }, [hoveredProject]);

  const handleMouseEnter = (item) => {
    console.log("onMouseEnter triggered for:", item.title);
    setHoveredProject(item);
  };

  const handleMouseLeave = (item) => {
    console.log("onMouseLeave triggered for:", item.title);
    setHoveredProject(null);
  };

  const items = [
    {
      image: "https://i.imgur.com/Dx011sG.png",
      link: "https://github.com/uNik020/EstateEase",
      title: "Estate-Ease",
      description: "Real estate property management website",
      techStack: ["Java", "Angular", "MySQL", "HTML-CSS-TS"],
    },
    {
      image: "https://i.imgur.com/dui3Nu2.jpeg",
      link: "https://myportfolio-ns.netlify.app",
      title: "My Portfolio",
      description: "Personal Portfolio website",
      techStack: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
    },
    {
      image: "https://i.imgur.com/uTVVKkR.png",
      link: "https://stocker-simple-portfolio-tracker.netlify.app/",
      title: "Stocker",
      description: "The stock portfolio tracker website.",
      techStack: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    },
    {
      image: "https://i.imgur.com/07stSwy.jpeg",
      link: "https://aimlabz.netlify.app/",
      title: "AimLabz",
      description: "FPS game Reaction and aim Practice website.",
      techStack: ["React", "Gsap & Framer-motion", "Tailwind CSS"],
    },
  ];

  return (
    <div id="projects" className="relative flex flex-col items-center">
      {/* Heading */}
      <h2 className="absolute z-30 top-4 left-1/2 transform -translate-x-1/2 text-white hover:text-amber-300 orbitron text-3xl sm:text-4xl">
        Projects
      </h2>

      {/* Hover Effect Overlay */}
      {hoveredProject && (
        <motion.div
          className="absolute z-40 top-1/2 left-1/2 w-96 h-80 bg-black text-white p-6 rounded-lg shadow-xl transition-opacity flex flex-col items-center"
          style={{
            backgroundImage: `url(${hoveredProject.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <h3 className="text-2xl font-bold">{hoveredProject.title}</h3>
          <p className="text-lg mt-2">{hoveredProject.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {hoveredProject.techStack.map((tech, index) => (
              <span key={index} className="bg-amber-500 px-3 py-1 rounded-lg">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={hoveredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-white text-black font-bold rounded-lg transition duration-300 hover:bg-amber-300 hover:scale-110"
          >
            View Project
          </a>
        </motion.div>
      )}

      {/* Project List with Hover Effects */}
      <div className="h-screen w-full flex z-20 justify-center items-center">
        <InfiniteMenu
          items={items.map((item) => ({
            ...item,
            render: (
              <div
                className="relative group p-4 rounded-lg transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={() => handleMouseLeave(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 rounded-lg"
                />
                <p className="text-white mt-2 text-center">{item.title}</p>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default Projects;
  