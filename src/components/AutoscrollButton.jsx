import { useState, useEffect, useRef } from "react";
import CircularText from "../blocks/TextAnimations/CircularText/CircularText";

const AutoScrollButton = () => {
  const [scrolling, setScrolling] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const intervalRef = useRef(null);

  // Function to start scrolling (down or up)
  const startScrolling = (direction) => {
    if (!scrolling) {
      setScrolling(true);
      intervalRef.current = setInterval(() => {
        window.scrollBy({ top: direction * 40, behavior: "smooth" }); // Adjust speed (40px per step)
      }, 100); // Adjust speed (30ms interval)
    }
  };

  // Function to stop scrolling
  const stopScrolling = () => {
    setScrolling(false);
    clearInterval(intervalRef.current);
  };

  // Detect when the user reaches the bottom or top
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={stopScrolling} // Single click stops scrolling
      onDoubleClick={() => (atBottom ? startScrolling(-1) : startScrolling(1))} // Double click scrolls up/down
        className="fixed z-50 bottom-2 right-2 text-white transition"
      >
        <CircularText
  text={atBottom ? " Double click to go back " : " Double Click to Scroll Down "}
  onHover="goBonkers"
  spinDuration={20}
  className="relative w-1 h-1"
/>
    </button>
  );
};

export default AutoScrollButton;
