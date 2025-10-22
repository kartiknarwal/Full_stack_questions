import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScramble from "../hooks/useScramble";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onExplore }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const bgRef = useRef(null);

  // Scrambled text effect for heading
  useScramble(titleRef, "Master 50+ Full Stack & Project Questions ⚡");

  useEffect(() => {
    // 1️⃣ Entry fade + rise animation
    gsap.from([titleRef.current, textRef.current, btnRef.current], {
      y: 40,
      autoAlpha: 0,
      duration: 1.2,
      stagger: 0.25,
      ease: "power3.out",
    });

    // 2️⃣ Parallax depth on scroll
    gsap.to(titleRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        scrub: true,
      },
    });

    gsap.to(textRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        scrub: true,
      },
    });

    gsap.to(btnRef.current, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        scrub: true,
      },
    });

    // 3️⃣ Floating subtle motion (breathing effect)
    gsap.to(heroRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
    });

    // 4️⃣ Aurora-like gradient motion background
    const bgEl = bgRef.current;
    gsap.to(bgEl, {
      backgroundPosition: "200% 50%",
      duration: 15,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    // 5️⃣ Scroll-based glow on heading
    gsap.to(titleRef.current, {
      textShadow: "0px 0px 20px rgba(6,182,212,0.8)",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[linear-gradient(120deg,#0f172a,#1e293b,#334155,#06b6d4,#9333ea)] bg-[length:200%_200%] opacity-60"
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center py-24 px-4 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-extrabold text-center mb-6"
        ></h1>

        <p
          ref={textRef}
          className="text-gray-300 max-w-2xl mx-auto text-center mb-8"
        >
          Scroll to explore frontend, backend, database, deployment & project
          concepts.
        </p>

        <button
          ref={btnRef}
          onClick={onExplore}
          className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Explore Questions
        </button>
      </div>

      {/* Optional faint glow layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2),transparent_70%)] pointer-events-none"></div>
    </section>
  );
}
