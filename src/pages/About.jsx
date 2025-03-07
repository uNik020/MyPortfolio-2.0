import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
        {/* Sections */}
        {["ABOUT ME", "EXPERIENCE", "CERTIFICATION", "HOBBIES"].map(
          (title, index) => (
            <div
              key={index}
              className="about-section w-screen flex flex-col justify-center items-center bg-gray-900 rounded-3xl p-10"
            >
              {/* Background Faded Title */}
              <h2 className="text-9xl text-center font-extrabold fixed rampart text-white opacity-5">
                {title}
              </h2>
              {/* Content */}
              <div className="text-center text-gray-300 dark:text-gray-50">
                <p className="text-lg mt-4 max-w-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vel eleifend ligula. Nullam auctor, purus eget malesuada
                  commodo, velit purus dictum diam, at finibus velit enim vel
                  nunc.
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default About;
