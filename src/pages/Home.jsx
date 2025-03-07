import React from "react";
import Hero from "../components/Hero";
import SplineModel from "../components/SplineModel";
import Ballpit from "../blocks/Backgrounds/Ballpit/Ballpit";

const Home = () => {
  return (
    <div id="home" className="h-screen flex">
      {/* Background Animation */}
      <div
        className="justify-between text-white bg-gray-900"
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >
        {/* <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={80}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  /> */}

<Ballpit
    count={50}
    gravity={0.5}
    friction={0.9}
    wallBounce={0.95}
    followCursor={false}
    colors={["#fff", "#fdc700", "#fdc", "#fdc400"]} // Array of valid colors
  ambientColor={16777215}
  />

      </div>
      <Hero></Hero>
    </div>
  );
};

export default Home;
