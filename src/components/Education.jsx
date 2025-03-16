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
    <div className="flex flex-col justify-center backdrop-brightness-80 h-[80vh] p-4 rounded-4xl">
      <h2 className="text-4xl font-bold orbitron text-white hover:text-amber-300 text-center">
        Education
      </h2>
      <div className="mt-6 space-y-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="group max-h-[18vh] relative bg-gray-300 p-4 rounded-xl cursor-pointer overflow-hidden transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.01 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Background hover effect */}
            <div className="absolute bg-cover inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-30 transition-all duration-200"></div>

            <h3 className="text-md jura font-bold group-hover:text-blue-700 transition-all duration-150">
              {edu.degree}
            </h3>
            <p className="mt-1 jura text-sm">{edu.institute}</p>
            <motion.p className="text-sm jura font-bold mt-2 opacity-0 group-hover:opacity-100 transition-all duration-200 md:opacity-100">
              {edu.year} | {edu.percentage}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
