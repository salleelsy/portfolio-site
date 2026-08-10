/**
 * Case study content — polished from Sallee's Figma case studies (node 424:4373).
 * Copy is tightened for impact; specifics (metrics, tools, dates) are kept from
 * the source. Screens are image placeholders until Sallee drops in real assets.
 */

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
      kind: "toolStack";
      eyebrow?: string;
      heading?: string;
      items: { name: string; desc: string; logo: string }[];
    }
  | {
      kind: "flip";
      eyebrow?: string;
      heading?: string;
      columns: { label: string; items: { text: string; design?: boolean }[] }[];
    }
  | {
      kind: "pipeline";
      eyebrow?: string;
      heading?: string;
      intro?: string;
      steps: { owners: string[]; title: string; desc: string; tools?: string[]; design?: boolean }[];
      note?: string;
    }
  | {
      kind: "figureRow";
      card: {
        badge?: string;
        number?: number;
        title?: string;
        body: string[];
        /** Optional image dropped inside the card, below the body. */
        image?: string;
      };
      figure: { label: string; src?: string; alt?: string; video?: string };
    };

export type CaseStudy = {
  slug: string;
  badge: string;
  client?: string;
  category: string; // portfolio card badge
  title: string;
  subtitle: string;
  cardSummary: string;
  /** Placeholder card: shows a "Coming Soon" tag and isn't clickable yet. */
  comingSoon?: boolean;
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

const RAW_CASE_STUDIES: CaseStudy[] = [
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
    tags: ["UX", "UI", "Research"],
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
          image: "/work/wealth/unlock-banner.png",
        },
        figure: { label: "Spotlight modal", video: "/work/wealth/cul-de-sac.mp4" },
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
          image: "/work/wealth/prepopulated-date.png",
        },
        figure: {
          label: "Add external asset — prepopulated effective date",
          src: "/work/wealth/add-asset.png",
          alt: "Add external asset form with the effective date prepopulated to today's date",
        },
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
    cover: "/work/loyalty/5tier-membership-banner.png",
    tags: ["UX", "UI"],
    banner: {
      variant: "light",
      title: "5-tier membership system for a commercial real estate group",
      subtitle:
        "Designing a five-tier membership system across malls, offices, and residences. One that users actually understand.",
      platform: "iOS & Android",
      timeline: "12 Weeks",
      client: "CCG · China Chem Group",
      tools: "Figma, Miro",
      artwork: "/work/loyalty/5tier-membership-banner.png",
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
        kind: "meta",
        items: [
          { term: "Platform", desc: "iOS & Android" },
          { term: "Timeline", desc: "12 Weeks" },
          { term: "Client", desc: "CCG · China Chem Group" },
          { term: "Tools", desc: "Figma, Miro" },
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
    slug: "wealth-studio-design-system",
    badge: "Design Systems",
    category: "Design Systems / 2026",
    title: "Storybook became the source of truth",
    subtitle:
      "Building a 100+ component design system for Wealth Studio — an internal portfolio-management tool for advisors — and what it taught me about where design sits in the sequence now.",
    cardSummary:
      "A 100+ component design system for an internal advisor tool, built in a code-first loop where Storybook — not Figma — was the source of truth.",
    tags: ["Design System", "UI", "AI"],
    cover: "/work/wealth-studio/banner.png",
    banner: {
      variant: "light",
      title: "One component, one pull request",
      subtitle:
        "Building a 100+ component design system for Wealth Studio, and what it taught me about where design sits in the sequence now.",
      platform: "Internal website",
      timeline: "6 weeks",
      artwork: "/work/wealth-studio/banner.png",
    },
    meta: {
      role: "Product designer, design-system workstream",
      timeline: "2026 · ongoing",
      tools: "Figma, Storybook, GitHub, Claude Code, Greptile",
      note: "Screens are from an internal advisor tool; component names, product naming, and screenshots are held as placeholders pending NDA review.",
    },
    sections: [
      { title: "Overview" },
      { title: "The old model" },
      { title: "The pipeline" },
      { title: "What changed" },
      { title: "Sequencing" },
      { title: "Takeaways", inStepper: false },
    ],
    blocks: [
      {
        kind: "prose",
        eyebrow: "Overview",
        heading: "The product, briefly",
        body: [
          "Wealth Studio is a portfolio-management system built for advisors inside the bank. It covers deposits and withdrawals, asset allocation, glide paths, rebalancing, and tax analysis, and it replaces a legacy tool advisors use every working day.",
          "My job was the design system underneath it: 100+ components, split across three designers, sequenced by priority so engineering never had to wait on design to unblock a build.",
          "That's the product. This case study is about something else, because the way we built it looked almost nothing like the way I built things a year ago.",
        ],
      },
      {
        kind: "meta",
        items: [
          { term: "Platform", desc: "Internal website" },
          { term: "Timeline", desc: "6 weeks" },
          { term: "Client", desc: "Canadian major banks" },
          { term: "Tools", desc: "Claude Code, Storybook, Figma, Github" },
        ],
      },
      {
        kind: "toolStack",
        heading: "The stack that replaced the old workflow",
        items: [
          { name: "Lovable", logo: "lovable", desc: "Where the first working prototype gets built." },
          { name: "GitHub", logo: "github", desc: "One main repo, one component per pull request." },
          { name: "Storybook", logo: "storybook", desc: "Every component actually in use, and the source of truth." },
          { name: "Figma", logo: "figma", desc: "Where the direction gets refined, not where components originate." },
          { name: "Claude Code", logo: "claude", desc: "Moves components between code and canvas, and opens the PRs." },
          { name: "Greptile", logo: "greptile", desc: "Reviews every pull request before a human does." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "The old model",
        heading: "Design used to go first",
        body: [
          "On every project before this one, the order was the same. A PRD gets written, a designer opens Figma, a spec gets reviewed and approved, engineering builds toward it. Figma was the source of truth. If the product and the Figma file disagreed, the Figma file won the argument.",
          "That model assumes design happens first and code catches up. On this project, the order flipped.",
        ],
      },
      {
        kind: "flip",
        columns: [
          {
            label: "Before: Design leads",
            items: [
              { text: "PRD written" },
              { text: "Designer explores in Figma", design: true },
              { text: "Spec reviewed and approved", design: true },
              { text: "Handoff to engineering" },
              { text: "Engineering builds toward the file" },
              { text: "Figma stays the reference" },
            ],
          },
          {
            label: "Now: Design defines",
            items: [
              { text: "PO prototypes in Lovable" },
              { text: "PRD written from the prototype" },
              { text: "Engineering builds the repo + Storybook" },
              { text: "Designer reviews what exists", design: true },
              { text: "Designer refines and ships a PR", design: true },
              { text: "Storybook stays the reference" },
            ],
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "The pipeline",
        heading: "The actual pipeline, and who owns each step",
        body: [
          "Here is the loop we ran, start to finish, for every component. The part worth looking at is the sequence: design doesn't appear until step four.",
        ],
      },
      {
        kind: "pipeline",
        steps: [
          { owners: ["PO"], title: "Prototype in Lovable", desc: "Built on Shadcn Ui and Lucide icons as the starting foundation. Not a polished design, a working approximation of the flow.", tools: ["Lovable"] },
          { owners: ["PO"], title: "Write the PRD", desc: "Written off the back of something that already runs, not ahead of it." },
          { owners: ["Engineer"], title: "Build infrastructure, main repo, Storybook", desc: "Storybook captures every component actually in use. This is the moment the system gets a canonical home, and it isn't Figma.", tools: ["GitHub", "Storybook"] },
          { owners: ["Designer"], title: "Review Storybook and Lovable together", desc: "Check the user flow and UI against what has been built, not against a file that doesn't exist yet.", tools: ["Storybook", "Lovable"], design: true },
          { owners: ["Designer"], title: "Clone the repo locally", desc: "Preview changes against the real thing instead of a static mockup.", design: true },
          { owners: ["Designer + AI"], title: "Pull components into Figma with Claude Code and the Figma MCP", desc: "Components travel from code to canvas. Figma stops being where they originate.", tools: ["Claude Code", "Figma"], design: true },
          { owners: ["Designer"], title: "Set the core direction in Figma", desc: "Spacing, padding, and the small/ medium/ large scale across text, graphics, and icons. The judgment layer on top of what already exists.", tools: ["Figma"], design: true },
          { owners: ["Designer"], title: "Competitor research and internal review", desc: "Where variants get argued about before they get written.", tools: ["Figma", "Storybook"], design: true },
          { owners: ["Designer + AI"], title: "Open a PR through Claude Code, using SKILLS.md", desc: "One component per PR, so any issue traces back to a single isolated change.", tools: ["Claude Code", "GitHub"], design: true },
          { owners: ["Bot"], title: "Greptile reviews the PR", desc: "Checks alignment before a human looks at it. Anything it flags goes back into Claude to resolve, not into a comment thread to die.", tools: ["Greptile", "Claude Code"] },
          { owners: ["PO", "Engineer"], title: "Review and merge", desc: "The last gate is a human one, and by then the change is small enough to read in a sitting.", tools: ["GitHub"] },
          { owners: ["Everyone"], title: "Rebase, daily", desc: "Three designers and a team of engineers ship into the same repo. Nothing is static while you're working on it, including the parts you didn't touch." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What changed",
        heading: "What actually changed for me",
        body: [
          "5 things shifted.",
          "About authority, anticipation, what a deliverable is, who reviews it first, and how stable the ground is under a design.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Authority",
        heading: "Figma lost its authority, and I had to learn to trust the code",
        body: [
          "For most of my career, if Figma and the shipped product disagreed, Figma won. On this project, if my Figma file drifted from Storybook, I was the one who was wrong.",
          "That's a real shift in where design authority lives. It meant reading a component's current state in code before forming an opinion about it, and treating the live library as the thing to be described accurately rather than the thing to be corrected.",
        ],
      },
      {
        kind: "image",
        src: "/work/wealth-studio/storybook-alert.png",
        label: "The Alert component in Storybook",
        caption:
          "Every variant, prop, and control lives here with real product content. Storybook documented every states, animations, interactions, etc.",
      },
      {
        kind: "prose",
        eyebrow: "Anticipation",
        heading: "I had to think in variants before I had feedback to work from",
        body: [
          "Storybook documents existing components, but it doesn't capture every possible variation for future usage. We needed to design additional states, sizes, and component combinations that hadn't been defined yet.",
        ],
      },
      {
        kind: "image",
        src: "/work/wealth-studio/alert.png",
        label: "The Alert component expanded in Figma",
      },
      {
        kind: "image",
        src: "/work/wealth-studio/figma-components.png",
        label: "Every component mapped out in Figma",
        caption:
          "Types, states, and styles mapped out so engineering had a complete surface to build against, rather than the one case the prototype happened to need.",
      },
      {
        kind: "prose",
        eyebrow: "Deliverable",
        heading: "The deliverable stopped being a file and started being a PR",
        body: [
          "Opening PRs through Claude Code, one component at a time, meant the artifact I was accountable for wasn't a frame on Figma anymore. It was a change to the codebase that either passed review or didn't. And each of the pull request, I have the responsibility to make it legible to a reviewer who wasn't in the conversation where the decision was made.",
          "The 1 component per PR rule was the constraint that made this workable. It kept every change small enough for an engineer to trace, and it kept me honest about scope: if a PR started sprawling, that was a signal the component boundary was wrong.",
        ],
      },
      {
        kind: "image",
        src: "/work/wealth-studio/create-pr.png",
        label: "The pull request that shipped the change",
        caption:
          "The controls panel on the right is the part that shaped my work: props are the real specification, so the design decision has to survive being expressed as one.",
      },
      {
        kind: "prose",
        eyebrow: "Review",
        heading: "A bot joined the critique loop",
      },
      {
        kind: "image",
        src: "/work/wealth-studio/review-bot.png",
        label: "Greptile's automated review on a pull request",
      },
      {
        kind: "prose",
        body: [
          "Greptile reviewing every PR before a human touched it changed what the first pass of review means. It isn't taste, it's whether the change is structurally consistent with the rest of the system. Feedback stopped being a comment thread and became something you resolve by running it back through Claude.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Instability",
        heading: "Daily rebasing meant designing inside a system that never holds still",
        body: [
          "In the old workflow, an approved spec was stable. Here the ground could move under a component I'd already shipped, because someone else's change landed nearby. Rebasing daily wasn't housekeeping, it was the only way to know what you were designing against.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Sequencing",
        heading: "Sequencing 100+ components across three designers",
        body: [
          "With a repo changing daily and no single approval gate, the coordination problem was as real as the design problem. We sorted every component into four priority bands and tracked status on a shared board, so anyone could see at a glance what was in progress, what was waiting on review, and what had already shipped.",
          "Each component carries its own PR number and status, so the board doubles as an index into the repo. Statuses like “Ready to create PR,” “To be reviewed,” and “Need to merge PR again” were the shared vocabulary for three people working in parallel.",
        ],
      },
      {
        kind: "list",
        intro: "Every component was sorted into four priority bands:",
        bulleted: true,
        items: ["Critical", "High", "Medium", "Low"],
      },
      {
        kind: "prose",
        eyebrow: "Takeaways",
        heading: "The biggest shift wasn't a tool. It was where design sits in the sequence.",
        body: [
          "Design used to happen before code. In this project, it became the layer that refined, governed, and kept a system coherent while engineers and AI tools were building it in parallel.",
          "That changed what a design system role meant. It was less about handing off specs and more about keeping work created by people and AI consistent, traceable, and easy to review.",
          "The clearest difference is how “done” feels. A year ago, I finished by closing a Figma file. Now, I finish by opening a pull request and seeing whether my decisions survive implementation.",
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
    tags: ["UX"],
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

  {
    slug: "advisor-supervision-dashboard",
    badge: "Fintech · Compliance",
    category: "Product Design",
    title: "Advisor Supervision Dashboard",
    subtitle:
      "Turning a spreadsheet-like violation list into a guided supervision workflow for branch directors and advisors.",
    cardSummary:
      "From a violation list to a supervision workflow — giving branch directors a guided path from a flagged trade to a signed-off day.",
    cover: "/work/advisor-supervision/banner.png",
    tags: ["UX", "UI"],
    banner: {
      variant: "light",
      title: "From a violation list to a supervision workflow",
      subtitle:
        "Giving branch directors and advisors a guided path from a flagged trade to a signed-off day, without losing the record along the way.",
      platform: "Enterprise web app",
      timeline: "10 weeks",
      artwork: "/work/advisor-supervision/banner.png",
      client: "Wealth management compliance",
      tools: "Figma",
    },
    meta: {
      role: "Sole product designer, client facing",
      timeline: "10 weeks",
      tools: "Figma",
      note: "Some screens, names, and details are modified or omitted for confidentiality.",
    },
    sections: [
      { title: "The situation" },
      { title: "How I worked" },
      { title: "The product" },
      { title: "Challenge 1" },
      { title: "Challenge 2" },
      { title: "Challenge 3" },
      { title: "What changed", inStepper: false },
    ],
    blocks: [
      // ── The situation ──
      {
        kind: "prose",
        eyebrow: "The situation",
        heading: "More compliance data made the work slower, not clearer.",
        body: [
          "Branch directors are responsible for monitoring investment advisor activity across a growing number of accounts, rules, and violations. As the volume of compliance data increased, identifying the highest-priority issues became slower and more cognitively demanding.",
          "I was brought in to redesign the experience so supervisors could quickly surface critical risks, investigate them with enough context, and take compliant actions efficiently.",
        ],
      },
      {
        kind: "meta",
        items: [
          { term: "Role", desc: "Sole product designer, client facing" },
          { term: "Product", desc: "Internal trade-supervision platform, enterprise web" },
          { term: "Users", desc: "Branch directors and investment advisors" },
          { term: "Contribution", desc: "Discovery, workshops, end-to-end design, client readouts" },
        ],
      },
      {
        kind: "prose",
        heading: "Supervision ran like a spreadsheet.",
        body: [
          "The existing experience had little real interface to it. Violations were listed as rows of data, and that was mostly where the help ended. There was no signal for what mattered most, no pathway to investigate why a trade was flagged, and nowhere to record a decision once it was made. Supervisors carried the rules in their heads and assembled context by hand.",
        ],
      },

      // ── How I worked ──
      {
        kind: "prose",
        eyebrow: "How I worked",
        heading: "As the only designer, I had to get the flow right before the screens.",
        body: [
          "I owned the work from discovery to final design and presented at every client readout. The engagement ran in three phases, anchored by workshops with the people who actually do supervision.",
        ],
      },
      {
        kind: "features",
        items: [
          {
            title: "Phase 1 · Evaluate and level set (2 weeks)",
            body: "User-needs and kick-off workshops, a walkthrough of the existing tool, and stakeholder interviews. I defined the personas and the future-state journey.",
          },
          {
            title: "Phase 2 · Design and refine (6 weeks)",
            body: "Prioritization and roadmap workshops, then iterating concepts and prototypes and testing the key moments of the flow with branch directors and advisors.",
          },
          {
            title: "Phase 3 · Focus and prioritize (2 weeks)",
            body: "High-fidelity designs, a final readout, and a phased roadmap that prioritized the MVP against technical feasibility and data availability.",
          },
        ],
      },
      {
        kind: "image",
        src: "/work/advisor-supervision/engagement-timeline.png",
        label: "Engagement timeline",
        alt: "Three-phase engagement timeline: evaluate and level set, design and refine, focus and prioritize.",
        caption: "Engagement timeline, workshops and activities per phase",
      },

      // ── The product at a glance ──
      {
        kind: "prose",
        eyebrow: "The product",
        heading: "One place to plan the day, work the violations, and close it out.",
      },
      {
        kind: "features",
        heading: "Navigation architecture",
        items: [
          { title: "Overview", body: "Dashboards, plus dedicated pages for a single advisor or client." },
          { title: "Work Items", body: "The blotters worked through each period: the daily Trade Review, the monthly Electronic Monthly Review, and periodic PAT and Bulk Account reviews." },
          { title: "Summary of Work", body: "The starting point: every branch blotter and where it stands today." },
          { title: "RFIs", body: "Requests for information sent to advisors, and their replies." },
          { title: "Reporting", body: "PAT and Bulk Account reports." },
        ],
      },
      {
        kind: "image",
        src: "/work/advisor-supervision/nav-architecture.png",
        label: "Navigation architecture",
        alt: "Product navigation: Overview, Work Items, Summary of Work, RFIs, and Reporting.",
        caption: "Product navigation architecture",
      },
      {
        kind: "prose",
        body: [
          "A single supervision day moves through six moments. The same blotter and review pattern carries across the daily and monthly work, and everything in this case study lives inside this flow.",
        ],
      },
      {
        kind: "features",
        heading: "The six-step supervision flow",
        items: [
          { title: "01 · Summary of Work", body: "Start the day by seeing which blotters need attention." },
          { title: "02 · Open a blotter", body: "Pick a blotter and see the violations waiting." },
          { title: "03 · Investigate a violation", body: "Dig into the flagged trade with full context." },
          { title: "04 · Act: RFI, watch, note", body: "Take the right action and leave a record." },
          { title: "05 · Sign off the review", body: "Clear the violation and move to the next." },
          { title: "06 · Sign off the blotter", body: "Close out the day once every high violation is reviewed." },
        ],
      },

      // ── Challenge 01 ──
      {
        kind: "prose",
        eyebrow: "Challenge 1",
        heading: "A rule book no one could hold in their head",
        body: [
          "Dozens of violation rules, each with its own name and its own weight. Trades were flagged against a long list of coded rules, and knowing what each one meant, and how urgent it was, depended on experience the tool never carried. The same list also mixed items that had to be cleared today with items that could wait, so everything competed for the same attention.",
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        title: "Insight",
        body: "Supervisors do not need every rule up front. They need to know what has to be done today.",
      },
      {
        kind: "prose",
        body: [
          "So I let severity carry the priority. Every rule maps to a severity, and the blotter leads with the counts that decide the day rather than the rule codes behind them.",
        ],
      },
      {
        kind: "highlights",
        heading: "The severity system",
        items: [
          {
            title: "High violation",
            body: ["Must be reviewed and cleared before the blotter can be signed off. This is the day's real workload."],
          },
          {
            title: "Medium violation",
            body: ["Captured in the overall sign-off for awareness, without forcing a review on every single item."],
          },
          {
            title: "Monthly review",
            body: ["A separate rule set on a monthly cadence, kept out of the daily view so it never adds noise."],
          },
        ],
      },
      {
        kind: "prose",
        body: [
          "A supervisor now opens the day already knowing its size: how many high violations stand between them and a signed-off blotter.",
        ],
      },
      {
        kind: "image",
        src: "/work/advisor-supervision/blotter.png",
        label: "Trade Review blotter",
        alt: "Trade Review blotter showing high and medium violation counts, sign-off progress, filters, and a table of flagged trades.",
        caption: "Trade Review blotter, the daily home base",
      },

      // ── Challenge 02 ──
      {
        kind: "prose",
        eyebrow: "Challenge 2",
        heading: "A flagged trade, but nowhere to investigate it",
        body: [
          "Seeing a violation was easy. Understanding it was not. The old list could tell a supervisor that a trade broke a rule, but not why. To judge it they needed the account, the client, the trade itself, the client's investment policy and know-your-client profile, the transactions, and any past violations. These lived in different places, so the supervisor left the flag behind and rebuilt the picture by hand every time.",
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        title: "Insight",
        body: "Rather than sending supervisors out to find information, I brought the information to the decision.",
      },
      {
        kind: "prose",
        body: [
          "The violation detail became one working surface that holds everything needed to judge the flag, so the investigation happens in the same place the trade was raised.",
        ],
      },
      {
        kind: "features",
        heading: "Three investigation moves",
        items: [
          {
            title: "The full picture in one header",
            body: "Account, client, authorities on the account, and the trade itself, read together before any tab is opened.",
          },
          {
            title: "Evidence as tabs, not pages",
            body: "Account details, investment policy, know-your-client, transactions, and violation history in one record.",
          },
          {
            title: "The system points at the risk",
            body: "Know-your-client data is highlighted when a client is over their risk tolerance, and an insight line surfaces patterns, such as a repeat violation from the same advisor this month.",
          },
        ],
      },
      {
        kind: "image",
        src: "/work/advisor-supervision/violation-detail.png",
        label: "Violation detail page",
        alt: "Violation detail page showing account information, client details, authorities, trade details, an insight callout, and tabs for account details, IPS, KYC, transactions, and violation history.",
        caption: "Violation detail, the investigation surface",
      },

      // ── Challenge 03 ──
      {
        kind: "prose",
        eyebrow: "Challenge 3",
        heading: "Not every violation ends in a yes or no",
        body: [
          "Some flags could be cleared on the spot. Many could not. Often the supervisor needed the advisor to explain a trade before anything could be decided. Sometimes an account or advisor needed watching over time. And a signed-off day had to stay defensible, which meant the reasoning could not be left to memory.",
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        title: "Insight",
        body: "The workflow had to hold \"not yet\" as a real, tracked state.",
      },
      {
        kind: "prose",
        body: [
          "So I matched the actions to what actually happens, each one leaving a record behind.",
        ],
      },
      {
        kind: "highlights",
        heading: "Four possible outcomes",
        items: [
          {
            title: "Request information (RFI)",
            body: ["A request to the advisor, pre-populated with the violation rule and client context, sent and tracked like an email until it is answered."],
          },
          {
            title: "Put on watch",
            body: ["Flag the client or the advisor so the concern resurfaces on the next review instead of closing with the item."],
          },
          {
            title: "Drop a note",
            body: ["Leave the reasoning at the point of decision, so the next reviewer picks up where this one left off."],
          },
          {
            title: "Sign off the review",
            body: ["Clear the violation and move straight to the next one, keeping the supervisor in flow."],
          },
        ],
      },
      {
        kind: "callout",
        tone: "rec",
        title: "The blotter sign-off gate",
        body: "The Sign Off Blotter action stays inactive until every high violation has been reviewed. Speed never comes at the cost of a missed high-risk trade, and the day cannot be closed until the record is complete.",
      },
      {
        kind: "image",
        src: "/work/advisor-supervision/create-rfi.png",
        label: "Create an RFI",
        alt: "The RFI compose step, showing the pre-populated violation rule and client information.",
        caption: "Requesting information from the advisor",
      },

      // ── What changed ──
      {
        kind: "beforeAfter",
        eyebrow: "What changed",
        heading: "The tool stopped being a list and started being a workflow.",
        before: {
          title: "A spreadsheet of violations",
          cons: [
            "Coded rules the supervisor had to know by heart",
            "Urgent and routine items mixed in one list",
            "No pathway to investigate a flagged trade",
            "Reasoning recorded after the fact, if at all",
          ],
        },
        after: {
          title: "A guided supervision day",
          pros: [
            "Severity decides priority, so the day has a clear size",
            "The same review pattern across daily and monthly work",
            "Every piece of context sits on the violation being judged",
            "RFIs, watches, and notes captured in the moment, with a sign-off gate",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Reflection",
        body: [
          "Compliance work is not primarily a data problem. It is a decision-making problem.",
          "Being the only designer meant the flow had to be settled before any screen was worth drawing, and the workshops are what settled it. Every challenge here traced back to the same root: the old tool asked a supervisor to leave the decision to go and find something, whether that was the meaning of a rule, the context behind a trade, or a place to record why. Closing those gaps made supervision faster and made the record of it more complete rather than less.",
        ],
      },
    ],
  },
];

// Display order across the site (landing grid + next-study links).
const STUDY_ORDER = [
  "wealth-studio-design-system",
  "tangerine-wealth-mvp",
  "ccg-loyalty-membership",
  "logistics-emissions-dashboard",
  "utility-app-usability",
  "advisor-supervision-dashboard",
];

export const CASE_STUDIES: CaseStudy[] = [...RAW_CASE_STUDIES].sort((a, b) => {
  const ia = STUDY_ORDER.indexOf(a.slug);
  const ib = STUDY_ORDER.indexOf(b.slug);
  return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
});

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
