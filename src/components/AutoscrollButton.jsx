import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CircularText from "../blocks/TextAnimations/CircularText/CircularText";

gsap.registerPlugin(ScrollToPlugin);

const AutoScrollButton = () => {
  const [scrolling, setScrolling] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const scrollTween = useRef(null);

  const startScrolling = (direction) => {
    if (!scrolling) {
      setScrolling(true);

      scrollTween.current = gsap.to(window, {
        scrollTo: {
          y: direction === 1 ? document.body.scrollHeight : 0,
          autoKill: false,
        },
        duration: 10,
        ease: "power1.inOut",
        onComplete: () => setScrolling(false),
      });
    }
  };

  const stopScrolling = () => {
    if (scrolling && scrollTween.current) {
      scrollTween.current.kill();
      setScrolling(false);
    }
  };

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
      onClick={stopScrolling}
      onDoubleClick={() => (atBottom ? startScrolling(-1) : startScrolling(1))}
      className="fixed z-40 bottom-1 right-1 transition flex items-center justify-center"
      style={{ width: "80px", height: "80px" }}
    >
      <CircularText
        text={atBottom ? "| Double click to go back " : " Double Click to auto Scroll ⬇"}
        onHover="goBonkers"
        spinDuration={20}
        className="text-sm"
        style={{ width: "70px", height: "70px", fontSize: "20px" }}
      />
    </button>
  );
};

export default AutoScrollButton;
