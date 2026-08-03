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
          {block.body.map((p, i) => (
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
        </div>
      );

    case "image":
      return (
        <figure className="flex flex-col gap-3">
          <PhotoFrame
            src={block.src}
            alt={block.alt}
            className={`w-full border border-hairline ${block.ratio === "4/3" ? "aspect-[4/3]" : "aspect-video"}`}
            label={block.label}
          />
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
                <dt className="text-[56px] font-bold leading-[59px] text-black">{s.value}</dt>
                <dd className="mt-3 max-w-[16ch] pr-14 text-[16px] leading-6 text-black">
                  {s.label}
                </dd>
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
  }
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
