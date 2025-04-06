import React from "react";
import BounceCards from "../blocks/Components/BounceCards/BounceCards.jsx";
import FallingText from "../blocks/TextAnimations/FallingText/FallingText.jsx";

const Skills = () => {
  return (
    <section className="w-screen h-screen bg-gray-900 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 rounded-3xl relative overflow-hidden flex justify-center items-center">
      
      {/* Fixed Background Title (Desktop only) */}
      <h2 className="hidden lg:block text-[8rem] xl:text-[10rem] font-extrabold text-white opacity-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none z-0 rampart">
        SKILLS
      </h2>

      {/* Mobile & Tablet Title */}
      <h2 className="block lg:hidden text-4xl sm:text-5xl md:text-6xl font-extrabold text-white opacity-10 text-center absolute top-6 w-full z-10 rampart">
        SKILLS
      </h2>

      {/* Centered FallingText */}
      <div className="w-full h-full flex justify-center items-center z-10">
        <FallingText
          text={`JAVA HTML JAVASCRIPT CSS REACT & ANGULAR GITHUB TAILWINDCSS GIT SQL MONGODB EXPRESSJS NODEJS C C++ C# VS-Code Springboot GSAP FramerMotion Figma Photoshop Video-Editing OOPS REST-API AWS Azure.`}
          highlightWords={[
            "JAVASCRIPT",
            "JAVA",
            "REACT",
            "ANGULAR",
            "TAILWINDCSS",
            "C#",
            "SQL",
            "GSAP",
            "Springboot",
            "OOPS",
            "AWS",
            "REST-API",
          ]}
          highlightClass="highlighted"
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </section>
  );
};

export default Skills;
