"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — softly fades up any element marked `data-reveal` the first
 * time it scrolls into view. Stagger with an inline `--reveal-delay`.
 *
 * Content stays visible without JS: elements are only hidden once this has
 * mounted and flagged <html> with `reveal-ready` (see globals.css). A
 * MutationObserver picks up elements added later (tab panels, filters,
 * client-side navigation to case studies).
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const scan = () =>
      document
        .querySelectorAll("[data-reveal]:not([data-revealed])")
        .forEach((el) => io.observe(el));

    scan();
    root.classList.add("reveal-ready");

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
