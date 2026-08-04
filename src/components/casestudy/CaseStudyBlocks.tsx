import type { Block, Compare, Persona } from "@/lib/caseStudies";
import { PhotoFrame } from "../PhotoFrame";

const PERSONA_TINT = {
  sky: { card: "bg-[#eaf6fb]", avatar: "bg-[#c9eaf6]" },
  amber: { card: "bg-[#fbf6e3]", avatar: "bg-[#fbe7be]" },
} as const;

/**
 * PersonaCard — avatar + label/name/role chip, with an optional pull quote.
 * Used by the Personas grid (with quote) and inside ideation cases (without).
 */
function PersonaCard({ persona: p }: { persona: Persona }) {
  const t = PERSONA_TINT[p.tint];
  return (
    <figure
      className={`flex flex-col gap-4 rounded-card border border-hairline p-6 ${t.card}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full ${t.avatar}`}
        >
          {p.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.src} alt={p.name} className="size-full object-cover" />
          ) : (
            <span className="text-[18px] font-extrabold text-ink">{p.initials}</span>
          )}
        </div>
        <figcaption className="flex flex-col gap-[2px]">
          <span className="font-label text-[14px] font-semibold uppercase tracking-wide text-base-blue">
            {p.personaLabel}
          </span>
          <span className="text-[20px] font-semibold leading-tight text-ink">
            {p.name}
          </span>
          <span className="text-[16px] text-muted">
            {p.role} · {p.tier}
          </span>
        </figcaption>
      </div>
      {p.quote && (
        <blockquote className="text-[18px] leading-[1.6] text-cod-gray">
          <span aria-hidden>“</span>
          {p.quote}
          <span aria-hidden>”</span>
        </blockquote>
      )}
    </figure>
  );
}

/**
 * ComparePanel — one Before/After card (Figma 576:21346): title + note on top,
 * then the phone shot(s) on the left with the +/- takeaways stacked to their
 * right (pros over cons), per the updated Challenge 1 layout.
 */
function ComparePanel({ data, highlight }: { data: Compare; highlight?: boolean }) {
  return (
    <div
      className={[
        "flex flex-col gap-5 rounded-card border p-6",
        highlight ? "border-ink bg-paper" : "border-hairline bg-body-bg",
      ].join(" ")}
    >
      <div className="flex flex-col gap-3">
        <p className="font-label text-[16px] uppercase tracking-wide text-muted">
          {data.title}
        </p>
        {data.note && (
          <p className="max-w-[700px] text-[18px] leading-[1.6] text-cod-gray">
            {data.note}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        {data.images && (
          <div className="flex min-w-0 flex-1 gap-4 overflow-x-auto pb-1">
            {data.images.map((img) => (
              <PhoneShot key={img.label} src={img.src} alt={img.alt} label={img.label} />
            ))}
          </div>
        )}
        {(data.pros || data.cons) && (
          <div className="flex flex-col gap-4 pt-1 lg:w-[340px] lg:shrink-0">
            {data.pros && (
              <ul className="flex flex-col gap-2">
                {data.pros.map((p, i) => (
                  <li key={i} className="flex gap-2 text-[16px] leading-[1.5] text-cod-gray">
                    <span aria-hidden className="font-bold text-ink">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            )}
            {data.cons && (
              <ul className="flex flex-col gap-2">
                {data.cons.map((c, i) => (
                  <li key={i} className="flex gap-2 text-[16px] leading-[1.5] text-muted">
                    <span aria-hidden className="font-bold">–</span>
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-label text-[16px] uppercase tracking-wide text-muted">
      {children}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[26px] font-semibold leading-tight text-ink sm:text-[32px]">
      {children}
    </h2>
  );
}

const CALLOUT = {
  finding: { label: "Finding", bar: "border-l-ink" },
  quickwin: { label: "Quick win", bar: "border-l-[color:var(--color-folder-blue-from)]" },
  rec: { label: "Recommendation", bar: "border-l-muted" },
} as const;

// Uber Base "Tag" colours for pipeline owners: Designer blue, Engineering
// green, PO gold; support roles (Bot, Everyone) stay neutral.
function ownerTagClasses(owner: string): string {
  if (owner.startsWith("Designer")) return "border-[#a9c6fb] bg-[#eef4fe] text-[#1c5fd6]";
  if (owner.startsWith("Eng")) return "border-[#a7dcbe] bg-[#e9f7ef] text-[#1e7d3e]";
  if (owner.startsWith("PO")) return "border-[#e7cf93] bg-[#fbf3e0] text-[#8a6412]";
  return "border-hairline bg-body-bg text-muted";
}

// Pipeline tool tags that map to an exported brand logo; anything else
// (PRD, git clone, SKILLS.md, …) falls back to a text chip.
const TOOL_LOGO: Record<string, string> = {
  Lovable: "lovable",
  GitHub: "github",
  Storybook: "storybook",
  Figma: "figma",
  "Figma MCP": "figma",
  "Claude Code": "claude",
  Greptile: "greptile",
};

// Phone-mockup sizing across all case-study screens: fixed responsive width
// (≈290px mobile → 340px desktop). Rows scroll horizontally rather than wrapping
// one-per-row. Full-height keeps each screenshot uncropped regardless of aspect.
const PHONE_W = "w-[290px] shrink-0 sm:w-[300px] xl:w-[340px]";

function PhoneShot({ src, alt, label }: { src?: string; alt?: string; label: string }) {
  return (
    <div className={PHONE_W}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-2xl border border-hairline"
        />
      ) : (
        <div
          aria-hidden
          className="flex aspect-[9/19] w-full items-center justify-center rounded-2xl border border-dashed border-line bg-body-bg px-3 text-center"
        >
          <span className="font-label text-[16px] uppercase tracking-wide text-muted/70">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

/** Renders one case-study content block in the Uber design language. */
export function CaseStudyBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case "prose":
      return (
        <div className="flex flex-col gap-4">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.body?.map((p, i) => (
            <p key={i} className="max-w-[700px] text-[18px] leading-[1.7] text-cod-gray">
              {p}
            </p>
          ))}
        </div>
      );

    case "list":
      return (
        <div className="flex flex-col gap-4">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.intro && (
            <p className="text-[18px] leading-[1.7] text-cod-gray">{block.intro}</p>
          )}
          {block.bulleted ? (
            <ul className="flex flex-col gap-2 pl-1">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span aria-hidden className="mt-[11px] size-[6px] shrink-0 rounded-full bg-cod-gray" />
                  <span className="text-[18px] leading-[1.6] text-cod-gray">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ol className="flex flex-col gap-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[2px] flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-[14px] font-bold text-paper">
                    {i + 1}
                  </span>
                  <span className="text-[18px] leading-[1.6] text-cod-gray">{item}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      );

    case "image":
      return (
        <figure className="flex flex-col gap-3">
          {block.src ? (
            // Real screenshots render at their natural aspect (uncropped).
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={block.src}
              alt={block.alt ?? block.label}
              className="w-full rounded-[12px] border border-hairline"
            />
          ) : (
            <PhotoFrame
              src={block.src}
              alt={block.alt}
              className={`w-full border border-hairline ${block.ratio === "4/3" ? "aspect-[4/3]" : "aspect-video"}`}
              label={block.label}
            />
          )}
          {block.caption && (
            <figcaption className="text-[16px] text-muted">{block.caption}</figcaption>
          )}
        </figure>
      );

    case "video":
      return (
        <figure className="flex flex-col items-center gap-3">
          <div
            className={`overflow-hidden rounded-xl border border-hairline bg-ink ${
              block.vertical ? "aspect-[9/16] w-full max-w-[380px]" : "aspect-video w-full"
            }`}
          >
            <iframe
              src={block.src}
              title={block.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          {block.caption && (
            <figcaption className="text-[16px] text-muted">{block.caption}</figcaption>
          )}
        </figure>
      );

    case "timeline": {
      const CHIP = {
        done: "bg-[#e6f4ea] text-[#1e7d3e]",
        current: "bg-[#e8ebfd] text-base-blue",
        upcoming: "bg-body-bg text-muted",
      } as const;
      const Marker = ({ status }: { status: "done" | "current" | "upcoming" }) => {
        if (status === "done") {
          return (
            <span className="flex size-8 items-center justify-center rounded-full bg-[#2e9e4f] text-paper">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          );
        }
        return (
          <span
            className={`size-8 rounded-full border-[7px] bg-paper ${
              status === "current" ? "border-base-blue" : "border-line"
            }`}
          />
        );
      };
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          {/* No box, no scroll — the phases lay out across the full width. */}
          <div>
            {/* Date chips */}
            <div className="flex">
              {block.items.map((item) => (
                <div key={item.date} className="flex flex-1 justify-center px-1">
                  <span className={`whitespace-nowrap rounded-full px-3 py-[6px] text-[13px] font-semibold ${CHIP[item.status]}`}>
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
            {/* Markers on the rail */}
            <div className="relative mt-4 flex items-center">
              <div aria-hidden className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-line" />
              {block.items.map((item) => (
                <div key={item.date} className="relative flex flex-1 justify-center">
                  <Marker status={item.status} />
                </div>
              ))}
            </div>
            {/* Titles + notes */}
            <div className="mt-5 flex items-start">
              {block.items.map((item) => (
                <div key={item.date} className="flex flex-1 flex-col items-center gap-2 px-2 text-center">
                  <p className="text-[16px] font-semibold leading-tight text-ink">{item.title}</p>
                  {item.body && (
                    <p className="text-[13px] leading-[1.5] text-muted">{item.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    case "gallery":
      return (
        <div className={`grid gap-4 ${block.cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {block.items.map((item, i) => (
            <figure key={i} className="flex flex-col gap-2">
              <PhotoFrame
                src={item.src}
                alt={item.alt}
                className="aspect-[4/3] w-full border border-hairline"
                label={item.label}
              />
              {item.caption && (
                <figcaption className="text-[16px] text-muted">{item.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "screens":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="flex gap-4 overflow-x-auto pb-1">
            {block.items.map((img) => (
              <PhoneShot key={img.label} src={img.src} alt={img.alt} label={img.label} />
            ))}
          </div>
        </div>
      );

    case "priorityList":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.intro && (
            <p className="max-w-[700px] text-[18px] leading-[1.7] text-cod-gray">
              {block.intro}
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            {block.groups.map((group, gi) => {
              const offset = block.groups
                .slice(0, gi)
                .reduce((sum, g) => sum + g.items.length, 0);
              const primary = gi === 0;
              return (
                <div
                  key={group.label}
                  className={[
                    "flex flex-col gap-4 rounded-card border p-6",
                    primary ? "border-ink bg-paper" : "border-hairline bg-body-bg",
                  ].join(" ")}
                >
                  <p className="font-label text-[16px] uppercase tracking-wide text-muted">
                    {group.label}
                  </p>
                  <ol className="flex flex-col gap-3">
                    {group.items.map((item, i) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className={[
                            "mt-[1px] flex size-6 shrink-0 items-center justify-center rounded-full text-[14px] font-bold",
                            primary
                              ? "bg-ink text-paper"
                              : "border border-line text-muted",
                          ].join(" ")}
                        >
                          {offset + i + 1}
                        </span>
                        <span
                          className={[
                            "text-[18px] leading-[1.5]",
                            primary ? "font-medium text-ink" : "text-muted",
                          ].join(" ")}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      );

    case "tierTable": {
      const toneBg: Record<string, string> = {
        vvip: "bg-[#FBE7BE]",
        vip: "bg-[#C9EAF6]",
        passionates: "bg-[#D8F0C4]",
        engaged: "bg-[#EEF4B8]",
        supporters: "bg-[#FBE1DC]",
      };
      return (
        <figure className="flex flex-col gap-5">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="flex items-stretch gap-2">
            <div className="hidden w-6 flex-col items-center justify-center gap-2 text-base-blue sm:flex">
              <span aria-hidden>↑</span>
              <span className="rotate-180 font-label text-[14px] uppercase tracking-wide [writing-mode:vertical-rl]">
                Upgrade
              </span>
            </div>
            <div className="min-w-0 flex-1 overflow-x-auto">
              <table className="w-full min-w-[760px] border-separate border-spacing-[6px] text-left align-top">
                <thead>
                  <tr>
                    {block.columns.map((col) => (
                      <th
                        key={col}
                        className="rounded-lg bg-ink px-4 py-3 text-[16px] font-semibold text-white"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.tiers.map((tier) => (
                    <tr key={tier.level}>
                      <th
                        scope="row"
                        className={`rounded-lg px-4 py-3 text-[16px] font-bold text-ink ${toneBg[tier.tone]}`}
                      >
                        {tier.level}
                      </th>
                      {"span" in tier ? (
                        <td
                          colSpan={block.columns.length - 1}
                          className="rounded-lg border border-hairline bg-paper px-4 py-3 text-[16px] text-cod-gray"
                        >
                          {tier.span}
                        </td>
                      ) : (
                        tier.cells.map((cell, ci) => (
                          <td
                            key={ci}
                            className="rounded-lg border border-hairline bg-paper px-4 py-3 text-[16px] leading-[1.4] text-cod-gray"
                          >
                            {cell === "–" ? <span className="text-line">–</span> : cell}
                          </td>
                        ))
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="hidden w-6 flex-col items-center justify-center gap-2 text-base-blue sm:flex">
              <span className="font-label text-[14px] uppercase tracking-wide [writing-mode:vertical-rl]">
                Downgrade
              </span>
              <span aria-hidden>↓</span>
            </div>
          </div>
          {block.note && (
            <figcaption className="text-[16px] text-muted">{block.note}</figcaption>
          )}
        </figure>
      );
    }

    case "personas":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="grid gap-4 md:grid-cols-2">
            {block.items.map((p) => (
              <PersonaCard key={p.name} persona={p} />
            ))}
          </div>
        </div>
      );

    case "ideation":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="flex flex-col gap-4">
            {block.cases.map((c) => (
              <div
                key={c.title}
                className="flex flex-col gap-5 rounded-card border border-hairline bg-body-bg p-6 lg:flex-row lg:gap-8"
              >
                <div className="flex flex-col gap-4 lg:w-[360px] lg:shrink-0">
                  {c.persona && <PersonaCard persona={c.persona} />}
                  <div className="flex flex-col gap-3">
                    {c.caseLabel && (
                      <p className="font-label text-[14px] font-semibold uppercase tracking-wide text-base-blue">
                        {c.caseLabel}
                      </p>
                    )}
                    <p className="text-[24px] font-semibold leading-tight text-ink">
                      {c.title}
                    </p>
                    {c.kicker && (
                      <p className="font-label text-[14px] font-semibold uppercase tracking-wide text-base-blue">
                        {c.kicker}
                      </p>
                    )}
                    {c.label && (
                      <p className="font-label text-[14px] uppercase tracking-wide text-muted">
                        {c.label}
                      </p>
                    )}
                    <div className="flex flex-col gap-2">
                      {c.body.map((b, i) => (
                        <p key={i} className="text-[16px] leading-[1.6] text-cod-gray">
                          {b}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 gap-4 overflow-x-auto pb-1">
                  {c.images.map((img) => (
                    <PhoneShot
                      key={img.label}
                      src={img.src}
                      alt={img.alt}
                      label={img.label}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "hierarchy": {
      const tone: Record<string, string> = {
        high: "bg-base-blue text-white",
        mid: "bg-[#c7c4f7] text-ink",
        low: "bg-[#eae8fb] text-ink",
      };
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="flex items-stretch gap-4">
            <div className="flex flex-1 flex-col gap-2 sm:max-w-[560px]">
              {block.items.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl px-5 py-4 text-center text-[18px] font-bold ${tone[item.level]}`}
                >
                  {item.label}
                </div>
              ))}
            </div>
            {/* Importance indicators (Figma 576:37691): centered indigo column */}
            {(block.topLabel || block.bottomLabel) && (
              <div className="flex w-24 shrink-0 flex-col items-center justify-center gap-1 py-1 text-base-blue">
                <span className="font-label text-[14px] uppercase tracking-wide">
                  {block.topLabel}
                </span>
                <span aria-hidden className="flex flex-col items-center py-1 text-[18px] leading-6">
                  <span>↓</span>
                  <span>↓</span>
                  <span>↓</span>
                  <span>↓</span>
                </span>
                <span className="text-center font-label text-[14px] uppercase tracking-wide">
                  {block.bottomLabel}
                </span>
              </div>
            )}
          </div>
        </div>
      );
    }

    case "highlights":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="grid gap-4 md:grid-cols-2">
            {block.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-card border border-hairline bg-body-bg p-6"
              >
                <p className="text-[20px] font-semibold text-base-blue">
                  {item.title}
                </p>
                {item.body.map((b, i) => (
                  <p key={i} className="text-[18px] leading-[1.6] text-cod-gray">
                    {b}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      );

    case "beforeAfter":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="flex flex-col gap-4">
            <ComparePanel data={block.before} />
            <ComparePanel data={block.after} highlight />
          </div>
        </div>
      );

    case "features":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 rounded-card border border-hairline bg-paper p-5"
              >
                <p className="text-[18px] font-semibold text-ink">{item.title}</p>
                <p className="text-[16px] leading-[1.6] text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      );

    // Impact — Uber Base "Card / Artwork trailing" (Figma 795:27923): white
    // card, 2px #e2e2e2 border, big number + label, blue award badge trailing.
    case "impact":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {block.stats.map((s, i) => (
              <div
                key={i}
                className="relative flex flex-col rounded-[12px] border-2 border-[#e2e2e2] bg-white p-4"
              >
                <AwardBadge className="absolute right-4 top-4 size-14" />
                <dt className="text-[56px] font-medium leading-[59px] text-black">{s.value}</dt>
                <dd className="mt-3 text-[16px] leading-6 text-black">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "ratings":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="flex flex-col divide-y divide-hairline rounded-card border border-hairline bg-paper">
            {block.items.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-4 px-6 py-4">
                <p className="text-[18px] font-semibold text-cod-gray">{item.task}</p>
                <p className="text-[24px] font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
          {block.note && <p className="text-[16px] text-muted">{block.note}</p>}
        </div>
      );

    case "callout": {
      const c = CALLOUT[block.tone];
      return (
        <div className={`flex flex-col gap-2 rounded-card border border-hairline border-l-4 ${c.bar} bg-paper p-6`}>
          <p className="font-label text-[14px] uppercase tracking-wide text-muted">
            {c.label}
          </p>
          <p className="text-[18px] font-semibold text-ink">{block.title}</p>
          <p className="text-[18px] leading-[1.6] text-muted">{block.body}</p>
        </div>
      );
    }

    // mediaSplit — two columns (Figma 795:20773): stacked heading+body groups
    // on the left, a video with caption on the right.
    case "mediaSplit":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
            <div className="flex flex-col gap-10">
              {block.groups.map((g, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <h3 className="text-[22px] font-semibold text-ink sm:text-[26px]">{g.heading}</h3>
                  {g.ordered ? (
                    <ol className="flex flex-col gap-2 pl-1">
                      {g.body.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-[18px] leading-[1.6] text-muted">{j + 1}.</span>
                          <span className="text-[18px] leading-[1.6] text-cod-gray">{b}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    g.body.map((b, j) => (
                      <p key={j} className="max-w-[560px] text-[18px] leading-[1.7] text-cod-gray">
                        {b}
                      </p>
                    ))
                  )}
                </div>
              ))}
            </div>
            {block.video && (
              <figure className="flex flex-col gap-3">
                <div className="aspect-[9/16] w-full overflow-hidden rounded-xl border border-hairline bg-ink">
                  <iframe
                    src={block.video.src}
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                {block.video.caption && (
                  <figcaption className="text-[14px] text-muted">{block.video.caption}</figcaption>
                )}
              </figure>
            )}
          </div>
        </div>
      );

    // Findings — Uber Base "Banner" (Figma 795:25698): light-blue box, blue
    // info icon, a bold title and a bulleted list of data findings.
    case "findings":
      return (
        <div className="flex items-start gap-3 rounded-[12px] bg-[#eff4fe] p-4">
          <InfoIcon className="mt-1 size-10 shrink-0" />
          <div className="flex flex-col gap-1 py-2">
            <p className="text-[16px] font-medium leading-5 text-black">
              {block.title ?? "Findings"}
            </p>
            <ul className="list-disc pl-5">
              {block.items.map((it, i) => (
                <li key={i} className="text-[16px] leading-6 text-black">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case "meta":
      return (
        <dl className="flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-12">
          {block.items.map((item) => (
            <div key={item.term} className="flex flex-col gap-1">
              <dt className="font-label text-[13px] text-muted">{item.term}</dt>
              <dd className="text-[16px] font-medium text-ink">{item.desc}</dd>
            </div>
          ))}
        </dl>
      );

    // figureRow — the After-Launch solution rows (Figma 795:25720/25721/25782):
    // a grey card (numbered lead, bold title, or a Quick Fix tag) on the left,
    // a tall phone-screen figure on the right.
    case "figureRow": {
      const { card, figure } = block;
      return (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="rounded-[16px] bg-body-bg p-6">
            {card.badge && (
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#cfe6d6] bg-[#eaf6ee] px-3 py-[6px] text-[15px] font-semibold text-[#1e7d3e]">
                <HeartIcon className="size-4" />
                {card.badge}
              </span>
            )}
            <div className="flex items-start gap-2">
              {card.number != null && (
                <span className="text-[18px] font-bold leading-[1.6] text-ink">{card.number}.</span>
              )}
              <div className="flex flex-col gap-3">
                {card.title && (
                  <p className="text-[18px] font-bold leading-[1.6] text-ink">{card.title}</p>
                )}
                {card.body.map((b, i) => (
                  <p key={i} className="text-[18px] leading-[1.6] text-cod-gray">
                    {b}
                  </p>
                ))}
                {card.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={card.image}
                    alt=""
                    className="mt-1 w-full rounded-[16px] border border-hairline"
                  />
                )}
              </div>
            </div>
          </div>
          {figure.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label={figure.alt ?? figure.label}
              className="w-full rounded-[16px] border border-hairline"
            >
              <source src={figure.video.replace(/\.mp4$/, ".webm")} type="video/webm" />
              <source src={figure.video} type="video/mp4" />
            </video>
          ) : figure.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={figure.src}
              alt={figure.alt ?? figure.label}
              className="w-full rounded-[16px] border border-hairline"
            />
          ) : (
            <div className="flex min-h-[520px] items-center justify-center rounded-[16px] border border-hairline bg-body-bg p-6 lg:min-h-[640px]">
              <span className="max-w-[24ch] text-center font-label text-[14px] uppercase tracking-wide text-muted/70">
                {figure.label}
              </span>
            </div>
          )}
        </div>
      );
    }

    // toolStack — the stack cards (Figma 818:39315+): a hairline grid, each cell
    // a tool icon, name, and one-line role.
    case "toolStack":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-2">
            {block.items.map((item) => (
              <div key={item.name} className="flex items-start gap-4 bg-paper p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/work/wealth-studio/logos/${item.logo}.svg`}
                  alt=""
                  className="size-9 shrink-0 rounded-[8px]"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-ink">{item.name}</p>
                  <p className="text-[16px] leading-[1.5] text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    // flip — the before/now comparison (Figma layout): two panels, each a
    // restarting numbered list; design-owned rows carry the base-blue accent.
    case "flip":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-2">
            {block.columns.map((col) => (
              <div key={col.label} className="bg-paper p-6 sm:p-8">
                <p className="mb-3 font-label text-[13px] uppercase tracking-[0.14em] text-muted">
                  {col.label}
                </p>
                <ol>
                  {col.items.map((it, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-3 border-b border-hairline py-[10px] last:border-0"
                    >
                      <span
                        className={`w-4 shrink-0 text-[13px] tabular-nums ${
                          it.design ? "font-medium text-base-blue" : "text-muted"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`text-[16px] leading-[1.4] ${
                          it.design ? "font-semibold text-ink" : "text-cod-gray"
                        }`}
                      >
                        {it.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      );

    // pipeline — the ownership loop (Figma layout): index rail, owner tag, and a
    // title/description/tool-tags column; design-owned steps take the accent.
    case "pipeline":
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.intro && (
            <p className="max-w-[700px] text-[18px] leading-[1.7] text-cod-gray">{block.intro}</p>
          )}
          <div className="border-t border-ink">
            {block.steps.map((s, i) => (
              <div
                key={i}
                className={`grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-hairline px-3 py-5 sm:grid-cols-[64px_150px_minmax(0,1fr)] sm:gap-x-6 sm:gap-y-0 ${
                  s.design ? "bg-[#f4f6fc]" : ""
                }`}
              >
                <span
                  className={`row-start-1 tabular-nums text-[28px] leading-none sm:text-[32px] ${
                    s.design ? "font-medium text-base-blue" : "font-normal text-muted"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-start-2 row-start-1 flex flex-wrap gap-2">
                  {s.owners.map((owner) => (
                    <span
                      key={owner}
                      className={`inline-flex h-fit w-fit items-center rounded-[6px] border px-2 py-1 font-label text-[11px] font-medium uppercase tracking-[0.1em] ${ownerTagClasses(
                        owner,
                      )}`}
                    >
                      {owner}
                    </span>
                  ))}
                </div>
                <div className="col-start-2 row-start-2 flex flex-col gap-2 sm:col-start-3 sm:row-start-1">
                  <p className={`text-[18px] font-semibold leading-snug ${s.design ? "text-base-blue" : "text-ink"}`}>
                    {s.title}
                  </p>
                  <p className="text-[16px] leading-[1.6] text-muted">{s.desc}</p>
                  {s.tools && s.tools.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {s.tools.map((t) =>
                        TOOL_LOGO[t] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={t}
                            src={`/work/wealth-studio/logos/${TOOL_LOGO[t]}.svg`}
                            alt={t}
                            title={t}
                            className="size-8 rounded-[6px]"
                          />
                        ) : (
                          <span
                            key={t}
                            className="rounded-[6px] border border-hairline bg-body-bg px-2 py-1 font-label text-[11px] uppercase tracking-[0.08em] text-muted"
                          >
                            {t}
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {block.note && <p className="max-w-[720px] text-[16px] leading-[1.6] text-muted">{block.note}</p>}
        </div>
      );
  }
}

/** Solid heart for the "Quick Fix" tag (Figma 795:25750). */
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden focusable="false">
      <path d="M12 21s-6.7-4.35-9.33-8.02C.9 10.24 1.6 6.6 4.6 5.55c1.98-.7 3.9.12 4.9 1.62l.5.76.5-.76c1-1.5 2.92-2.32 4.9-1.62 3 1.05 3.7 4.69 1.93 7.43C18.7 16.65 12 21 12 21z" />
    </svg>
  );
}

/** Uber-style blue "info" badge for the Findings banner. */
function InfoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden focusable="false">
      <circle cx="20" cy="20" r="18" fill="#276EF1" stroke="#0b0f14" strokeWidth="2" />
      <circle cx="20" cy="13" r="2.2" fill="#fff" />
      <rect x="17.9" y="17" width="4.2" height="12" rx="2.1" fill="#fff" />
    </svg>
  );
}

/** Uber-style blue award rosette for the Impact cards. */
function AwardBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden focusable="false">
      {/* ribbon tails */}
      <path d="M20 34l-5 20 9-6 4 4 4-4 9 6-5-20z" fill="#0b0f14" />
      {/* scalloped rosette */}
      <g fill="#276EF1">
        <circle cx="28" cy="22" r="20" />
      </g>
      <circle cx="28" cy="22" r="13" fill="#fff" />
      <circle cx="28" cy="22" r="8.5" fill="#276EF1" />
    </svg>
  );
}
