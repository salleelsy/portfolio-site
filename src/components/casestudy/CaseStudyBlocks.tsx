import type { Block } from "@/lib/caseStudies";
import { PhotoFrame } from "../PhotoFrame";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-label text-[13px] uppercase tracking-wide text-muted">
      {children}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[26px] font-extrabold leading-tight text-ink sm:text-[32px]">
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
          <span className="font-label text-[13px] uppercase tracking-wide text-muted/70">
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
            <p key={i} className="max-w-[70ch] text-[16px] leading-[1.7] text-cod-gray">
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
            <p className="text-[16px] leading-[1.7] text-cod-gray">{block.intro}</p>
          )}
          <ol className="flex flex-col gap-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[2px] flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-paper">
                  {i + 1}
                </span>
                <span className="text-[16px] leading-[1.6] text-cod-gray">{item}</span>
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
            <figcaption className="text-[13px] text-muted">{block.caption}</figcaption>
          )}
        </figure>
      );

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
                <figcaption className="text-[13px] text-muted">{item.caption}</figcaption>
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
            <p className="max-w-[70ch] text-[16px] leading-[1.7] text-cod-gray">
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
                  <p className="font-label text-[13px] uppercase tracking-wide text-muted">
                    {group.label}
                  </p>
                  <ol className="flex flex-col gap-3">
                    {group.items.map((item, i) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className={[
                            "mt-[1px] flex size-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold",
                            primary
                              ? "bg-ink text-paper"
                              : "border border-line text-muted",
                          ].join(" ")}
                        >
                          {offset + i + 1}
                        </span>
                        <span
                          className={[
                            "text-[15px] leading-[1.5]",
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
            <div className="hidden w-6 flex-col items-center justify-center gap-2 text-muted sm:flex">
              <span aria-hidden>↑</span>
              <span className="rotate-180 font-label text-[11px] uppercase tracking-wide [writing-mode:vertical-rl]">
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
                        className="rounded-lg bg-[#2b2bee] px-4 py-3 text-[14px] font-semibold text-white"
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
                        className={`rounded-lg px-4 py-3 text-[14px] font-bold text-ink ${toneBg[tier.tone]}`}
                      >
                        {tier.level}
                      </th>
                      {"span" in tier ? (
                        <td
                          colSpan={block.columns.length - 1}
                          className="rounded-lg border border-hairline bg-paper px-4 py-3 text-[14px] text-cod-gray"
                        >
                          {tier.span}
                        </td>
                      ) : (
                        tier.cells.map((cell, ci) => (
                          <td
                            key={ci}
                            className="rounded-lg border border-hairline bg-paper px-4 py-3 text-[13px] leading-[1.4] text-cod-gray"
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
            <div className="hidden w-6 flex-col items-center justify-center gap-2 text-muted sm:flex">
              <span className="font-label text-[11px] uppercase tracking-wide [writing-mode:vertical-rl]">
                Downgrade
              </span>
              <span aria-hidden>↓</span>
            </div>
          </div>
          {block.note && (
            <figcaption className="text-[13px] text-muted">{block.note}</figcaption>
          )}
        </figure>
      );
    }

    case "personas": {
      const tint = {
        sky: { card: "bg-[#eaf6fb]", avatar: "bg-[#c9eaf6]" },
        amber: { card: "bg-[#fbf6e3]", avatar: "bg-[#fbe7be]" },
      };
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="grid gap-4 md:grid-cols-2">
            {block.items.map((p) => {
              const t = tint[p.tint];
              return (
                <figure
                  key={p.name}
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
                        <span className="text-[18px] font-extrabold text-ink">
                          {p.initials}
                        </span>
                      )}
                    </div>
                    <figcaption className="flex flex-col gap-[2px]">
                      <span className="font-label text-[12px] font-semibold uppercase tracking-wide text-[#2b2bee]">
                        {p.personaLabel}
                      </span>
                      <span className="text-[20px] font-extrabold leading-tight text-ink">
                        {p.name}
                      </span>
                      <span className="text-[13px] text-muted">
                        {p.role} · {p.tier}
                      </span>
                    </figcaption>
                  </div>
                  <blockquote className="text-[16px] leading-[1.6] text-cod-gray">
                    <span aria-hidden>“</span>
                    {p.quote}
                    <span aria-hidden>”</span>
                  </blockquote>
                </figure>
              );
            })}
          </div>
        </div>
      );
    }

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
                <div className="flex flex-col gap-3 lg:w-[320px] lg:shrink-0">
                  {c.label && (
                    <p className="font-label text-[12px] uppercase tracking-wide text-muted">
                      {c.label}
                    </p>
                  )}
                  <p className="text-[20px] font-extrabold text-[#2b2bee]">
                    {c.title}
                  </p>
                  <div className="flex flex-col gap-2">
                    {c.body.map((b, i) => (
                      <p key={i} className="text-[14px] leading-[1.6] text-cod-gray">
                        {b}
                      </p>
                    ))}
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
        high: "bg-[#2b2bee] text-white",
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
                  className={`rounded-xl px-5 py-4 text-center text-[15px] font-bold ${tone[item.level]}`}
                >
                  {item.label}
                </div>
              ))}
            </div>
            {(block.topLabel || block.bottomLabel) && (
              <div className="flex w-24 shrink-0 flex-col items-center justify-between py-1">
                <span className="font-label text-[11px] uppercase tracking-wide text-muted">
                  {block.topLabel}
                </span>
                <span aria-hidden className="my-1 flex-1 text-muted">
                  ↓
                </span>
                <span className="font-label text-[11px] uppercase tracking-wide text-muted">
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
                <p className="text-[20px] font-extrabold text-[#2b2bee]">
                  {item.title}
                </p>
                {item.body.map((b, i) => (
                  <p key={i} className="text-[15px] leading-[1.6] text-cod-gray">
                    {b}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      );

    case "beforeAfter": {
      const Panel = ({ data, highlight }: { data: (typeof block)["before"]; highlight?: boolean }) => (
        <div
          className={[
            "flex flex-col gap-5 rounded-card border p-6",
            highlight ? "border-ink bg-paper" : "border-hairline bg-body-bg",
          ].join(" ")}
        >
          <div className="flex flex-col gap-3">
            <p className="font-label text-[13px] uppercase tracking-wide text-muted">
              {data.title}
            </p>
            {data.note && (
              <p className="max-w-[70ch] text-[15px] leading-[1.6] text-cod-gray">
                {data.note}
              </p>
            )}
          </div>
          {(data.pros || data.cons) && (
            <div className="grid gap-4 sm:grid-cols-2">
              {data.pros && (
                <ul className="flex flex-col gap-2">
                  {data.pros.map((p, i) => (
                    <li key={i} className="flex gap-2 text-[14px] leading-[1.5] text-cod-gray">
                      <span aria-hidden className="font-bold text-ink">+</span>
                      {p}
                    </li>
                  ))}
                </ul>
              )}
              {data.cons && (
                <ul className="flex flex-col gap-2">
                  {data.cons.map((c, i) => (
                    <li key={i} className="flex gap-2 text-[14px] leading-[1.5] text-muted">
                      <span aria-hidden className="font-bold">–</span>
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {data.images && (
            <div className="flex gap-4 overflow-x-auto pb-1">
              {data.images.map((img) => (
                <PhoneShot
                  key={img.label}
                  src={img.src}
                  alt={img.alt}
                  label={img.label}
                />
              ))}
            </div>
          )}
        </div>
      );
      return (
        <div className="flex flex-col gap-6">
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="flex flex-col gap-4">
            <Panel data={block.before} />
            <Panel data={block.after} highlight />
          </div>
        </div>
      );
    }

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
                <p className="text-[16px] font-bold text-ink">{item.title}</p>
                <p className="text-[14px] leading-[1.6] text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "impact":
      return (
        <div className="flex flex-col gap-6 rounded-card bg-card-dark p-8 lg:p-10">
          <div className="flex flex-col gap-2">
            {block.eyebrow && (
              <p className="font-label text-[13px] uppercase tracking-wide text-muted">
                {block.eyebrow}
              </p>
            )}
            {block.heading && (
              <h2 className="text-[26px] font-extrabold text-white sm:text-[32px]">
                {block.heading}
              </h2>
            )}
          </div>
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {block.stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <dt className="text-[48px] font-extrabold leading-none text-white sm:text-[56px]">
                  {s.value}
                </dt>
                <dd className="text-[14px] leading-[1.4] text-line">{s.label}</dd>
                {s.note && <dd className="text-[12px] text-muted">{s.note}</dd>}
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
                <p className="text-[15px] font-semibold text-cod-gray">{item.task}</p>
                <p className="text-[24px] font-extrabold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
          {block.note && <p className="text-[13px] text-muted">{block.note}</p>}
        </div>
      );

    case "callout": {
      const c = CALLOUT[block.tone];
      return (
        <div className={`flex flex-col gap-2 rounded-card border border-hairline border-l-4 ${c.bar} bg-paper p-6`}>
          <p className="font-label text-[12px] uppercase tracking-wide text-muted">
            {c.label}
          </p>
          <p className="text-[17px] font-bold text-ink">{block.title}</p>
          <p className="text-[15px] leading-[1.6] text-muted">{block.body}</p>
        </div>
      );
    }
  }
}
