import React, { useState, useEffect } from "react";
import gsap from "gsap";

const experiences = [
  {
    id: 1,
    title: "Java Developer Intern",
    company: "XYZ Solutions",
    date: "Jan 2024 - Apr 2024",
    description:
      "Worked on building scalable backend APIs and optimized database queries for better performance.",
  },
  {
    id: 2,
    title: "React Developer Intern",
    company: "ABC Tech",
    date: "May 2024 - Aug 2024",
    description:
      "Developed reusable UI components and optimized frontend performance.",
  },
  {
    id: 3,
    title: "Full Stack Developer Intern",
    company: "DEF Corp",
    date: "Sep 2024 - Dec 2024",
    description:
      "Built a real-time dashboard integrating backend APIs with React frontend.",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "GHI Innovations",
    date: "Jan 2025 - Present",
    description:
      "Building microservices and enhancing cloud-based infrastructure.",
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "JKL Technologies",
    date: "Apr 2024 - Present",
    description:
      "Designed interactive UI components and improved accessibility.",
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "MNO Systems",
    date: "Jul 2024 - Present",
    description:
      "Developed RESTful APIs and improved database query efficiency.",
  },
];

const Experience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  const currentExperiences = experiences.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    gsap.from(".exp-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, [currentPage]);

  return (
    <section id="experience" className="w-screen flex flex-col justify-center items-center bg-gray-900 rounded-3xl p-8">
      <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
        EXPERIENCE
      </h2>

      {/* Experience Grid */}
        <div className="grid grid-cols-3 gap-x-20 gap-y-0 mt-12 w-full max-w-5xl justify-center">
        {currentExperiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`exp-card relative w-[300px] backdrop-brightness-75 rounded-xl shadow-xl p-4 text-center text-white transition-transform duration-300 hover:scale-105
              ${index === 2 ? "col-start-3 row-start-1" : index === 1 ? "col-start-2 row-start-2" : "col-start-1 row-start-1"}
            `}
          >
            <h3 className="text-xl font-bold orbitron">{exp.title}</h3>
            <h4 className="text-md jura text-amber-400">{exp.company}</h4>
            <p className="text-sm jura text-gray-300 mt-2">{exp.date}</p>
            <p className="text-gray-400 jura mt-2">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex space-x-4 absolute">
        <button
          className={`px-4 py-2 rounded-lg text-white bg-gray-700 hover:bg-gray-600 ${
            currentPage === 0 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white bg-gray-700 hover:bg-gray-600 ${
            currentPage === totalPages - 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Experience;
