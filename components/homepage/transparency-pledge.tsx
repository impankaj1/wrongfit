"use client";

import * as React from "react";
import { CheckCircle2, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations";
import { TRANSPARENCY_PLEDGE } from "@/lib/constants/homepage";

export function TransparencyPledge() {
  return (
    <section
      id="pledge"
      className="py-12 bg-muted/30 border-y border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <FadeIn>
            <Badge
              variant="outline"
              className="mb-4 text-xs font-semibold px-3 py-1 border-primary/30 text-primary"
            >
              The Candid Compact
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-h2 font-bold mb-4">
              The Radical Transparency Pledge
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lead text-muted-foreground">
              Every participating agency and registered candidate signs this
              covenant before gaining platform access. Zero exceptions.
            </p>
          </FadeIn>
        </div>

        <FadeIn
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {TRANSPARENCY_PLEDGE.map((pledge, idx) => (
            <div
              key={pledge.id}
              className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-xs hover:border-primary/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex size-8 min-w-8 min-h-8 shrink-0 aspect-square items-center justify-center rounded-lg bg-primary/10 text-primary font-heading font-bold text-xs select-none">
                    0{idx + 1}
                  </span>
                  <Badge variant="secondary" className="text-xs font-medium">
                    Binding on {pledge.appliesTo}
                  </Badge>
                </div>

                <h3 className="font-heading text-h4 font-bold mb-2 text-foreground">
                  {pledge.title}
                </h3>
                <p className="text-small text-muted-foreground leading-relaxed mb-4">
                  {pledge.rule}
                </p>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-start gap-2 text-xs">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-medium text-foreground">
                  {pledge.penaltyOrBenefit}
                </span>
              </div>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground bg-background px-4 py-2 rounded-full border border-border/60 shadow-xs">
            <Lock className="size-3.5 text-primary" />
            <span>Audited weekly by Candid Quality Council</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
