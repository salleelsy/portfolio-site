import { PhotoFrame } from "../PhotoFrame";

// Real interests (from Sallee). Photos are placeholders until she provides them.
const INTERESTS = [
  {
    title: "Config 2026",
    caption:
      "I love learning something new about the industry — I made it to Config 2026!",
  },
  {
    title: "Vibe coding",
    caption:
      "I vibe-code little things to celebrate my friends' birthdays. 🎂",
  },
  {
    title: "Volleyball",
    caption: "On the court, I play setter — I like being the one who sets people up.",
  },
  {
    title: "Photography",
    caption:
      "Lately I've been shooting maternity and couple photos for people I love.",
  },
];

/**
 * AboutMeSection — the "About me" tab panel.
 * Friendly intro + a grid of interests with photo placeholders (Sallee adds the
 * real photos later), plus a small gallery strip. Bespoke layout in the Uber
 * design language (per CLAUDE.md, Base Web is reserved for interactive primitives).
 */
export function AboutMeSection() {
  return (
    <section aria-labelledby="about-heading" className="bg-body-bg">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-10 lg:px-16">
        <h2 id="about-heading" className="text-[40px] font-extrabold text-ink">
          ABOUT ME
        </h2>

        <p className="mt-6 max-w-[720px] text-[18px] leading-[1.6] text-cod-gray">
          Hi, I&rsquo;m Sallee — a Toronto-based product designer who codes. I care
          about the human side of things: empathy, problem-solving, and logical
          thinking, with a detail-oriented eye for the messy, complex problems.
          When I&rsquo;m not designing, I&rsquo;m usually chasing something new — on a
          screen, on the court, or behind a camera.
        </p>

        {/* Interests */}
        <h3 className="mt-14 font-label text-[13px] uppercase tracking-wide text-muted">
          A few things I&rsquo;m into
        </h3>
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {INTERESTS.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 rounded-card border border-hairline bg-paper p-4"
            >
              <PhotoFrame className="aspect-[4/3] w-full" label={`${item.title} — photo`} />
              <div className="flex flex-col gap-2 px-2 pb-2">
                <p className="text-[18px] font-bold text-ink">{item.title}</p>
                <p className="text-[14px] leading-[1.5] text-muted">
                  {item.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Gallery strip — drop favourite shots here */}
        <h3 className="mt-14 font-label text-[13px] uppercase tracking-wide text-muted">
          Snapshots
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <PhotoFrame
              key={i}
              className="aspect-square w-full border border-hairline"
              label="Snapshot"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
