import React from "react";
import { motion } from "framer-motion";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";

const Hero = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center px-6 sm:px-12 md:flex-row md:justify-start md:px-16 lg:px-24">
      {/* Animated Text */}
      <div className="text-white z-10 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl orbitron sm:text-4xl md:text-5xl lg:text-6xl font-extrabold flex flex-wrap justify-center md:justify-start"
        >
          Hi, I'm A{" "}
          <span className="text-yellow-400 inline-flex items-baseline ml-2">
            <RotatingText
              texts={[" Software ", " Frontend ", " Backend ", " Fullstack ", " Database "]}
              mainClassName="overflow-hidden py-1 sm:py-1.5 md:py-2 rounded-lg inline-block"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-1.5 md:pb-2"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />{" "}
            Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base jura sm:text-lg md:text-xl mt-4 font-thin max-w-lg mx-auto md:mx-0"
        >
          I build amazing web experiences with creativity & performance.
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="#projects"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 jura inline-block px-5 mx-0.5 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg hover:scale-105 transition"
        >
          View My Work
        </motion.a>
        <motion.a
          href="#projects"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 jura inline-block mx-0.5 px-5 py-3 text-yellow-400 bg-gray-900 border-2 font-bold rounded-lg shadow-lg hover:scale-105 transition"
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
