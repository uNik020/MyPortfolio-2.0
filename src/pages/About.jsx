import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Experience from "./Experience.jsx";
import Certifications from "../components/Certifications.jsx";
import Skills from "../components/Skills.jsx";
import AboutSection from "../components/AboutSection.jsx";

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
        <AboutSection />
        {/* Section 2 */}
          <Experience/>
        {/* Section 3 */}
        <Certifications/>
        {/* Section 4 */}
        <Skills/>
      </div>
    </section>
  );
};

export default About;