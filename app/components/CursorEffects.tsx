"use client";
import { useState, useEffect } from "react";
import {
  startBubbling,
  onTouchMove,
  onWindowResize,
} from "../utility/bubble";

const CursorEffects = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent) => {
    setMousePos({
      x: e.clientX, 
      y: e.clientY, 
    });
  };

  useEffect(() => {
    startBubbling();

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div
      className="cursor w-full h-full fixed top-0 left-0 pointer-events-none inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    >
    </div>
  );
};

export default CursorEffects;
