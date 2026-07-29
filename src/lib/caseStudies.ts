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
    category: "Product Design / 2025–26",
    title: "Launching Wealth inside a Bank's App",
    subtitle:
      "Tangerine's digital wealth MVP — scoped under hard data constraints, shipped inside a regulated app, improved by reading the post-launch numbers.",
    cardSummary:
      "Leading design on Tangerine's digital wealth MVP — a 1.3x lift in mobile engagement and +49% YoY account applications.",
    // TODO(content): add cover at /work/wealth/cover.png (21:9) when ready.
    meta: {
      role: "Lead Product Designer — 2 designers, vendor engagement",
      timeline: "Jul 2025 → ongoing · iOS + Android",
      tools: "Figma, Storybook, Jira, Perfecto",
      note: "Some numbers, details, and visuals are modified or omitted for confidentiality; business context is drawn from Tangerine's public announcements.",
    },
    blocks: [
      {
        kind: "list",
        eyebrow: "In Short",
        items: [
          "Tangerine gave investing its own space in an app 2M+ clients already use. I led design on the MVP.",
          "Launch: 1.3x jump in mobile engagement; mobile account applications up 49% YoY while web stayed flat.",
          "Hardest pre-launch call: cutting the feature the data couldn't support — it gave the product a single focus.",
          "Post-launch: half the clients who reached account details never found the wealth tab. The first fix underperformed; the second pass fixed both its problems.",
        ],
      },
      {
        kind: "features",
        eyebrow: "Timeline",
        heading: "From framing to a loop that keeps shipping",
        items: [
          { title: "Jul 2025", body: "Research and problem framing." },
          { title: "Aug – Oct 2025", body: "Design, design-system extension, cross-team alignment." },
          { title: "Oct – Dec 2025", body: "Sprint delivery, QA partnership, bug triage and retest." },
          { title: "Dec 2025", body: "Soft launch on iOS." },
          { title: "Feb 2026", body: "Public launch on iOS and Android — the first meaningful analytics read." },
          { title: "Mar 2026 →", body: "Iteration sprints and new capability, ongoing." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Why This Existed",
        heading: "A bank with two million clients wanted them to invest",
        body: [
          "Tangerine — a digital bank with 2M+ clients, a Scotiabank subsidiary — was known for everyday banking. The goal: give wealth its own space in the app, so investing reads as a distinct thing a client does with Tangerine.",
          "The MVP's job was not to be a trading tool. It was to show clients their whole financial position clearly enough that investing more felt like an informed decision, not a leap.",
        ],
      },
      {
        kind: "image",
        label: "Launch video — public marketing walkthrough of the wealth space",
        alt: "Tangerine wealth space launch walkthrough",
      },
      {
        kind: "features",
        eyebrow: "Scope",
        heading: "What shipped, and my part in it",
        items: [
          { title: "My role", body: "Lead designer on a two-designer vendor team — owned the feature design end to end and set the direction." },
          { title: "Surface", body: "A dedicated wealth space inside the existing Tangerine app, iOS and Android." },
          { title: "Feature areas at MVP", body: "Seven — projection graph, external assets & liabilities, portfolio allocation, learning hub, transactions & documents, gain/loss, smart banners." },
          { title: "Teams to align", body: "Compliance, legal, translation, marketing, banking-side design, engineering, QA." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "The Scoping Decision",
        heading: "Cutting the history graph",
        body: [
          "The concept had two graphs: one showing how a client's money grew over the past ten years, one projecting forward. The history graph didn't survive scoping — the backend couldn't supply the data, and reconciling history with the effective dates clients enter on external assets wasn't an MVP-sized problem. Getting it wrong meant publishing a historical record that contradicted itself.",
          "I pushed, then cut it rather than ship a degraded version. The cut sharpened the product: one graph, one focal point, and one question for every decision after it — does this help a client understand where they're headed?",
        ],
      },
      {
        kind: "callout",
        tone: "rec",
        title: "The call — cut what the data can't support",
        body: "Two graphs where one is quietly unreliable is worse than one graph that holds. Post-launch feedback asked for exactly what it would have shown — moving it from a cut to a queued feature with demand attached.",
      },
      {
        kind: "image",
        label: "MVP scoping — early concepts including the history graph, and the final single-graph direction",
        alt: "Scoping artefacts showing the history graph concept and the final single-graph direction",
      },
      {
        kind: "prose",
        eyebrow: "Regulatory Constraint",
        heading: "Compliance decided what a projection is allowed to say",
        body: [
          "I designed the projection as a range — conservative to optimistic — because that's how projections honestly work. Compliance disagreed, and the reasoning held: in a regulated product, a visible upper bound reads as a promise a client can point to later.",
          "We shipped a single static figure, and I documented the conditions for the range to return after MVP — parked, not lost.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Design System",
        heading: "Extending a system that wasn't built for this",
        body: [
          "Wealth needed patterns the banking app never required. For each gap, the same question: core, or wealth-specific spoke?",
        ],
      },
      {
        kind: "highlights",
        items: [
          {
            title: "The projection graph → spoke",
            body: [
              "No charted component existed in core, and other teams' charts had drifted off-language. I built and spec'd it as a wealth spoke — data density, axis limits, extreme negatives, screen-reader readout — because core shouldn't maintain a component with one consumer.",
            ],
          },
          {
            title: "The accordion list → core",
            body: [
              "Built locally to unblock the MVP — then I found three other surfaces with the same need, so I branched the core Figma library, spec'd it, and submitted it. It went to core.",
            ],
          },
          {
            title: "The pulsing dot → rejected",
            body: [
              "My pulsing nav indicator broke precedent and wasn't worth the capital. I switched to a sanctioned pattern — a launch modal. Same job, no new pattern, shipped on time.",
            ],
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "After Launch",
        heading: "The analytics decided what we built next",
        body: [
          "The product team publishes a monthly impact report. My job was to read it as a designer — find which numbers described a design problem, not a market condition — and turn those into tickets. Three problems surfaced that only appear at real traffic volumes.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Problem 1",
        heading: "The cul-de-sac",
        body: [
          "Most clients landed on their investment account details from the banking side, read the balance, and left — the wealth space one tap away, untaken. Instead of redirecting traffic, we met them where they were.",
        ],
      },
      {
        kind: "highlights",
        items: [
          {
            title: "Existing investors",
            body: [
              "An entry point on the account details screen itself — into the wealth space from the account they were already checking.",
            ],
          },
          {
            title: "Everyone else",
            body: [
              "A prospect screen, no account required: adjust the inputs, watch the projection respond, act from there.",
            ],
          },
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        title: "What the data said",
        body: "Half of iOS clients who reached account details never saw the wealth tab. Adoption sat at 22.3% while 46.6% engaged with investments elsewhere in the app — that gap is the cul-de-sac.",
      },
      {
        kind: "prose",
        heading: "The first fix underperformed",
        body: [
          "The first banner competed with accident — clients still found the tab on their own more often than through it. It sat in a screen dense with actions, and its copy asked for effort with no stated reward.",
          "The second pass fixed both: a one-time spotlight modal (interruption is expensive — we spent it once), and banner copy rewritten from instruction to reward — you've unlocked more, not go explore.",
        ],
      },
      {
        kind: "screens",
        heading: "In the UI",
        items: [
          { label: "Spotlight modal", alt: "Spotlight modal introducing the wealth space on first open of an investing account" },
          { label: "Revised account-details banner", alt: "Rewritten banner on the investment account details screen" },
          { label: "Prospect screen — playable projection", alt: "Prospect screen where clients without an account adjust inputs and watch the projection respond" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Problem 2",
        heading: "The field that cost us completions",
        body: [
          "The largest drop-off in the product: adding an external asset. The form asked for an effective date before the amount — recall, not a number the client has to hand. People stopped to think, and a meaningful share never came back.",
          "We prepopulated it with today's date, fully editable. Precision stays possible; everyone else goes straight to the amount. The data-quality cost is small and bounded. The completion gain was not.",
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        title: "What the data said",
        body: "Under 6% of clients who reached the net worth view ever reached the add-asset screen, and only ~40% of those who started finished — two problems, stacked.",
      },
      {
        kind: "image",
        label: "Add external asset — prepopulated effective date",
        alt: "Add external asset form with the effective date prepopulated to today",
      },
      {
        kind: "prose",
        eyebrow: "Problem 3",
        heading: "The projection that told mortgage holders bad news",
        body: [
          "For clients whose only Tangerine product was a mortgage, the projection sat permanently negative — the house behind it was never added. The graph wasn't wrong; it was accurate about incomplete data, which still misinforms.",
        ],
      },
      {
        kind: "callout",
        tone: "rec",
        title: "Paired insight — a mortgage implies a home",
        body: "Detect a Tangerine mortgage → prompt the client to add their real estate as an asset. It corrects the projection and teaches how the tool works.",
      },
      {
        kind: "image",
        label: "Projection graph with the paired insight banner for mortgage holders",
        alt: "Projection graph with a paired insight banner prompting the client to add their real estate as an asset",
      },
      {
        kind: "prose",
        eyebrow: "Impact",
        heading: "What it did for the business",
        body: [
          "iOS launched a month before Android — a natural experiment. In that month, investing account applications rose 60% YoY on iOS vs 12% on Android and 3% on web. When Android caught up, it jumped 52% while web stayed flat. Seasonality hit all three platforms equally; only two had the wealth space.",
        ],
      },
      {
        kind: "impact",
        heading: "Measured",
        stats: [
          { value: "1.3x", label: "lift in mobile engagement", note: "from a flat ~30% to 46.6%" },
          { value: "+49%", label: "mobile applications, year over year", note: "while web stayed flat" },
          { value: "+11.2 pts", label: "application completion, year over year", note: "to 53%" },
          { value: "60% vs 3%", label: "iOS vs web application growth", note: "in the month only iOS had wealth" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Where It Stands",
        heading: "A strong foundation, still shipping",
        body: [
          "Satisfaction scored 7.8 over the first 90 days. Clients didn't struggle — they asked for more: how the projection is calculated (the cost of the static figure), and the compounding view the history graph would have shown. That became the brief for the next phase.",
          "The part I'd defend hardest is the loop. The MVP was a hypothesis, scoped to what the data could support — what it got right and wrong were decided afterwards, by watching what clients did.",
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
