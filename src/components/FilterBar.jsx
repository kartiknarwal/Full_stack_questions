// FilterBar.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FilterBar = ({ categories, activeCategory, setActiveCategory }) => {
  const barRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={barRef}
      className="sticky top-0 z-40 flex flex-wrap gap-3 justify-center items-center bg-slate-900/80 backdrop-blur-md p-4 border-b border-slate-700 shadow-lg"
    >
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
            ${
              activeCategory === cat
                ? "bg-indigo-500 text-white shadow-md scale-105"
                : "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
