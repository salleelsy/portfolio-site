import { PhotoFrame } from "../PhotoFrame";

// Real interests (from Sallee). Drop the three portrait photos into
// /public/about with these filenames and they render in place.
const INTERESTS = [
  {
    title: "Config 2026",
    caption:
      "I love learning something new about the industry — I made it to Config 2026!",
    src: "/about/config-2026.jpg",
  },
  {
    title: "Volleyball",
    caption: "On the court, I play setter — I like being the one who sets people up.",
    src: "/about/volleyball.jpg",
  },
  {
    title: "Photography",
    caption:
      "Lately I've been shooting maternity and couple photos for people I love.",
    src: "/about/photography.jpg",
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
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-10">
        <h2
          id="about-heading"
          className="text-[40px] font-semibold tracking-[-1.5px] text-ink sm:text-[56px] sm:leading-[70px]"
        >
          About me
        </h2>

        <p className="mt-6 max-w-[720px] text-[18px] leading-[1.6] text-cod-gray">
          Hi, I&rsquo;m Sallee — a Toronto-based product designer who codes. I care
          about the human side of things: empathy, problem-solving, and logical
          thinking, with a detail-oriented eye for the messy, complex problems.
          When I&rsquo;m not designing, I&rsquo;m usually chasing something new — on a
          screen, on the court, or behind a camera.
        </p>

        {/* Interests — three portrait cards in one row */}
        <h3 className="mt-14 font-label text-[16px] uppercase tracking-wide text-muted">
          A few things I&rsquo;m into
        </h3>
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {INTERESTS.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 rounded-card border border-hairline bg-paper p-4"
            >
              <PhotoFrame
                src={item.src}
                alt={item.title}
                className="aspect-[3/4] w-full"
                label={`${item.title} — photo`}
              />
              <div className="flex flex-col gap-2 px-2 pb-2">
                <p className="text-[18px] font-semibold text-ink">{item.title}</p>
                <p className="text-[16px] leading-[1.5] text-muted">
                  {item.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
