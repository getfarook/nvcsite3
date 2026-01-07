"use client";

import { Button } from "@/components/ui/button";
import { TechStackMarquee } from "@/components/tech-stack-marquee";
import { AiNodesBackground } from "@/components/ai-nodes-background";
import { HERO } from "@/lib/constants";
import { THEME } from "@/lib/constants/theme";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-transparent" />
      <AiNodesBackground />

      <div className="relative z-10 mx-auto max-w-5xl text-center pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs sm:text-sm text-accent mb-6 sm:mb-8 max-w-full text-wrap text-center">
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-accent"></span>
          </span>
          <span>{HERO.badge.text}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance mb-4 sm:mb-6 px-2 sm:px-0">
          {HERO.title.prefix}{" "}
          <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
            {HERO.title.highlight}
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 text-pretty leading-relaxed px-2 sm:px-4 md:px-0">
          {HERO.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
          {HERO.ctas.map((cta, index) => (
            <Link key={index} href={cta.href} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant={cta.variant === "outline" ? "outline" : undefined}
                className={`w-full sm:w-auto ${
                  cta.variant === "primary"
                    ? `${THEME.button.primary} px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base`
                    : "px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base bg-transparent hover:text-white"
                }`}
              >
                {cta.label}
                {cta.icon && (
                  <cta.icon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </Button>
            </Link>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="w-full mt-4 sm:mt-8">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-4 sm:mb-6 uppercase tracking-wider px-4 sm:px-0">
            Powered by Modern Technologies
          </p>
          <TechStackMarquee />
        </div>
      </div>
    </section>
  );
}
