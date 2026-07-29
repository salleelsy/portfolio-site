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
      "Tangerine's digital wealth MVP — scoping a new product line under hard data constraints, extending a design system that wasn't built for it, and reading the post-launch numbers closely enough to decide what came next.",
    cardSummary:
      "Leading design on Tangerine's digital wealth MVP — from cutting the feature the data couldn't support to the post-launch analytics loop: a 1.3x lift in mobile engagement and +49% YoY account applications.",
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
          "Tangerine gave investing its own space in an app two million clients already use for everyday banking. I led design on the MVP.",
          "Launch drove a 1.3x jump in mobile engagement against a prior year that had been flat, and mobile applications to open an account rose 49% year over year while web stayed flat.",
          "The hardest pre-launch call was cutting a feature the data couldn't support — which ended up giving the product a single focus.",
          "Post-launch analytics showed half of the clients who reached their account details never found the wealth tab. The first fix underperformed, so it got a second pass.",
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
          "Tangerine is a digital bank with over two million clients in Canada, operating as a Scotiabank subsidiary. Its reputation was built on everyday banking: chequing, savings, simple products without hoops. Investing sat off to the side of that story.",
          "The business goal was to change that. Wealth needed its own space in the app, separate from day-to-day banking, so that growing money read as a distinct thing a client does with Tangerine rather than a tab buried inside a savings account. Tangerine positioned it publicly as a multiphase rollout that starts with the big picture and goes beyond typical investment tracking.",
          "That framing set the design problem. The MVP's job was not to be a trading tool. It was to show a client their whole financial position clearly enough that the next step — investing more — felt like an informed decision rather than a leap.",
        ],
      },
      {
        kind: "image",
        label: "Launch video — public marketing walkthrough of the wealth space",
        alt: "Tangerine wealth space launch walkthrough",
      },
      {
        kind: "prose",
        eyebrow: "Scope",
        heading: "What shipped, and my part in it",
        body: [
          "I led design on the MVP as part of a vendor team engaged to build and ship it, working alongside one other product designer. I owned the feature design end to end and set the direction the two of us worked to.",
        ],
      },
      {
        kind: "features",
        items: [
          { title: "Surface", body: "A dedicated wealth space inside the existing Tangerine mobile app, on iOS and Android." },
          { title: "Feature areas at MVP", body: "Seven, from the projection graph to portfolio allocation views to the learning hub." },
          { title: "My ownership", body: "PRD to user stories, design, design-system extension, cross-team approval, QA, and turning the post-launch impact reporting into design work." },
          { title: "Teams to align", body: "Compliance, legal, translation, marketing, banking-side design, engineering, QA." },
        ],
      },
      {
        kind: "list",
        heading: "The seven areas that made the MVP",
        items: [
          "Projection graph plotting assets against liabilities across selectable timeframes",
          "External assets and liabilities, added manually with interest rate, feeding the projection",
          "Key investment transactions and documents, surfaced rather than buried",
          "Learning hub for investing education",
          "Portfolio page with sector and geographic allocation, filterable by account",
          "Gain/loss metrics with an entry point through to account details",
          "Smart banners promoting what a given client should see next",
        ],
      },
      {
        kind: "prose",
        eyebrow: "The Scoping Decision",
        heading: "Cutting the history graph",
        body: [
          "The original concept had two graphs. One looked backward, showing how a client's money had grown over the past ten years. One looked forward, projecting where it was headed. Together they told a complete story — and the backward-looking one was the easier sell, because it shows something that already happened rather than something the bank is forecasting.",
          "It didn't survive scoping, for two reasons that were both real. The backend couldn't supply the historical data at the fidelity the graph needed. And the logic underneath it was worse than the data gap: to plot history accurately, the calculation has to reconcile with the effective dates clients enter on their external assets. A client who tells us they bought a property four years ago changes the shape of their own past. Getting that reconciliation right was not an MVP-sized problem, and getting it wrong meant publishing a historical record that contradicted itself.",
          "I pushed on it, and when it was clear there was no solution that fit the timeline, I cut it rather than shipping a degraded version. Two graphs where one is quietly unreliable is worse than one graph that holds.",
          "Cutting it turned out to sharpen the product. With a single graph, the projection became the focal point of the whole space, and every other decision could be measured against one question: does this help a client understand where they are headed? The entry points, the external asset flow and the insight patterns that came later all point at that graph. If we had shipped both, the space would have had two centres of gravity and no clear answer to what it was for.",
        ],
      },
      {
        kind: "callout",
        tone: "rec",
        title: "The call — cut what the data can't support",
        body: "Cut the feature the data couldn't support, and use the cut to give the MVP a single focus rather than replacing it with something else.",
      },
      {
        kind: "prose",
        body: [
          "Client feedback after launch made the cut look right and incomplete at the same time. Satisfaction responses asked for exactly what the history graph would have shown: the compounding effect over time, with a visible split between what a client contributed and what the market returned. Nobody described the product as broken without it. They described it as a good foundation with a missing chapter — which is the correct read of a scoped MVP, and it moved the feature from a cut to a queued one with demand attached.",
        ],
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
          "The projection was originally designed as a range, showing a spread between a conservative and an optimistic outcome. That is the more honest representation of how projections work, and it is what I wanted to ship.",
          "Compliance disagreed, and the reasoning held. A visible upper bound reads as a promise. In a regulated product, a number a client can point to later is a liability — and a range hands them two of them.",
          "We shipped a single static figure. It is defensible, it is accurate to the model, and it cost something real: clients see a projection with no visible uncertainty, which is a slightly worse mental model of investing. I documented the trade-off and the conditions a range would have to satisfy to come back after MVP, so the decision was parked rather than lost.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Design System",
        heading: "Extending a system that wasn't built for this",
        body: [
          "Wealth couldn't just consume the core design system. It needed patterns the banking app had never required. For each gap the question was the same: does this belong in core, or in a wealth-specific spoke?",
        ],
      },
      {
        kind: "highlights",
        items: [
          {
            title: "The projection graph → spoke",
            body: [
              "There was no charted data component in the system. Other teams had charts, but they were undocumented and had drifted from the app's design language — adopting one would have imported someone else's debt into a regulated surface.",
              "I built it as a wealth spoke and specified it properly: data-point density across timeframes, hover behaviour, how many labels each axis can take before it stops being readable, what an extreme negative value does to the scale, responsive behaviour, and how the data reads out non-visually so the chart isn't the one part of the product a screen reader user can't reach.",
              "Spoke was the right home: specific enough to wealth that pushing it to core would have meant maintaining a component with one consumer.",
            ],
          },
          {
            title: "The accordion list → core",
            body: [
              "Wealth needed a collapsible list the core library didn't have. I built it locally to unblock the MVP, then mapped where else it would land and found at least three other surfaces with the same need.",
              "That changed the argument. Rather than asking the core team to absorb a one-off, I branched the core Figma library, built the component with a usage spec, and submitted it for review as something the whole design org would use. It went to core.",
            ],
          },
          {
            title: "The pulsing dot → rejected",
            body: [
              "To signal the new wealth space, I proposed a pulsing indicator on the navigation badge. It was rejected: no precedent for animation on the nav bar, and introducing one meant new documentation plus buy-in from teams that had shipped without it.",
              "I didn't win that one and it wasn't worth the capital. I moved to an existing pattern instead — a launch modal with an illustration built to brand requirements. Same job, no new pattern, shipped on time.",
            ],
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "After Launch",
        heading: "The analytics decided what we built next",
        body: [
          "The product team publishes a monthly impact report: adoption, funnel conversion, satisfaction. My job wasn't to build that reporting — it was to read it as a designer, work out which numbers described a design problem rather than a market condition, and turn those into work. Three problems came out of it that no amount of pre-launch review would have caught, because each one only appears at real traffic volumes. Each became a ticket I took to the board.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Problem 1",
        heading: "The cul-de-sac",
        body: [
          "Most clients weren't arriving through the front door. They were landing on their investment account details from the banking side, reading the balance, and leaving. The wealth space sat one tap away and they never took it.",
          "Rather than trying to redirect that traffic upstream, we met people where they already were — with two answers for two audiences.",
        ],
      },
      {
        kind: "highlights",
        items: [
          {
            title: "Existing investors",
            body: [
              "An entry point on the investment account details screen itself, taking them into the wealth space from the account they were already checking.",
            ],
          },
          {
            title: "Everyone else",
            body: [
              "A prospect screen — no investment account required. Adjust the inputs, watch the projection respond, and act from there. It answers the question people ask before they commit: what would this actually do for me?",
            ],
          },
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        title: "What the data said",
        body: "Half of the iOS clients who reached their account details never saw the wealth tab. Wealth adoption reached 22.3% of wealth clients, while 46.6% were engaging with their investments somewhere in the app — the gap between those two numbers is the cul-de-sac.",
      },
      {
        kind: "prose",
        heading: "The first fix underperformed",
        body: [
          "The banner shipped in early April and moved the number less than we wanted. The revealing detail wasn't the click rate on its own: clients were still finding the wealth tab by accident more often than through the banner we had built to send them there. A banner competing with accident is not a working entry point.",
          "Two things were wrong with it. It sat inside a screen dense with actions, where a passive banner reads as one more piece of furniture. And the copy asked clients to explore something — a request for effort with no stated reward. The second iteration addressed both.",
        ],
      },
      {
        kind: "highlights",
        items: [
          {
            title: "A spotlight modal",
            body: [
              "Shown the first time a client opens an investing account — interrupting once rather than sitting quietly, and never reappearing after it's dismissed. Interruption is expensive, so we spent it once.",
            ],
          },
          {
            title: "Copy that rewards, not instructs",
            body: [
              "The banner went from asking clients to explore their wealth to telling them they had unlocked more, plus a visual element to break out of the surrounding layout. The shift is from instruction to reward — the difference between a task and a reason.",
            ],
          },
        ],
      },
      {
        kind: "prose",
        body: [
          "The modal is also worth noting as an ending to an earlier story. The pulsing nav indicator I proposed and lost was solving this same discoverability problem before launch. The system wouldn't take a new animation pattern, so attention had to be bought with a pattern the system already sanctioned. The modal is where that constraint eventually landed.",
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
          "The largest single drop-off in the product was adding an external asset. The form asked for an effective date — the date the client started owning the asset — before it asked for the amount.",
          "The field was doing real work, since the model needs that date, and it is the same date that made the history graph unbuildable. But it was placed first, and it asks for recall rather than a number the client already has to hand. People stopped to think, and a meaningful share never came back.",
          "We prepopulated it with today's date and left it fully editable. Anyone who cares about precision can change it. Everyone else goes straight to the amount — the field they opened the form to fill in. The data quality cost is small and bounded. The completion gain was not.",
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        title: "What the data said",
        body: "Of the clients who reached the net worth view, 29.2% went on to their portfolio, but under 6% reached the add-external-asset screen — and of those who did start the flow, roughly 40% finished it. Two separate problems, stacked: most clients never find the flow, and the ones who do lose a majority at the form.",
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
          "The projection plots assets against liabilities. For clients whose only Tangerine product was a mortgage, that graph was permanently negative — because the house behind the mortgage wasn't in the product. They had never added it.",
          "The graph wasn't wrong. It was accurate about incomplete data, which is a failure mode worth naming: technically correct output that misinforms because of what is missing from the input. The clients seeing it were also the least likely to understand why.",
          "The fix wasn't to change the math. We detect a Tangerine mortgage and pair it with an insight prompting the client to add their real estate as an asset. It corrects the projection, and it teaches how the tool works — which pays off every time they add something after that. Measured against the same funnel above: does the prompt move clients into the add-asset flow that under 6% were reaching on their own.",
        ],
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
          "The wealth space was built to make investing feel like a distinct thing a client does with Tangerine. The clearest evidence that it worked came from an accident of the rollout.",
          "The MVP launched on iOS first and reached Android roughly a month later. That gap turned the launch into a natural comparison. In the month iOS had the wealth space and Android didn't, applications to open an investing account rose 60% year over year on iOS, against 12% on Android and 3% on web. When Android caught up the following month, it moved too — up 52% year over year — while web stayed flat at under 1%.",
          "Seasonality and promotions hit all three platforms equally. Only two of them had the wealth space. That is about as close to a controlled result as a product team gets without running an experiment.",
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
        eyebrow: "What Clients Said",
        heading: "A strong foundation with the analysis missing",
        body: [
          "Satisfaction scored 7.8 over the first 90 days, with just over half of responses positive. The pattern in the negative and neutral responses mattered more than the score.",
          "Clients didn't struggle to use the product. They asked it to go further: more clarity, more depth, and more of an answer to what the numbers meant for them. Several said the projection was helpful but that they couldn't tell how it was calculated — the cost of the static figure compliance required, showing up exactly where I expected it to. Others asked for the compounding view over time that the history graph would have provided.",
          "Read together, the quantitative and qualitative data agreed: the MVP got clients to the big picture and then stopped short of interpreting it for them. That became the brief for the next phase.",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Where It Stands",
        heading: "Still shipping",
        body: [
          "Tangerine described the launch publicly as the first step of a multiphase rollout, and that is how the team has treated it. The analytics loop that surfaced those three problems is now how the wealth space gets prioritised, and new capability keeps landing on top of it.",
          "The part I would defend hardest is the loop. The MVP that launched was a hypothesis, scoped down to what the data could actually support. What it got right and what it got wrong were both decided afterwards, by watching what clients did.",
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
