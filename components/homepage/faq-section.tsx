"use client";

import * as React from "react";
import { HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations";
import { FAQ_ITEMS } from "@/lib/constants/homepage";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-12 container mx-auto px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
        <FadeIn>
          <Badge
            variant="outline"
            className="mb-4 text-xs font-semibold px-3 py-1 border-primary/30 text-primary"
          >
            Answers & Policies
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-h2 font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lead text-muted-foreground">
            Everything you need to know about our transparency verification,
            compensation rules, and anti-ghosting SLAs.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.3} className="max-w-3xl mx-auto">
        <Accordion className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="rounded-xl border border-border/70 bg-card px-5 py-1.5 shadow-2xs"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-base hover:no-underline py-4">
                <div className="flex items-center gap-3 pr-4">
                  <HelpCircle className="size-4 text-primary shrink-0" />
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-small text-muted-foreground leading-relaxed pt-1 pb-4 pl-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  );
}
