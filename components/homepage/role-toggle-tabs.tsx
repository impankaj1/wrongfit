"use client";

import * as React from "react";
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

  return (
    <section id="how-it-works" className="py-24 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeIn>
            <Badge variant="outline" className="mb-4 text-xs font-semibold px-3 py-1 border-primary/30 text-primary">
              The Two-Sided Standard
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Mutual Radical Transparency.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              No more one-sided expectations. Agencies must reveal complete compensation and operational truth; candidates must provide complete, verified background and proof of work.
            </p>
          </FadeIn>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={(val) => setActiveTab(val)}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="h-12 p-1 bg-muted rounded-full border border-border/60 shadow-xs">
              <TabsTrigger
                value={UserRoleType.AGENCY}
                className="rounded-full px-6 py-2 text-sm font-semibold cursor-pointer data-active:bg-background data-active:text-foreground data-active:shadow-sm transition-all"
              >
                <Building2 className="size-4 mr-2 text-primary" />
                For Hiring Agencies & Studios
              </TabsTrigger>
              <TabsTrigger
                value={UserRoleType.CANDIDATE}
                className="rounded-full px-6 py-2 text-sm font-semibold cursor-pointer data-active:bg-background data-active:text-foreground data-active:shadow-sm transition-all"
              >
                <UserCheck className="size-4 mr-2 text-primary" />
                For Specialists & Job Seekers
              </TabsTrigger>
            </TabsList>
          </div>

          {/* TAB 1: FOR AGENCIES */}
          <TabsContent value={UserRoleType.AGENCY} className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Requirements & Pillars */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Agency Obligations
                  </span>
                  <h3 className="font-heading text-2xl font-bold mt-1 text-foreground">
                    What Agencies Must Disclose
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Every job post is audited before going live. Nothing can be masked behind fine print.
                  </p>
                </div>

                {AGENCY_PILLARS.map((pillar) => (
                  <Card key={pillar.title} className="border-border/60 bg-card/80 shadow-xs hover:border-primary/40 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-[11px] font-medium text-primary bg-primary/10">
                          {pillar.badge}
                        </Badge>
                        {pillar.iconName === "dollar" && <DollarSign className="size-4 text-primary" />}
                        {pillar.iconName === "shield" && <ShieldCheck className="size-4 text-primary" />}
                        {pillar.iconName === "clock" && <Clock className="size-4 text-primary" />}
                      </div>
                      <CardTitle className="text-base mt-2 font-heading font-semibold">
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

              {/* Right Column: Live Mockup of Transparent Job Post */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8 shadow-lg relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-base flex items-center justify-center">
                        AH
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-bold text-foreground text-sm">
                            {MOCK_TRANSPARENT_JOB.agencyName}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <ShieldCheck className="size-3" />
                            Verified Studio
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          Verified since {MOCK_TRANSPARENT_JOB.agencyVerifiedSince} · {MOCK_TRANSPARENT_JOB.locationCity}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="size-3" />
                      {MOCK_TRANSPARENT_JOB.responseGuaranteedWithinHours}h Guaranteed SLA
                    </span>
                  </div>

                  <h4 className="font-heading text-xl font-bold mb-4 text-foreground">
                    {MOCK_TRANSPARENT_JOB.title}
                  </h4>

                  {/* Compensation Breakdown Box */}
                  <div className="rounded-xl bg-muted/60 p-4 border border-border/60 mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Verified Compensation Breakdown
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        100% Guaranteed Budget
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-muted-foreground block text-[11px]">Base Salary:</span>
                        <span className="font-bold text-sm text-foreground">
                          {MOCK_TRANSPARENT_JOB.compensation.baseSalary}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[11px]">Incentives & Equity:</span>
                        <span className="font-medium text-foreground">
                          {MOCK_TRANSPARENT_JOB.compensation.bonusOrEquity}
                        </span>
                      </div>
                      {MOCK_TRANSPARENT_JOB.compensation.clientBillingRate && (
                        <div className="sm:col-span-2 pt-2 border-t border-border/40">
                          <span className="text-muted-foreground block text-[11px]">Billing Transparency:</span>
                          <span className="text-foreground">
                            {MOCK_TRANSPARENT_JOB.compensation.clientBillingRate}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Operational Details */}
                  <div className="grid grid-cols-2 gap-3 text-xs mb-5">
                    <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                      <span className="text-muted-foreground block text-[11px]">Workload & Hours:</span>
                      <span className="font-medium text-foreground">{MOCK_TRANSPARENT_JOB.weeklyHours}</span>
                    </div>
                    <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                      <span className="text-muted-foreground block text-[11px]">Team Composition:</span>
                      <span className="font-medium text-foreground">{MOCK_TRANSPARENT_JOB.teamSize}</span>
                    </div>
                  </div>

                  {/* Day to Day Focus */}
                  <div className="mb-5 text-xs">
                    <span className="font-semibold text-foreground block mb-2">Unvarnished Day-to-Day:</span>
                    <ul className="space-y-1.5 text-muted-foreground">
                      {MOCK_TRANSPARENT_JOB.dayToDayFocus.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {MOCK_TRANSPARENT_JOB.techStack.map((tech) => (
                      <span key={tech} className="bg-primary/10 text-primary text-[11px] font-medium px-2 py-0.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">
                      Contractual WrongFit Verified Listing
                    </span>
                    <Magnetic strength={0.2}>
                      <Button size="sm" className="rounded-full text-xs font-semibold cursor-pointer">
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
          <TabsContent value={UserRoleType.CANDIDATE} className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Requirements & Pillars */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Candidate Obligations
                  </span>
                  <h3 className="font-heading text-2xl font-bold mt-1 text-foreground">
                    What Candidates Must Provide
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Agencies commit to transparency; in return, candidates provide verified depth—no ghost resumes or inflated claims.
                  </p>
                </div>

                {CANDIDATE_PILLARS.map((pillar) => (
                  <Card key={pillar.title} className="border-border/60 bg-card/80 shadow-xs hover:border-primary/40 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-[11px] font-medium text-primary bg-primary/10">
                          {pillar.badge}
                        </Badge>
                        {pillar.iconName === "graduation" && <GraduationCap className="size-4 text-primary" />}
                        {pillar.iconName === "briefcase" && <Briefcase className="size-4 text-primary" />}
                        {pillar.iconName === "sparkles" && <Sparkles className="size-4 text-primary" />}
                      </div>
                      <CardTitle className="text-base mt-2 font-heading font-semibold">
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

              {/* Right Column: Live Mockup of 360° Candidate Profile */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8 shadow-lg relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-base flex items-center justify-center">
                        ER
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-bold text-foreground text-sm">
                            {MOCK_CANDIDATE_PROFILE.name}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <Award className="size-3" />
                            100% Profile Complete
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {MOCK_CANDIDATE_PROFILE.title} · {MOCK_CANDIDATE_PROFILE.location}
                        </span>
                      </div>
                    </div>

                    <Badge variant="outline" className="text-xs font-medium text-primary border-primary/40">
                      Verified Specialist
                    </Badge>
                  </div>

                  {/* Education Milestone Box */}
                  <div className="rounded-xl bg-muted/60 p-4 border border-border/60 mb-5">
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
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-foreground">{edu.institution}</span>
                            <span className="text-[11px] text-muted-foreground">{edu.year}</span>
                          </div>
                          <span className="text-muted-foreground text-[11px] block">{edu.degree}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Experience Timeline */}
                  <div className="mb-5 text-xs">
                    <span className="font-semibold text-foreground block mb-2">Verified Studio Experience:</span>
                    <div className="space-y-2.5">
                      {MOCK_CANDIDATE_PROFILE.pastExperience.map((exp) => (
                        <div key={exp.company} className="rounded-lg bg-muted/40 p-3 border border-border/40">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-foreground">{exp.role}</span>
                            <span className="text-[11px] font-medium text-primary">{exp.company}</span>
                          </div>
                          <p className="text-muted-foreground text-[11px]">{exp.keyAchievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Working Preferences & Expectations */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-5">
                    <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                      <span className="text-muted-foreground block text-[11px]">Target Compensation:</span>
                      <span className="font-semibold text-foreground">
                        {MOCK_CANDIDATE_PROFILE.workPreferences.targetCompensation}
                      </span>
                    </div>
                    <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                      <span className="text-muted-foreground block text-[11px]">Preferred Working Pace:</span>
                      <span className="font-semibold text-foreground">
                        {MOCK_CANDIDATE_PROFILE.workPreferences.preferredPace}
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {MOCK_CANDIDATE_PROFILE.keySkills.map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary text-[11px] font-medium px-2 py-0.5 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">
                      Zero-Spam Verified Profile Guarantee
                    </span>
                    <Magnetic strength={0.2}>
                      <Button size="sm" className="rounded-full text-xs font-semibold cursor-pointer">
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
    </section>
  );
}

