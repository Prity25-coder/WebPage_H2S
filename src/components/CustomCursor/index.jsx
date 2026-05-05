import { useEffect, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 400, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      // Check if hovering over interactive elements
      const target = e.target;
      const hoverEl = target.closest('[data-hover="image"]');
      
      if (hoverEl) {
        setIsHovering(true);
        const text = hoverEl.getAttribute('data-cursor-text');
        setCursorText(text || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-purple-500 pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center overflow-hidden"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 3 : 1,
          backgroundColor: isHovering ? "rgba(168, 85, 247, 0.4)" : "transparent",
          borderColor: isHovering ? "transparent" : "#a855f7"
        }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="text-[4px] font-black text-white tracking-widest uppercase text-center"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Outer glow that follows the cursor with some lag */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorX.get() - 112,
          y: cursorY.get() - 112,
        }}
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
          opacity: isHovering ? 1 : 0.5
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
