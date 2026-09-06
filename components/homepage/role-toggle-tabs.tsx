"use client";

import * as React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  Clock,
  GraduationCap,
  Briefcase,
  Sparkles,
  Building2,
  UserCheck,
  Award,
  ArrowUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn, Magnetic } from "@/components/animations";
import {
  AGENCY_PILLARS,
  CANDIDATE_PILLARS,
  MOCK_CANDIDATE_PROFILE,
  MOCK_TRANSPARENT_JOB,
} from "@/lib/constants/homepage";
import { UserRoleType } from "@/types/homepage";

export function RoleToggleTabs() {
  const [activeTab, setActiveTab] = React.useState<string>(UserRoleType.AGENCY);
  const tabsContainerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion || !tabsContainerRef.current) return;

      const leftCards = tabsContainerRef.current.querySelectorAll(
        ".tab-left-content > *",
      );
      const rightCard =
        tabsContainerRef.current.querySelector(".tab-right-card");

      if (leftCards.length > 0) {
        gsap.fromTo(
          leftCards,
          { opacity: 0, y: 18, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.45,
            stagger: 0.07,
            ease: "power2.out",
          },
        );
      }

      if (rightCard) {
        gsap.fromTo(
          rightCard,
          { opacity: 0, y: 22, scale: 0.985, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power2.out",
          },
        );
      }
    },
    { scope: tabsContainerRef, dependencies: [activeTab] },
  );

  return (
    <section
      id="how-it-works"
      className="py-12 bg-muted/20 border-t border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <FadeIn>
            <Badge
              variant="outline"
              className="mb-4 text-xs font-semibold px-3 py-1 border-primary/30 text-primary"
            >
              The Two-Sided Standard
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-h2 font-bold mb-4">
              Mutual Radical Transparency.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lead text-muted-foreground">
              No more one-sided expectations. Agencies must reveal complete
              compensation and operational truth; candidates must provide
              complete, verified background and proof of work.
            </p>
          </FadeIn>
        </div>

        <div ref={tabsContainerRef} className="w-full max-w-5xl mx-auto">
          <Tabs
            value={activeTab}
            onValueChange={(val) => setActiveTab(val)}
            className="w-full"
          >
            {/* Responsive Tab Trigger Pills */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <TabsList className="!h-auto p-1.5 bg-muted rounded-2xl border border-border/60 shadow-xs flex flex-col w-full sm:w-auto sm:flex-row gap-1">
                <TabsTrigger
                  value={UserRoleType.AGENCY}
                  className="rounded-xl px-5 py-3 text-small font-semibold cursor-pointer w-full text-center justify-center data-active:bg-background data-active:text-foreground data-active:shadow-sm transition-all"
                >
                  <Building2 className="size-4 mr-2 text-primary shrink-0" />
                  For Hiring Agencies & Studios
                </TabsTrigger>
                <TabsTrigger
                  value={UserRoleType.CANDIDATE}
                  className="rounded-xl px-5 py-3 text-small font-semibold cursor-pointer w-full text-center justify-center data-active:bg-background data-active:text-foreground data-active:shadow-sm transition-all"
                >
                  <UserCheck className="size-4 mr-2 text-primary shrink-0" />
                  For Specialists & Job Seekers
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TAB 1: FOR AGENCIES */}
            <TabsContent
              value={UserRoleType.AGENCY}
              className="focus-visible:outline-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* Left Column */}
                <div className="lg:col-span-5 h-full flex flex-col justify-between gap-4 tab-left-content">
                  <div className="mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Agency Obligations
                    </span>
                    <h3 className="font-heading text-h3 font-bold mt-1 text-foreground">
                      What Agencies Must Disclose
                    </h3>
                    <p className="text-small text-muted-foreground mt-1">
                      Every job post is audited before going live. Nothing can
                      be masked behind fine print.
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col justify-between gap-3.5">
                    {AGENCY_PILLARS.map((pillar) => (
                      <Card
                        key={pillar.title}
                        className="flex-1 flex flex-col justify-between border-border/60 bg-card/80 shadow-xs hover:border-primary/40 transition-colors"
                      >
                        <CardHeader className="pb-1.5">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="secondary"
                              className="text-xs font-medium text-primary bg-primary/10"
                            >
                              {pillar.badge}
                            </Badge>
                            {pillar.iconName === "dollar" && (
                              <DollarSign className="size-4 text-primary shrink-0" />
                            )}
                            {pillar.iconName === "shield" && (
                              <ShieldCheck className="size-4 text-primary shrink-0" />
                            )}
                            {pillar.iconName === "clock" && (
                              <Clock className="size-4 text-primary shrink-0" />
                            )}
                          </div>
                          <CardTitle className="text-h4 mt-2 font-heading font-semibold">
                            {pillar.title}
                          </CardTitle>
                          <CardDescription className="text-xs font-medium text-foreground/80">
                            {pillar.tagline}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0 text-xs text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Right Column: Live Mockup of Transparent Job Post */}
                <div className="lg:col-span-7 h-full flex flex-col">
                  <div className="tab-right-card rounded-2xl border border-primary/30 bg-card p-5 sm:p-7 md:p-8 shadow-lg relative overflow-hidden h-full flex flex-col justify-between">
                    <div>
                      {/* Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/50 pb-4 mb-5">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className="size-11 min-w-11 min-h-11 shrink-0 aspect-square rounded-xl bg-primary text-primary-foreground font-heading font-bold text-base flex items-center justify-center select-none shadow-xs">
                            AH
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-heading font-bold text-foreground text-small truncate">
                                {MOCK_TRANSPARENT_JOB.agencyName}
                              </span>
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
                                <ShieldCheck className="size-3" />
                                Verified Studio
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">
                              Verified since{" "}
                              {MOCK_TRANSPARENT_JOB.agencyVerifiedSince} ·{" "}
                              {MOCK_TRANSPARENT_JOB.locationCity}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 self-start sm:self-auto">
                          <Clock className="size-3" />
                          {MOCK_TRANSPARENT_JOB.responseGuaranteedWithinHours}h
                          Guaranteed SLA
                        </span>
                      </div>

                      <h4 className="font-heading text-h4 font-bold mb-4 text-foreground">
                        {MOCK_TRANSPARENT_JOB.title}
                      </h4>

                      {/* Compensation Breakdown */}
                      <div className="rounded-xl bg-muted/60 p-3.5 sm:p-4 border border-border/60 mb-4 sm:mb-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Verified Compensation Breakdown
                          </span>
                          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            100% Guaranteed Budget
                          </span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div>
                            <span className="text-muted-foreground block text-xs">
                              Base Salary:
                            </span>
                            <span className="font-bold text-base text-foreground">
                              {MOCK_TRANSPARENT_JOB.compensation.baseSalary}
                            </span>
                          </div>
                          {MOCK_TRANSPARENT_JOB.compensation
                            .clientBillingRate && (
                            <div className="pt-2 border-t border-border/40">
                              <span className="text-muted-foreground block text-xs">
                                Billing Transparency:
                              </span>
                              <span className="text-foreground text-small">
                                {
                                  MOCK_TRANSPARENT_JOB.compensation
                                    .clientBillingRate
                                }
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Operational Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs mb-4 sm:mb-5">
                        <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                          <span className="text-muted-foreground block text-xs">
                            Workload & Hours:
                          </span>
                          <span className="font-medium text-foreground text-small">
                            {MOCK_TRANSPARENT_JOB.weeklyHours}
                          </span>
                        </div>
                        <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                          <span className="text-muted-foreground block text-xs">
                            Team Composition:
                          </span>
                          <span className="font-medium text-foreground text-small">
                            {MOCK_TRANSPARENT_JOB.teamSize}
                          </span>
                        </div>
                      </div>

                      {/* Day to Day Focus */}
                      <div className="mb-4 sm:mb-5 text-xs">
                        <span className="font-semibold text-foreground block mb-2 text-small">
                          Unvarnished Day-to-Day:
                        </span>
                        <ul className="space-y-1.5 text-muted-foreground text-xs">
                          {MOCK_TRANSPARENT_JOB.dayToDayFocus.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className="size-3.5 text-primary mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                        {MOCK_TRANSPARENT_JOB.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-border/50 mt-auto">
                      <span className="text-xs text-muted-foreground">
                        Contractual Candid Verified Listing
                      </span>
                      <Magnetic strength={0.2} className="w-full sm:w-auto">
                        <Button
                          size="sm"
                          className="rounded-full text-xs font-semibold cursor-pointer w-full sm:w-auto justify-center"
                        >
                          Post A Role Like This
                          <ArrowUpRight className="size-3.5 ml-1" />
                        </Button>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* TAB 2: FOR CANDIDATES */}
            <TabsContent
              value={UserRoleType.CANDIDATE}
              className="focus-visible:outline-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* Left Column */}
                <div className="lg:col-span-5 h-full flex flex-col justify-between gap-4 tab-left-content">
                  <div className="mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Candidate Obligations
                    </span>
                    <h3 className="font-heading text-h3 font-bold mt-1 text-foreground">
                      What Candidates Must Provide
                    </h3>
                    <p className="text-small text-muted-foreground mt-1">
                      Agencies commit to transparency; in return, candidates
                      provide verified depth—no ghost resumes or inflated
                      claims.
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col justify-between gap-3.5">
                    {CANDIDATE_PILLARS.map((pillar) => (
                      <Card
                        key={pillar.title}
                        className="flex-1 flex flex-col justify-between border-border/60 bg-card/80 shadow-xs hover:border-primary/40 transition-colors"
                      >
                        <CardHeader className="pb-1.5">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="secondary"
                              className="text-xs font-medium text-primary bg-primary/10"
                            >
                              {pillar.badge}
                            </Badge>
                            {pillar.iconName === "graduation" && (
                              <GraduationCap className="size-4 text-primary shrink-0" />
                            )}
                            {pillar.iconName === "briefcase" && (
                              <Briefcase className="size-4 text-primary shrink-0" />
                            )}
                            {pillar.iconName === "sparkles" && (
                              <Sparkles className="size-4 text-primary shrink-0" />
                            )}
                          </div>
                          <CardTitle className="text-h4 mt-2 font-heading font-semibold">
                            {pillar.title}
                          </CardTitle>
                          <CardDescription className="text-xs font-medium text-foreground/80">
                            {pillar.tagline}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0 text-xs text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Right Column: Live Mockup of 360° Candidate Profile */}
                <div className="lg:col-span-7 h-full flex flex-col">
                  <div className="tab-right-card rounded-2xl border border-primary/30 bg-card p-5 sm:p-7 md:p-8 shadow-lg relative overflow-hidden h-full flex flex-col justify-between">
                    <div>
                      {/* Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/50 pb-4 mb-5">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className="size-11 min-w-11 min-h-11 shrink-0 aspect-square rounded-xl bg-primary text-primary-foreground font-heading font-bold text-base flex items-center justify-center select-none shadow-xs">
                            ER
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-heading font-bold text-foreground text-small truncate">
                                {MOCK_CANDIDATE_PROFILE.name}
                              </span>
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
                                <Award className="size-3" />
                                100% Profile Complete
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">
                              {MOCK_CANDIDATE_PROFILE.title} ·{" "}
                              {MOCK_CANDIDATE_PROFILE.location}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs font-medium text-primary border-primary/40 shrink-0 self-start sm:self-auto"
                        >
                          Verified Specialist
                        </Badge>
                      </div>

                      {/* Education Milestone Box */}
                      <div className="rounded-xl bg-muted/60 p-3.5 sm:p-4 border border-border/60 mb-4 sm:mb-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Verified Education & Credentials
                          </span>
                          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            Institution Verified
                          </span>
                        </div>
                        <div className="space-y-2">
                          {MOCK_CANDIDATE_PROFILE.education.map((edu) => (
                            <div key={edu.institution} className="text-xs">
                              <div className="flex flex-wrap items-center justify-between gap-1">
                                <span className="font-semibold text-foreground">
                                  {edu.institution}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {edu.year}
                                </span>
                              </div>
                              <span className="text-muted-foreground text-xs block">
                                {edu.degree}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Verified Experience Timeline */}
                      <div className="mb-4 sm:mb-5 text-xs">
                        <span className="font-semibold text-foreground block mb-2 text-small">
                          Verified Studio Experience:
                        </span>
                        <div className="space-y-2.5">
                          {MOCK_CANDIDATE_PROFILE.pastExperience.map((exp) => (
                            <div
                              key={exp.company}
                              className="rounded-lg bg-muted/40 p-3 border border-border/40"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                                <span className="font-semibold text-foreground text-small">
                                  {exp.role}
                                </span>
                                <span className="text-xs font-medium text-primary">
                                  {exp.company}
                                </span>
                              </div>
                              <p className="text-muted-foreground text-xs">
                                {exp.keyAchievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Working Preferences */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs mb-4 sm:mb-5">
                        <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                          <span className="text-muted-foreground block text-xs">
                            Target Compensation:
                          </span>
                          <span className="font-semibold text-foreground text-small">
                            {
                              MOCK_CANDIDATE_PROFILE.workPreferences
                                .targetCompensation
                            }
                          </span>
                        </div>
                        <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                          <span className="text-muted-foreground block text-xs">
                            Preferred Working Pace:
                          </span>
                          <span className="font-semibold text-foreground text-small">
                            {
                              MOCK_CANDIDATE_PROFILE.workPreferences
                                .preferredPace
                            }
                          </span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                        {MOCK_CANDIDATE_PROFILE.keySkills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-border/50 mt-auto">
                      <span className="text-xs text-muted-foreground">
                        Zero-Spam Verified Profile Guarantee
                      </span>
                      <Magnetic strength={0.2} className="w-full sm:w-auto">
                        <Button
                          size="sm"
                          className="rounded-full text-xs font-semibold cursor-pointer w-full sm:w-auto justify-center"
                        >
                          Build Your 360° Profile
                          <ArrowUpRight className="size-3.5 ml-1" />
                        </Button>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
