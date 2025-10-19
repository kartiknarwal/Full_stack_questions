// src/components/CategoryCard.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CategoryCard = ({ icon, name }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });

    const el = cardRef.current;
    el.addEventListener("mouseenter", () => {
      gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        background: "#990011",
        color: "#FCF6F5",
        padding: "2rem",
        borderRadius: "1.2rem",
        cursor: "pointer",
        textAlign: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{icon}</div>
      <h2 style={{ fontWeight: "bold", fontSize: "1.3rem" }}>{name}</h2>
    </div>
  );
};

export default CategoryCard;
