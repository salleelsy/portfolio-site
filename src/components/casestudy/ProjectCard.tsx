import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "../icons";

export type ProjectCardProps = {
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
  /** Placeholder card: shows a "Coming Soon" tag and isn't clickable. */
  comingSoon?: boolean;
};

/**
 * ProjectCard — a single case-study card (Figma 280:17794).
 * White, 1px #E5E7EB border, soft shadow, 16px radius; title / description
 * beside (list) or below (grid) the thumbnail. The whole card is one link;
 * a round arrow affordance fades in on hover and on keyboard focus.
 */
export function ProjectCard({
  title,
  description,
  href = "#",
  ctaLabel = "Read case study",
  thumbnailSrc,
  thumbnail,
  layout = "row",
  comingSoon = false,
}: ProjectCardProps) {
  const row = layout === "row";

  // Hover affordance — decorative; the stretched link takes the click. In grid
  // view it sits on the title's first line; in list view it's a centred sibling
  // (see below), so it's rendered in one of two places, never both.
  const affordance = comingSoon ? null : (
    <span
      aria-hidden
      className="pointer-events-none flex size-12 shrink-0 items-center justify-center rounded-full bg-body-bg text-cod-gray opacity-0 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-focus-within:opacity-100 motion-safe:-translate-y-1 motion-safe:group-hover:translate-y-0 motion-safe:group-focus-within:translate-y-0"
    >
      <ArrowUpRightIcon className="size-5" />
    </span>
  );

  return (
    <article
      className={[
        "group relative flex flex-col gap-4 rounded-card border border-hairline bg-paper p-4 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)]",
        comingSoon ? "" : "transition-shadow hover:drop-shadow-[0px_4px_12px_rgba(0,0,0,0.08)]",
        row ? "sm:flex-row sm:items-center" : "",
      ].join(" ")}
    >
      {/* Thumbnail */}
      <div
        className={[
          "relative aspect-[360/220] w-full shrink-0 overflow-hidden rounded-xl",
          row ? "sm:aspect-auto sm:h-[220px] sm:w-[360px]" : "",
        ].join(" ")}
      >
        {comingSoon && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-ink/85 px-3 py-1 font-label text-[13px] font-semibold uppercase tracking-wide text-paper backdrop-blur-sm">
            Coming Soon
          </span>
        )}
        {thumbnail ??
          (thumbnailSrc ? (
            <Image
              src={thumbnailSrc}
              alt=""
              fill
              /* These wide banners are object-cover-cropped into a shorter
                 tile, so the browser renders the image WIDER than the tile to
                 fill it. The sizes below declare that rendered width (not the
                 tile width) — otherwise Next serves a file sized for the tile
                 and it upscales, going soft on HiDPI. Grid tile ≈632px →
                 ~900px rendered; list thumb 360px → ~520px rendered. */
              sizes={
                row
                  ? "(max-width: 640px) 140vw, 520px"
                  : "(max-width: 767px) 150vw, (max-width: 1360px) 70vw, 900px"
              }
              quality={90}
              className="object-cover object-center"
            />
          ) : (
            <div
              aria-hidden
              className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-line bg-body-bg"
            >
              {/* TODO(content): real project thumbnail */}
              <span className="font-label text-[16px] uppercase tracking-wide text-muted/70">
                TODO: thumbnail
              </span>
            </div>
          ))}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {/* Title row. In grid view the hover arrow sits to the right, aligned
            with the title's first line; in list view the arrow is a centred
            sibling of the card instead, so it's omitted here. */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="min-w-0 flex-1 text-[24px] font-medium leading-[1.25] text-ink">
            {title}
          </h3>
          {!row && affordance}
        </div>
        {/* Grid tiles stay scannable — the description shows in list view only. */}
        {row && (
          <p className="max-w-[700px] text-[16px] font-normal leading-[1.5] text-muted">
            {description}
          </p>
        )}
      </div>

      {/* List view (sm+ only, where cards are a row): the arrow lives at the
          card's trailing edge, vertically centred with the text block
          (sm:items-center on the article). Hidden on the mobile stack so its
          empty hover box doesn't reserve space. */}
      {row && <div className="hidden shrink-0 sm:flex">{affordance}</div>}

      {/* One stretched link covers the card, so the whole tile is clickable.
          Coming-soon cards are placeholders, so they get no link. */}
      {!comingSoon && (
        <Link
          href={href}
          className="absolute inset-0 rounded-card outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-body-bg"
        >
          <span className="sr-only">{`${ctaLabel}: ${title}`}</span>
        </Link>
      )}
    </article>
  );
}
