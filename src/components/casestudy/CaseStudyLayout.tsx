import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES, type Block, type CaseStudy } from "@/lib/caseStudies";
import { CaseStudyBlock } from "./CaseStudyBlocks";
import { SectionTitle } from "./SectionTitle";
import { BackButton } from "./BackButton";
import { CaseStudyStepper, type StepperItem } from "./CaseStudyStepper";
import { CaseStudyBanner } from "./CaseStudyBanner";
import { ArrowRightIcon } from "../icons";

// Site-wide content column: fluid up to 1200px, centered, with responsive
// gutters. Banners stay full-bleed.
const CONTAINER = "mx-auto w-full max-w-[1360px] px-6 sm:px-10";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Text blocks read at a 700px measure; visual blocks span the column.
const FULL_WIDTH_BLOCKS = new Set(["image", "gallery", "screens", "timeline", "impact", "findings"]);

/** Caps a block at 700px unless it's a full-width visual block. */
function BlockRow({ block }: { block: Block }) {
  return (
    <div className={FULL_WIDTH_BLOCKS.has(block.kind) ? "" : "max-w-[700px]"}>
      <CaseStudyBlock block={block} />
    </div>
  );
}

type Section = { title: string; inStepper: boolean; blocks: Block[] };

// A section-opening block's eyebrow is promoted to the SectionTitle pill —
// drop it so it doesn't also render as the small uppercase eyebrow.
function withoutEyebrow(block: Block): Block {
  if ("eyebrow" in block) {
    const rest = { ...block };
    delete (rest as { eyebrow?: string }).eyebrow;
    return rest;
  }
  return block;
}

/** Group blocks into design sections: each opens at the block whose eyebrow matches. */
function groupSections(study: CaseStudy): { lead: Block[]; sections: Section[] } {
  const defs = study.sections ?? [];
  const lead: Block[] = [];
  const sections: Section[] = [];
  let nextDef = 0;
  let current: Section | null = null;

  for (const block of study.blocks) {
    const eyebrow = "eyebrow" in block ? block.eyebrow : undefined;
    if (nextDef < defs.length && eyebrow === defs[nextDef].title) {
      current = { title: defs[nextDef].title, inStepper: defs[nextDef].inStepper !== false, blocks: [withoutEyebrow(block)] };
      sections.push(current);
      nextDef++;
    } else if (current) {
      current.blocks.push(block);
    } else {
      lead.push(block);
    }
  }
  return { lead, sections };
}

/** Full case-study page shell. */
export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  const idx = CASE_STUDIES.findIndex((c) => c.slug === study.slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
  const sectioned = (study.sections?.length ?? 0) > 0;
  const { lead, sections } = groupSections(study);
  const stepperItems: StepperItem[] = sections
    .filter((s) => s.inStepper)
    .map((s) => ({ id: slugify(s.title), label: s.title }));

  return (
    <main className="bg-paper">
      {/* Back bar — Uber Base circular tertiary button (Figma 576:21177) */}
      <div className={`${CONTAINER} flex h-[120px] items-center`}>
        <BackButton href="/" label="Back to work" />
      </div>

      {/* Classic title header for studies without a designed banner layout */}
      {!sectioned && (
        <header className={`${CONTAINER} flex flex-col gap-5 pb-12`}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-fit rounded-full border border-hairline bg-body-bg px-[10px] py-[5px] font-label text-[14px] uppercase tracking-wide text-muted">
              {study.badge}
            </span>
            {study.client && (
              <span className="w-fit rounded-full bg-ink px-[10px] py-[5px] font-label text-[14px] uppercase tracking-wide text-paper">
                {study.client}
              </span>
            )}
          </div>
          <h1 className="max-w-[18ch] text-[40px] font-semibold leading-[1.05] tracking-[-0.01em] text-ink sm:text-[56px]">
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
                <dt className="font-label text-[14px] uppercase tracking-wide text-muted">
                  {label}
                </dt>
                <dd className="text-[18px] font-semibold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </header>
      )}

      {/* Banner — always full-bleed (Figma: the banner spans the page) */}
      {study.banner ? (
        <CaseStudyBanner study={study} />
      ) : study.cover ? (
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={study.cover}
            alt={`${study.title} — cover`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div
          aria-hidden
          className="flex aspect-[21/9] w-full items-center justify-center border-y border-dashed border-line bg-body-bg"
        >
          {/* TODO(content): real cover banner */}
          <span className="font-label text-[16px] uppercase tracking-wide text-muted/70">
            {study.title} — cover
          </span>
        </div>
      )}

      {sectioned ? (
        /* Sectioned layout: sticky reading stepper + SectionTitle-led sections */
        <div className={`${CONTAINER} py-16`}>
          <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
            <div className="hidden lg:block">
              <div className="sticky top-10">
                <CaseStudyStepper items={stepperItems} />
              </div>
            </div>
            <div className="flex flex-col gap-20">
              {lead.length > 0 && (
                <div className="flex flex-col gap-16">
                  {lead.map((block, i) => (
                    <BlockRow key={`lead-${i}`} block={block} />
                  ))}
                </div>
              )}
              {sections.map((section) => (
                <section
                  key={section.title}
                  id={slugify(section.title)}
                  aria-label={section.title}
                  className="scroll-mt-24"
                >
                  <SectionTitle>{section.title}</SectionTitle>
                  <div className="flex flex-col gap-16">
                    {section.blocks.map((block, i) => (
                      <BlockRow key={i} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Classic flat block list */
        <div className={`${CONTAINER} flex flex-col gap-16 py-16`}>
          {study.blocks.map((block, i) => (
            <BlockRow key={i} block={block} />
          ))}
        </div>
      )}

      {/* Next case study */}
      <div className="border-t border-hairline bg-body-bg">
        <div className={`${CONTAINER} py-12`}>
          <p className="font-label text-[14px] uppercase tracking-wide text-muted">
            Next case study
          </p>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-3 flex items-center justify-between gap-6"
          >
            <span className="text-[24px] font-semibold text-ink sm:text-[32px]">
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
