import React from 'react'
import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard'
import DecryptedText from '../blocks/TextAnimations/DecryptedText/DecryptedText'
import Education from './Education';

const AboutSection = () => {
  return (
    <div className="about-section w-screen flex justify-center items-center bg-gray-900 rounded-3xl p-8">
          <h2 className="text-9xl select-none text-center font-extrabold rampart fixed text-white opacity-5">
            ABOUT ME
          </h2>
          <div className="flex flex-row ">
            <div className="p-4 m-2 backdrop-brightness-80 h-[80vh] rounded-4xl max-w-2/3">
              <h2 className="text-white hover:text-amber-300 orbitron text-4xl text-center ">
                About Me
              </h2>
              <div className="flex flex-row">
                <TiltedCard
                  imageSrc="https://i.imgur.com/Sq9puHq.jpeg"
                  altText="Kendrick Lamar - GNX Album Cover"
                  captionText="Hover & move"
                  containerHeight="350px"
                  containerWidth="400px"
                  imageHeight="300px"
                  imageWidth="250px"
                  rotateAmplitude={12}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="marker text-2xl text-white p-4">Nikhil</p>
                  }
                />
                <p className="text-lg p-4 mt-4 jura text-gray-300">
                  <DecryptedText
                    text="I’m Nikhil Shekhar, a Software Developer skilled in Java,
                  React, Angular, Spring Boot, and MySQL. Passionate about
                  building scalable web applications, I enjoy solving complex
                  problems and creating seamless user experiences. I’m eager to
                  grow as a Full Stack Developer and work on innovative projects
                  that push my skills further. Let’s connect!"
                    speed={5}
                    characters="x@#4%&*^@"
                    className="revealed"
                    sequential="true"
                    encryptedClassName="encrypted"
                    revealDirection="start"
                  />
                </p>
              </div>
            </div>
            <Education />
          </div>
        </div>
  )
}

export default AboutSection