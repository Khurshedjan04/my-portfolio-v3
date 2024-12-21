"use client";
import { useEffect } from "react";
import {
  startBubbling,
  onMouseMove,
  onTouchMove,
  onWindowResize,
} from "../utility/bubble";
import moveCircle from "../utility/shadow.js";

const CursorEffects = () => {
  useEffect(() => {
    startBubbling();

    window.addEventListener("mousemove", moveCircle);

    return () => {
      window.removeEventListener("mousemove", moveCircle);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);
  return <div className="cursor
  pointer-events-none absolute w-[70rem] h-[70rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] rounded-full
  [background:_radial-gradient(circle,_rgba(29,_78,_216,_0.15)_0%,_transparent_80%)]
  "></div>;
};
export default CursorEffects;
