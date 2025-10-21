import React from "react";
import useScrollProgress from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  useScrollProgress();
  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-400 z-50"
    ></div>
  );
}
