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
        {/* Section 1 */}
        <div className="about-section w-screen flex justify-center items-center bg-amber-300 rounded-3xl p-8">
          <h2 className="text-9xl text-center font-extrabold rampart opacity-15">
            ABOUT ME
          </h2>
        </div>
        {/* Section 2 */}
        <div className="about-section w-screen flex justify-center items-center bg-blue-300 rounded-3xl p-8">
          <h2 className="text-9xl text-center font-extrabold rampart opacity-15">
            EXPERIENCE
          </h2>
        </div>
        {/* Section 3 */}
        <div className="about-section w-screen flex justify-center items-center bg-rose-300 rounded-3xl p-8">
          <h2 className="text-9xl text-center font-extrabold rampart opacity-15">
            CERTIFICATION
          </h2>
        </div>
        {/* Section 4 */}
        <div className="about-section w-screen flex justify-center items-center bg-emerald-400 rounded-3xl p-8">
          <h2 className="text-9xl text-center font-extrabold rampart opacity-15">
            HOBBIES
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
