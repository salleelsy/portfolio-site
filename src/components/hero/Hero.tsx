import Image from "next/image";
import { FolderNav } from "./FolderNav";
import { AboutCard } from "./AboutCard";
import heroImage from "../../../public/hero/hero.png";

// Headline copy is exact from Figma (280:17747) — real, kept.
const HEADLINE = [
  "product designer,",
  "vibe coder,",
  "builder, maker,",
  "volleyball player,",
  "coffee addict...",
];

/**
 * Hero — landing hero (Figma 280:17737).
 * White surface: wide 96px Inter ExtraBold headline (left, up to ~1239px so the
 * phrases stay on one line) + Folder Nav (right, always a right-aligned column),
 * with the character illustration sitting on a #F5F5F5 rounded shape at the
 * top-right, and the dark About card below.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Grey shape + character (Figma Frame 43: 712×712 #F5F5F5 rounded rect —
          square top-right corner, bleeds to the edge — with the character on
          top). Decorative; lg+ only. */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden aspect-square w-[712px] max-w-[52vw] lg:block"
      >
        <div className="absolute inset-0 rounded-bl-[53px] rounded-tl-[53px] rounded-br-[53px] bg-[#f5f5f5]" />
        <div className="absolute inset-x-[6%] bottom-0 top-[4%]">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 0px"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-12 pt-12 sm:px-10 lg:px-16">
        {/* Top: headline + folder nav (folder nav stays right on every width) */}
        <div className="flex flex-row items-start justify-between gap-6">
          <h1 className="text-[40px] font-extrabold leading-[1.03] tracking-[-0.02em] text-ink sm:text-[64px] lg:text-[96px]">
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
