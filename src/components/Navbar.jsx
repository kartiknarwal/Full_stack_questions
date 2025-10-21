import React, { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const showBg = () => {
      if (window.scrollY > 50) nav.classList.add("bg-white/10", "backdrop-blur-lg");
      else nav.classList.remove("bg-white/10", "backdrop-blur-lg");
    };
    window.addEventListener("scroll", showBg);
    return () => window.removeEventListener("scroll", showBg);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 text-white transition-all duration-300"
    >
      <h2 className="font-bold text-xl tracking-wide cursor-pointer" onClick={() => scrollTo("hero")}>
        ⚡ FullStack Mastery
      </h2>
      <div className="space-x-6 hidden md:flex">
        {["questions-root", "projects-root"].map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="hover:text-cyan-400 transition"
          >
            {id === "questions-root" ? "Questions" : "Projects"}
          </button>
        ))}
      </div>
    </nav>
  );
}
