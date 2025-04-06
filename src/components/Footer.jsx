import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col justify-between items-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      ></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center py-12 px-4 w-full text-center z-10">
        
        {/* Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 text-lg font-medium mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#FFD230" }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer jura"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Icons & Download Button */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {[
            { icon: FaEnvelope, link: "mailto:9to5withnikhil@gmail.com" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/nikhil-s-a13543228/" },
            { icon: FaGithub, link: "https://github.com/uNik020" },
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10, color: "#FFD230" }}
              transition={{ duration: 0.3 }}
              className="text-3xl"
            >
              <Icon />
            </motion.a>
          ))}

          {/* Download Button with Tooltip */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Tooltip */}
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute mb-2 left-1/2 -translate-x-1/2 text-white text-sm font-semibold px-3 py-1 rounded shadow z-40"
              >
                Download
              </motion.div>
            )}

            <motion.a
              href="/RESUME mar25.pdf"
              download
              whileHover={{
                scale: 1.1,
                backgroundColor: "#FFD230",
                color: "#000",
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 px-3 py-2 text-lg bg-black text-white font-medium border-2 border-white rounded-lg"
            >
              <FaDownload />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Name Display */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[10vw] font-extrabold text-center orbitron z-10 pb-8"
      >
        NIKHIL SHEKHAR
      </motion.h1>
    </div>
  );
};

export default Footer;
