import React from "react";
import Hero from "../components/Hero";
import SplineModel from "../components/SplineModel";
import Particles from "../blocks/Backgrounds/Particles/Particles";

const Home = () => {
  return (
    <div className="h-screen flex">
        {/* Background Animation */}
        <div className="justify-between bg-gradient-to-r from-purple-500 to-blue-500 text-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-500" style={{ width: '100%', height: '100%', position:'absolute' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={80}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
      <Hero></Hero>

    </div>
  );
};

export default Home;
