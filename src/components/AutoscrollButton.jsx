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
        window.scrollBy({ top: direction * 40, behavior: "smooth" });
      }, 100);
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
      className="fixed z-50 bottom-10 right-10 transition flex items-center justify-center"
      style={{ width: "80px", height: "80px" }} // Adjust size explicitly
    >
      <CircularText
        text={atBottom ? "Double click to go back" : "Double Click to Scroll Down"}
        onHover="goBonkers"
        spinDuration={20}
        className="text-sm"
        style={{ width: "70px", height: "70px", fontSize: "10px" }} // Control the size here
      />
    </button>
  );
};

export default AutoScrollButton;
