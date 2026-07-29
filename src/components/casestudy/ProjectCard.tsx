import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "../icons";

export type ProjectCardProps = {
  /** Small pill above the title, e.g. "UX thinking / 2026". */
  badge: string;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  /** Thumbnail image src (the case study's cover). */
  thumbnailSrc?: string;
  /** Custom thumbnail node; overrides thumbnailSrc. */
  thumbnail?: ReactNode;
  /**
   * "row" (list view — thumbnail left, the default) or
   * "column" (grid view — thumbnail on top).
   */
  layout?: "row" | "column";
};

/**
 * ProjectCard — a single case-study card (Figma 280:17794).
 * White, 1px #E5E7EB border, soft shadow, 16px radius; badge / title /
 * description / CTA beside (list) or below (grid) the thumbnail.
 */
export function ProjectCard({
  badge,
  title,
  description,
  href = "#",
  ctaLabel = "Read case study",
  thumbnailSrc,
  thumbnail,
  layout = "row",
}: ProjectCardProps) {
  const row = layout === "row";
  return (
    <article
      className={[
        "relative flex flex-col gap-6 rounded-card border border-hairline bg-paper p-6 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] transition-shadow hover:drop-shadow-[0px_4px_12px_rgba(0,0,0,0.08)]",
        row ? "sm:flex-row sm:items-start" : "",
      ].join(" ")}
    >
      {/* Thumbnail */}
      <div
        className={[
          "relative aspect-[360/220] w-full shrink-0 overflow-hidden rounded-xl",
          row ? "sm:aspect-auto sm:h-[220px] sm:w-[360px]" : "",
        ].join(" ")}
      >
        {thumbnail ??
          (thumbnailSrc ? (
            <Image
              src={thumbnailSrc}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover object-[72%_50%]"
            />
          ) : (
            <div
              aria-hidden
              className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-line bg-body-bg"
            >
              {/* TODO(content): real project thumbnail */}
              <span className="font-label text-[14px] uppercase tracking-wide text-muted/70">
                TODO: thumbnail
              </span>
            </div>
          ))}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col items-start gap-3">
        <span className="rounded-full border border-hairline bg-body-bg px-[10px] py-[6px] text-[12px] font-semibold text-muted">
          {badge}
        </span>
        <h3 className="text-[24px] font-extrabold text-ink">{title}</h3>
        <p className="text-[14px] font-normal leading-[1.5] text-muted">
          {description}
        </p>
        {/* Stretched link makes the whole card clickable. */}
        <Link
          href={href}
          className="mt-1 inline-flex items-center gap-2 rounded-[10px] bg-ink px-[14px] py-[10px] text-[14px] font-bold text-paper outline-none after:absolute after:inset-0 after:rounded-card focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-body-bg"
        >
          {ctaLabel}
          <ArrowRightIcon className="size-6" />
        </Link>
      </div>
    </article>
  );
}
