import { FolderNav } from "./FolderNav";
import { AboutCard } from "./AboutCard";

// Headline copy is exact from Figma (637:23509) — sentence case, one phrase per line.
const HEADLINE = [
  "Product designer,",
  "Builder,",
  "Vibe coder,",
  "Volleyball player,",
  "Coffee addict...",
];

/**
 * Hero — landing hero (Figma 280:17737).
 * White surface: wide 96px Poppins ExtraBold headline (left, up to ~1239px so the
 * phrases stay on one line) + Folder Nav (right, always a right-aligned column),
 * with the character illustration sitting on a #F5F5F5 rounded shape at the
 * top-right, and the dark About card below.
 */
export function Hero() {
  return (
    <section className="relative bg-paper">
      {/* Grey panel + character (Figma 637:23501): #F3F4F6 rounded-tl-40 panel
          bleeding to the top-right edge, with the Humation illustration inset
          100px left / 60px top / 240px right at the 1890 reference width
          (11.7% / 60px / 28% here so it scales). The panel runs 86px past the
          hero — through the tab-strip band (transparent there) — so it merges
          seamlessly into the grey tab panel below; the character is never
          clipped, her legs continue behind the About card and down into the
          grey section. Decorative; lg+ only. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[86px] right-0 top-0 z-[1] hidden w-[45.4%] lg:block"
      >
        <div className="absolute inset-0 rounded-tl-[40px] bg-body-bg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/humation-illustration.svg"
          alt=""
          className="absolute left-[11.7%] top-[60px] w-[60.3%] max-w-none"
        />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 pb-12 pt-12 sm:px-10 lg:px-[120px]">
        {/* Top: headline + folder nav (folder nav stays right on every width) */}
        <div className="flex flex-row items-start justify-between gap-6">
          {/* Figma 637:23511 — Poppins Bold 96 / 98.88 line height / -1.92px tracking */}
          <h1 className="text-[40px] font-bold leading-[1.03] tracking-[-1.92px] text-ink sm:text-[64px] lg:text-[96px] lg:leading-[98.88px]">
            {HEADLINE.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <FolderNav className="shrink-0" />
        </div>

        {/* About card */}
        <div className="mt-14 lg:mt-16">
          <AboutCard />
        </div>
      </div>
    </section>
  );
}
