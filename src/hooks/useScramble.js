import { useEffect } from "react";

export default function useScramble(ref, text) {
  useEffect(() => {
    if (!ref.current) return;
    let iteration = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const target = ref.current;
    target.textContent = text;

    const scramble = () => {
      const interval = setInterval(() => {
        target.textContent = text
          .split("")
          .map((l, i) => (i < iteration ? text[i] : letters[Math.floor(Math.random() * 26)]))
          .join("");
        if (iteration >= text.length) clearInterval(interval);
        iteration += 0.5;
      }, 50);
    };
    scramble();
  }, [text]);
}
