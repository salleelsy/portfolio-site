import type { CSSProperties } from "react";

// Headline is exact from Figma (782:24554) — Poppins Medium 56 / -1.12px.
const HEADLINE = [
  "Hello, I’m Sallee Lee.",
  "I’m a product designer who designs clarity in complex systems.",
];

// Skeleton "browser window" cards scattered behind the headline (Figma
// 782:24365 — the "wall of modals" collage). Positions/sizes are the Figma
// coordinates inside a 1512×739 canvas; the canvas is centered and clipped by
// the section, so on wider/narrower viewports the wall bleeds off the edges.
type Win = { l: number; t: number; w: number; h: number; lines: number };
const WINDOWS: Win[] = [
  { l: 333, t: 23, w: 260, h: 160, lines: 3 },
  { l: 890, t: 74, w: 300, h: 180, lines: 3 },
  { l: 1346, t: 533, w: 300, h: 180, lines: 3 },
  { l: 647, t: -55, w: 220, h: 130, lines: 2 },
  { l: -59, t: 198, w: 280, h: 200, lines: 3 },
  { l: 1060, t: 144, w: 240, h: 150, lines: 4 },
  { l: -139, t: 363, w: 300, h: 170, lines: 3 },
  { l: 907, t: 406, w: 260, h: 160, lines: 3 },
  { l: 301, t: 617, w: 320, h: 190, lines: 3 },
  { l: 745, t: 602, w: 280, h: 170, lines: 3 },
  { l: 491, t: 540, w: 180, h: 110, lines: 2 },
  { l: 1248, t: 620, w: 180, h: 110, lines: 2 },
  { l: 86, t: -60, w: 200, h: 120, lines: 2 },
  { l: 50, t: 527, w: 200, h: 130, lines: 2 },
  { l: 912, t: 532, w: 220, h: 140, lines: 3 },
  { l: 1198, t: 271, w: 180, h: 120, lines: 3 },
];

const LINE_WIDTHS = [0.92, 0.68, 0.82, 0.6];

/** One skeleton window card: macOS traffic-lights + address pill, then body lines. */
function MockWindow({ w, h, lines }: Omit<Win, "l" | "t">) {
  return (
    <div
      style={{ width: w, height: h }}
      className="flex flex-col overflow-hidden rounded-[10px] border border-[rgba(0,0,0,0.09)] bg-paper p-px shadow-[0px_4px_20px_0px_rgba(0,0,0,0.07),0px_1px_4px_0px_rgba(0,0,0,0.04)]"
    >
      {/* Title bar */}
      <div className="flex w-full items-center gap-[5px] border-b border-[rgba(0,0,0,0.06)] bg-[#fafafa] px-[10px] pb-[9px] pt-[8px]">
        <span className="size-[8px] shrink-0 rounded-[4px] bg-[#c8c8c8]" />
        <span className="size-[8px] shrink-0 rounded-[4px] bg-[#c8c8c8]" />
        <span className="size-[8px] shrink-0 rounded-[4px] bg-[#c8c8c8]" />
        <span className="ml-[8px] h-[8px] w-[80px] max-w-[80px] rounded-[4px] bg-[rgba(0,0,0,0.06)]" />
      </div>
      {/* Body */}
      <div className="flex flex-1 flex-col gap-[7px] p-[10px]">
        {Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            style={{ width: `${Math.round(LINE_WIDTHS[i % LINE_WIDTHS.length] * 100)}%` }}
            className="h-[8px] rounded-[4px] bg-[#f4f4f4]"
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Hero — landing hero (Figma 782:24363). A hatched light-gray field with a
 * scattered "wall" of skeleton browser windows behind a two-line headline, and
 * the folder nav pinned top-right. The window wall + cursor are decorative.
 */
export function Hero() {
  return (
    <section
      aria-label="Intro"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#f6f6f4",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.035) 0, rgba(0,0,0,0.035) 1px, transparent 1px, transparent 8px)",
      }}
    >
      {/* Decorative window wall — a fixed 1512-wide canvas, centered and clipped. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[739px] w-[1512px] -translate-x-1/2"
      >
        {WINDOWS.map((win, i) => (
          <div
            key={i}
            className="hero-float absolute"
            style={
              {
                left: win.l,
                top: win.t,
                // Staggered fade-in on load, then a naturally-varied drift.
                "--in-delay": `${(i % 8) * 0.09}s`,
                "--float-dur": `${3.8 + (i % 4) * 0.5}s`,
                "--float-delay": `${(i % 5) * 0.18}s`,
                "--float-amp": `${6 + (i % 3) * 3}px`,
              } as CSSProperties
            }
          >
            <MockWindow w={win.w} h={win.h} lines={win.lines} />
          </div>
        ))}
        {/* Cursor (Figma 782:24465) */}
        <svg
          className="absolute drop-shadow-[0px_1px_1px_rgba(0,0,0,0.25)]"
          style={{ left: 1041, top: 505 }}
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
        >
          <path
            d="M1 1L1 18.5L5.6 14.4L8.4 21.2L11.3 20L8.6 13.3L14.7 13.1L1 1Z"
            fill="black"
            stroke="white"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Content — centered 1280px column, above the wall. Headline sits in the
          upper third (Figma 782:26738 — top 175 of 739). */}
      <div className="relative z-10 mx-auto flex h-[520px] w-full max-w-[1360px] items-start px-6 pt-[110px] sm:h-[600px] sm:px-10 sm:pt-[150px] lg:h-[739px] lg:pt-[175px]">
        <h1 className="max-w-[1000px] pl-2 font-sans text-[32px] font-medium leading-[1.2] tracking-[-0.03em] text-ink sm:pl-8 sm:text-[44px] lg:pl-16 lg:text-[56px] lg:tracking-[-1.12px]">
          {HEADLINE.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Folder nav — pinned top-right within the column (Figma 782:24555).
            Hidden for now per request. */}
        {/* <FolderNav className="absolute right-6 top-10 sm:right-10 lg:top-[104px]" /> */}
      </div>
    </section>
  );
}
