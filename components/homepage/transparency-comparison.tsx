"use client";

import * as React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations";
import { COMPARISON_POINTS } from "@/lib/constants/homepage";

export function TransparencyComparison() {
  return (
    <section
      id="comparison"
      className="py-16 container mx-auto px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
        <FadeIn>
          <Badge
            variant="outline"
            className="mb-4 text-xs font-semibold px-3 py-1 border-destructive/30 text-destructive dark:text-destructive-foreground"
          >
            The Diagnosis
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-h2 font-bold mb-4">
            Why Conventional Platforms Cause Mismatched Hires.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lead text-muted-foreground">
            When both sides withhold critical information, disappointment is
            inevitable. Here is how Candid rewrites the rules.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.3} className="max-w-5xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-border/70 overflow-hidden shadow-sm bg-card">
          {/* Desktop Table Header Row */}
          <div className="hidden md:grid md:grid-cols-12 border-b border-border/60 bg-muted/40 font-heading font-semibold text-small">
            <div className="col-span-4 p-5 text-muted-foreground">Category</div>
            <div className="col-span-4 p-5 flex items-center gap-2 text-destructive">
              <ShieldAlert className="size-4" />
              <span>The Broken Job Market</span>
            </div>
            <div className="col-span-4 p-5 flex items-center gap-2 text-primary border-l border-border/60 bg-primary/5">
              <Sparkles className="size-4" />
              <span>The Candid Standard</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border/50 text-small">
            {COMPARISON_POINTS.map((point) => (
              <div
                key={point.topic}
                className="grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-muted/20"
              >
                {/* Topic Header */}
                <div className="md:col-span-4 p-4 sm:p-5 font-heading font-bold text-foreground flex items-center bg-muted/30 md:bg-transparent border-b md:border-b-0 border-border/40">
                  {point.topic}
                </div>

                {/* Traditional Way */}
                <div className="md:col-span-4 p-4 sm:p-5 text-muted-foreground flex flex-col justify-start bg-destructive/5 md:bg-transparent">
                  <span className="md:hidden text-xs font-semibold text-destructive uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <X className="size-3.5" />
                    The Broken Job Market
                  </span>
                  <div className="flex items-start gap-2.5">
                    <div className="hidden md:flex size-5 rounded-full bg-destructive/10 text-destructive items-center justify-center shrink-0 mt-0.5">
                      <X className="size-3.5" />
                    </div>
                    <span className="leading-relaxed text-xs sm:text-small">
                      {point.traditionalWay}
                    </span>
                  </div>
                </div>

                {/* Candid Way */}
                <div className="md:col-span-4 p-4 sm:p-5 text-foreground flex flex-col justify-start md:border-l border-border/60 bg-primary/5">
                  <span className="md:hidden text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Check className="size-3.5" />
                    The Candid Standard
                  </span>
                  <div className="flex items-start gap-2.5">
                    <div className="hidden md:flex size-5 rounded-full bg-primary/10 text-primary items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-3.5" />
                    </div>
                    <span className="leading-relaxed font-medium text-xs sm:text-small">
                      {point.candidWay}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
