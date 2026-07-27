/**
 * Case study content — polished from Sallee's Figma case studies (node 424:4373).
 * Copy is tightened for impact; specifics (metrics, tools, dates) are kept from
 * the source. Screens are image placeholders until Sallee drops in real assets.
 */

type CaseImage = { src?: string; label: string; alt?: string; caption?: string };

type Compare = {
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
type Persona = {
  personaLabel: string;
  name: string;
  role: string;
  tier: string;
  quote: string;
  initials: string;
  tint: PersonaTint;
  src?: string;
};
type IdeationCase = {
  title: string;
  label?: string;
  body: string[];
  images: CaseImage[];
};

export type Block =
  | { kind: "prose"; eyebrow?: string; heading?: string; body: string[] }
  | { kind: "list"; eyebrow?: string; heading?: string; intro?: string; items: string[] }
  | {
      kind: "priorityList";
      eyebrow?: string;
      heading?: string;
      intro?: string;
      groups: { label: string; items: string[] }[];
    }
  | { kind: "image"; src?: string; label: string; alt?: string; caption?: string; ratio?: string }
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
  | { kind: "callout"; tone: "finding" | "quickwin" | "rec"; title: string; body: string };

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
  meta: { role: string; timeline: string; tools: string; note?: string };
  blocks: Block[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tangerine-wealth-mvp",
    badge: "Fintech · Wealth",
    client: "Fintex Inc. · Tangerine",
    category: "Product Design / 2025",
    title: "Launching Wealth inside a Bank's App",
    subtitle:
      "Designing Tangerine's digital wealth MVP — projections, entry points, and the post-launch loop that kept making it better.",
    cardSummary:
      "End-to-end design of Tangerine's digital wealth MVP — from PRD to post-launch analytics — inside a regulated banking app, across iOS and Android.",
    cover: "/work/wealth/cover.png",
    meta: {
      role: "Product Designer — end to end",
      timeline: "2025 · MVP launch + post-launch iteration",
      tools: "Figma, Jira, Google Analytics",
      note: "Some details, numbers, and visuals are modified or omitted for confidentiality.",
    },
    blocks: [
      {
        kind: "prose",
        eyebrow: "Project Overview",
        heading: "A wealth space inside an app people already trust",
        body: [
          "Tangerine's digital wealth MVP brings investing and financial projections into the bank's existing app — a product that had to feel native to the banking experience while opening up an entirely new space.",
          "That context is what made it hard: a regulated environment, two native platforms (iOS and Android), an established design language to respect, and a long list of teams with a say — compliance, legal, translation, marketing, and the banking-side design team.",
          "I owned the feature design end to end: from the PRD handed over by the Product Owner, through build and QA, to what the analytics said after launch.",
        ],
      },
      {
        kind: "features",
        eyebrow: "How I ran it",
        heading: "Owning the loop, not just the screens",
        items: [
          { title: "1 · Define", body: "Took the PRD from the Product Owner and shaped user stories together with the PM, so design and scope were agreed before pixels." },
          { title: "2 · Negotiate", body: "Walked designs with engineers early to surface what wasn't feasible — and redesigned around constraints instead of discovering them in QA." },
          { title: "3 · Systematise", body: "Decided what belonged in the core design system vs. a wealth spoke library, and reconciled iOS and Android component differences." },
          { title: "4 · Align", body: "Reviewed with compliance, legal, translation, marketing, and the banking design team — keeping the flow alive through every required change." },
          { title: "5 · Ship", body: "Partnered with QA through launch: filing design bugs myself, retesting fixes, and holding the build to design intent." },
          { title: "6 · Learn", body: "After launch, dug into Google Analytics — entry points, clicks, drop-offs — and turned findings into quick-win tickets on the board." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Challenge 1",
        heading: "The cul-de-sac: users were arriving at a dead end",
        body: [
          "Analytics showed most users weren't entering the wealth space directly. They were landing on their investment account details from the banking side — and stopping there. The product's front door wasn't where users actually were.",
          "So instead of trying to redirect traffic, we met users where they already stood — with two answers, one for each audience.",
        ],
      },
      {
        kind: "highlights",
        items: [
          {
            title: "An entry point where users already are",
            body: [
              "We added an entry point on the investment account details screen — the cul-de-sac itself — introducing existing investors into the wealth space from the account they were already checking.",
            ],
          },
          {
            title: "A prospect screen for everyone else",
            body: [
              "For users without an investment account, we designed a prospect screen: play with the numbers, see your own projection, and a CTA to start investing — turning curiosity into a first step.",
            ],
          },
        ],
      },
      {
        kind: "screens",
        heading: "In the UI",
        items: [
          { label: "Entry point — investment account details", alt: "Entry point into the wealth space from investment account details" },
          { label: "Prospect screen — playable projection", alt: "Prospect screen where users without an account can play with projection numbers" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Challenge 2",
        heading: "Where the funnel leaked: adding an external asset",
        body: [
          "The biggest drop-off in the whole flow was adding an external asset. The form asked for an “effective date” — when did you start owning this asset? — before the amount. That one field forced users to stop and think, and many never came back.",
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        title: "Finding — one thoughtful field was costing us completions",
        body: "Analytics pinned the drop-off to the effective-date input: users had to reconstruct when they acquired an asset before they could enter what it was worth.",
      },
      {
        kind: "callout",
        tone: "quickwin",
        title: "Quick win — prepopulate the date, ask only for the amount",
        body: "We prepopulated the effective date with today's date, so users could go straight to the amount. Less thinking up front — the date stays editable for anyone who cares to change it.",
      },
      {
        kind: "prose",
        eyebrow: "Challenge 3",
        heading: "The projection graph that told mortgage holders bad news",
        body: [
          "The projection graph plots assets against liabilities. But for users whose only Tangerine product was a mortgage, the graph sat permanently negative — because they'd never told us they own the house behind that mortgage.",
          "An accurate-looking graph built on incomplete data isn't neutral; it's discouraging. The fix wasn't to change the math — it was to help users complete the picture.",
        ],
      },
      {
        kind: "callout",
        tone: "rec",
        title: "Paired insight — a mortgage implies a home",
        body: "When we detect a Tangerine mortgage, a paired insight banner encourages the user to add their real estate as an asset — turning a discouraging graph into an accurate projection, and teaching users how the tool works along the way.",
      },
      {
        kind: "screens",
        heading: "In the UI",
        items: [
          { label: "Add external asset — prepopulated date", alt: "Add external asset form with the effective date prepopulated to today" },
          { label: "Projection graph + paired insight", alt: "Projection graph with a paired insight banner suggesting adding real estate as an asset" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Design System",
        heading: "Core, spoke, and two platforms",
        body: [
          "Wealth couldn't just consume the design system — it had to extend it. For each new pattern I decided: does this belong in the core library, or in a wealth-specific spoke? Spoke components stayed consistent with the banking app's language while giving wealth room to grow.",
          "iOS and Android don't share components one-to-one, so every screen was reconciled across both platforms — same intent, native behaviour — and checked against the current Tangerine banking app so wealth felt like part of the family, not a bolt-on.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "After Launch",
        heading: "Launch was the midpoint, not the finish line",
        body: [
          "Post-launch, I tracked the wealth space in Google Analytics: which entry points people used, what they clicked, and where they left off. That's how the cul-de-sac and the effective-date drop-off were found — each one became a quick-win ticket I created and carried to the board.",
          "It's the part of the project I'd defend hardest: the design wasn't done when it shipped. The funnel data decided what we fixed next.",
        ],
      },
      // TODO(content): add an { kind: "impact" } block here once Sallee confirms
      // which GA numbers are shareable (entry-point lift, drop-off reduction).
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
    cover: "/work/loyalty/cover.png",
    meta: {
      role: "Product Designer",
      timeline: "Jan 2023 — Apr 2023",
      tools: "Figma, Miro, Microsoft Azure, Cloudifier",
    },
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
            personaLabel: "Persona A",
            name: "Albert Yip",
            role: "Property buyer",
            tier: "Lv3 · Passionates — normal user",
            initials: "AY",
            tint: "sky",
            quote:
              "The requirement to upgrade to the next level (Lv4 · VIP) is to spend $300K and complete one mission. How is ‘one mission’ defined?",
          },
          {
            personaLabel: "Persona B",
            name: "Christy Hui",
            role: "Employee",
            tier: "Lv2 · Engaged — employee",
            initials: "CH",
            tint: "amber",
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
            title: "Take it easy!",
            label: "Persona A · Case 1 — completed spending goal, no mission points",
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
            title: "I got Missions points!",
            label: "Persona A · Case 2 — completed one mission goal",
            body: [
              "If a user has earned any mission points, both the Spending and Missions progress bars are displayed.",
            ],
            images: [
              { label: "Spending progress", src: "/work/loyalty/case2-spending.png", alt: "Membership tiers — spending progress ring" },
              { label: "Mission points progress", src: "/work/loyalty/case2-missions.png", alt: "Membership tiers — mission points progress ring" },
            ],
          },
          {
            title: "Employee edition!",
            label: "Persona B — employee",
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
