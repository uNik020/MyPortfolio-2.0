import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  { text: "Welcome", font: "bruno-ace-sc", style: { fontFamily: "Bruno Ace SC", fontWeight: 400 } },
  { text: "नमस्ते", font: "yatra", style: { fontFamily: "Yatra One" } },
  { text: "Hola", font: "font-[Dancing+Script]", style: { fontFamily: "Dancing Script" } },
  { text: "こんにちは", font: "rampart", style: { fontFamily: "Rampart One" } },
  { text: "Bonjour", font: "font-[Parisienne]", style: { fontFamily: "Parisienne" } },
  { text: "Hello", font: "font-[Audiowide]", style: { fontFamily: "Audiowide" } },
];

const Loader = ({ isLoading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed inset-0 bg-black flex items-center justify-center z-50 px-4"
        >
          <div className="relative w-full flex items-center justify-center">
            {greetings.map((greeting, index) =>
              currentIndex === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.1 }}
                  className={`absolute antialiased text-white font-extrabold ${greeting.font} text-6xl md:text-7xl lg:text-9xl`}
                  style={greeting.style}
                >
                  {greeting.text}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
