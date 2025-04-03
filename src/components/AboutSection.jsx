import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";
import Education from "./Education";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    const triggerConfig = {
      trigger: sectionRef.current,
      start: "70% bottom", // Starts when 70% of the section is in view
      end: "30% center", // Ends when 30% is in view
      toggleActions: "play none none reverse",
    };

    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: triggerConfig }
    );

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: triggerConfig }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: triggerConfig }
    );

    gsap.fromTo(
      educationRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: triggerConfig }
    );
  }, []);

  return (
    <div ref={sectionRef} className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-6 sm:p-8">
      <h2 className="text-7xl sm:text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
        ABOUT ME
      </h2>

      <div className="flex flex-col md:flex-row md:h-[80vh] w-screen max-w-8xl overflow-y-auto md:overflow-visible">
        <div ref={aboutRef} className="p-3 sm:p-4 m-2 backdrop-brightness-80 rounded-4xl w-full md:w-2/3">
          <h2 className="text-white mb-3 hover:text-amber-300 orbitron text-3xl sm:text-4xl text-center">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div ref={cardRef} className="w-full md:w-1/2 flex justify-center">
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
                overlayContent={<p className="marker text-2xl text-white p-4">Nikhil</p>}
              />
            </div>

            <div ref={textRef} className="w-full md:w-1/2 mt-6 md:mt-4 px-4 sm:px-6">
              <p className="text-lg jura text-gray-300 sm:m-0 sm:p-0">
                I’m Nikhil Shekhar, a Software Developer skilled in Java, React, Angular, Spring Boot, and MySQL. Passionate about building scalable web applications, I enjoy solving complex problems and creating seamless user experiences. I’m eager to grow as a Full Stack Developer and work on innovative projects that push my skills further. Let’s connect!
              </p>
            </div>
          </div>
        </div>

        <div ref={educationRef} className="w-full md:w-1/4 flex justify-center mt-4 md:mt-0">
          <Education />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
