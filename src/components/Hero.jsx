import React, { useRef } from "react";
import useScramble from "../hooks/useScramble";

export default function Hero({ onExplore }) {
  const titleRef = useRef(null);
  useScramble(titleRef, "Master 50+ Full Stack & Project Questions ⚡");

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-black text-white py-24"
    >
      <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold text-center mb-6"></h1>
      <p className="text-gray-300 max-w-2xl mx-auto text-center mb-8">
        Scroll to explore frontend, backend, database, deployment & project concepts.
      </p>
      <button
        onClick={onExplore}
        className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Explore Questions
      </button>
    </section>
  );
}
