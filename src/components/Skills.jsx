import React from "react";
import BounceCards from "../blocks/Components/BounceCards/BounceCards.jsx";

const Skills = () => {
  const images = [
    "https://images.sftcdn.net/images/t_app-icon-m/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-DW_HRN0h9p0HU7tkiKE4PiuryqmVH6X9w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD7Is5t1t34phSWiIZ_L_VpazwhDCFANnTA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9UXfrx8TWM7eyKB1jdIk66ZoGVmTtqWjKQ&s",
    "https://www.shutterstock.com/image-vector/angular-js-front-end-web-600nw-1011250342.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2Ob42L45hStICYlml7RTjH9p4q0E89vc6Q&s",
    "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
  ];

  const transformStyles = [
    "rotate(-3deg) translate(-150px)",
    "rotate(1deg) translate(-70px)",
    "rotate(-4deg) translate(-40px)",
    "rotate(5deg)",
    "rotate(-5deg) translate(70px)",
    "rotate(5deg) translate(150px)",
    "rotate(-3deg) translate(250px)",
  ];

  return (
    <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
      <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
        SKILLS
      </h2>
      <div>
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={600}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>
    </div>
  );
};

export default Skills;
