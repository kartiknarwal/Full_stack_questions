import React, { useEffect, useRef } from "react";
import QuestionCard from "../components/QuestionCard";
import questions from "../data/questions";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Staggered card animation on load
    gsap.from(containerRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    });

    // Scroll-triggered animations for fun parallax effect
    containerRef.current.querySelectorAll(".question-card").forEach((card, i) => {
      gsap.to(card, {
        y: -20,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef}>
      <h1 style={{ marginBottom: "1.5rem", color: "#990011" }}>All Questions</h1>
      {questions.map((q, idx) => (
        <div key={idx} className="question-card">
          <QuestionCard index={idx} question={q.question} answer={q.answer} />
        </div>
      ))}
    </div>
  );
};

export default Home;
