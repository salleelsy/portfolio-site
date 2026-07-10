import * as React from "react";
import { CaseStudyLayout } from "portfolio-site";

/** A compact but complete case study — header, meta, and three block kinds. */
export const Default = () => (
  <CaseStudyLayout
    study={{
      slug: "ccg-loyalty-membership",
      badge: "Loyalty & Membership",
      client: "CCG · China Chem Group",
      category: "Product Design / 2023",
      title: "Loyalty Membership for a Commercial Real Estate Group",
      subtitle:
        "Designing a five-tier membership system across malls, offices, and residences — one that users actually understand.",
      cardSummary:
        "A five-tier loyalty membership for a commercial real-estate group (CCG) — making tiers, points, and upgrade paths legible at a glance.",
      cover:
        "data:image/svg+xml," +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2100 900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6d6af8"/><stop offset="1" stop-color="#b3b1fb"/></linearGradient></defs><rect fill="url(#g)" width="2100" height="900"/><text x="80" y="490" font-family="Inter, sans-serif" font-size="120" font-weight="800" fill="#fff">Loyalty Membership</text></svg>',
        ),
      meta: {
        role: "Product Designer",
        timeline: "Jan 2023 — Apr 2023",
        tools: "Figma, Miro, Microsoft Azure",
      },
      blocks: [
        {
          kind: "prose",
          eyebrow: "Overview",
          heading: "One program across malls, offices, and residences",
          body: [
            "CCG's loyalty program spans three property types with different earning rules. The old app buried tier logic three screens deep, so most members never knew what their points did.",
          ],
        },
        {
          kind: "callout",
          tone: "finding",
          title: "Members didn't know what tier they were in",
          body: "7 of 9 interviewees couldn't name their current tier or what it earned them.",
        },
        {
          kind: "impact",
          eyebrow: "Impact",
          heading: "What shipped, measured",
          stats: [
            { value: "+38%", label: "points redemptions", note: "first 90 days" },
            { value: "2.4×", label: "tier-page visits" },
          ],
        },
      ],
    }}
  />
);
