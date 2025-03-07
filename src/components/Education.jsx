import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2023",
    degree: "B.Tech in Computer Science",
    institute: "XYZ University",
    percentage: "85%",
  },
  {
    year: "2019",
    degree: "Higher Secondary Education",
    institute: "ABC School",
    percentage: "92%",
  },
  {
    year: "2017",
    degree: "Secondary Education",
    institute: "ABC School",
    percentage: "95%",
  },
];

const Education = () => {
  return (
    <div className="w-3/5 flex flex-col justify-center px-10">
      <h2 className="text-4xl font-bold text-center">Education</h2>
      <div className="mt-6 space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-800 p-6 rounded-xl cursor-pointer overflow-hidden transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Background hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

            <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-all duration-300">
              {edu.degree}
            </h3>
            <p className="text-gray-400 mt-1">{edu.institute}</p>
            <motion.p
              className="text-lg font-semibold text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
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
