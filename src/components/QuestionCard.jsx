import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuestionCard({ q, a }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  // Entrance animation
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 80, scale: 0.95, rotateX: 10 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
  }, []);

  // Toggle explanation animation
  useEffect(() => {
    const content = ref.current.querySelector(".answer");
    if (open) {
      gsap.to(content, {
        maxHeight: 600,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(content, {
        maxHeight: 0,
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [open]);

  // Save animation
  useEffect(() => {
    if (saved) {
      gsap.fromTo(
        ref.current.querySelector(".save-btn"),
        { scale: 0.8, rotate: -10 },
        { scale: 1, rotate: 0, duration: 0.3, ease: "back.out(2)" }
      );
    }
  }, [saved]);

  return (
    <div
      ref={ref}
      className="relative p-6 bg-white/5 backdrop-blur rounded-2xl border border-gray-700 
      transition-transform hover:scale-[1.02] hover:border-cyan-400/50 overflow-hidden"
      onMouseEnter={() =>
        gsap.to(ref.current, { boxShadow: "0px 0px 30px rgba(34,211,238,0.3)", duration: 0.4 })
      }
      onMouseLeave={() =>
        gsap.to(ref.current, { boxShadow: "0px 0px 0px rgba(0,0,0,0)", duration: 0.3 })
      }
    >
      <h3 className="text-xl font-semibold text-cyan-300 leading-snug">{q}</h3>

      <div className="flex items-center gap-3 mt-3">
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-sm text-gray-300 hover:text-cyan-400 transition"
        >
          {open ? "Hide" : "Show"} Explanation
        </button>
        <button
          onClick={() => setSaved((s) => !s)}
          className={`save-btn text-xs px-3 py-1 rounded-full font-medium tracking-wide ${
            saved ? "bg-cyan-400 text-black" : "bg-gray-800 text-gray-300"
          }`}
        >
          {saved ? "★ Saved" : "☆ Save"}
        </button>
      </div>

      {/* Answer Section */}
      <div
        className="answer mt-4 overflow-hidden"
        style={{ maxHeight: 0, opacity: 0 }}
      >
        <div
          className="text-[16px] text-gray-100 leading-relaxed tracking-wide 
          bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-xl p-4 border border-slate-700/50 
          font-inter prose prose-invert max-w-none"
        >
          <p className="whitespace-pre-line">{a}</p>
        </div>
      </div>
    </div>
  );
}
