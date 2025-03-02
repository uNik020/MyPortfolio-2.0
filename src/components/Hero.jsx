import React from "react";

import { motion } from "framer-motion";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Particles from "../blocks/Backgrounds/Particles/Particles";

const Hero = () => {
  return (
    <>
      <section className="w-1/2 h-screen ml-14 flex items-center justify-center">
        {/* Animated Text */}

        <div className="text-white z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl orbitron md:text-3xl font-extrabold flex items-center"
          >
            Hi, I'm A {" "}
            <span className="text-yellow-400 inline-flex items-baseline">
              <RotatingText
                texts={[
                  " Software ",
                  " Frontend ",
                  " Backend ",
                  " Fullstack ",
                  " Database ",
                ]}
                mainClassName="overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg inline-block"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
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
            className="text-lg md:text-xl mt-4 font-thin"
          >
            I build amazing web experiences with creativity & performance.
          </motion.p>

          {/* Call to Action */}
          <motion.a
            href="#projects"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg hover:scale-105 transition"
          >
            View My Work
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Hero;
