// Footer (Figma 846:47762) — "Let's connect", contact links, a numbered nav
// that jumps to the landing tabs, and a decorative window-wall on the right.

const LINKS = [
  { label: "Linkedin", href: "https://www.linkedin.com/in/salleeee/", external: true },
  { label: "Email", href: "mailto:sallee.lsy@gmail.com", external: false },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sallee.studio?igsh=MWkxOXRiamI1cXRobw%3D%3D&utm_source=qr",
    external: true,
  },
];

// Numbered nav → the landing tabs. PortfolioTabs reads the hash and selects.
const NAV = [
  { index: "001", label: "Selected works", href: "/#portfolio" },
  { index: "002", label: "About me", href: "/#about" },
  { index: "003", label: "Say hello", href: "/#hello" },
  { index: "004", label: "Resume", href: "/#resume" },
];

// Decorative skeleton "browser windows" (mirrors the hero collage).
type Win = { l: number; t: number; w: number; h: number; lines: number };
const WINDOWS: Win[] = [
  { l: 300, t: 12, w: 300, h: 150, lines: 3 },
  { l: 560, t: 58, w: 270, h: 140, lines: 3 },
  { l: 430, t: 178, w: 240, h: 130, lines: 2 },
];
const LINE_WIDTHS = [0.9, 0.62, 0.8];

function FooterWindow({ w, h, lines }: Omit<Win, "l" | "t">) {
  return (
    <div
      style={{ width: w, height: h }}
      className="flex flex-col overflow-hidden rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-paper shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]"
    >
      <div className="flex items-center gap-[5px] border-b border-[rgba(0,0,0,0.06)] bg-[#fafafa] px-[10px] py-[9px]">
        <span className="size-[8px] rounded-full bg-[#d2d2d2]" />
        <span className="size-[8px] rounded-full bg-[#d2d2d2]" />
        <span className="size-[8px] rounded-full bg-[#d2d2d2]" />
        <span className="ml-[8px] h-[8px] w-[80px] rounded-[4px] bg-[rgba(0,0,0,0.06)]" />
      </div>
      <div className="flex flex-1 flex-col gap-[8px] p-[12px]">
        {Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            style={{ width: `${Math.round(LINE_WIDTHS[i % LINE_WIDTHS.length] * 100)}%` }}
            className="h-[8px] rounded-[4px] bg-[#eee]"
          />
        ))}
      </div>
    </div>
  );
}

/** ContactSection — the site footer. */
export function ContactSection() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-paper">
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10">
        <div className="relative overflow-hidden py-16 sm:py-20">
          {/* Decorative window wall — right side, large screens only. */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-8 hidden h-full w-[860px] lg:block"
          >
            {WINDOWS.map((win, i) => (
              <div key={i} className="absolute" style={{ left: win.l, top: win.t }}>
                <FooterWindow w={win.w} h={win.h} lines={win.lines} />
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col gap-12">
            <h2 id="footer-heading" className="text-[40px] font-semibold text-ink sm:text-[48px]">
              Let&rsquo;s connect
            </h2>

            <div className="flex flex-col gap-12 sm:flex-row sm:gap-24">
              {/* Contact links */}
              <ul className="flex flex-col gap-4 text-[18px] text-ink">
                {LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="w-fit underline-offset-4 outline-none transition-colors hover:text-base-blue hover:underline focus-visible:text-base-blue focus-visible:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Numbered nav → tabs */}
              <ul className="flex flex-col gap-3 text-[18px]">
                {NAV.map((n) => (
                  <li key={n.index}>
                    <a href={n.href} className="group flex w-fit items-center gap-4 outline-none">
                      <span className="w-8 shrink-0 tabular-nums text-muted">{n.index}</span>
                      <span className="text-ink underline-offset-4 transition-colors group-hover:text-base-blue group-hover:underline group-focus-visible:text-base-blue group-focus-visible:underline">
                        {n.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[16px] text-muted">© 2026 Sallee Lee</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
