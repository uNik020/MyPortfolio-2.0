import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity.jsx";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <section ref={ref} id="about" className="w-full py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold bruno-ace-sc text-center text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-center mt-4 text-gray-700 dark:text-gray-300"
          >
            I'm a passionate software developer & designer with expertise in
            front-end and back-end technologies.
          </motion.p>

          {/* Timeline Section */}
          <div className="mt-10 space-y-8">
            {[
              {
                year: "2025",
                title: "Started Software Development Journey",
                desc: "Began learning full-stack development.",
              },
              {
                year: "2026",
                title: "Worked on Freelance Projects",
                desc: "Built dynamic web applications for clients.",
              },
              {
                year: "2027",
                title: "Joined a Tech Company",
                desc: "Worked as a front-end engineer.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="w-1/3 text-xl font-semibold text-gray-900 dark:text-white">
                  {item.year}
                </div>
                <div className="w-2/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollVelocity
        texts={[
          <span className="text-xl text-black">
            OPEN TO WORK ⚠
          </span>,
          // <span className="text-xl text-zinc-800 share">
          //   Scroll Up & Down
          // </span>,
        ]}
        velocity={100}
        className="custom-scroll-text bg-amber-200 p-2.5 text-3xl"
        numCopies={40}
      />
    </>
  );
};

export default About;
