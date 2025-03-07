import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Education from "../components/Education";

const About = () => {
  const scrollContainer = useRef(null);
  const sectionsWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".about-section");

    // Get actual width of all sections combined
    let totalWidth = sectionsWrapper.current.scrollWidth;
    let viewportWidth = window.innerWidth;

    gsap.to(sectionsWrapper.current, {
      x: -(totalWidth - viewportWidth), // Move precisely to the last section
      ease: "power1.out",
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top top",
        end: "+=" + (totalWidth - viewportWidth), // Fixes empty space issue
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={scrollContainer}
      id="about"
      className="relative w-[866vh] h-[100vh] bg-gray-900 overflow-hidden"
    >
      <div ref={sectionsWrapper} className="flex h-full">
        {/* Section 1 */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl text-center font-extrabold rampart fixed text-white opacity-5">
            ABOUT ME
          </h2>
          <div className="flex flex-row ">
            <p className="text-lg text-center mt-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend
              ligula. Nullam auctor, purus eget malesuada commodo, velit purus
              dictum diam, at finibus velit enim vel nunc.
            </p>
            <Education/>
          </div>
        </div>
        {/* Section 2 */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl text-center font-extrabold rampart fixed text-white opacity-5">
            EXPERIENCE
          </h2>
          <div>
            <p className="text-lg text-center mt-4 text-gray-300 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend
              ligula. Nullam auctor, purus eget malesuada commodo, velit purus
              dictum diam, at finibus velit enim vel nunc.
            </p>
          </div>
        </div>
        {/* Section 3 */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl text-center font-extrabold rampart fixed text-white opacity-5">
            CERTIFICATION
          </h2>
          <div>
            <p className="text-lg text-center mt-4 text-gray-300 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend
              ligula. Nullam auctor, purus eget malesuada commodo, velit purus
              dictum diam, at finibus velit enim vel nunc.
            </p>
          </div>
        </div>
        {/* Section 4 */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl text-center font-extrabold rampart fixed text-white opacity-5">
            HOBBIES
          </h2>
          <div>
            <p className="text-lg text-center mt-4 text-gray-300 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend
              ligula. Nullam auctor, purus eget malesuada commodo, velit purus
              dictum diam, at finibus velit enim vel nunc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
