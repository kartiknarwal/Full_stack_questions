// src/pages/CategoryQuestions.jsx
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";

const CategoryQuestions = () => {
  const { categoryName } = useParams();
  const sectionRef = useRef(null);

  const filtered = questions.filter(
    (q) => q.category.toLowerCase() === categoryName.toLowerCase()
  );

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <div ref={sectionRef} style={{ padding: "2rem" }}>
      <h1
        style={{
          color: "#990011",
          marginBottom: "2rem",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        {categoryName} Questions
      </h1>
      {filtered.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((q, i) => (
            <QuestionCard key={i} question={q} index={i} />
          ))}
        </div>
      ) : (
        <p style={{ color: "#990011" }}>No questions found for this category.</p>
      )}
    </div>
  );
};

export default CategoryQuestions;
