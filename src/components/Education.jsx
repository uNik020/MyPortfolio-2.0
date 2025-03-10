import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2024",
    degree: "B.E. in Information Technology",
    institute: "Mumbai University",
    percentage: "7.98 CGPA",
  },
  {
    year: "2018-2021",
    degree: "Diploma in Computer Engineering",
    institute: "Government Polytechnic Mumbai",
    percentage: "80.07%",
  },
  {
    year: "2018",
    degree: "SSC",
    institute: "A. V. S. Vidyamandir, Virar",
    percentage: "90%",
  },
];

const Education = () => {
  return (
    <div className="w-full md:w-3/5 m-2 flex flex-col justify-center backdrop-brightness-80 h-auto md:h-[80vh] p-4 rounded-4xl">
      <h2 className="text-3xl md:text-4xl font-bold orbitron text-white hover:text-amber-300 text-center">
        Education
      </h2>
      <div className="mt-6 space-y-4 md:space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="group w-full max-h-auto md:max-h-[20vh] relative bg-gray-300 p-3 md:p-4 rounded-xl cursor-pointer overflow-hidden transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-sm md:text-md jura font-bold group-hover:text-blue-700 transition-all duration-300">
              {edu.degree}
            </h3>
            <p className="mt-1 jura text-xs md:text-sm">{edu.institute}</p>
            <motion.p
              className="text-xs md:text-sm jura font-bold mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              {edu.year} | {edu.percentage}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
