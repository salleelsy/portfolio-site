// Resume content — from Resume_Sallee_2026_Senior_product_designer.pdf (real).
// The same PDF is served from /public/resume for the Download button.
const RESUME_PDF = "/resume/Sallee-Lee-Resume-2026.pdf";

const SUMMARY =
  "Product Designer with 6 years of experience designing complex digital products across fintech, digital banking, wealth management, and enterprise platforms. I lead end-to-end UX workflows, from research and journey mapping through high-fidelity design, delivery, and iteration.";

const CONTACT = [
  { label: "Portfolio", value: "www.salleeee.com", href: "https://www.salleeee.com" },
  { label: "Email", value: "sallee.lsy@gmail.com", href: "mailto:sallee.lsy@gmail.com" },
  { label: "Phone", value: "+1 (437) 366 8964", href: "tel:+14373668964" },
  { label: "Location", value: "Toronto, ON" },
];

type Job = {
  company: string;
  /** Short monogram shown in the logo tile. */
  mark: string;
  title: string;
  dates: string;
  location?: string;
  /** Earlier role at the same company (promotion history). */
  previously?: { title: string; dates: string };
  /** Paragraphs; wrap a phrase in **double asterisks** to highlight it. */
  paragraphs: string[];
};

const EXPERIENCE: Job[] = [
  {
    company: "Fintex Inc.",
    mark: "F",
    title: "Intermediate Product Designer",
    dates: "Aug 2025 – Present",
    location: "Toronto",
    previously: { title: "Product Designer", dates: "Nov 2024 – Jul 2025" },
    paragraphs: [
      "Leading end-to-end product design for a wealth management and investing platform across desktop and mobile, owning journeys from **onboarding and account opening** through investing, transfers, dashboards, and financial planning.",
      "Launched the **Tangerine Digital Wealth Platform (MVP)**, driving **22.3% adoption (+12.3 pts MoM)** and **46.6% mobile engagement** across **67.2K active clients**, then owned the research-to-design-to-analytics loop that resolved its key friction points.",
      "Designed **RBC Wealth Management’s supervision & compliance platform**, simplifying how supervisors monitor advisor activity, review regulatory exceptions, and manage investment rules.",
      "Shipping **design-to-code with Claude Code** as production GitHub PRs, contributing to design-system standards, and mentoring junior designers.",
    ],
  },
  {
    company: "EY (Ernst & Young) Mtel Solutions Ltd.",
    mark: "EY",
    title: "UX & UI Designer",
    dates: "Mar 2022 – Apr 2023",
    paragraphs: [
      "Led end-to-end UX/UI design for web and mobile products across **banking, real estate, logistics, and utilities**, from early discovery through launch, and facilitated design-thinking workshops with major corporate clients.",
      "Designed **Kerry Logistics’ emissions reporting platform** for 300+ business units, contributing to **50% less form-management time**, **70% fewer incomplete submissions**, and **80% faster reporting**.",
      "Launched the **Chinachem Group loyalty membership app** with **46K+ downloads** in its inaugural season.",
    ],
  },
  {
    company: "Sallee Studio",
    mark: "S",
    title: "Product Designer",
    dates: "Jan 2022 – Present",
    paragraphs: [
      "Creating impactful digital products, websites, and visuals tailored to client needs.",
      "Repositioned the brand and redesigned the website for Heima 1996 (Select Store), achieving a **35% increase in traffic** and a **25% sales boost**; streamlined a health-coaching booking flow **from 5 steps to 2**.",
    ],
  },
  {
    company: "Parc Antique & Lifestyle Ltd.",
    mark: "P",
    title: "UX Designer",
    dates: "Aug 2020 – Jan 2022",
    paragraphs: [
      "Established **UX and visual design standards**, reusable UI patterns, and guidelines across retail and wedding-service digital experiences.",
      "Designed responsive websites, user flows, and prototypes for **e-commerce and service-booking** experiences, partnering with developers on content-management features.",
    ],
  },
];

const SKILLS = [
  {
    label: "Product Design",
    items: [
      "End-to-end UX", "Complex workflows", "User journeys", "Prototyping",
      "High-fidelity UI", "Usability testing", "Research", "Analytics & measurement",
    ],
  },
  {
    label: "Design Systems",
    items: [
      "Figma", "Reusable components & patterns", "UI guidelines",
      "Accessibility (WCAG 2.1 AA)", "Design QA", "Developer-ready specs",
    ],
  },
  {
    label: "GenAI & Technical",
    items: ["Claude Code", "ChatGPT", "Vercel", "Design-to-code", "GitHub", "Storybook", "Jira"],
  },
  {
    label: "Domain",
    items: ["Fintech", "Digital banking", "Wealth management", "Enterprise platforms", "B2C & B2B"],
  },
];

const EDUCATION = {
  school: "The Hong Kong Polytechnic University",
  degrees: [
    "Bachelor of Interactive Media",
    "Higher Diploma of Multimedia Design and Technology",
  ],
};

/** Renders "**phrase**" segments as highlighted (dark, medium-weight) text. */
function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-medium text-ink">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

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
    <section aria-labelledby="resume-tab-heading" className="bg-panel">
      <div className="mx-auto w-full max-w-[1360px] px-6 py-14 sm:px-10">
        <h2
          id="resume-tab-heading"
          className="mb-10 text-[40px] font-semibold tracking-[-1.5px] text-ink sm:text-[56px] sm:leading-[70px]"
        >
          Resume
        </h2>
        <div className="max-w-[1040px] rounded-card border border-hairline bg-paper p-6 sm:p-10 lg:p-12">
          {/* Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-3">
              <h2 id="resume-heading" className="text-[40px] font-semibold leading-none text-ink">
                Sallee Lee
              </h2>
              <p className="text-[18px] font-semibold text-muted">
                Product Designer · Fintech, Wealth &amp; Enterprise Platforms
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
              <ol className="mt-8 flex flex-col gap-14">
                {EXPERIENCE.map((job) => (
                  <li key={job.company} className="flex gap-4 sm:gap-6">
                    {/* Logo tile */}
                    <div
                      aria-hidden
                      className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-body-bg text-[18px] font-semibold text-ink sm:size-[60px] sm:text-[20px]"
                    >
                      {job.mark}
                    </div>

                    <article className="flex min-w-0 flex-1 flex-col">
                      <p className="text-[16px] leading-tight text-cod-gray sm:text-[18px]">
                        {job.company}
                      </p>
                      <h4 className="mt-1 text-[24px] font-medium leading-tight tracking-[-0.5px] text-ink sm:text-[30px]">
                        {job.title}
                      </h4>
                      <p className="mt-3 flex flex-wrap items-center gap-x-2 text-[15px] font-medium text-cod-gray">
                        <span>{job.dates}</span>
                        {job.location && (
                          <>
                            <span aria-hidden>•</span>
                            <span>{job.location}</span>
                          </>
                        )}
                      </p>
                      {job.previously && (
                        <p className="mt-1 text-[14px] text-muted">
                          Previously {job.previously.title}, {job.previously.dates}
                        </p>
                      )}
                      <div className="mt-3 flex flex-col gap-4 text-[16px] leading-[1.6] text-muted">
                        {job.paragraphs.map((para, j) => (
                          <p key={j}>
                            <Highlighted text={para} />
                          </p>
                        ))}
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sidebar: skills / education / languages */}
            <aside className="flex flex-col gap-10 lg:border-l lg:border-hairline lg:pl-14">
              <div>
                <h3 className="font-label text-[16px] uppercase tracking-wide text-muted">
                  Skills
                </h3>
                <div className="mt-5 flex flex-col gap-5">
                  {SKILLS.map((group) => (
                    <div key={group.label} className="flex flex-col gap-2">
                      <p className="text-[16px] font-medium text-ink">{group.label}</p>
                      <p className="text-[16px] leading-[1.7] text-cod-gray">
                        {group.items.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-label text-[16px] uppercase tracking-wide text-muted">
                  Education
                </h3>
                <div className="mt-5 flex flex-col gap-1">
                  <p className="text-[16px] font-medium text-ink">{EDUCATION.school}</p>
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
