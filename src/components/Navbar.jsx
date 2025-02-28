import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icon package
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50">
      {/* Logo */}
      <div className="ml-4 w-10 h-10 z-40">
        <img src="\main logo.png" alt="logo" />
      </div>

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mr-4 z-50 relative text-gray-50"
      >
        {isOpen ? <X className="text-black" size={30} /> : <Menu size={30} />}
      </button>

      {/* Animated Menu */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={isOpen ? { y: "0%", opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute top-0 left-0 w-full h-96 bg-[#e5dce7] flex flex-col items-center justify-center gap-6 text-2xl ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div className="flex justify-between items-center w-full px-10 py-6">
          {/* Left Section */}
          <div className="flex flex-col items-start space-y-6">
            
            <TiltedCard
              imageSrc="https://i.imgur.com/G38fCks.jpeg"
              altText="Nikhil Shekhar -N2S"
              captionText="Nikhil Shekhar -N2S"
              containerHeight="300px"
              containerWidth="280px"
              imageHeight="250px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-xl cursive text-white m-3 font-bold">Nikhil</p>
              }
            />
          </div>

          {/* Right Section (Navigation Links) */}
          <div className="flex flex-col mr-32 items-start justify-center gap-4 ">
            <a
              href="#home"
              className="text-6xl bruno-ace-sc font-bold cursor-pointer hover:text-gray-400 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-6xl bruno-ace-sc font-bold cursor-pointer hover:text-gray-400 transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-6xl bruno-ace-sc font-bold cursor-pointer hover:text-gray-400 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-6xl bruno-ace-sc font-bold cursor-pointer hover:text-gray-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
