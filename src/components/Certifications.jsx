import React from "react";
import CircularGallery from "../blocks/Components/CircularGallery/CircularGallery.jsx";

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "SDE Intern",
      description: "Bluestock Fintech - Dec 2024- Jan 2025",
      image: "https://i.imgur.com/JS9Dyzo.jpeg",
      link: "https://imgur.com/a/Z4rA123",
    },
    {
      id: 2,
      title: "Full stack Java development",
      description: "Edubridge Pvt. Ltd. - May 2024 - Sept 2024",
      image: "https://i.imgur.com/RTfPe9a.jpeg",
      link: "https://imgur.com/a/full-stack-java-development-certificate-HSvfkLC",
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 px-4 py-12">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl orbitron font-extrabold text-center text-white mb-10">
        Certifications
      </h2>

      {/* Circular Gallery for Certificates */}
      <div className="relative w-full h-screen bg-cover flex justify-center">
        <CircularGallery
          bend={0} // Adjusted curvature for better alignment
          textColor="#ffffff"
          borderRadius={0.1} // Slight rounding for a clean look
          itemWidth={900} // Adjusting card width
          itemHeight={600} // Adjusting card height for readability
          spacing={50} // Giving proper space between items
          items={certificates.map((cert) => ({
            image: cert.image,
            title: cert.title,
            description: cert.description,
            link: cert.link,
          }))}
        />
      </div>
    </div>
  );
};

export default Certifications;
