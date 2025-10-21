import React from "react";
import QuestionCard from "./QuestionCard";
import { PROJECT_QUESTIONS } from "../data/fullstackQuestions";

export default function ProjectSection() {
  return (
    <section
      id="projects-root"
      className="min-h-screen bg-gradient-to-b from-[#0f172a] to-black py-16 text-white px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-10">🚀 Real-World Projects</h2>

      {/* Optional Tabs (cosmetic only) */}
      <div className="flex justify-center gap-4 mb-8">
        {["Frontend", "Backend", "Fullstack"].map((t) => (
          <button
            key={t}
            className="px-4 py-2 rounded-full bg-white/5 text-white cursor-not-allowed"
            title="Tabs are cosmetic in this view"
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECT_QUESTIONS.map((item) => (
          <QuestionCard
            key={item.id}
            q={`Project ${item.id}: ${item.q}`}
            a={item.a}
          />
        ))}
      </div>
    </section>
  );
}
