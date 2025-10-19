import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#FCF6F5" : "#990011";
    document.body.style.color = darkMode ? "#990011" : "#FCF6F5";
  };

  return (
    <div ref={containerRef}>
      <h1 style={{ color: "#990011", marginBottom: "1rem" }}>Settings</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <label style={{ fontWeight: "bold" }}>Dark Mode</label>
        <button
          onClick={toggleTheme}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "none",
            background: "#990011",
            color: "#FCF6F5",
            cursor: "pointer",
          }}
          onMouseEnter={e => gsap.to(e.target, { scale: 1.1, duration: 0.2 })}
          onMouseLeave={e => gsap.to(e.target, { scale: 1, duration: 0.2 })}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <p>More settings can be added here with smooth GSAP animations!</p>
    </div>
  );
};

export default Settings;
