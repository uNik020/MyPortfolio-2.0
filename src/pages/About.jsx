import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity.jsx";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Reference for scrolling
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  // Measure the scroll progress within the "About" section
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // Get the number of sections to scroll horizontally
  const totalSections = 4; // Adjust this if you add more sections
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 * (totalSections - 1)}%`]);

  return (
    <>
      <section
        ref={scrollRef}
        id="about"
        className="relative w-full h-[105vh] py-16 bg-gray-100 dark:bg-gray-900 overflow-hidden"
      >
        <div ref={containerRef} className="relative w-full h-full">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl mb-2 font-extrabold bruno-ace-sc text-center bg-gray-900 text-white"
          >
            About Me
          </motion.h2>

          {/* Fake Scrolling Container */}
          <div className="relative w-full h-full flex flex-col justify-center">
            <motion.div
              className="flex h-[83vh] gap-4 will-change-transform"
              style={{ x }}
            >
              <div className="bg-amber-300 min-w-screen rounded-3xl p-8 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold">EDUCATION</h2>
                <p className="text-xl mt-2">B.Tech in Computer Science - XYZ University</p>
              </div>
              <div className="bg-blue-300 min-w-screen rounded-3xl p-8 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold">EXPERIENCE</h2>
                <p className="text-xl mt-2">Software Developer Intern at ABC Tech</p>
              </div>
              <div className="bg-rose-300 min-w-screen rounded-3xl p-8 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold">CERTIFICATION</h2>
                <p className="text-xl mt-2">Certified React Developer - Udemy</p>
              </div>
              <div className="bg-emerald-400 min-w-screen rounded-3xl p-8 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold">HOBBIES</h2>
                <p className="text-xl mt-2">UI/UX Designing, Photography, Chess</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Text Animation */}
      <ScrollVelocity
        texts={[
          <span className="text-xl text-black">OPEN TO WORK ⚠</span>,
        ]}
        velocity={100}
        className="custom-scroll-text bg-amber-200 p-2.5 text-3xl"
        numCopies={40}
      />
    </>
  );
};

export default About;
