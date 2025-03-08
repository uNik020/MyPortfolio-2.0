import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Education from "../components/Education";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard.jsx";

const About = () => {
  const scrollContainer = useRef(null);
  const sectionsWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".about-section");

    // Get actual width of all sections combined
    let totalWidth = sectionsWrapper.current.scrollWidth;
    let viewportWidth = window.innerWidth;

    gsap.to(sectionsWrapper.current, {
      x: -(totalWidth - viewportWidth), // Move precisely to the last section
      ease: "power1.out",
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top top",
        end: "+=" + (totalWidth - viewportWidth), // Fixes empty space issue
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={scrollContainer}
      id="about"
      className="relative w-[866vh] h-[100vh] bg-gray-900 overflow-hidden"
    >
      <div ref={sectionsWrapper} className="flex h-full">
        {/* Section 1 */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
            ABOUT ME
          </h2>
          <div className="flex flex-row ">
            <div className="p-4 m-2 backdrop-brightness-80 h-[80vh] rounded-4xl max-w-2/3">
              <h2 className="text-white hover:text-amber-300 orbitron text-4xl text-center ">About Me</h2>
              <div className="flex flex-row">
                <TiltedCard
                  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                  altText="Kendrick Lamar - GNX Album Cover"
                  captionText="NIKHIL "
                  containerHeight="350px"
                  containerWidth="400px"
                  imageHeight="300px"
                  imageWidth="250px"
                  rotateAmplitude={12}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={<p className="marker text-2xl p-4">Nikhil</p>}
                />
                <p className="text-lg p-4 mt-4 text-gray-300">
                I’m Nikhil Shekhar, a passionate Software Developer with a strong foundation in web development, Java, and full-stack technologies. I specialize in building responsive, user-friendly applications using React, Angular, Spring Boot, and MySQL. My projects, like EstateEase (real estate platform) and Stocker (stock portfolio tracker), showcase my expertise in frontend animations, APIs, and scalable solutions. With a keen eye for detail and a drive for innovation, I love solving complex problems and creating seamless digital experiences. I'm always eager to learn and collaborate on impactful projects. Let’s connect and build something amazing!
                </p>
              </div>
            </div>
            <Education />
          </div>
        </div>
        {/* Section 2 */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
            EXPERIENCE
          </h2>
          <div>
            <p className="text-lg text-center mt-4 text-gray-300 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              eleifend ligula. Nullam auctor, purus eget malesuada commodo,
              velit purus dictum diam, at finibus velit enim vel nunc.
            </p>
          </div>
        </div>
        {/* Section 3 */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
            CERTIFICATION
          </h2>
          <div>
            <p className="text-lg text-center mt-4 text-gray-300 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              eleifend ligula. Nullam auctor, purus eget malesuada commodo,
              velit purus dictum diam, at finibus velit enim vel nunc.
            </p>
          </div>
        </div>
        {/* Section 4 */}
        <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
            HOBBIES
          </h2>
          <div>
            <p className="text-lg text-center mt-4 text-gray-300 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              eleifend ligula. Nullam auctor, purus eget malesuada commodo,
              velit purus dictum diam, at finibus velit enim vel nunc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
