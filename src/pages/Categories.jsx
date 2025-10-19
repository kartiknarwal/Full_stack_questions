// src/pages/Categories.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

const categories = [
  { name: "Frontend", icon: "🧩" },
  { name: "Backend", icon: "💬" },
  { name: "Database", icon: "⚙️" },
  { name: "Tools / Auth", icon: "🕸️" },
  { name: "System Design", icon: "🏗️" },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1
        style={{
          color: "#990011",
          marginBottom: "1rem",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Categories
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {categories.map((cat, i) => (
          <div key={i} onClick={() => handleClick(cat.name)}>
            <CategoryCard icon={cat.icon} name={cat.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
