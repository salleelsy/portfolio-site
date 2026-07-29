import type { CaseStudy } from "@/lib/caseStudies";

/**
 * CaseStudyBanner — the live full-width case-study banner (Figma 576:25865),
 * replacing the old baked-image cover. Lavender gradient, 40px top radii;
 * left column holds tag chips (matching the landing-page filters), the Outfit
 * ExtraBold headline, Geist subtitle, and a Platform | Timeline meta row —
 * all in the base-blue accent. Right side shows the phone-collage artwork.
 */
export function CaseStudyBanner({ study }: { study: CaseStudy }) {
  const banner = study.banner!;
  return (
    <div
      className="relative w-full overflow-hidden rounded-t-[40px]"
      style={{
        background:
          "linear-gradient(178deg, rgb(238, 235, 255) 17%, rgb(226, 220, 255) 60%)",
      }}
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        {/* Content left — sits on the site margin */}
        {/* Full-bleed banner, but the copy aligns with the centered 1200px
            content column: pl = the column's left gutter on wide screens. */}
        <div className="flex max-w-[760px] flex-col items-start gap-8 px-6 pt-14 sm:px-10 lg:box-content lg:min-h-[448px] lg:max-w-[640px] lg:justify-center lg:py-24 lg:pl-[max(calc((100%-1200px)/2+40px),40px)] lg:pr-0 xl:gap-10">
          {study.tags && study.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-[#e8e8e8] px-4 py-[10px] font-section text-[14px] font-medium leading-4 text-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col gap-4 text-base-blue">
            <h1 className="font-display text-[40px] font-extrabold leading-[0.95] sm:text-[56px] xl:text-[72px]">
              {banner.title}
            </h1>
            <p className="font-geist-alt text-[18px] leading-[1.3] opacity-90 sm:text-[22px]">
              {banner.subtitle}
            </p>
          </div>
          <dl className="flex items-center gap-10 text-base-blue">
            <div className="flex flex-col gap-1">
              <dt className="font-geist-alt text-[14px] font-medium uppercase opacity-60">
                Platform
              </dt>
              <dd className="font-geist-alt text-[18px] font-semibold">{banner.platform}</dd>
            </div>
            <div aria-hidden className="h-10 w-px bg-base-blue/30" />
            <div className="flex flex-col gap-1">
              <dt className="font-geist-alt text-[14px] font-medium uppercase opacity-60">
                Timeline
              </dt>
              <dd className="font-geist-alt text-[18px] font-semibold">{banner.timeline}</dd>
            </div>
          </dl>
        </div>

        {/* Artwork right — fades into the gradient on its left edge */}
        {banner.artwork && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={banner.artwork}
            alt=""
            aria-hidden
            className="min-w-0 flex-1 self-stretch object-cover object-left [mask-image:linear-gradient(to_right,transparent,black_14%)] max-lg:max-h-[420px] max-lg:w-full lg:max-w-[46%]"
          />
        )}
      </div>
    </div>
  );
}
