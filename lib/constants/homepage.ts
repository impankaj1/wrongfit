import {
  type CandidateProfilePreview,
  type ComparisonPoint,
  EmploymentType,
  type FaqItem,
  JobSeniority,
  LocationType,
  type PledgeItem,
  type TransparencyPillar,
  type TransparentJobListing,
} from "@/types/homepage";

export const AGENCY_PILLARS: readonly TransparencyPillar[] = [
  {
    title: "100% Upfront Compensation",
    tagline: "No 'Competitive Salary' Evasions",
    description:
      "Agencies must post the exact base salary, bonus structure, equity percentages, and overtime/client-billing policies. Zero salary guessing.",
    badge: "Contractually Verified",
    iconName: "dollar",
  },
  {
    title: "Authenticated Studio Profile",
    tagline: "Real Culture & True Workloads",
    description:
      "Verified studio leadership, current team size, client roster types, and weekly hour expectations (no hidden 70-hour crunch weeks disguised as 'passion').",
    badge: "Identity & Tax Vetted",
    iconName: "shield",
  },
  {
    title: "Guaranteed Response Timeline",
    tagline: "Strict 5-Day Anti-Ghosting SLA",
    description:
      "Agencies are obligated to review and provide structured status feedback within 5 business days. No applications disappear into a recruiter void.",
    badge: "5-Day SLA",
    iconName: "clock",
  },
] as const;

export const CANDIDATE_PILLARS: readonly TransparencyPillar[] = [
  {
    title: "360° Complete Career History",
    tagline: "No Omissions, No Inflated Titles",
    description:
      "Candidates disclose complete educational milestones, degrees, verified past employers, and precise tenures to build authentic trust.",
    badge: "Verified Background",
    iconName: "graduation",
  },
  {
    title: "Demonstrated Proof of Work",
    tagline: "Real Case Studies & Repos",
    description:
      "Every candidate links verifiable live projects, repositories, Figma design systems, or client deliverables showing actual individual contribution.",
    badge: "Portfolio Authenticated",
    iconName: "briefcase",
  },
  {
    title: "Explicit Work & Pace Preferences",
    tagline: "Clear Mutual Alignment",
    description:
      "Candidates specify target compensation, preferred agency pace, communication rhythms, and remote/hybrid setups upfront to avoid mismatch.",
    badge: "Alignment Matrix",
    iconName: "sparkles",
  },
] as const;

export const MOCK_TRANSPARENT_JOB: TransparentJobListing = {
  id: "wf-job-201",
  title: "Principal Design Engineer",
  agencyName: "Atelier Hyperion",
  agencyVerifiedSince: "May 2023",
  seniority: JobSeniority.LEAD,
  employmentType: EmploymentType.FULL_TIME,
  locationType: LocationType.REMOTE,
  locationCity: "New York / US-East or Western Europe",
  compensation: {
    baseSalary: "$165,000 – $185,000 USD",
    bonusOrEquity: "15% annual profit-share bonus + 0.25% studio equity",
    clientBillingRate: "Billed to enterprise clients at $195/hr",
    benefitsOverview:
      "100% health/dental/vision coverage, 30 days PTO, $4,000 annual equipment/learning stipend",
  },
  teamSize: "28 people (Design: 8, Engineering: 14, Strategy: 6)",
  weeklyHours:
    "Strict 40h/week cap, asynchronous-first with core hours 10am–2pm EST",
  dayToDayFocus: [
    "Architect reusable GSAP & Three.js interactive components for brand launches",
    "Partner with creative directors to bridge Figma prototypes into production Next.js code",
    "Conduct code reviews and mentor junior creative technologists",
  ],
  techStack: [
    "Next.js 16",
    "React 19",
    "GSAP",
    "Tailwind CSS v4",
    "TypeScript",
    "Three.js / WebGL",
  ],
  responseGuaranteedWithinHours: 72,
};

export const MOCK_CANDIDATE_PROFILE: CandidateProfilePreview = {
  name: "Elena Rostova",
  title: "Senior Creative Technologist & Interaction Designer",
  location: "Berlin, Germany (Open to Remote GMT-5 to GMT+3)",
  profileCompleteness: 100,
  education: [
    {
      institution: "Bauhaus-Universität Weimar",
      degree: "M.Sc. in Media Architecture & Interface Design",
      year: "2018 – 2020",
      verified: true,
    },
    {
      institution: "Technical University of Munich",
      degree: "B.Sc. in Informatics",
      year: "2014 – 2018",
      verified: true,
    },
  ],
  pastExperience: [
    {
      role: "Lead Interface Technologist",
      company: "Studio Monolith (3 years)",
      duration: "2021 – 2024",
      keyAchievement:
        "Delivered 14 Webby and AWAWDS winning agency websites using Next.js & GSAP.",
    },
    {
      role: "Front-End Creative Engineer",
      company: "Koto Creative",
      duration: "2019 – 2021",
      keyAchievement:
        "Built the global design system for a fintech unicorn, reducing production turnaround by 40%.",
    },
  ],
  verifiedCaseStudies: [
    "Interactive 3D Showroom (WebGL, 60fps mobile)",
    "Global Fintech Design System (React, Tailwind, Accessibility AA)",
    "Spatial Typography Experiment (Canvas + GSAP ScrollTrigger)",
  ],
  workPreferences: {
    preferredPace: "Studio sprint cycles with 2-week focus buffers",
    targetCompensation: "€95,000 – €110,000 / $130,000 – $150,000 USD",
    preferredModel: LocationType.REMOTE,
  },
  keySkills: [
    "GSAP Animations",
    "React 19",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "Figma",
  ],
};

export const COMPARISON_POINTS: readonly ComparisonPoint[] = [
  {
    topic: "Salary & Compensation",
    traditionalWay:
      "Hidden or absurd ranges like '$50k - $250k' that waste weeks of interviews before revealing the lowball offer.",
    candidWay:
      "Strict, contractually bound base salary, explicit bonus criteria, equity stakes, and client billing visibility.",
  },
  {
    topic: "Feedback & Ghosting",
    traditionalWay:
      "Candidates get ghosted after 4 rounds of interviews, take-home tests, and hours of preparation.",
    candidWay:
      "Enforced 5-day response SLA with structured decision notes on every submission.",
  },
  {
    topic: "Company Authenticity",
    traditionalWay:
      "Glossy PR descriptions that conceal toxic crunch hours, micro-management, and high turnover.",
    candidWay:
      "Verified weekly hour caps, team size breakdowns, tech debt assessments, and authentic studio profiles.",
  },
  {
    topic: "Candidate Profiles",
    traditionalWay:
      "Keyword-stuffed, AI-generated resumes with inflated titles and omitted histories that mislead hiring managers.",
    candidWay:
      "360° verified education, authenticated past tenures, demonstrable code/design proof, and explicit pace preferences.",
  },
] as const;

export const TRANSPARENCY_PLEDGE: readonly PledgeItem[] = [
  {
    id: "pledge-1",
    title: "The Zero-Ambiguity Compensation Mandate",
    rule: "No role can be published without an exact, verified compensation range backed by studio budget.",
    appliesTo: "Agencies",
    penaltyOrBenefit:
      "Guarantees candidates never waste time on lowball offers.",
  },
  {
    id: "pledge-2",
    title: "The 360° Authenticated Profile Mandate",
    rule: "Candidates must provide verified educational background, genuine work history, and portfolio proof.",
    appliesTo: "Candidates",
    penaltyOrBenefit:
      "Gives agencies confidence they are interviewing real, vetted experts.",
  },
  {
    id: "pledge-3",
    title: "The Anti-Ghosting SLA Protocol",
    rule: "Every candidate application must receive a formal decision or stage update within 5 business days.",
    appliesTo: "Agencies",
    penaltyOrBenefit:
      "Violating agencies lose verified status and posting privileges.",
  },
  {
    id: "pledge-4",
    title: "The Working Culture & Stack Truth Agreement",
    rule: "Agencies must declare real weekly workloads and actual technology stacks used in production.",
    appliesTo: "Agencies",
    penaltyOrBenefit: "Ensures mutual fit before the contract is signed.",
  },
] as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    category: "General",
    question: "Why is the platform called Candid?",
    answer:
      "Most bad hires and unhappy jobs happen because conventional job boards encourage both sides to hide the truth: companies hide salary and workload realities, while candidates send vague, inflated resumes. Candid is the antidote—we enforce 100% radical transparency so that neither side ever accepts a mismatched hire again.",
  },
  {
    category: "For Agencies",
    question:
      "Why do agencies have to post verified compensation and client billing details?",
    answer:
      "Top specialists refuse to apply to postings with hidden salaries or vague ranges. By providing full compensation transparency up front, Candid agencies receive 4x more qualified, senior applicants and close hires in under 14 days without protracted salary renegotiations.",
  },
  {
    category: "For Agencies",
    question:
      "What happens if an agency does not respond within the 5-day SLA?",
    answer:
      "Our anti-ghosting protocol monitors review timestamps. If an agency repeatedly fails to provide feedback within 5 business days, their 'Verified Transparent' badge is suspended and active listings are paused.",
  },
  {
    category: "For Candidates",
    question:
      "Why do candidates need to fill out a complete educational and career history?",
    answer:
      "Because agencies on Candid are held to strict transparency standards, they require high-trust candidate submissions in return. A verified 360° profile eliminates keyword spam, verifies true expertise, and ensures you stand out directly to studio founders and technical directors.",
  },
  {
    category: "For Candidates",
    question: "Is Candid free for job seekers and specialists?",
    answer:
      "Yes, 100% free forever for candidates. You can build your verified 360° profile, browse transparent studio opportunities, and apply directly without middleman recruiters taking a cut of your compensation.",
  },
] as const;
