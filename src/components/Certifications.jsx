import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
  
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%", // Adjusted for better visibility
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  

  return (
    <section className="w-screen min-h-screen py-16 bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl orbitron font-extrabold text-center text-gray-900 dark:text-white"
        >
          Certifications
        </motion.h2>

        {/* Certifications Grid */}
        <div
          ref={containerRef}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform cursor-pointer"
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-lg w-full h-40 sm:h-48 object-cover"
                />
                <h3 className="font-bold text-lg mt-4 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                <p className="mt-4 text-purple-500 font-semibold">
                  View Certificate →
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
