import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "SDE Intern",
      description: "Bluestock Fintech - Dec 2024 - Jan 2025",
      image: "https://i.imgur.com/JS9Dyzo.jpeg",
      link: "https://imgur.com/a/Z4rA123",
    },
    {
      id: 2,
      title: "Full Stack Java Development",
      description: "Edubridge Pvt. Ltd. - May 2024 - Sept 2024",
      image: "https://i.imgur.com/RTfPe9a.jpeg",
      link: "https://imgur.com/a/full-stack-java-development-certificate-HSvfkLC",
    },
    {
      id: 3,
      title: "Web Development Basic to Advance",
      description: "Coursera - Dec 2022 - Jan 2023",
      image: "https://i.imgur.com/fnrFBMo.jpeg",
      link: "https://imgur.com/a/coursera-certificate-zzRSuc5",
    },
  ];

  return (
    <section className="w-screen py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl orbitron font-extrabold text-center text-gray-900 dark:text-white"
        >
          Certifications
        </motion.h2>

        {/* Certifications Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay: cert.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform cursor-pointer"
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-lg w-full h-48 object-cover"
                />
                <h3 className="font-bold text-lg mt-4 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                <p className="mt-4 text-purple-500 font-semibold">
                  View Certificate →
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
