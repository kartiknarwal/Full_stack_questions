// src/pages/Search.jsx
import React, { useState, useEffect, useRef } from "react";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Search() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      delay: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handleFocus = () => {
    gsap.to(inputRef.current, {
      scale: 1.05,
      boxShadow: "0 0 25px #99001155",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleBlur = () => {
    gsap.to(inputRef.current, {
      scale: 1,
      boxShadow: "none",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  const filteredQuestions = questions.filter((q) => {
    if (!q || !q.title) return false;
    return q.title.toLowerCase().includes(query.toLowerCase());
  });

  // Animate question cards when search results change
  useEffect(() => {
    gsap.from(".question-card", {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [filteredQuestions]);

  return (
    <div className="search-page min-h-screen bg-[#FCF6F5] text-[#990011] p-10 overflow-hidden">
      <div className="max-w-3xl mx-auto" ref={containerRef}>
        <h1 ref={titleRef} className="text-5xl font-extrabold mb-8 text-center">
          🔍 Search Vault
        </h1>

        <div className="relative mb-10 flex justify-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search questions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full sm:w-[80%] p-4 rounded-2xl border-2 border-[#990011] outline-none 
                       focus:ring-4 focus:ring-[#990011]/30 text-lg shadow-lg transition-all"
          />
        </div>

        <div className="grid gap-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q, i) => (
              <QuestionCard key={i} question={q} index={i} className="question-card" />
            ))
          ) : (
            <p className="text-center text-[#990011]/60 text-xl font-medium">
              No questions found 😔
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
