import * as React from "react";
import { CaseStudyBlock } from "portfolio-site";

const wrap: React.CSSProperties = { maxWidth: 720, background: "var(--color-paper)", padding: 24 };

/** Prose block — eyebrow, heading, body paragraphs. */
export const Prose = () => (
  <div style={wrap}>
    <CaseStudyBlock
      block={{
        kind: "prose",
        eyebrow: "Overview",
        heading: "Designing a five-tier membership users actually understand",
        body: [
          "CCG runs malls, offices, and residences under one loyalty program. The old app buried tier logic three screens deep, so most members never knew what their points did.",
          "We rebuilt the membership home around one question: what do I get, and what gets me to the next tier?",
        ],
      }}
    />
  </div>
);

/** Callout — the 'finding' tone with the black left bar. */
export const Callout = () => (
  <div style={wrap}>
    <CaseStudyBlock
      block={{
        kind: "callout",
        tone: "finding",
        title: "Members didn't know what tier they were in",
        body: "7 of 9 interviewees couldn't name their current tier or what it earned them — the single clearest signal from discovery.",
      }}
    />
  </div>
);

/** Impact stats row. */
export const Impact = () => (
  <div style={wrap}>
    <CaseStudyBlock
      block={{
        kind: "impact",
        eyebrow: "Impact",
        heading: "What shipped, measured",
        stats: [
          { value: "+38%", label: "points redemptions", note: "first 90 days" },
          { value: "2.4×", label: "tier-page visits" },
          { value: "-45%", label: "membership support tickets" },
        ],
      }}
    />
  </div>
);

/** List block with intro. */
export const List = () => (
  <div style={wrap}>
    <CaseStudyBlock
      block={{
        kind: "list",
        eyebrow: "Process",
        heading: "What we did",
        intro: "Eight weeks from audit to handoff:",
        items: [
          "Heuristic audit of the existing membership flows",
          "9 member interviews across three tiers",
          "Tier-system redesign with the loyalty ops team",
          "High-fidelity prototypes and two rounds of usability testing",
        ],
      }}
    />
  </div>
);
