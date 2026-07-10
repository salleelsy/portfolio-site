import Link from "next/link";
import { CASE_STUDIES, type CaseStudy } from "@/lib/caseStudies";
import { CaseStudyBlock } from "./CaseStudyBlocks";
import { PhotoFrame } from "../PhotoFrame";
import { ArrowRightIcon } from "../icons";

// Same container as the homepage.
const CONTAINER = "mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16";

/** Full case-study page shell. */
export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  const idx = CASE_STUDIES.findIndex((c) => c.slug === study.slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <main className="bg-paper">
      {/* Back link */}
      <div className={`${CONTAINER} pt-8`}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-muted transition-colors hover:text-ink"
        >
          <ArrowRightIcon className="size-4 rotate-180" />
          Back to work
        </Link>
      </div>

      {/* Hero */}
      <header className={`${CONTAINER} flex flex-col gap-5 pt-8`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-fit rounded-full border border-hairline bg-body-bg px-[10px] py-[5px] font-label text-[12px] uppercase tracking-wide text-muted">
            {study.badge}
          </span>
          {study.client && (
            <span className="w-fit rounded-full bg-ink px-[10px] py-[5px] font-label text-[12px] uppercase tracking-wide text-paper">
              {study.client}
            </span>
          )}
        </div>
        <h1 className="max-w-[18ch] text-[40px] font-extrabold leading-[1.05] tracking-[-0.01em] text-ink sm:text-[56px]">
          {study.title}
        </h1>
        <p className="max-w-[60ch] text-[18px] leading-[1.5] text-muted sm:text-[20px]">
          {study.subtitle}
        </p>

        {/* Meta */}
        <dl className="mt-2 grid max-w-[900px] grid-cols-1 gap-6 border-t border-hairline pt-6 sm:grid-cols-3">
          {[
            ["Role", study.meta.role],
            ["Timeline", study.meta.timeline],
            ["Tools & Systems", study.meta.tools],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1">
              <dt className="font-label text-[12px] uppercase tracking-wide text-muted">
                {label}
              </dt>
              <dd className="text-[15px] font-semibold text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Hero image */}
      <div className={`${CONTAINER} pt-12`}>
        <PhotoFrame
          src={study.cover}
          alt={`${study.title} — cover`}
          className="aspect-[21/9] w-full border border-hairline"
          label={`${study.title} — cover`}
        />
      </div>

      {/* Body blocks */}
      <div className={`${CONTAINER} flex flex-col gap-16 py-16`}>
        {study.blocks.map((block, i) => (
          <CaseStudyBlock key={i} block={block} />
        ))}
      </div>

      {/* Next case study */}
      <div className="border-t border-hairline bg-body-bg">
        <div className={`${CONTAINER} py-12`}>
          <p className="font-label text-[12px] uppercase tracking-wide text-muted">
            Next case study
          </p>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-3 flex items-center justify-between gap-6"
          >
            <span className="text-[24px] font-extrabold text-ink sm:text-[32px]">
              {next.title}
            </span>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:translate-x-1">
              <ArrowRightIcon className="size-6" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
