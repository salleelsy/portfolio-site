"use client";

import { useEffect, useState } from "react";

// Real brands (Figma 289:4391). Transparent PNG logos.
const LOGOS = [
  { src: "/brands/tangerine.png", alt: "Tangerine" },
  { src: "/brands/rbc.png", alt: "RBC Wealth Management" },
  { src: "/brands/ccg.png", alt: "CCG Hearts" },
  { src: "/brands/powerassets.png", alt: "Power Assets" },
  { src: "/brands/hkelectric.png", alt: "HK Electric" },
  { src: "/brands/kln.png", alt: "Kerry Logistics" },
];

/**
 * BrandsStrip — "Some of the projects I worked for..." logo marquee.
 * Logos scroll slowly and loop seamlessly (the track holds two copies and
 * translates -50%). A pause button stops/starts it; reduced-motion users get a
 * static strip by default.
 */
export function BrandsStrip() {
  const [paused, setPaused] = useState(false);

  // Respect prefers-reduced-motion: start paused for those users.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPaused(true);
  }, []);

  return (
    <section
      aria-labelledby="brands-heading"
      className="bg-paper"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-4">
          <h2
            id="brands-heading"
            className="text-[32px] font-extrabold text-ink sm:text-[40px]"
          >
            Some of the projects I worked for...
          </h2>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-paper text-cod-gray outline-none transition-colors hover:bg-body-bg focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          >
            <span className="sr-only">
              {paused ? "Play logo carousel" : "Pause logo carousel"}
            </span>
            {paused ? (
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden focusable="false">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden focusable="false">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            )}
          </button>
        </div>

        {/* Marquee viewport */}
        <div
          className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        >
          <ul
            className="flex w-max animate-marquee items-center"
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            {/* Two copies for a seamless loop; the second is decorative. */}
            {[0, 1].map((copy) => (
              <li key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                {LOGOS.map((logo) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={copy === 0 ? logo.alt : ""}
                    className="mx-8 h-[52px] w-auto object-contain sm:mx-12 lg:mx-14"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
