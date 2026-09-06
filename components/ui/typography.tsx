import * as React from "react"
import { cn } from "@/lib/utils"

// ─── Polymorphic helper types ─────────────────────────────────────────────────

type AsProp<T extends React.ElementType> = { as?: T }

type PolymorphicProps<T extends React.ElementType, Props = object> = AsProp<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof AsProp<T> | keyof Props> &
  Props

// ─── Display ─────────────────────────────────────────────────────────────────
// 3.5rem · lh 1.1 · ls -0.03em — Hero headlines, above-the-fold impact copy

type DisplayProps<T extends React.ElementType = "h1"> = PolymorphicProps<
  T,
  { className?: string }
>

function Display<T extends React.ElementType = "h1">({
  as,
  className,
  ...props
}: DisplayProps<T>) {
  const Tag = (as ?? "h1") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-heading font-extrabold tracking-[-0.03em] leading-[1.1]",
        "[font-size:var(--text-display)]",
        className
      )}
      {...props}
    />
  )
}

// ─── H1 ───────────────────────────────────────────────────────────────────────
// 2.5rem · lh 1.2 · ls -0.025em — Page titles

type H1Props<T extends React.ElementType = "h1"> = PolymorphicProps<
  T,
  { className?: string }
>

function H1<T extends React.ElementType = "h1">({
  as,
  className,
  ...props
}: H1Props<T>) {
  const Tag = (as ?? "h1") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-heading font-bold tracking-[-0.025em] leading-[1.2]",
        "[font-size:var(--text-h1)]",
        className
      )}
      {...props}
    />
  )
}

// ─── H2 ───────────────────────────────────────────────────────────────────────
// 2rem · lh 1.25 · ls -0.02em — Section headings

type H2Props<T extends React.ElementType = "h2"> = PolymorphicProps<
  T,
  { className?: string }
>

function H2<T extends React.ElementType = "h2">({
  as,
  className,
  ...props
}: H2Props<T>) {
  const Tag = (as ?? "h2") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-heading font-bold tracking-[-0.02em] leading-[1.25]",
        "[font-size:var(--text-h2)]",
        className
      )}
      {...props}
    />
  )
}

// ─── H3 ───────────────────────────────────────────────────────────────────────
// 1.5rem · lh 1.3 · ls -0.015em — Card titles, sub-sections

type H3Props<T extends React.ElementType = "h3"> = PolymorphicProps<
  T,
  { className?: string }
>

function H3<T extends React.ElementType = "h3">({
  as,
  className,
  ...props
}: H3Props<T>) {
  const Tag = (as ?? "h3") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-heading font-semibold tracking-[-0.015em] leading-[1.3]",
        "[font-size:var(--text-h3)]",
        className
      )}
      {...props}
    />
  )
}

// ─── H4 ───────────────────────────────────────────────────────────────────────
// 1.25rem · lh 1.35 · ls -0.01em — Labels, smaller headings

type H4Props<T extends React.ElementType = "h4"> = PolymorphicProps<
  T,
  { className?: string }
>

function H4<T extends React.ElementType = "h4">({
  as,
  className,
  ...props
}: H4Props<T>) {
  const Tag = (as ?? "h4") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-heading font-semibold tracking-[-0.01em] leading-[1.35]",
        "[font-size:var(--text-h4)]",
        className
      )}
      {...props}
    />
  )
}

// ─── Lead ─────────────────────────────────────────────────────────────────────
// 1.125rem · lh 1.7 — Intro paragraph, job description opener, hero sub-copy

type LeadProps<T extends React.ElementType = "p"> = PolymorphicProps<
  T,
  { className?: string }
>

function Lead<T extends React.ElementType = "p">({
  as,
  className,
  ...props
}: LeadProps<T>) {
  const Tag = (as ?? "p") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-sans font-normal leading-[1.7] tracking-[0em] text-muted-foreground",
        "[font-size:var(--text-lead)]",
        className
      )}
      {...props}
    />
  )
}

// ─── Body ─────────────────────────────────────────────────────────────────────
// 1rem · lh 1.65 — Default body copy, job descriptions, form helper text

type BodyProps<T extends React.ElementType = "p"> = PolymorphicProps<
  T,
  { className?: string }
>

function Body<T extends React.ElementType = "p">({
  as,
  className,
  ...props
}: BodyProps<T>) {
  const Tag = (as ?? "p") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-sans font-normal leading-[1.65] tracking-[0em]",
        "[font-size:var(--text-base)]",
        className
      )}
      {...props}
    />
  )
}

// ─── Small ────────────────────────────────────────────────────────────────────
// 0.875rem · lh 1.6 — Secondary info, posted date, location, salary range

type SmallProps<T extends React.ElementType = "p"> = PolymorphicProps<
  T,
  { className?: string }
>

function Small<T extends React.ElementType = "p">({
  as,
  className,
  ...props
}: SmallProps<T>) {
  const Tag = (as ?? "p") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-sans font-normal leading-[1.6] tracking-[0em]",
        "[font-size:var(--text-small)]",
        className
      )}
      {...props}
    />
  )
}

// ─── Muted ────────────────────────────────────────────────────────────────────
// Small + muted-foreground color — metadata, helper text, timestamps

type MutedProps<T extends React.ElementType = "p"> = PolymorphicProps<
  T,
  { className?: string }
>

function Muted<T extends React.ElementType = "p">({
  as,
  className,
  ...props
}: MutedProps<T>) {
  const Tag = (as ?? "p") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-sans font-normal leading-[1.6] tracking-[0em] text-muted-foreground",
        "[font-size:var(--text-small)]",
        className
      )}
      {...props}
    />
  )
}

// ─── Label ────────────────────────────────────────────────────────────────────
// 0.875rem · medium weight — Form labels, section labels, filter headings

type LabelTextProps<T extends React.ElementType = "span"> = PolymorphicProps<
  T,
  { className?: string }
>

function LabelText<T extends React.ElementType = "span">({
  as,
  className,
  ...props
}: LabelTextProps<T>) {
  const Tag = (as ?? "span") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-sans font-medium leading-none tracking-[0em]",
        "[font-size:var(--text-small)]",
        className
      )}
      {...props}
    />
  )
}

// ─── Caption ──────────────────────────────────────────────────────────────────
// 0.75rem · lh 1.5 · ls +0.01em — Tags, badges, fine print, image captions

type CaptionProps<T extends React.ElementType = "span"> = PolymorphicProps<
  T,
  { className?: string }
>

function Caption<T extends React.ElementType = "span">({
  as,
  className,
  ...props
}: CaptionProps<T>) {
  const Tag = (as ?? "span") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-sans font-normal leading-[1.5] tracking-[0.01em] text-muted-foreground",
        "[font-size:var(--text-xs)]",
        className
      )}
      {...props}
    />
  )
}

// ─── Code ─────────────────────────────────────────────────────────────────────
// Block code — pre + code, monospace font

type CodeBlockProps<T extends React.ElementType = "pre"> = PolymorphicProps<
  T,
  { className?: string }
>

function CodeBlock<T extends React.ElementType = "pre">({
  as,
  className,
  ...props
}: CodeBlockProps<T>) {
  const Tag = (as ?? "pre") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-mono text-sm leading-relaxed rounded-lg bg-muted p-4 overflow-x-auto",
        className
      )}
      {...props}
    />
  )
}

// ─── InlineCode ───────────────────────────────────────────────────────────────
// Inline code snippet — within body copy

type InlineCodeProps<T extends React.ElementType = "code"> = PolymorphicProps<
  T,
  { className?: string }
>

function InlineCode<T extends React.ElementType = "code">({
  as,
  className,
  ...props
}: InlineCodeProps<T>) {
  const Tag = (as ?? "code") as React.ElementType
  return (
    <Tag
      className={cn(
        "font-mono text-[0.875em] rounded bg-muted px-1.5 py-0.5",
        className
      )}
      {...props}
    />
  )
}

// ─── Exports ──────────────────────────────────────────────────────────────────

export {
  Display,
  H1,
  H2,
  H3,
  H4,
  Lead,
  Body,
  Small,
  Muted,
  LabelText,
  Caption,
  CodeBlock,
  InlineCode,
}
