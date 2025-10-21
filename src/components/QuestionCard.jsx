import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuestionCard({ q, a }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="relative p-5 bg-white/5 backdrop-blur rounded-2xl border border-gray-700 transition-transform hover:scale-[1.02] overflow-hidden"
    >
      <h3 className="text-lg font-semibold text-cyan-300">{q}</h3>
      <div className="flex items-center gap-3 mt-2">
        <button onClick={() => setOpen((o) => !o)} className="text-sm text-gray-300 hover:underline">
          {open ? "Hide" : "Show"} Explanation
        </button>
        <button
          onClick={() => setSaved((s) => !s)}
          className={`text-xs px-2 py-1 rounded-full ${
            saved ? "bg-cyan-400 text-black" : "bg-gray-800 text-gray-300"
          }`}
        >
          {saved ? "★ Saved" : "☆ Save"}
        </button>
      </div>
      <div
        className={`mt-3 text-gray-200 text-sm transition-all ${
          open ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}
