import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* Parallax Effect */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/footer-bg.jpg')" }}></div>
      
      <div className="relative flex flex-col items-center py-20 px-6 text-center">
        {/* Name Display */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-[9vw] orbitron font-extrabold tracking-wide mb-6"
        >
          NIKHIL SHEKHAR
        </motion.h1>

        {/* Navigation Links */}
        <motion.div 
          className="flex gap-8 text-lg font-medium mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#00ADB5" }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Icons & CV Download */}
        <motion.div className="flex gap-6 mt-4">
          {[
            { icon: FaEnvelope, link: "mailto:example@gmail.com" },
            { icon: FaLinkedin, link: "https://linkedin.com/in/example" },
            { icon: FaGithub, link: "https://github.com/example" }
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10, color: "#00ADB5" }}
              transition={{ duration: 0.3 }}
              className="text-3xl"
            >
              <Icon />
            </motion.a>
          ))}

          {/* Download CV Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.1, backgroundColor: "#00ADB5" }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-6 py-2 text-lg font-medium border-2 border-white rounded-lg hover:bg-white hover:text-black"
          >
            <FaDownload /> Download CV
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
