import React from "react";
import InfiniteMenu from "../blocks/Components/InfiniteMenu/InfiniteMenu.jsx";

const Projects = () => {
  const items = [
    {
      image: "https://i.imgur.com/Dx011sG.png",
      link: "https://github.com/uNik020/EstateEase",
      title: "Estate-Ease",
      description: "Real estate property management website",
    },
    {
      image: "https://i.imgur.com/dui3Nu2.jpeg",
      link: "https://github.com/uNik020/MyPortfolio-2.0",
      title: "My Portfolio",
      description: "Personal Portfolio website",
    },
    {
      image: "https://i.imgur.com/uTVVKkR.png",
      link: "https://stocker-simple-portfolio-tracker.netlify.app/",
      title: "Stocker",
      description: "The stock portfolio tracker website.",
    },
  ];

  return (
    <>
      <div className="relative flex flex-col items-center">
        <h2 className="absolute z-10 top-4 left-1/2 transform -translate-x-1/2 text-white hover:text-amber-300 orbitron text-3xl sm:text-4xl">
          My Projects
        </h2>
        <div className="h-screen w-full flex justify-center items-center">
          <InfiniteMenu 
          items={items}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
