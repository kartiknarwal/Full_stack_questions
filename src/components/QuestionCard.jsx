// src/components/QuestionCard.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function QuestionCard({ question, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 40,
      delay: index * 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, [index]);

  if (!question || typeof question !== "object") return null;

  return (
    <div
      ref={cardRef}
      className="question-card p-6 bg-[#990011] text-[#FCF6F5] rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
    >
      <h2 className="text-2xl font-bold mb-2">{question.title}</h2>
      <p className="text-[#FCF6F5]/80 text-lg mb-4">{question.answer}</p>
      <span className="bg-[#FCF6F5] text-[#990011] text-sm px-3 py-1 rounded-full">
        {question.category}
      </span>
    </div>
  );
}
