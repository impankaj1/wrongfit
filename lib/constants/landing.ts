import {
  type FeatureHighlight,
  JobFitType,
  type JobListing,
  type MetricStat,
} from "@/types/landing";

export const HERO_CONFIG = {
  BADGE: "Introducing WrongFit 2.0",
  TITLE_LINE_1: "Stop settling for the",
  TITLE_LINE_2: "wrong fit.",
  SUBTITLE:
    "WrongFit connects top design, engineering, and product talent directly with verified creative agencies and high-growth studios.",
  CTA_PRIMARY: "Explore Open Roles",
  CTA_SECONDARY: "Post an Opportunity",
} as const;

export const METRIC_STATS: readonly MetricStat[] = [
  {
    value: "94%",
    label: "Retention Rate",
    description: "Candidates stay 2+ years at matched agency studios.",
  },
  {
    value: "14 Days",
    label: "Average Hire Time",
    description: "From application submission to confirmed agency offer.",
  },
  {
    value: "350+",
    label: "Vetted Agencies",
    description: "Boutique design firms, dev shops, and venture builders.",
  },
  {
    value: "12k+",
    label: "Curated Talents",
    description: "Senior individual contributors and specialized leads.",
  },
] as const;

export const FEATURE_HIGHLIGHTS: readonly FeatureHighlight[] = [
  {
    badge: "Anti-Ghosting Protocol",
    title: "Guaranteed Feedback Timelines",
    description:
      "Agencies are contractually required to respond within 5 business days, eliminating endless recruiter black holes.",
  },
  {
    badge: "Culture & Tech Sync",
    title: "Deep Stack Compatibility",
    description:
      "We match engineers and designers based on actual day-to-day workflow, tooling, and aesthetic preferences.",
  },
  {
    badge: "Transparent Compensation",
    title: "Strict Zero-Guess Salaries",
    description:
      "Every listing shows verified compensation ranges, equity stakes, and client-billing transparency upfront.",
  },
] as const;

export const SAMPLE_JOBS: readonly JobListing[] = [
  {
    id: "wf-101",
    role: "Senior Creative Technologist",
    agency: "Studio Monolith",
    location: "New York / Remote",
    salary: "$140k – $175k",
    tags: ["WebGL", "Three.js", "GSAP", "Next.js"],
    fitType: JobFitType.REMOTE,
    matchScore: 98,
  },
  {
    id: "wf-102",
    role: "Lead Product Designer",
    agency: "Kinetic Collective",
    location: "London / Hybrid",
    salary: "£90k – £115k",
    tags: ["Design Systems", "Figma", "Prototyping"],
    fitType: JobFitType.HYBRID,
    matchScore: 95,
  },
  {
    id: "wf-103",
    role: "Full-Stack Design Engineer",
    agency: "Vanguard Labs",
    location: "San Francisco, CA",
    salary: "$160k – $195k",
    tags: ["React 19", "Tailwind CSS", "TypeScript", "Base UI"],
    fitType: JobFitType.DIRECT,
    matchScore: 99,
  },
] as const;

