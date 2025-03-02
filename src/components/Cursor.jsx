import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = ({ hovered }) => {
  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth transition for cursor movement
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
  className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full z-[100] pointer-events-none"
  style={{
    translateX: smoothX,
    translateY: smoothY,
    scale: hovered ? 3 : 1,
    backgroundColor: hovered ? "#000" : "#fff",
    mixBlendMode: "difference", // Ensures visibility over all elements
    transition: "transform ease-in, background-color",
    pointerEvents: "none", // Prevents interference with clickable elements
  }}
/>


  );
};

export default Cursor;
