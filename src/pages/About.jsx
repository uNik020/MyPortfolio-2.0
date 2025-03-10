import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Education from "../components/Education";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard.jsx";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText.jsx";
import Experience from "./Experience.jsx";

const About = () => {
  const scrollContainer = useRef(null);
  const sectionsWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 768) {
      // Only apply horizontal scroll effect for desktop
      const sections = gsap.utils.toArray(".about-section");

      let totalWidth = sectionsWrapper.current.scrollWidth;
      let viewportWidth = window.innerWidth;

      gsap.to(sectionsWrapper.current, {
        x: -(totalWidth - viewportWidth),
        ease: "power1.out",
        scrollTrigger: {
          trigger: scrollContainer.current,
          start: "top top",
          end: "+=" + (totalWidth - viewportWidth),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={scrollContainer}
      id="about"
      className="relative w-screen h-auto min-h-[100vh] bg-gray-900 overflow-x-hidden"
    >
      {/* Wrapper to handle horizontal scrolling on desktop */}
      <div
        ref={sectionsWrapper}
        className="flex md:flex-row flex-col md:h-full w-full"
      >
        {/* Section 1: About Me */}
        <div className="about-section w-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
            ABOUT ME
          </h2>
          <div className="flex flex-col md:flex-row w-full items-center">
            <div className="p-4 m-2 backdrop-brightness-80 rounded-4xl w-full md:w-2/3">
              <h2 className="text-white hover:text-amber-300 orbitron text-4xl text-center">
                About Me
              </h2>
              <div className="flex flex-col md:flex-row items-center">
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
                <p className="text-lg p-4 mt-4 jura text-gray-300">
                  <DecryptedText
                    text="I’m Nikhil Shekhar, a Software Developer skilled in Java,
                  React, Angular, Spring Boot, and MySQL. Passionate about
                  building scalable web applications, I enjoy solving complex
                  problems and creating seamless user experiences. I’m eager to
                  grow as a Full Stack Developer and work on innovative projects
                  that push my skills further. Let’s connect!"
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
        </div>

        {/* Section 2: Education (Now aligned below About Me in mobile) */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <Education />
        </div>

        {/* Section 3: Experience */}
        <Experience />

        {/* Section 4: Certification */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
            CERTIFICATION
          </h2>
          <div>
            <p className="text-lg text-center mt-4 text-gray-300 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              eleifend ligula. Nullam auctor, purus eget malesuada commodo,
              velit purus dictum diam, at finibus velit enim vel nunc.
            </p>
          </div>
        </div>

        {/* Section 5: Hobbies */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
            HOBBIES
          </h2>
          <div>
            <p className="text-lg text-center mt-4 text-gray-300 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              eleifend ligula. Nullam auctor, purus eget malesuada commodo,
              velit purus dictum diam, at finibus velit enim vel nunc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
