import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

// Body font — Inter, clean and highly legible at all sizes
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Display / heading font — Sora, geometric and bold
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Candid — Find Jobs That Actually Fit",
  description:
    "Candid connects talented professionals with agencies posting real opportunities. Browse jobs, apply directly, and find your next role.",
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
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
