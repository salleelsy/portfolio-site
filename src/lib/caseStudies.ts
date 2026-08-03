/**
 * Case study content — polished from Sallee's Figma case studies (node 424:4373).
 * Copy is tightened for impact; specifics (metrics, tools, dates) are kept from
 * the source. Screens are image placeholders until Sallee drops in real assets.
 */

import type { StaticImageData } from "next/image";
import loyaltyCover from "../../public/work/loyalty/cover.png";

// Static import so the cover travels with the compiled bundle (design-system
// export) as well as the Next build; both resolve through imgSrc below.
const imgSrc = (img: StaticImageData | string): string =>
  typeof img === "string" ? img : img.src;

type CaseImage = { src?: string; label: string; alt?: string; caption?: string };

export type Compare = {
  title: string;
  note?: string;
  images?: CaseImage[];
  pros?: string[];
  cons?: string[];
};

export type TierTone = "vvip" | "vip" | "passionates" | "engaged" | "supporters";
type Tier =
  | { level: string; tone: TierTone; cells: string[] }
  | { level: string; tone: TierTone; span: string };

export type PersonaTint = "sky" | "amber";
export type Persona = {
  personaLabel: string;
  name: string;
  role: string;
  tier: string;
  /** Pull quote — shown in the Personas grid, omitted on ideation-case chips. */
  quote?: string;
  initials: string;
  tint: PersonaTint;
  src?: string;
};
type IdeationCase = {
  title: string;
  label?: string;
  /** Small uppercase case number, e.g. "Case 1" (Figma 576:21412). */
  caseLabel?: string;
  /** Uppercase accent line between title and body, e.g. "Take it easy!". */
  kicker?: string;
  /** Persona chip shown above the case (same card as the Personas grid, no quote). */
  persona?: Persona;
  body: string[];
  images: CaseImage[];
};

export type Block =
  | { kind: "prose"; eyebrow?: string; heading?: string; body?: string[] }
  | { kind: "list"; eyebrow?: string; heading?: string; intro?: string; items: string[]; bulleted?: boolean }
  | {
      kind: "priorityList";
      eyebrow?: string;
      heading?: string;
      intro?: string;
      groups: { label: string; items: string[] }[];
    }
  | { kind: "image"; src?: string; label: string; alt?: string; caption?: string; ratio?: string }
  | { kind: "video"; src: string; title: string; caption?: string; vertical?: boolean }
  | {
      kind: "timeline";
      eyebrow?: string;
      heading?: string;
      items: { date: string; title: string; body?: string; status: "done" | "current" | "upcoming" }[];
    }
  | { kind: "gallery"; cols?: 2 | 3; items: CaseImage[] }
  | { kind: "screens"; eyebrow?: string; heading?: string; items: CaseImage[] }
  | { kind: "tierTable"; eyebrow?: string; heading?: string; columns: string[]; tiers: Tier[]; note?: string }
  | { kind: "personas"; eyebrow?: string; heading?: string; items: Persona[] }
  | { kind: "ideation"; eyebrow?: string; heading?: string; cases: IdeationCase[] }
  | {
      kind: "hierarchy";
      eyebrow?: string;
      heading?: string;
      items: { label: string; level: "high" | "mid" | "low" }[];
      topLabel?: string;
      bottomLabel?: string;
    }
  | { kind: "highlights"; eyebrow?: string; heading?: string; items: { title: string; body: string[] }[] }
  | { kind: "beforeAfter"; eyebrow?: string; heading?: string; before: Compare; after: Compare }
  | { kind: "features"; eyebrow?: string; heading?: string; items: { title: string; body: string }[] }
  | { kind: "impact"; eyebrow?: string; heading?: string; stats: { value: string; label: string; note?: string }[] }
  | { kind: "ratings"; eyebrow?: string; heading?: string; note?: string; items: { task: string; value: string }[] }
  | { kind: "callout"; tone: "finding" | "quickwin" | "rec"; title: string; body: string }
  | { kind: "findings"; title?: string; items: string[] }
  | { kind: "meta"; items: { term: string; desc: string }[] }
  | {
      kind: "mediaSplit";
      eyebrow?: string;
      groups: { heading: string; body: string[]; ordered?: boolean }[];
      video?: { src: string; caption?: string };
    }
  | {
      kind: "figureRow";
      card: {
        badge?: string;
        number?: number;
        title?: string;
        body: string[];
        banner?: boolean;
      };
      figure: { label: string; src?: string; alt?: string };
    };

export type CaseStudy = {
  slug: string;
  badge: string;
  client?: string;
  category: string; // portfolio card badge
  title: string;
  subtitle: string;
  cardSummary: string;
  /** 21:9 cover image, reused as the portfolio-card thumbnail. */
  cover?: string;
  /**
   * Filter tags — drawn from the landing page's filter vocabulary
   * ("Design system" | "UX" | "UI") so the banner chips and the case-study
   * grid filters stay in sync.
   */
  tags?: string[];
  /**
   * Live banner component content (Figma 576:25865) — replaces the static
   * cover image on the case-study page when present. Tags come from `tags`.
   */
  banner?: {
    title: string;
    subtitle: string;
    platform: string;
    timeline: string;
    /** Right-side artwork (phone collage), or the full-width image on "light". */
    artwork?: string;
    /** "light": in-column header (title/subtitle/tags/meta) + full-width artwork. */
    variant?: "light";
    client?: string;
    tools?: string;
  };
  meta: { role: string; timeline: string; tools: string; note?: string };
  /**
   * Sectioned layout (Figma 576:21176): each entry opens at the first block
   * whose `eyebrow` equals `title`, rendered with a SectionTitle pill header.
   * Entries appear in the sticky reading stepper unless `inStepper: false`.
   * Studies without `sections` render the classic flat block list.
   */
  sections?: { title: string; inStepper?: boolean }[];
  blocks: Block[];
};

// Loyalty-study personas — shared between the Personas grid (with quotes)
// and the ideation-case chips (without).
const ALBERT: Persona = {
  personaLabel: "Persona A",
  name: "Albert Yip",
  role: "Property buyer",
  tier: "Lv3 · Passionates — normal user",
  initials: "AY",
  tint: "sky",
};
const CHRISTY: Persona = {
  personaLabel: "Persona B",
  name: "Christy Hui",
  role: "Employee",
  tier: "Lv2 · Engaged — employee",
  initials: "CH",
  tint: "amber",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tangerine-wealth-mvp",
    badge: "Fintech · Wealth",
    client: "Fintex Inc. · Tangerine",
    category: "Product Design / 2025–26",
    title: "Launching Wealth inside a Bank's App",
    subtitle:
      "Tangerine's digital wealth MVP — scoped under hard data constraints, shipped inside a regulated app, improved by reading the post-launch numbers.",
    cardSummary:
      "Leading design on Tangerine's digital wealth MVP — a 1.3x lift in mobile engagement and +49% YoY account applications.",
    // NOTE: drop the dark phone-collage image at /public/work/wealth/banner-screens.png
    cover: "/work/wealth/banner-screens.png",
    tags: ["Design system", "UX", "UI"],
    banner: {
      variant: "light",
      title: "Launching Wealth inside a Bank's App",
      subtitle:
        "Tangerine's digital wealth MVP — scoped under hard data constraints, improved by reading the post-launch numbers.",
      platform: "iOS & Android",
      timeline: "Jul 2025 → ongoing",
      client: "Tangerine represented by Fintex",
      tools: "Figma, Jira, Perfecto",
      artwork: "/work/wealth/banner-screens.png",
    },
    meta: {
      role: "Lead Product Designer — 2 designers, vendor engagement",
      timeline: "Jul 2025 → ongoing · iOS + Android",
      tools: "Figma, Storybook, Jira, Perfecto",
      note: "Some numbers, details, and visuals are modified or omitted for confidentiality; business context is drawn from Tangerine's public announcements.",
    },
    sections: [
      { title: "Brief" },
      { title: "My role" },
      { title: "Timeline" },
      { title: "After Launch" },
      { title: "Impact" },
      { title: "Where It Stands", inStepper: false },
    ],
    blocks: [
      {
        kind: "prose",
        eyebrow: "Brief",
        heading: "A brand new wealth space for a major Canadian bank",
        body: [
          "Tangerine, a digital bank with 2M+ clients, wanted a brand new wealth space: a new tab on the navigation bar of the Tangerine mobile app. The goal was to give wealth its own place in the app, so investing reads as a distinct thing a client does with Tangerine.",
          "The MVP's job was not to be a trading tool. It was to show clients their whole financial position clearly enough that investing more felt like an informed decision, not a leap.",
        ],
      },
      {
        kind: "meta",
        items: [
          { term: "Platform", desc: "iOS & Android" },
          { term: "Timeline", desc: "Jul 2025 → ongoing" },
          { term: "Client", desc: "Tangerine digital bank" },
          { term: "Tools", desc: "Figma, Jira" },
        ],
      },
      {
        kind: "mediaSplit",
        eyebrow: "My role",
        groups: [
          {
            heading: "Overview",
            body: [
              "As lead designer on a two-person vendor design team, I owned the MVP feature design end to end and set the direction: from PRD and research to design, cross-functional workshops, design system adoption, user stories, design QA, and launch.",
            ],
          },
          {
            heading: "Teams collaborated with",
            ordered: true,
            body: [
              "Fintex PM, BA, QA, and developers (we were the vendor team)",
              "Client (bank side): design team for daily banking",
              "Compliance team",
              "Content team",
              "Marketing team",
            ],
          },
          {
            heading: "MVP in Wealth",
            ordered: true,
            body: [
              "My net worth projection graph",
              "Add external assets & liabilities",
              "Transactions & documents",
              "Learning hub",
              "My portfolio",
              "Account allocations",
              "Smart banners",
            ],
          },
        ],
        video: {
          src: "https://www.youtube.com/embed/iQojngOnmto",
          caption: "The public promotion video for the wealth MVP launch.",
        },
      },
      {
        kind: "timeline",
        eyebrow: "Timeline",
        items: [
          { date: "Jul 2025", title: "Research", body: "Competitor research", status: "done" },
          { date: "Aug – Oct 2025", title: "Design & Alignment", body: "Design, design-system extension, cross-team alignment", status: "done" },
          { date: "Oct – Dec 2025", title: "DQA", body: "Sprint delivery, QA partnership, bug triage and retest", status: "done" },
          { date: "Dec 2025", title: "Soft Launch", body: "Soft launch on iOS", status: "done" },
          { date: "Feb 2026", title: "Public Launch", body: "Public launch on iOS and Android — the first meaningful analytics read", status: "done" },
          { date: "Mar 2026 →", title: "Continuous Iteration", body: "Iteration sprints and new capabilities, ongoing", status: "current" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "After Launch",
        heading: "The analytics decided what we built next",
        body: [
          "The product team publishes a monthly impact report. My job was to read it as a designer: find which numbers pointed to a design problem rather than a market condition, flag those issues, identify whether each was a quick fix, prioritize them as low, medium, or high, and get them into the sprint through the PM.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Problem 1",
        heading: "The cul-de-sac",
      },
      {
        kind: "findings",
        items: [
          "Half of iOS clients who reached their investment account details never saw the wealth tab",
          "46.6% engaged with investments elsewhere in the app",
        ],
      },
      {
        kind: "prose",
        body: [
          "Most clients landed on their investment account details from the banking side, read the balance, and left. The wealth space was one tap away and untaken. Instead of redirecting traffic, we met them where they were.",
          "Some thought... Existing investors were used to checking their investment account through daily banking. That behaviour made sense, it's just what they were used to.",
          "So...",
        ],
      },
      {
        kind: "figureRow",
        card: {
          number: 1,
          title: "For existing investors:",
          body: [
            "We decided to provide an entry point on the account details screen itself, and introduce them into the wealth space from the account they were already checking.",
          ],
          banner: true,
        },
        figure: { label: "Spotlight modal" },
      },
      {
        kind: "figureRow",
        card: {
          number: 2,
          title: "For everyone else (no investment account users):",
          body: [
            "We decided to remove the static prospect page and introduce an interactive prospect screen. No account required: adjust the inputs, run the portfolio simulator, watch the projection respond, and start an investment journey right from there.",
          ],
        },
        figure: {
          label: "Prospect screen",
          src: "/work/wealth/prospect-screen.png",
          alt: "Prospect screen — an interactive projection showing a $5,000 investment growing to $44,500 by 2036, with conservative/balanced/growth options",
        },
      },
      {
        kind: "prose",
        eyebrow: "Problem 2",
        heading: "The projection that told mortgage holders bad news",
      },
      {
        kind: "findings",
        items: [
          "A user has a Tangerine mortgage product; the graph is always negative",
          "The 10-year projection made users feel bad, constantly emphasizing that they were in debt",
        ],
      },
      {
        kind: "prose",
        body: [
          "For clients whose only Tangerine product was a mortgage, the projection sat permanently negative because the house behind it was never added. The graph wasn't wrong, it was accurate about incomplete data, which still misinforms.",
          "“Hey! Don't forget your house is your ASSET!”",
          "So...",
        ],
      },
      {
        kind: "figureRow",
        card: {
          title: "Paired insight: a mortgage implies a home",
          body: [
            "Detect a Tangerine mortgage, then show the client a paired insight to add their real estate as an asset. It corrects the projection and teaches how the tool works. The insight banner only shows up for clients with a mortgage, with a CTA to “Add an asset.”",
          ],
        },
        figure: {
          label: "Projection graph with the paired insight banner for mortgage holders",
          src: "/work/wealth/paired-insight.png",
          alt: "Net worth screen with the paired-insight banner prompting the client to add the property linked to their Tangerine mortgage as an asset",
        },
      },
      {
        kind: "prose",
        eyebrow: "Problem 3",
        heading: "One input field that cost us completions",
      },
      {
        kind: "findings",
        items: [
          "Under 6% of clients who reached the net worth view ever reached the add-asset screen",
          "Only ~40% of those who started finished: two problems, stacked",
        ],
      },
      {
        kind: "prose",
        body: [
          "The largest drop-off in the product was adding an external asset or liability. The form asked for an effective date before the amount, a recall detail, not a number clients had on hand. People had to stop and think, or trace back what they owned, and a meaningful share never came back.",
          "So...",
        ],
      },
      {
        kind: "figureRow",
        card: {
          badge: "Quick Fix",
          body: [
            "We prepopulated the field with today's date, fully editable. Precision stays possible, but everyone else can go straight to the amount as of today, with no need to trace back and no friction completing the form. The data-quality cost is small and bounded.",
          ],
        },
        figure: { label: "Add external asset — prepopulated effective date" },
      },
      {
        kind: "impact",
        eyebrow: "Impact",
        stats: [
          { value: "1.3x", label: "lift in mobile engagement" },
          { value: "+49%", label: "mobile applications, year over year" },
          { value: "60%", label: "iOS application growth in the month had wealth" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Where It Stands",
        heading: "A strong foundation, still shipping",
        body: [
          "Satisfaction scored 7.8 over the first 90 days. Clients weren't struggling, but there's still a long way to go to make it much better.",
        ],
      },
      {
        kind: "list",
        intro: "In the future state:",
        bulleted: true,
        items: [
          "Keep iterating",
          "Portfolio focus, and integrate it into mobile, not just the website",
          "Transitioning to a brand new design system in 2027",
        ],
      },
    ],
  },

  {
    slug: "ccg-loyalty-membership",
    badge: "Loyalty & Membership",
    client: "CCG · China Chem Group",
    category: "Product Design / 2023",
    title: "Loyalty Membership for a Commercial Real Estate Group",
    subtitle:
      "Designing a five-tier membership system across malls, offices, and residences — one that users actually understand.",
    cardSummary:
      "A five-tier loyalty membership for a commercial real-estate group (CCG) — making tiers, points, and upgrade paths legible at a glance.",
    cover: imgSrc(loyaltyCover),
    tags: ["UX", "UI"],
    banner: {
      title: "5-tier membership system for a commercial real estate group",
      subtitle:
        "Designing a five-tier membership system across malls, offices, and residences. One that users actually understand.",
      platform: "iOS & Android",
      timeline: "12 Weeks",
      artwork: "/work/loyalty/banner-screens.png",
    },
    meta: {
      role: "Product Designer",
      timeline: "Jan 2023 — Apr 2023",
      tools: "Figma, Miro, Microsoft Azure, Cloudifier",
    },
    sections: [
      { title: "Project Overview" },
      { title: "Background" },
      { title: "Problem Statement", inStepper: false },
      { title: "Challenge 1" },
      { title: "Challenge 2" },
      { title: "Challenge 3" },
    ],
    blocks: [
      {
        kind: "prose",
        eyebrow: "Project Overview",
        heading: "A loyalty app that keeps people motivated to level up",
        body: [
          "CCG runs shopping malls, offices, and residences. The goal: one comprehensive loyalty app with a membership-tier system that keeps users motivated to earn points and move up — without overwhelming them with numbers.",
          "The core question: how important is it for users to actually understand “membership tiers,” and how do we make that legible at a glance?",
        ],
      },
      {
        kind: "tierTable",
        eyebrow: "Background",
        heading: "Five tiers, four ways to move up",
        columns: ["Tier", "Employees", "By invitation", "By Mission Points", "By Spending Points"],
        tiers: [
          { level: "LV 5 · VVIP", tone: "vvip", cells: ["–", "1st-hand property buyer < $60M", "–", "–"] },
          { level: "LV 4 · VIP", tone: "vip", cells: ["–", "1st-hand property buyer < $30M", "24,000 pts+ / 12 mos", "$300K+ / 12 mos & any 1 Mission"] },
          { level: "LV 3 · Passionates", tone: "passionates", cells: ["Complete 10 employee missions", "1st-hand property buyer > $30M", "8,000 pts+ / 12 mos", "$30K+ / 12 mos"] },
          { level: "LV 2 · Engaged", tone: "engaged", cells: ["All employees", "Current residential residents / tenants / offices / employees", "–", "$1K+ same day / $3K in 6 mos"] },
          { level: "LV 1 · Supporters", tone: "supporters", span: "Open to all individuals, age 11+" },
        ],
        note: "Members move up (upgrade) or down (downgrade) tiers based on spending, missions, invitation, or employee status.",
      },
      {
        kind: "priorityList",
        eyebrow: "Problem Statement",
        heading: "What does a user actually need to understand about tiers?",
        intro:
          "Six things — but not equally. Ranking them by priority became the backbone of every screen decision.",
        groups: [
          {
            label: "Primary",
            items: [
              "Current tier",
              "Total points",
              "Accumulated points to upgrade",
            ],
          },
          {
            label: "Secondary",
            items: [
              "Keep-grade & downgrade requirements",
              "Mission points",
              "Tier benefits",
            ],
          },
        ],
      },
      {
        kind: "beforeAfter",
        eyebrow: "Challenge 1",
        heading: "Is it possible to show all points information on one screen?",
        before: {
          title: "Before",
          note: "Our early brief was to show everything on the homepage — spending points, mission points, current tier, and upgrade progress all at once.",
          images: [{ src: "/work/loyalty/before.png", label: "Before — homepage", alt: "Crowded homepage showing all points and upgrade progress" }],
          pros: ["Shows most of the points information", "Users can visualise their upgrade progress"],
          cons: [
            "Overwhelming amount of information",
            "Users may feel discouraged from upgrading rather than motivated",
          ],
        },
        after: {
          title: "After",
          note: "After walking stakeholders through the problems with v1, we minimised the tier information on the homepage — down to total points and current tier — and moved upgrade progress into a slide-down panel.",
          images: [
            { src: "/work/loyalty/after-home.png", label: "After — mall homepage", alt: "Simplified homepage with total points and current tier" },
            { src: "/work/loyalty/after-progress.png", label: "After — upgrade progress", alt: "Slide-down upgrade progress panel" },
          ],
          pros: [
            "Minimised tier information — total points + current tier only",
            "Focuses on the core need — “how many points to upgrade”",
            "Moves “View Upgrade Progress” into a slide-down panel",
          ],
        },
      },
      {
        kind: "prose",
        eyebrow: "Challenge 2",
        heading: "A complicated upgrade system",
        body: [
          "Members reach the same tier in different ways — spending, missions, invitation, or employee status. That flexibility is powerful, but it left users unsure what actually counts.",
        ],
      },
      {
        kind: "personas",
        heading: "Personas",
        items: [
          {
            ...ALBERT,
            quote:
              "The requirement to upgrade to the next level (Lv4 · VIP) is to spend $300K and complete one mission. How is ‘one mission’ defined?",
          },
          {
            ...CHRISTY,
            quote:
              "Do I only need to complete one of the requirements (Employee Missions / Missions / Spending) to upgrade to the next level?",
          },
        ],
      },
      {
        kind: "ideation",
        heading: "Ideations",
        cases: [
          {
            title: "Completed spending goal, no mission points",
            caseLabel: "Case 1",
            kicker: "Take it easy!",
            persona: ALBERT,
            body: [
              "Albert tracks his upgrade progress bar at the top of the Membership Tier page.",
              "Once the spending goal is complete, the Missions progress bar takes priority.",
              "The 0/1 Missions ring only shows for users who haven’t earned any mission points yet.",
            ],
            images: [
              { label: "Missions 0 / 1 progress", src: "/work/loyalty/case1-mission.png", alt: "Membership tiers — Mission 0 of 1 progress ring" },
              { label: "Spending goal completed", src: "/work/loyalty/case1-congrats.png", alt: "Membership tiers — spending goal reached, congratulations" },
            ],
          },
          {
            title: "Completed one mission goal",
            caseLabel: "Case 2",
            kicker: "I got Missions points!",
            persona: ALBERT,
            body: [
              "If a user has earned any mission points, both the Spending and Missions progress bars are displayed.",
            ],
            images: [
              { label: "Spending progress", src: "/work/loyalty/case2-spending.png", alt: "Membership tiers — spending progress ring" },
              { label: "Mission points progress", src: "/work/loyalty/case2-missions.png", alt: "Membership tiers — mission points progress ring" },
            ],
          },
          {
            title: "Employee missions, kept separate",
            caseLabel: "Case 3",
            kicker: "Employee edition!",
            persona: CHRISTY,
            body: [
              "An “Employee Missions” section is added for employee users only.",
              "A separate column keeps personal points from mixing with employee missions.",
            ],
            images: [{ label: "Employee Missions", src: "/work/loyalty/employee.png", alt: "Membership tiers — employee missions section" }],
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Challenge 3",
        heading: "How do users know they might keep — or lose — their tier?",
        body: [
          "The Membership Tier page ranks information by what matters most to the user. Renewal — how to keep your current grade — sits at the very bottom, below upgrade progress and upgrade requirements.",
        ],
      },
      {
        kind: "hierarchy",
        eyebrow: "Hierarchy",
        heading: "How I ranked the information on the page",
        items: [
          { label: "Upgrade Progress", level: "high" },
          { label: "Upgrade Requirement", level: "mid" },
          { label: "Membership Renewal (Keep Grade)", level: "low" },
        ],
        topLabel: "Important",
        bottomLabel: "Less important",
      },
      {
        kind: "highlights",
        items: [
          {
            title: "Why last?",
            body: [
              "The goal is to encourage users to upgrade — not just maintain their grade or worry about downgrading. “Membership Renewal” is a notice of lesser importance, there to help users understand the criteria for keeping their tier.",
            ],
          },
          {
            title: "Downgrade without notice? No!",
            body: [
              "When there's only one month left until the renewal deadline, users get reminders via message box and light-box notifications in their profile — so there's nothing to worry about.",
            ],
          },
        ],
      },
      {
        kind: "screens",
        heading: "In the UI",
        items: [
          { label: "Membership renewal", src: "/work/loyalty/renewal.png", alt: "Membership tiers screen with the Membership Renewal panel at the bottom" },
          { label: "Profile — points expiry", src: "/work/loyalty/profile-expiry.png", alt: "Profile card showing 100 points expiring on 30 Jun 2024" },
        ],
      },
    ],
  },

  {
    slug: "utility-app-usability",
    badge: "NDA Project",
    category: "UX Research / 2024",
    title: "Electric Utility App",
    subtitle: "A usability test to validate core functions before launch.",
    cardSummary:
      "A qualitative usability study on an electric utility app — 15 interviews, scored tasks, and prioritized, shippable fixes.",
    tags: ["UX"],
    meta: {
      role: "UX Researcher & Designer",
      timeline: "2024",
      tools: "Figma, Miro",
      note: "meta inferred from the study — confirm role/timeline",
    },
    blocks: [
      {
        kind: "prose",
        eyebrow: "Overview",
        heading: "Validate the app's core functions with real users",
        body: [
          "Before launch, we ran a usability test to validate the selected functions of an electric utility app and to surface the issues that would hurt adoption.",
        ],
      },
      {
        kind: "features",
        eyebrow: "The Whole Process",
        heading: "Four stages, end to end",
        items: [
          { title: "1 · Recruitment", body: "Screening survey to recruit study participants based on their profile and app usage." },
          { title: "2 · Usability Interview", body: "Observe interaction, uncover pain points with the 5 Whys, and benchmark against other apps." },
          { title: "3 · Qualitative Analysis", body: "Highlight quotes, affinity-map and cluster, and map pain points to the experience." },
          { title: "4 · Ideation", body: "Ideate solutions, then evaluate and select the strongest as recommendations." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Methodology",
        heading: "Qualitative > Quantitative",
        body: [
          "For UX work we lean qualitative: it informs design decisions and identifies usability issues with a few participants and flexible study conditions.",
          "Why five participants per segment? Research shows roughly 85% of usability issues surface with just five users — so we invest depth over volume.",
        ],
      },
      {
        kind: "impact",
        eyebrow: "Study at a glance",
        stats: [
          { value: "45", label: "screening-survey responses" },
          { value: "15", label: "in-depth 1-on-1 interviews", note: "45 min – 1 hr each" },
          { value: "3", label: "core tasks tested" },
        ],
      },
      {
        kind: "features",
        eyebrow: "Usability Tasks",
        heading: "Three tasks covering the core features",
        items: [
          { title: "Task A", body: "AOL registration & SSO binding" },
          { title: "Task B", body: "Payment record & e-payment" },
          { title: "Task C", body: "Application progress tracking" },
        ],
      },
      {
        kind: "ratings",
        eyebrow: "Qualitative Analysis",
        heading: "Usability rate by task",
        note: "The usability rate is the average score given by the 15 participants across five dimensions.",
        items: [
          { task: "Task A · Registration & SSO", value: "3.5 / 5" },
          { task: "Task B · Payment", value: "4.7 / 5" },
          { task: "Task C · Progress tracking", value: "2.3 / 5" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Insights & Recommendations",
        heading: "Let's focus on Task C — application progress tracking",
        body: [
          "Only 53% of users (8/15) tracked application progress in the app. The rest went around it — 47% (7/15) used email and one user called customer service.",
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        title: "Finding 1 — Users can't find customer service",
        body: "When a user wanted help, there was no clear in-app entry point to reach support.",
      },
      {
        kind: "callout",
        tone: "quickwin",
        title: "Quick win — add a customer-service entry point",
        body: "A visible way to reach support from the tracking flow removes a dead end and reduces off-app workarounds.",
      },
      {
        kind: "callout",
        tone: "finding",
        title: "Finding 2 — Friction from extra requirements",
        body: "27% of users (4/15) copied their reference number from email to complete tracking — an avoidable, error-prone step.",
      },
      {
        kind: "callout",
        tone: "rec",
        title: "Recommendation — reduce the lookup friction",
        body: "Split the verified reference number and telephone fields, and log enquired applications into “Progress” so a number typed once is remembered.",
      },
      {
        kind: "callout",
        tone: "finding",
        title: "Finding 3 — No way back to the previous page",
        body: "53% of users (8/15) wanted to return to the application list but had no path back.",
      },
      {
        kind: "callout",
        tone: "rec",
        title: "Recommendation — add a back entry point",
        body: "“Enquire Another Application Progress” gives users a clear way back to the previous step.",
      },
      {
        kind: "features",
        eyebrow: "Next Steps",
        heading: "From findings to a plan",
        items: [
          { title: "Prioritisation", body: "Bring all usability items together and run a prioritisation workshop with the team." },
          { title: "Product Roadmap", body: "Scope Now / Next / Future goals against resources and timeline." },
          { title: "Implement Fix", body: "Collaborate across departments to ship the fixes." },
        ],
      },
    ],
  },

  {
    slug: "logistics-emissions-dashboard",
    badge: "NDA Project",
    category: "Product Design / 2024",
    title: "Logistics Company Internal Dashboard",
    subtitle: "A centralised platform for teams to manage emissions data and reporting.",
    cardSummary:
      "A centralised emissions dashboard for a logistics group that cut form-management time in half and made reporting far more accurate.",
    tags: ["UX", "UI"],
    meta: {
      role: "Product Designer",
      timeline: "4 months",
      tools: "Figma, Miro, Survey.js",
    },
    blocks: [
      {
        kind: "prose",
        eyebrow: "Project Overview",
        heading: "Replacing manual form-wrangling with one source of truth",
        body: [
          "The dashboard solves the inefficiency caused by manual, scattered form management. HQ admins were juggling 300+ submissions from business units every month.",
          "I managed the full design process — from research through delivery — meeting the client's requirements while working within limited engineering resources.",
        ],
      },
      { kind: "gallery", cols: 2, items: [
        { label: "HQ Admin — journey map" },
        { label: "BU PIC — journey map" },
      ]},
      {
        kind: "prose",
        eyebrow: "Problem Statement",
        heading: "How can we streamline how HQ admins manage hundreds of forms?",
        body: [
          "Admins needed to collect, chase, validate, and report on 300+ monthly submissions — across business units with very different data.",
        ],
      },
      { kind: "image", label: "Workflow structure", ratio: "16/9" },
      {
        kind: "features",
        eyebrow: "Features",
        heading: "Three features that carry the workflow",
        items: [
          { title: "1 · Status Sorting", body: "Admins, team heads, and BU PICs each get a view sorted to their role, so everyone sees what needs their attention first." },
          { title: "2 · Progress Tracking Bar", body: "An “OR”-logic filter surfaces companies by progress — green = done, light orange = pending — so monthly checks take seconds." },
          { title: "3 · Emission Dashboard", body: "After 300+ forms come in, the dashboard aggregates and visualises emissions so the admin can report at a glance." },
        ],
      },
      {
        kind: "impact",
        eyebrow: "Outcome",
        heading: "The impact",
        stats: [
          { value: "50%", label: "less time on form management" },
          { value: "70%", label: "fewer incomplete submissions" },
          { value: "85%", label: "of users reported higher satisfaction" },
          { value: "80%", label: "faster report generation" },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
