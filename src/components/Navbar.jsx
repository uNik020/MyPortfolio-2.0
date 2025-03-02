import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icon package
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard.jsx";
import Cursor from "./Cursor.jsx";

const DURATION = 0.2;
const STAGGER = 0.025;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false); // Track hover state

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Hiding default cursor in Navbar
  useEffect(() => {
    if (isOpen) {
      document.body.style.cursor = "none"; // Hide default cursor
    } else {
      document.body.style.cursor = "default"; // Restore default cursor
    }

    return () => {
      document.body.style.cursor = "default"; // Ensure cursor resets on unmount
    };
  }, [isOpen]);

  return (
    <>
      {/* Render Cursor only when isOpen is true */}
      {isOpen && <Cursor hovered={cursorHovered} className="z-[100]" />}

      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-40">
        {/* Logo */}
        <div className="ml-4 w-10 h-10 z-40">
          <img src="\main logo.png" alt="logo" />
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mr-4 z-40 relative text-gray-50"
        >
          {isOpen ? <X className="text-black" size={30} /> : <Menu size={30} />}
        </button>

        {/* Animated Menu */}
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={
            isOpen ? { y: "0%", opacity: 1 } : { y: "-100%", opacity: 0 }
          }
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
                  <p className="text-xl cursive text-white m-3 font-bold">
                    Nikhil
                  </p>
                }
              />
            </div>

            {/* Right Section (Navigation Links with Flip Animation) */}
            <div className="flex flex-col mr-32 items-start justify-center gap-4">
              {navLinks.map((link, index) => (
                <FlipLink
                  key={index}
                  href={link.href}
                  setCursorHovered={setCursorHovered} // Pass cursor hover state updater
                >
                  {link.name}
                </FlipLink>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

/** FlipLink component with cursor scaling effect */
const FlipLink = ({ children, href, setCursorHovered }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-6xl font-bold bruno-ace-sc"
      onMouseEnter={() => setCursorHovered(true)}
      onMouseLeave={() => setCursorHovered(false)}
      style={{
        cursor: "none", // Hide default cursor
        position: "relative",
        zIndex: 10, // Keeps link interactive but below the cursor
      }}
    >
      <div>
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default Navbar;
