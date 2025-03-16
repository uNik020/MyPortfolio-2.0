import React from "react";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText";
import Education from "./Education";

const AboutSection = () => {
  return (
    <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-6 sm:p-8">
      <h2 className="text-7xl sm:text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
        ABOUT ME
      </h2>

      {/* Responsive Wrapper */}
      <div className="flex flex-col md:flex-row md:h-[80vh] w-screen max-w-8xl overflow-y-auto md:overflow-visible">
        
        {/* About Me Section */}
        <div className="p-3 sm:p-4 m-2 backdrop-brightness-80 rounded-4xl w-full md:w-2/3">
          <h2 className="text-white hover:text-amber-300 orbitron text-3xl sm:text-4xl text-center">
            About Me
          </h2>

          {/* Content Wrapper */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            
            {/* Tilted Card */}
            <div className="w-full md:w-1/2 flex justify-center">
              <TiltedCard
                imageSrc="https://i.imgur.com/Sq9puHq.jpeg"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Hover & move"
                containerHeight="350px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="250px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="marker text-2xl text-white p-4">Nikhil</p>
                }
              />
            </div>

            {/* Decrypted Text */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4 sm:px-6">
              <p className="text-lg jura mt-4 text-gray-300 sm:m-0 sm:p-0">
                <DecryptedText
                  text="I’m Nikhil Shekhar, a Software Developer skilled in Java, React, Angular, Spring Boot, and MySQL. Passionate about building scalable web applications, I enjoy solving complex problems and creating seamless user experiences. I’m eager to grow as a Full Stack Developer and work on innovative projects that push my skills further. Let’s connect!"
                  speed={5}
                  characters="x@#4%&*^@"
                  className="revealed"
                  sequential="true"
                  encryptedClassName="encrypted"
                  revealDirection="start"
                />
              </p>
            </div>
          </div>
        </div>

        {/* Education Section (Stacks below on mobile) */}
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <Education />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
