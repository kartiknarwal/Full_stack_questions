import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import QuestionCard from "./components/QuestionCard";
import ProjectSection from "./components/ProjectSection";
import ScrollProgress from "./components/ScrollProgress";
import { QUESTIONS } from "./data/fullstackQuestions";

export default function App() {
  const [filter, setFilter] = useState("All");

  // Get unique categories dynamically from QUESTIONS
  const uniqueCategories = Array.from(new Set(QUESTIONS.map((q) => q.category)));

  // Filter questions based on selected category
  const filtered = QUESTIONS.filter(
    (q) => filter === "All" || q.category === filter
  );

  return (
    <div className="bg-[#071024] text-white">
      <ScrollProgress />
      <Navbar />
      <Hero
        onExplore={() =>
          document.getElementById("questions-root")?.scrollIntoView({
            behavior: "smooth",
          })
        }
      />

      <main id="questions-root" className="px-6 max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          💡 Full Stack Questions
        </h2>

        {/* FilterBar now uses dynamic categories */}
        <FilterBar
          categories={uniqueCategories}
          activeCategory={filter}
          setActiveCategory={setFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <QuestionCard key={item.id} q={`Q${item.id}. ${item.q}`} a={item.a} />
          ))}
        </div>
      </main>

      {/* ProjectSection doesn't rely on category anymore */}
      <ProjectSection />

      <footer className="py-8 text-center text-gray-400">
        Made with ❤️ by <span className="text-cyan-400">Full Stack Devs</span>
      </footer>
    </div>
  );
}
