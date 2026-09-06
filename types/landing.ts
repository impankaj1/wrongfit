export enum JobFitType {
  DIRECT = "Direct Agency",
  VERIFIED = "Verified Role",
  REMOTE = "100% Remote",
  HYBRID = "Hybrid",
}

export interface JobListing {
  id: string;
  role: string;
  agency: string;
  location: string;
  salary: string;
  tags: string[];
  fitType: JobFitType;
  matchScore: number;
}

export interface MetricStat {
  value: string;
  label: string;
  description: string;
}

export interface FeatureHighlight {
  title: string;
  description: string;
  badge: string;
}

