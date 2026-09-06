"use client";

import * as React from "react";
import {
  Building2,
  Clock,
  DollarSign,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, Magnetic } from "@/components/animations";
import { EmploymentType, JobSeniority, LocationType, type TransparentJobListing } from "@/types/homepage";

const VERIFIED_JOBS_CATALOG: readonly TransparentJobListing[] = [
  {
    id: "job-1",
    title: "Senior Creative Technologist",
    agencyName: "Studio Monolith",
    agencyVerifiedSince: "Jan 2023",
    seniority: JobSeniority.SENIOR,
    employmentType: EmploymentType.FULL_TIME,
    locationType: LocationType.REMOTE,
    locationCity: "New York / Remote",
    compensation: {
      baseSalary: "$150,000 – $175,000 USD",
      bonusOrEquity: "10% annual bonus + 401k 4% match",
      clientBillingRate: "Billed to brands at $185/hr",
      benefitsOverview: "100% health, dental, unlimited PTO with 3-week mandatory minimum",
    },
    teamSize: "32 specialists",
    weeklyHours: "Strict 40h/wk cap",
    dayToDayFocus: [
      "Develop award-winning 3D web experiences using Next.js 16 and GSAP",
      "Collaborate with design directors on interactive micro-animations",
    ],
    techStack: ["GSAP", "Three.js", "React 19", "Next.js", "Tailwind CSS v4"],
    responseGuaranteedWithinHours: 48,
  },
  {
    id: "job-2",
    title: "Staff Product Designer & Design Systems Lead",
    agencyName: "Kinetic Collective",
    agencyVerifiedSince: "Mar 2023",
    seniority: JobSeniority.LEAD,
    employmentType: EmploymentType.FULL_TIME,
    locationType: LocationType.HYBRID,
    locationCity: "London, UK (2 days studio)",
    compensation: {
      baseSalary: "£95,000 – £115,000 GBP",
      bonusOrEquity: "Annual revenue profit-share pool (avg £12k in 2024)",
      clientBillingRate: "Billed at £160/hr",
      benefitsOverview: "Private Bupa healthcare, 30 days holiday, £2,500 gear allowance",
    },
    teamSize: "18 specialists",
    weeklyHours: "37.5h/wk standard",
    dayToDayFocus: [
      "Architect multi-brand enterprise design systems in Figma and code tokens",
      "Lead cross-functional design sprints with fintech and climate clients",
    ],
    techStack: ["Figma Tokens", "Design Systems", "Prototyping", "Accessibility AA"],
    responseGuaranteedWithinHours: 72,
  },
  {
    id: "job-3",
    title: "Full-Stack Design Systems Engineer",
    agencyName: "Vanguard Labs",
    agencyVerifiedSince: "Nov 2023",
    seniority: JobSeniority.SENIOR,
    employmentType: EmploymentType.FULL_TIME,
    locationType: LocationType.REMOTE,
    locationCity: "San Francisco / Remote GMT-8 to GMT-4",
    compensation: {
      baseSalary: "$160,000 – $185,000 USD",
      bonusOrEquity: "0.5% early-stage studio pool equity",
      clientBillingRate: "Retainer-based agency engagements",
      benefitsOverview: "Health/Vision, mental health stipends, remote setup budget",
    },
    teamSize: "24 specialists",
    weeklyHours: "Asynchronous-first 40h/wk",
    dayToDayFocus: [
      "Ship high-performance React 19 UI component libraries for venture startups",
      "Optimize web vital metrics (LCP, INP) for client platforms",
    ],
    techStack: ["TypeScript", "React 19", "Base UI", "PostCSS", "Node.js"],
    responseGuaranteedWithinHours: 48,
  },
];

export function VerifiedJobsGrid() {
  const [filter, setFilter] = React.useState<string>("All");

  const categories = ["All", "Engineering", "Design", "Full-Stack"];

  const filteredJobs = React.useMemo(() => {
    if (filter === "Engineering") {
      return VERIFIED_JOBS_CATALOG.filter((j) =>
        j.techStack.some((t) => t.includes("React") || t.includes("Three.js") || t.includes("Node"))
      );
    }
    if (filter === "Design") {
      return VERIFIED_JOBS_CATALOG.filter((j) =>
        j.techStack.some((t) => t.includes("Figma") || t.includes("Design Systems"))
      );
    }
    return VERIFIED_JOBS_CATALOG;
  }, [filter]);

  return (
    <section id="roles" className="py-24 container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <FadeIn>
            <Badge variant="secondary" className="mb-3 text-xs font-semibold">
              Live Transparent Listings
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Featured Verified Roles
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-sm text-muted-foreground mt-2 max-w-lg">
              Every role below has passed our 100% compensation & authenticity audit. No hidden salaries, no unverified claims.
            </p>
          </FadeIn>
        </div>

        {/* Filter Pills */}
        <FadeIn delay={0.2} className="mt-6 md:mt-0 flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                filter === cat
                  ? "bg-foreground text-background shadow-xs"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>
      </div>

      {/* Jobs Grid */}
      <FadeIn stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            className="flex flex-col justify-between border-border/70 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-2 mb-2">
                <Badge variant="outline" className="text-[11px] font-medium">
                  {job.locationType}
                </Badge>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="size-3" />
                  Verified Budget
                </span>
              </div>

              <CardTitle className="text-lg leading-snug font-heading font-bold">
                {job.title}
              </CardTitle>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                <Building2 className="size-3.5 text-primary" />
                <span className="font-medium text-foreground">{job.agencyName}</span>
                <span>·</span>
                <MapPin className="size-3" />
                <span>{job.locationCity}</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-3.5 text-xs pt-0">
              {/* Compensation Box */}
              <div className="rounded-lg bg-muted/60 p-3 border border-border/50">
                <div className="flex items-center gap-1.5 text-foreground font-bold text-sm">
                  <DollarSign className="size-4 text-primary shrink-0" />
                  <span>{job.compensation.baseSalary}</span>
                </div>
                <span className="text-[11px] text-muted-foreground block mt-1">
                  {job.compensation.bonusOrEquity}
                </span>
              </div>

              {/* Workload & Team Size */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="size-3 text-primary" />
                  <span>{job.weeklyHours}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="size-3 text-primary" />
                  <span>{job.teamSize}</span>
                </div>
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {job.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pt-3 border-t border-border/40 flex items-center justify-between">
              <span className="text-[11px] font-medium text-primary flex items-center gap-1">
                <Clock className="size-3" />
                Answers in &lt; {job.responseGuaranteedWithinHours}h
              </span>
              <Magnetic strength={0.2}>
                <Button size="sm" className="rounded-lg text-xs font-semibold cursor-pointer">
                  View Full Post
                </Button>
              </Magnetic>
            </CardFooter>
          </Card>
        ))}
      </FadeIn>
    </section>
  );
}

