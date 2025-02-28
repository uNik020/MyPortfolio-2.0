import React from "react";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Particles from "../blocks/Backgrounds/Particles/Particles";

const Hero = () => {
  return (
    <>
      
      <section className="w-full h-screen flex items-center justify-center">
        {/* Animated Text */}
       
        <div className="text-center text-white z-10 relative">
          
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold"
          >
            Hi, I'm <span className="text-yellow-400 marker">NIKHIL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl mt-4"
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
