"use client";

import { useState } from "react";
import { ProjectCard, type ProjectCardProps } from "./ProjectCard";
import { ArrowRightIcon, GridIcon, ListIcon } from "../icons";
import { CASE_STUDIES } from "@/lib/caseStudies";

const FILTERS = ["All", "Design system", "UX", "UI"] as const;

// Real case studies, linked to their detail pages. Tags share the FILTERS
// vocabulary, so the pills below actually filter the grid.
const PROJECTS: (ProjectCardProps & { tags: string[] })[] = CASE_STUDIES.map((c) => ({
  badge: c.category,
  title: c.title,
  description: c.cardSummary,
  href: `/work/${c.slug}`,
  thumbnailSrc: c.cover,
  tags: c.tags ?? [],
}));

/**
 * CaseStudySection — Portfolio / case-study grid (Figma 280:17776).
 * Header (CASE STUDY + grid/list view toggle) → filter pills → project cards →
 * Load more. Filters match on each study's tags; list view and pagination are
 * TODO pending real project data.
 */
export function CaseStudySection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const visible = PROJECTS.filter(
    (p) => activeFilter === "All" || p.tags.includes(activeFilter),
  );

  return (
    <section
      aria-labelledby="case-study-heading"
      className="bg-body-bg"
    >
      <div className="mx-auto w-full px-6 py-12 sm:px-10 lg:px-[120px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <h2
            id="case-study-heading"
            className="text-[40px] font-extrabold text-ink"
          >
            CASE STUDY
          </h2>
          <div className="flex items-center gap-3">
            {(
              [
                ["grid", "Grid view", GridIcon],
                ["list", "List view", ListIcon],
              ] as const
            ).map(([key, label, Icon]) => (
              <button
                key={key}
                type="button"
                aria-label={label}
                aria-pressed={view === key}
                onClick={() => setView(key)}
                className={[
                  "flex size-10 items-center justify-center rounded-xl border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
                  view === key
                    ? "border-ink bg-ink text-paper"
                    : "border-hairline bg-paper text-cod-gray",
                ].join(" ")}
              >
                <Icon className="size-6" />
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {FILTERS.map((filter) => {
            const active = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveFilter(filter)}
                className={[
                  "rounded-full px-4 py-[10px] text-[14px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
                  active
                    ? "bg-ink font-bold text-paper"
                    : "border border-hairline bg-paper font-semibold text-muted",
                ].join(" ")}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-8 flex flex-col gap-4">
          {visible.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>

        {/* Load more (TODO: pagination) */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-[10px] border border-hairline bg-paper px-[14px] py-[10px] text-[14px] font-bold text-ink outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-body-bg"
          >
            Load more
            <ArrowRightIcon className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
