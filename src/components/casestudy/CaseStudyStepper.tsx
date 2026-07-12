"use client";

import { useEffect, useState } from "react";

export type StepperItem = {
  /** id of the <section> element this step tracks. */
  id: string;
  label: string;
};

/**
 * CaseStudyStepper — Uber Base "Progress steps / Vertical / Bullets"
 * (Figma 576:21186). A sticky reading-position rail for case-study pages:
 * black bullet + 2px connector per section, the section currently in view
 * gets the primary (black, semibold) label, the rest stay contentSecondary.
 *
 * Scroll tracking: the active step is the last section whose top has crossed
 * the upper third of the viewport — cheap, stable on tall sections, and it
 * always resolves exactly one active step.
 */
export function CaseStudyStepper({ items }: { items: StepperItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    function onScroll() {
      const threshold = window.innerHeight / 3;
      let current = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= threshold) current = item.id;
      }
      setActiveId(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  return (
    <nav aria-label="Sections on this page">
      <ol className="flex flex-col">
        {items.map((item, i) => {
          const active = item.id === activeId;
          return (
            <li key={item.id} className="flex h-16 items-stretch">
              {/* Artwork column: connector – bullet – connector */}
              <span aria-hidden className="flex w-6 flex-col items-center">
                <span className={["w-[2px] flex-1", i === 0 ? "bg-transparent" : "bg-ink"].join(" ")} />
                <span className="my-[2px] size-3 shrink-0 rounded-full bg-ink" />
                <span className={["w-[2px] flex-1", i === items.length - 1 ? "bg-transparent" : "bg-ink"].join(" ")} />
              </span>
              <a
                href={`#${item.id}`}
                aria-current={active ? "true" : undefined}
                className={[
                  "flex items-center pl-6 pr-4 text-[16px] leading-6 transition-colors",
                  active
                    ? "font-semibold text-ink"
                    : "font-normal text-content-secondary hover:text-ink",
                ].join(" ")}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
