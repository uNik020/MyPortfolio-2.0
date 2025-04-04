import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Experience from "./Experience.jsx";
import Certifications from "../components/Certifications.jsx";
import Skills from "../components/Skills.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ClickSpark from "../blocks/Animations/ClickSpark/ClickSpark.jsx";

const About = () => {
  const scrollContainer = useRef(null);
  const sectionsWrapper = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updateLayout = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateLayout);

    if (!isMobile) {
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
      window.removeEventListener("resize", updateLayout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <section
      ref={scrollContainer}
      id="about"
      className={`relative ${isMobile ? "h-auto" : "w-[860vh] h-[100vh]"} bg-gray-900 overflow-hidden`}
    >
      <div ref={sectionsWrapper} className={`${isMobile ? "flex flex-col" : "flex h-full"}`}>
        <AboutSection />
        <Experience />
        <Certifications />
        <Skills />
      </div>
    </section>
  );
};

export default About;
