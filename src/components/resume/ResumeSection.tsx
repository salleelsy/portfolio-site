// Resume content — from Resume_2026_Sallee.pdf (real). The same PDF is served
// from /public/resume for the Download button.
const RESUME_PDF = "/resume/Sallee-Lee-Resume-2026.pdf";

const SUMMARY =
  "5 years in product design, specializing in fintech and digital banking. I lead research-driven design, mentor designers, and partner cross-functionally to translate user insights into measurable impact. A detail-oriented strategist who balances empathy, business goals, and technical constraints.";

const CONTACT = [
  { label: "Portfolio", value: "www.salleeee.com", href: "https://www.salleeee.com" },
  { label: "Email", value: "sallee.lsy@gmail.com", href: "mailto:sallee.lsy@gmail.com" },
  { label: "Phone", value: "+1 (437) 366 8964", href: "tel:+14373668964" },
  { label: "Location", value: "Toronto, ON" },
];

type Role = { title: string; dates: string };
type Job = {
  company: string;
  roles: Role[];
  summary?: string;
  bullets?: string[];
  projects?: { name: string; detail: string }[];
};

const EXPERIENCE: Job[] = [
  {
    company: "Fintex Inc.",
    roles: [
      { title: "Intermediate Product Designer", dates: "Aug 2025 — Present" },
      { title: "Product Designer", dates: "Nov 2024 — Jul 2025" },
    ],
    bullets: [
      "Led end-to-end product design for a wealth management and investing platform, spanning desktop and mobile experiences, from discovery through delivery.",
      "Partnered closely with Product Managers, Engineers, QA, and Business stakeholders to translate complex financial requirements into clear, user-friendly solutions.",
      "Conducted user research and design validation to identify pain points and inform design decisions across onboarding, dashboards, and planning tools.",
      "Contributed to the internal design system and workflow optimization using Claude Code, shipping design-to-code implementations as production PRs.",
      "Designed high-fidelity prototypes and production-ready designs in Figma, ensuring consistency with established design systems and accessibility standards.",
      "Collaborated cross-functionally to support feature delivery, design QA, and iterative improvements, keeping design intent and development output aligned.",
      "Presented design rationale and trade-offs to internal stakeholders, balancing user needs, technical constraints, and business goals.",
      "Mentored junior designers on problem-solving methodology and cross-functional advocacy.",
    ],
    projects: [
      {
        name: "Tangerine Digital Wealth Platform (MVP)",
        detail:
          "Led launch of the core investing and planning experience, driving 22.3% adoption (+12.3 pts MoM) and 46.6% mobile engagement with 67.2k active clients. Diagnosed and solved three critical friction points through research and iteration — entry-point discovery, external-asset completion, and projection accuracy via insight-driven prompts — owning the end-to-end research-to-analytics feedback cycle.",
      },
      {
        name: "Enterprise Supervision & Compliance Platform (RBC Wealth Management)",
        detail:
          "Designed enterprise compliance tools for supervisors to monitor advisor activity, review regulatory exceptions, and manage investment rules. Simplified complex workflows through intuitive dashboards, data tables, and rule-management interfaces, delivering scalable UX, high-fidelity prototypes, and developer-ready specs.",
      },
    ],
  },
  {
    company: "EY Mtel Solutions Ltd.",
    roles: [{ title: "UX & UI Designer", dates: "Mar 2022 — Apr 2023" }],
    bullets: [
      "Led end-to-end design — from scratch and revamps — of web/mobile (iOS & Android) products for corporate clients.",
      "Collaborated on in-depth research, conducted user interviews, and ran usability testing to identify pain points and deliver effective design solutions.",
      "Communicated with cross-functional teams and developers, and presented to clients, ensuring successful project execution and launches.",
      "Facilitated design-thinking workshops for major corporations, promoting innovation and user-centric design.",
      "Created and maintained UI design guidelines for the entire product for consistency.",
    ],
    projects: [
      {
        name: "Loyalty Membership App",
        detail:
          "Led a successful launch with 46K+ downloads in the inaugural season — orchestrating user engagement, membership integration, and a seamless in-app points conversion for improved experience and retention.",
      },
      {
        name: "Electric Utility Website",
        detail:
          "Achieved a 50% reduction in bounce rate and a 95% positive feedback rate, creating a user-friendly platform for global investors to easily understand the business.",
      },
    ],
  },
  {
    company: "Sallee Studio Ltd.",
    roles: [{ title: "Product Designer", dates: "Jan 2022 — Present" }],
    summary:
      "Creating impactful digital products, websites, and visuals tailored to client needs.",
    projects: [
      {
        name: "Heima 1996 Ltd. (Select Store)",
        detail:
          "Ran a comprehensive evaluation from scratch, repositioned the brand, and redesigned the website — a 35% increase in traffic and a 25% sales boost, with improved project efficiency and budget evaluation.",
      },
      {
        name: "Health Coach Howard Ltd. (Health Service)",
        detail:
          "Implemented a streamlined booking system, cutting steps from 5 to 2 and improving booking actions and scheduling efficiency with engagement strategies.",
      },
    ],
  },
];

const SKILLS = [
  {
    label: "Core",
    items: [
      "Figma (flows, design systems)", "User research", "Usability testing",
      "Analytics & measurement", "Accessibility (WCAG 2.1 AA)",
    ],
  },
  {
    label: "Technical",
    items: ["Design-to-code (Claude Code)", "GitHub", "Storybook", "Jira"],
  },
  {
    label: "Domain expertise",
    items: ["Fintech", "Digital banking", "Wealth management"],
  },
];

const EDUCATION = {
  school: "The Hong Kong Polytechnic University",
  degrees: [
    "Bachelor of Interactive Media",
    "Higher Diploma of Multimedia Design and Technology",
  ],
};

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/**
 * ResumeSection — the "Resume" tab panel, presented as a clean document sheet.
 * Content is real (from Sallee's resume). The Download PDF CTA is a placeholder
 * to be wired later.
 */
export function ResumeSection() {
  return (
    <section aria-labelledby="resume-tab-heading" className="bg-body-bg">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-10">
        <h2
          id="resume-tab-heading"
          className="mb-10 text-[40px] font-semibold tracking-[-1.5px] text-ink sm:text-[56px] sm:leading-[70px]"
        >
          Resume
        </h2>
        <div className="mx-auto max-w-[1040px] rounded-card border border-hairline bg-paper p-6 sm:p-10 lg:p-12">
          {/* Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-3">
              <h2 id="resume-heading" className="text-[40px] font-semibold leading-none text-ink">
                Sallee Lee
              </h2>
              <p className="text-[18px] font-semibold text-muted">
                Product Designer · Fintech &amp; Digital Banking
              </p>
              <p className="max-w-[640px] text-[16px] leading-[1.6] text-cod-gray">
                {SUMMARY}
              </p>
            </div>
            <a
              href={RESUME_PDF}
              download="Sallee-Lee-Resume-2026.pdf"
              className="inline-flex shrink-0 items-center gap-2 rounded-[10px] bg-ink px-[14px] py-[10px] text-[16px] font-bold text-paper outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <DownloadIcon className="size-5" />
              Download PDF
            </a>
          </div>

          {/* Contact row */}
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-6 text-[16px]">
            {CONTACT.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span className="font-label uppercase tracking-wide text-muted">
                  {c.label}
                </span>
                {c.href ? (
                  <a href={c.href} className="text-ink hover:underline">
                    {c.value}
                  </a>
                ) : (
                  <span className="text-ink">{c.value}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Body: experience + sidebar */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
            {/* Experience */}
            <div>
              <h3 className="font-label text-[16px] uppercase tracking-wide text-muted">
                Experience
              </h3>
              <div className="mt-6 flex flex-col gap-8">
                {EXPERIENCE.map((job) => (
                  <article key={job.company} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-[18px] font-semibold text-ink">
                        {job.company}
                      </p>
                      {job.roles.map((role) => (
                        <div
                          key={role.title + role.dates}
                          className="flex flex-wrap items-baseline justify-between gap-x-4"
                        >
                          <p className="text-[16px] font-semibold text-cod-gray">
                            {role.title}
                          </p>
                          <p className="font-label text-[14px] uppercase tracking-wide text-muted">
                            {role.dates}
                          </p>
                        </div>
                      ))}
                    </div>

                    {job.summary && (
                      <p className="text-[16px] leading-[1.6] text-muted">
                        {job.summary}
                      </p>
                    )}

                    {job.bullets && (
                      <ul className="flex flex-col gap-2">
                        {job.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="relative pl-4 text-[16px] leading-[1.6] text-cod-gray before:absolute before:left-0 before:top-[9px] before:size-[5px] before:rounded-full before:bg-line"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {job.projects && (
                      <div className="mt-1 flex flex-col gap-2">
                        <p className="font-label text-[14px] uppercase tracking-wide text-muted">
                          Selected projects
                        </p>
                        {job.projects.map((p) => (
                          <p key={p.name} className="text-[16px] leading-[1.6] text-cod-gray">
                            <span className="font-bold text-ink">{p.name}:</span>{" "}
                            {p.detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar: skills / education / languages */}
            <aside className="flex flex-col gap-10 lg:border-l lg:border-hairline lg:pl-14">
              <div>
                <h3 className="font-label text-[16px] uppercase tracking-wide text-muted">
                  Skills
                </h3>
                <div className="mt-5 flex flex-col gap-5">
                  {SKILLS.map((group) => (
                    <div key={group.label} className="flex flex-col gap-3">
                      <p className="text-[16px] font-bold text-ink">{group.label}</p>
                      <ul className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-chip border border-hairline bg-body-bg px-[10px] py-[5px] text-[14px] font-medium text-cod-gray"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-label text-[16px] uppercase tracking-wide text-muted">
                  Education
                </h3>
                <div className="mt-5 flex flex-col gap-1">
                  <p className="text-[16px] font-bold text-ink">{EDUCATION.school}</p>
                  {EDUCATION.degrees.map((d) => (
                    <p key={d} className="text-[16px] leading-[1.5] text-muted">
                      {d}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-label text-[16px] uppercase tracking-wide text-muted">
                  Languages
                </h3>
                <p className="mt-5 text-[16px] leading-[1.5] text-cod-gray">
                  Multilingual — fluent in English, Cantonese, and Mandarin.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
