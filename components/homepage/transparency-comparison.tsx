"use client";

import * as React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations";
import { COMPARISON_POINTS } from "@/lib/constants/homepage";

export function TransparencyComparison() {
  return (
    <section id="comparison" className="py-24 container mx-auto px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <FadeIn>
          <Badge variant="outline" className="mb-4 text-xs font-semibold px-3 py-1 border-destructive/30 text-destructive dark:text-destructive-foreground">
            The Diagnosis
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Why Conventional Platforms Cause Wrong Fits.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            When both sides withhold critical information, disappointment is inevitable. Here is how WrongFit rewrites the rules.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.3} className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-border/70 overflow-hidden shadow-sm bg-card">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-border/60 bg-muted/40 font-heading font-semibold text-sm">
            <div className="md:col-span-4 p-5 text-muted-foreground">Category</div>
            <div className="md:col-span-4 p-5 flex items-center gap-2 text-destructive">
              <ShieldAlert className="size-4" />
              <span>The Broken Job Market</span>
            </div>
            <div className="md:col-span-4 p-5 flex items-center gap-2 text-primary border-t md:border-t-0 md:border-l border-border/60 bg-primary/5">
              <Sparkles className="size-4" />
              <span>The WrongFit Standard</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-border/50 text-xs sm:text-sm">
            {COMPARISON_POINTS.map((point) => (
              <div
                key={point.topic}
                className="grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-muted/20"
              >
                {/* Topic */}
                <div className="md:col-span-4 p-5 font-heading font-bold text-foreground flex items-center">
                  {point.topic}
                </div>

                {/* Traditional Way */}
                <div className="md:col-span-4 p-5 text-muted-foreground flex items-start gap-3 bg-destructive/5 md:bg-transparent">
                  <div className="size-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0 mt-0.5">
                    <X className="size-3.5" />
                  </div>
                  <span className="leading-relaxed">{point.traditionalWay}</span>
                </div>

                {/* WrongFit Way */}
                <div className="md:col-span-4 p-5 text-foreground flex items-start gap-3 md:border-l border-border/60 bg-primary/5">
                  <div className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="size-3.5" />
                  </div>
                  <span className="leading-relaxed font-medium">{point.wrongfitWay}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

