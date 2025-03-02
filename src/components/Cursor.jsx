import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = ({ hovered }) => {
  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth transition for cursor movement
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 40 });

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
        mixBlendMode: "difference",
        transition: "all 0.15s ease-out",
        border: hovered ? "12px solid rgba(255,255,255,255)" : "none", // Outline when scaled up
        boxShadow: hovered ? "0 0 10px rgba(255,255,255,0.3)" : "none", // Glowing effect
      }}
    />
  );
};

export default Cursor;
