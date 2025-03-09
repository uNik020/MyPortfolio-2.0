import React, { useEffect } from "react";
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
    title: "Full Stack Developer Intern",
    company: "DEF Corp",
    date: "Sep 2024 - Dec 2024",
    description:
      "Built a real-time dashboard integrating backend APIs with React frontend.",
  },
  {
    id: 5,
    title: "Full Stack Developer Intern",
    company: "DEF Corp",
    date: "Sep 2024 - Dec 2024",
    description:
      "Built a real-time dashboard integrating backend APIs with React frontend.",
  },
  {
    id: 6,
    title: "Full Stack Developer Intern",
    company: "DEF Corp",
    date: "Sep 2024 - Dec 2024",
    description:
      "Built a real-time dashboard integrating backend APIs with React frontend.",
  },
];

const Experience = () => {
  useEffect(() => {
    gsap.from(".exp-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section id="experience" className="w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
      <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
        EXPERIENCE
      </h2>

      {/* Experience Grid */}
      <div className="grid grid-cols-3 gap-x-20 gap-y-10 mt-8 w-full max-w-5xl mx-auto">
        {experiences.map((exp, index) => {
          const isOdd = index % 2 !== 0; // Determines row position

          return (
            <div
              key={exp.id}
              className={`exp-card relative w-[350px] backdrop-brightness-75 rounded-xl shadow-xl p-6 text-center text-white transition-transform duration-300 hover:scale-105
                ${index === 2 ? "col-start-3 row-start-1" : index === 1 ? "col-start-2 row-start-2" : "col-start-1 row-start-1"}
              `}
            >
              <h3 className="text-2xl font-bold orbitron">{exp.title}</h3>
              <h4 className="text-lg text-amber-400">{exp.company}</h4>
              <p className="text-sm text-gray-300 mt-2">{exp.date}</p>
              <p className="text-gray-400 mt-2">{exp.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
