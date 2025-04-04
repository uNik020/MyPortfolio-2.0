import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    title: "SDE Intern",
    company: "Bluestock fintech",
    date: "Dec 2024 - Jan 2025",
    description:
      "Worked on A Stock Market Data displaying website of 100 companies using PHP and MySQL.",
  },
  {
    id: 2,
    title: "MERN Stack Intern",
    company: "Infotact Solutions",
    date: "Jan 2025 - March 2025",
    description:
      "Developed a Full stack MERN-based project - AI Job Portal with Team.",
  },
];

const experiencesWithDefault = [
  ...experiences,
  {
    id: "default",
    title: "More Experiences Coming Soon...",
    company: "",
    date: "",
    description:
      "Stay tuned! More experiences will be added as I continue my journey.",
  },
];

const Experience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(experiencesWithDefault.length / itemsPerPage);

  const currentExperiences = experiencesWithDefault.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".exp-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "70% bottom",
            end: "30% center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [currentPage]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-screen flex flex-col justify-center items-center bg-gray-900 rounded-3xl"
    >
      <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
        EXPERIENCE
      </h2>
      <h2 className="text-white align-text-top mb-22 hover:text-amber-300 orbitron text-3xl sm:text-4xl text-center">
        Experiences
      </h2>
      {/* Experience Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {currentExperiences.map((exp) => (
          <div
            key={exp.id}
            className="exp-card w-full sm:w-[300px] mx-auto backdrop-brightness-80 rounded-xl shadow-xl p-4 text-center text-white transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold orbitron">{exp.title}</h3>
            {exp.company && (
              <h4 className="text-md jura text-amber-400">{exp.company}</h4>
            )}
            {exp.date && (
              <p className="text-sm jura text-gray-300 mt-2">{exp.date}</p>
            )}
            <p className="text-gray-400 jura mt-2">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex space-x-4 justify-center mt-5">
        <button
          className={`px-4 py-2 rounded-lg jura text-white bg-gray-700 hover:bg-gray-600 hover:text-amber-300 ${
            currentPage === 0 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 rounded-lg jura text-white bg-gray-700 hover:bg-gray-600 hover:text-amber-300 ${
            currentPage === totalPages - 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
          }
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Experience;