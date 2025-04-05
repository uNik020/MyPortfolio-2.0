import React from "react";
import BounceCards from "../blocks/Components/BounceCards/BounceCards.jsx";
import FallingText from "../blocks/TextAnimations/FallingText/FallingText.jsx";

const Skills = () => {
  
  return (
    <>
      <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8 relative">
        {/* Large Title for Desktop */}
        <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5 hidden lg:block">
          SKILLS
        </h2>

        {/* Responsive Title for Mobile & Tablet */}
        <h2 className="text-4xl sm:text-5xl font-extrabold rampart text-white opacity-10 block lg:hidden absolute top-4">
          SKILLS
        </h2>

        <div className="w-full h-full sm:h-full lg:h-full md:h-full flex justify-center">
          <FallingText
          className="w-full h-full sm:h-full lg:h-full md:h-full flex justify-center"
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
      </div>
    </>
  );
};

export default Skills;

// const images = [
//   "https://images.sftcdn.net/images/t_app-icon-m/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-DW_HRN0h9p0HU7tkiKE4PiuryqmVH6X9w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD7Is5t1t34phSWiIZ_L_VpazwhDCFANnTA&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9UXfrx8TWM7eyKB1jdIk66ZoGVmTtqWjKQ&s",
//   "https://www.shutterstock.com/image-vector/angular-js-front-end-web-600nw-1011250342.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2Ob42L45hStICYlml7RTjH9p4q0E89vc6Q&s",
//   "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
// ];

// const transformStyles = [
//   "rotate(-3deg) translate(-150px)",
//   "rotate(1deg) translate(-70px)",
//   "rotate(-4deg) translate(-40px)",
//   "rotate(5deg)",
//   "rotate(-5deg) translate(70px)",
//   "rotate(5deg) translate(120px)",
//   "rotate(-3deg) translate(180px)",
// ];

{/* <div className="w-full flex justify-center">
  <BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={window.innerWidth < 768 ? 350 : 600} // Adjust width dynamically
  containerHeight={window.innerWidth < 768 ? 180 : 250} // Adjust height dynamically
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={
    window.innerWidth < 768
    ? ["rotate(-2deg) translate(-50px)", "rotate(2deg) translate(30px)", "rotate(-1deg)"]
    : transformStyles
    }
    enableHover={true}
    />
    </div> */}