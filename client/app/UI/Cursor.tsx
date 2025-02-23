"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        width: "550px",
        height: "550px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(11, 63, 50, 0.2), rgba(11, 63, 50, 0.05))",
        filter: "blur(10px)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        left: smoothX,
        top: smoothY,
      }}
    />
  );
};

export default Cursor;
