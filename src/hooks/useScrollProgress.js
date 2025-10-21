import { useEffect } from "react";

export default function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const update = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = `${scrolled}%`;
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
}
