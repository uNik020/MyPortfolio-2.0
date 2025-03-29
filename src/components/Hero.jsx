import React from "react";
import { motion } from "framer-motion";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";

const Hero = () => {
  return (
    <section className="w-full h-full flex flex-col justify-evenly items-center text-center px-6 sm:px-12 md:flex-row md:text-left md:px-16 lg:px-24">
      {/* Animated Text */}
      <div className="text-white z-10 max-w-lg md:max-w-xl lg:max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl orbitron sm:text-4xl md:text-5xl lg:text-6xl font-extrabold flex flex-wrap justify-center md:justify-start"
        >
          Hi, I'm A{" "}
          <span className="text-yellow-400 inline-flex items-center ml-2">
            {/* Fixed height wrapper */}
            <div className="h-[48px] sm:h-[56px] md:h-[64px] lg:h-[72px] flex items-center overflow-hidden">
              <RotatingText
                texts={[" Frontend", " Backend ", " Fullstack", " Database"]}
                mainClassName="inline-block"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </div>
          </span>{" "}
          <span className="text-amber-300">Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base cursive sm:text-lg md:text-xl mt-4 max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0"
        >
          I build amazing web experiences with creativity & performance.
        </motion.p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
          <motion.a
            href="#projects"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="jura inline-block px-5 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg hover:scale-105 transition"
          >
            View My Work
          </motion.a>
          <motion.a
            href="/RESUME mar25.pdf"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="jura inline-block px-5 py-3 text-yellow-400 bg-gray-900 border-2 font-bold rounded-lg shadow-lg hover:scale-105 transition"
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
