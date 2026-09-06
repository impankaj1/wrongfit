import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScrollProvider, ScrollProgress } from "@/components/animations";

// Body font — Inter, clean and highly legible at all sizes
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Display / heading font — Sora, geometric and bold
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WrongFit — Find Jobs That Actually Fit",
  description:
    "WrongFit connects talented professionals with agencies posting real opportunities. Browse jobs, apply directly, and find your next role.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        sora.variable,
        geistSans.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <ScrollProgress />
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
