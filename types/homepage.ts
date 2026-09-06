export enum UserRoleType {
  AGENCY = "agency",
  CANDIDATE = "candidate",
}

export enum JobSeniority {
  MID = "Mid-Level",
  SENIOR = "Senior",
  LEAD = "Lead / Staff",
  DIRECTOR = "Director",
}

export enum EmploymentType {
  FULL_TIME = "Full-Time",
  CONTRACT = "Contract (W2 / B2B)",
  FRACTIONAL = "Fractional",
}

export enum LocationType {
  REMOTE = "100% Remote",
  HYBRID = "Hybrid",
  ONSITE = "On-Site",
}

export interface TransparencyPillar {
  title: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: "dollar" | "shield" | "clock" | "graduation" | "briefcase" | "sparkles";
}

export interface CompensationBreakdown {
  baseSalary: string;
  bonusOrEquity: string;
  clientBillingRate?: string;
  benefitsOverview: string;
}

export interface TransparentJobListing {
  id: string;
  title: string;
  agencyName: string;
  agencyLogo?: string;
  agencyVerifiedSince: string;
  seniority: JobSeniority;
  employmentType: EmploymentType;
  locationType: LocationType;
  locationCity: string;
  compensation: CompensationBreakdown;
  teamSize: string;
  weeklyHours: string;
  dayToDayFocus: string[];
  techStack: string[];
  responseGuaranteedWithinHours: number;
}

export interface CandidateEducation {
  institution: string;
  degree: string;
  year: string;
  verified: boolean;
}

export interface CandidateExperience {
  role: string;
  company: string;
  duration: string;
  keyAchievement: string;
}

export interface CandidateProfilePreview {
  name: string;
  title: string;
  location: string;
  profileCompleteness: number;
  education: CandidateEducation[];
  pastExperience: CandidateExperience[];
  verifiedCaseStudies: string[];
  workPreferences: {
    preferredPace: string;
    targetCompensation: string;
    preferredModel: LocationType;
  };
  keySkills: string[];
}

export interface ComparisonPoint {
  topic: string;
  traditionalWay: string;
  candidWay: string;
}

export interface PledgeItem {
  id: string;
  title: string;
  rule: string;
  appliesTo: "Both" | "Agencies" | "Candidates";
  penaltyOrBenefit: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "For Agencies" | "For Candidates";
}

