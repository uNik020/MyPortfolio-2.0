import React from "react";
import InfiniteMenu from "../blocks/Components/InfiniteMenu/InfiniteMenu.jsx";

const Projects = () => {
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];

  return (
    <>
      <div className="relative flex flex-col items-center">
        <h2 className="absolute z-10 top-4 left-1/2 transform -translate-x-1/2 text-white hover:text-amber-300 orbitron text-3xl sm:text-4xl">
          Projects
        </h2>
        <div className="h-screen w-full flex justify-center items-center">
          <InfiniteMenu items={items} />
        </div>
      </div>
    </>
  );
};

export default Projects;
