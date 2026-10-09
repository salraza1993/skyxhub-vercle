"use client";

import { useEffect } from "react";

// Fade-up on scroll. Classes are only added after hydration, so the static
// HTML (and visitors without JS) always shows content fully visible.
export default function useInView(ref) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    // Already on screen at mount (hero, or a section reached via #hash): leave it as is
    // rather than hiding it after first paint.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    node.classList.add("skai-anim");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("skai-in-view");
          observer.disconnect();
        }
      },
      // threshold 0 + bottom margin, so elements taller than the viewport still reveal.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
}
