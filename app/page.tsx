"use client";

import * as React from "react";
import {
  ArrowRight,
  Building2,
  Clock,
  DollarSign,
  GraduationCap,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  Magnetic,
  Parallax,
  TextReveal,
  useSmoothScroll,
} from "@/components/animations";
import { AnimationDirection, TextRevealMode } from "@/types/animation";
import {
  FaqSection,
  RoleToggleTabs,
  TransparencyComparison,
  TransparencyPledge,
  VerifiedJobsGrid,
} from "@/components/homepage";

export default function Home() {
  const { scrollTo } = useSmoothScroll();

  const handleNavClick = React.useCallback(
    (targetId: string) => {
      scrollTo(targetId, { offset: -70 });
    },
    [scrollTo],
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:px-12">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo(0)}
            className="flex items-center gap-2.5 cursor-pointer text-left select-none"
          >
            <div className="flex size-9 min-w-9 min-h-9 shrink-0 aspect-square items-center justify-center rounded-xl bg-primary text-primary-foreground font-heading font-bold text-base shadow-sm">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight leading-none">
                Candid
              </span>
              <span className="text-xs text-muted-foreground tracking-wider font-semibold uppercase mt-0.5 hidden sm:inline-block">
                Radical Transparency
              </span>
            </div>
          </button>

          {/* Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <button
              type="button"
              onClick={() => handleNavClick("#how-it-works")}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("#comparison")}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              The Standard
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("#roles")}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              Verified Roles
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("#pledge")}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              The Pledge
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("#faq")}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Dual Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Magnetic strength={0.2}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick("#how-it-works")}
                className="hidden sm:inline-flex rounded-full text-xs font-semibold cursor-pointer"
              >
                <Building2 className="size-3.5 mr-1.5 text-primary" />
                For Agencies
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button
                size="sm"
                onClick={() => handleNavClick("#roles")}
                className="rounded-full text-xs font-semibold shadow-xs cursor-pointer px-3 sm:px-4"
              >
                <UserCheck className="size-3.5 mr-1 sm:mr-1.5" />
                <span>For Candidates</span>
              </Button>
            </Magnetic>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 container mx-auto px-4 sm:px-6 md:px-12">
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Pill Badge */}
            <FadeIn direction={AnimationDirection.UP} delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/60 px-3.5 sm:px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm shadow-2xs mb-6 sm:mb-8 max-w-full text-center">
                <Sparkles className="size-3.5 text-primary shrink-0" />
                <span className="truncate">
                  The Two-Sided Radical Transparency Platform
                </span>
              </div>
            </FadeIn>

            {/* Main Headline */}
            <div className="mb-5 sm:mb-6">
              <TextReveal
                text="Stop settling for the"
                as="h1"
                mode={TextRevealMode.WORDS}
                delay={0.1}
                className="font-heading text-display font-bold tracking-tight text-foreground"
              />
              <TextReveal
                text="wrong fit."
                as="span"
                mode={TextRevealMode.WORDS}
                delay={0.3}
                className="font-heading text-display font-extrabold tracking-tight text-primary block mt-1 sm:mt-1.5"
              />
            </div>

            {/* Subtitle Explaining the Two-Sided Transparency Model */}
            <FadeIn
              direction={AnimationDirection.UP}
              delay={0.4}
              className="max-w-2xl mb-8 sm:mb-10 px-2"
            >
              <p className="text-lead text-muted-foreground">
                Most hiring fails because both sides hide the truth: companies
                mask salaries and toxic workloads, while candidates send vague
                resumes.{" "}
                <span className="text-foreground font-semibold">
                  Candid enforces radical honesty on both sides
                </span>
                : 100% verified compensation & studio culture from agencies;
                complete 360° verified education & work history from candidates.
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn
              direction={AnimationDirection.UP}
              delay={0.5}
              className="w-full max-w-md sm:max-w-none"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
                <Magnetic strength={0.3} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    onClick={() => handleNavClick("#roles")}
                    variant={"default"}
                    className="h-12 px-7 rounded-full font-semibold shadow-md group cursor-pointer w-full sm:w-auto justify-center"
                  >
                    <span>Browse Transparent Roles</span>
                    <ArrowRight className="size-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Magnetic>

                <Magnetic strength={0.25} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleNavClick("#how-it-works")}
                    className="h-12 px-7 rounded-full font-semibold cursor-pointer w-full sm:w-auto justify-center"
                  >
                    <span>Post As An Agency</span>
                  </Button>
                </Magnetic>
              </div>
            </FadeIn>

            {/* Mutual Trust Pillars Strip */}
            <FadeIn
              direction={AnimationDirection.UP}
              delay={0.6}
              className="mt-10 sm:mt-14 w-full max-w-2xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl border border-border/60 bg-muted/30 backdrop-blur-sm text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-card/60">
                  <DollarSign className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-medium text-foreground text-small">
                    100% Upfront Salaries
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-card/60">
                  <Clock className="size-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground text-small">
                    5-Day Anti-Ghost SLA
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-card/60">
                  <GraduationCap className="size-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground text-small">
                    360° Verified History
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Decorative Floating Ambient Parallax Backdrop */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <Parallax
              speed={-0.2}
              className="absolute -top-16 left-1/4 hidden lg:block opacity-35"
            >
              <div className="size-96 rounded-full bg-primary/10 blur-3xl" />
            </Parallax>
            <Parallax
              speed={0.25}
              className="absolute top-1/2 -right-12 hidden lg:block opacity-35"
            >
              <div className="size-80 rounded-full bg-primary/15 blur-3xl" />
            </Parallax>
          </div>
        </section>

        {/* Section 1: The Two-Sided Standard (Interactive Role Switcher) */}
        <RoleToggleTabs />

        {/* Section 2: Why Conventional Hiring Fails (Comparison Matrix) */}
        <TransparencyComparison />

        {/* Section 3: Live Verified Roles */}
        <VerifiedJobsGrid />

        {/* Section 4: The Transparency Pledge */}
        <TransparencyPledge />

        {/* Section 5: FAQ */}
        <FaqSection />

        {/* Section 6: High Impact Closing CTA Banner */}
        <section className="py-12 container mx-auto px-4 sm:px-6 md:px-12">
          <div className="relative rounded-2xl sm:rounded-3xl bg-primary text-primary-foreground p-6 sm:p-10 md:p-16 overflow-hidden shadow-xl">
            <Parallax
              speed={-0.15}
              className="absolute -bottom-24 -right-24 -z-0 opacity-20 pointer-events-none"
            >
              <div className="size-96 rounded-full bg-white blur-3xl" />
            </Parallax>

            <div className="relative z-10 max-w-2xl">
              <FadeIn direction={AnimationDirection.UP}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4">
                  End The Era of the Wrong Hire
                </span>
              </FadeIn>

              <TextReveal
                text="Never guess about compensation, culture, or credentials again."
                as="h2"
                className="font-heading text-h2 font-bold text-white mb-4 sm:mb-6"
              />

              <FadeIn
                direction={AnimationDirection.UP}
                delay={0.25}
                className="mb-6 sm:mb-8"
              >
                <p className="text-lead text-white/85">
                  Join hundreds of vetted studios and thousands of senior
                  specialists building transparent careers without compromise.
                </p>
              </FadeIn>

              <FadeIn direction={AnimationDirection.UP} delay={0.35}>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <Magnetic strength={0.3} className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="inverted"
                      onClick={() => handleNavClick("#roles")}
                      className="h-12 px-8 rounded-full font-semibold cursor-pointer w-full sm:w-auto justify-center"
                    >
                      Find Your Fit (Candidate)
                    </Button>
                  </Magnetic>
                  <Magnetic strength={0.25} className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="inverted-outline"
                      onClick={() => handleNavClick("#how-it-works")}
                      className="h-12 px-8 rounded-full font-semibold cursor-pointer w-full sm:w-auto justify-center"
                    >
                      Hire With Transparency (Agency)
                    </Button>
                  </Magnetic>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 select-none">
              <div className="flex size-7 min-w-7 min-h-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading font-bold text-small shadow-xs">
                C
              </div>
              <span className="font-heading font-bold text-base text-foreground">
                Candid
              </span>
            </div>
            <p className="text-small text-muted-foreground max-w-sm">
              The radical transparency platform matching verified creative
              agencies with authenticated specialists.
            </p>
            <span className="text-xs text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} Candid Inc. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2.5 sm:gap-y-3 text-small text-muted-foreground font-medium">
            <button
              type="button"
              onClick={() => handleNavClick("#how-it-works")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Agency Requirements
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("#how-it-works")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Candidate Verification
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("#pledge")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Transparency Pledge
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("#faq")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              FAQ & Policies
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
