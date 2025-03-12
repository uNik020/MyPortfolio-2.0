import React from "react";
import Hero from "../components/Hero";
import Ballpit from "../blocks/Backgrounds/Ballpit/Ballpit";

const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.imgur.com/PM2BxlA.jpeg')" }} 
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-10">
        <Ballpit
          count={50}
          gravity={0.5}
          friction={0.9}
          wallBounce={0.95}
          followCursor={false}
          colors={["#fff", "#fdc700", "#fdc", "#fdc400"]}
          ambientColor={16777215}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex w-full h-full justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
