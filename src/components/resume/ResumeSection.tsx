// Resume content — filled from Resume_2026_Sallee.docx (real).

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
      "Conducted user research, usability testing, and design validation to identify pain points and inform decisions across onboarding, dashboards, and planning tools.",
      "Designed high-fidelity prototypes and production-ready designs in Figma, ensuring consistency with established design systems and accessibility standards.",
      "Collaborated cross-functionally to support feature delivery, design QA, and iterative improvements, keeping design intent and development output aligned.",
      "Presented design rationale and trade-offs to internal stakeholders, balancing user needs, technical constraints, and business goals.",
    ],
    projects: [
      {
        name: "Tangerine Digital Wealth Platform (MVP)",
        detail:
          "Contributed to the launch of a core investing and planning experience — onboarding, portfolio views, and financial projections to help users understand and manage their wealth.",
      },
      {
        name: "RBC Financial Dashboard & Planning Tools",
        detail:
          "Designed data-dense dashboards and visualizations to improve clarity of net worth, goals, and performance, boosting user confidence and decision-making.",
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
          "Evaluated from scratch, repositioned the brand, and redesigned the website — a 35% increase in traffic and a 25% sales boost, with improved project efficiency and budgeting.",
      },
      {
        name: "Health Coach Howard Ltd. (Health Service)",
        detail:
          "Implemented a streamlined booking system, cutting steps from 5 to 2 and improving scheduling efficiency with engagement strategies.",
      },
    ],
  },
  {
    company: "EY Mtel Solutions Ltd.",
    roles: [{ title: "UX & UI Designer", dates: "Mar 2022 — Apr 2023" }],
    bullets: [
      "Led end-to-end design — from scratch and revamps — of web/mobile (iOS & Android) products for utility companies, real estate firms, logistics companies, and restaurants.",
      "Ran in-depth research, user interviews, and usability testing to identify pain points and deliver effective design solutions.",
      "Communicated with cross-functional teams and developers, and presented to clients, ensuring successful launches.",
      "Facilitated design-thinking workshops for major corporations, promoting innovation and user-centric design.",
      "Created and maintained UI design guidelines for the entire product for consistency.",
    ],
    projects: [
      {
        name: "Loyalty Membership App",
        detail:
          "Led a successful launch with 46K+ downloads in the inaugural season — user engagement, membership integration, and in-app points conversion for retention.",
      },
      {
        name: "Electric Utility Website",
        detail:
          "Achieved a 50% reduction in bounce rate and a 95% positive feedback rate, making the business easy for global investors to understand.",
      },
    ],
  },
  {
    company: "Parc Antique & Lifestyle Ltd.",
    roles: [{ title: "Creative Designer & Producer", dates: "Aug 2020 — Jan 2022" }],
    bullets: [
      "Revamped the website and regularly shared new event projects for engagement.",
      "Led the design and construction of wedding stages and installations, acting as a consultant to keep client communication smooth for memorable events.",
    ],
  },
];

const SKILLS = [
  {
    label: "Tools & Platforms",
    items: [
      "Figma", "GitHub", "Storybook", "Jira", "Claude Code", "Adobe Illustrator",
      "Photoshop", "After Effects", "PowerPoint", "Excel", "MS Teams", "InVision",
      "Sketch", "Notion", "Slack",
    ],
  },
  {
    label: "Brainstorms & Structures",
    items: [
      "AI tools (Claude, ChatGPT…)", "Miro", "Mural", "FigJam", "User flows",
      "Prototypes", "Storyboards",
    ],
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
    <section aria-labelledby="resume-heading" className="bg-body-bg">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1040px] rounded-card border border-hairline bg-paper p-6 sm:p-10 lg:p-12">
          {/* Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-3">
              <h2 id="resume-heading" className="text-[40px] font-extrabold leading-none text-ink">
                Sallee Lee
              </h2>
              <p className="text-[16px] font-semibold text-muted">
                Product Designer · UX/UI
              </p>
              <p className="max-w-[640px] text-[14px] leading-[1.6] text-cod-gray">
                6 years in the design field, specializing in UX/UI and prioritizing
                empathy, problem-solving, and logical thinking. My focus on human
                experience delivers solutions that resonate, while a detail-oriented
                approach tackles complex problems effectively.
              </p>
            </div>
            {/* TODO(resume): wire real PDF export/download. */}
            <button
              type="button"
              title="PDF download coming soon"
              className="inline-flex shrink-0 items-center gap-2 rounded-[10px] bg-ink px-[14px] py-[10px] text-[14px] font-bold text-paper outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <DownloadIcon className="size-5" />
              Download PDF
            </button>
          </div>

          {/* Contact row */}
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-6 text-[13px]">
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
              <h3 className="font-label text-[13px] uppercase tracking-wide text-muted">
                Experience
              </h3>
              <div className="mt-6 flex flex-col gap-8">
                {EXPERIENCE.map((job) => (
                  <article key={job.company} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-[18px] font-extrabold text-ink">
                        {job.company}
                      </p>
                      {job.roles.map((role) => (
                        <div
                          key={role.title + role.dates}
                          className="flex flex-wrap items-baseline justify-between gap-x-4"
                        >
                          <p className="text-[14px] font-semibold text-cod-gray">
                            {role.title}
                          </p>
                          <p className="font-label text-[12px] uppercase tracking-wide text-muted">
                            {role.dates}
                          </p>
                        </div>
                      ))}
                    </div>

                    {job.summary && (
                      <p className="text-[14px] leading-[1.6] text-muted">
                        {job.summary}
                      </p>
                    )}

                    {job.bullets && (
                      <ul className="flex flex-col gap-2">
                        {job.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="relative pl-4 text-[14px] leading-[1.6] text-cod-gray before:absolute before:left-0 before:top-[9px] before:size-[5px] before:rounded-full before:bg-line"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {job.projects && (
                      <div className="mt-1 flex flex-col gap-2">
                        <p className="font-label text-[12px] uppercase tracking-wide text-muted">
                          Selected projects
                        </p>
                        {job.projects.map((p) => (
                          <p key={p.name} className="text-[14px] leading-[1.6] text-cod-gray">
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
                <h3 className="font-label text-[13px] uppercase tracking-wide text-muted">
                  Skills
                </h3>
                <div className="mt-5 flex flex-col gap-5">
                  {SKILLS.map((group) => (
                    <div key={group.label} className="flex flex-col gap-3">
                      <p className="text-[13px] font-bold text-ink">{group.label}</p>
                      <ul className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-chip border border-hairline bg-body-bg px-[10px] py-[5px] text-[12px] font-medium text-cod-gray"
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
                <h3 className="font-label text-[13px] uppercase tracking-wide text-muted">
                  Education
                </h3>
                <div className="mt-5 flex flex-col gap-1">
                  <p className="text-[14px] font-bold text-ink">{EDUCATION.school}</p>
                  {EDUCATION.degrees.map((d) => (
                    <p key={d} className="text-[13px] leading-[1.5] text-muted">
                      {d}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-label text-[13px] uppercase tracking-wide text-muted">
                  Languages
                </h3>
                <p className="mt-5 text-[13px] leading-[1.5] text-cod-gray">
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
