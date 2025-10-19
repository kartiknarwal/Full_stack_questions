import React, { useEffect, useRef } from "react";
import QuestionCard from "../components/QuestionCard";
import questions from "../data/questions"; // Replace with saved questions if you have a state
import { gsap } from "gsap";

const Saved = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Slide in saved cards
    gsap.from(containerRef.current.children, {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <div>
      <h1 style={{ color: "#990011", marginBottom: "1rem" }}>Saved Questions</h1>
      <div ref={containerRef}>
        {questions.slice(0, 5).map((q, idx) => ( // Example: first 5 as saved
          <QuestionCard key={idx} index={idx} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
};

export default Saved;
