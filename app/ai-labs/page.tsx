"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bot, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import {
  AI_LABS_HERO,
  AI_LABS_FEATURES,
  AI_LABS_INDUSTRIES,
  AI_STACK,
} from "@/lib/constants/ai-labs";

export default function AILabsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-purple-500/10 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Bot className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Future of Technology
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {AI_LABS_HERO.title}
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-muted-foreground font-normal">
                {AI_LABS_HERO.subtitle}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {AI_LABS_HERO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Shaping the Next Decade
              </h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                <p className="mb-6">
                  AI and Machine Learning will impact almost all segments of
                  life by the beginning of the next decade. The current and
                  future demand for skilled human resources in this area is
                  staggering.
                </p>
                <p>
                  AI plays a pivotal role in addressing the business challenges
                  of the new era. From finance to healthcare, intelligent
                  systems are revolutionizing how we work and live.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {AI_LABS_INDUSTRIES.map((industry) => (
                <Card
                  key={industry.name}
                  className="p-4 flex items-center gap-3 border-border/50 hover:border-accent/50 transition-colors"
                >
                  <industry.icon className="h-5 w-5 text-accent" />
                  <span className="font-medium">{industry.name}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Training Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Giving that extra edge of intelligence to software applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AI_LABS_FEATURES.map((feature, index) => (
              <Card
                key={index}
                className="p-8 border-border/50 hover:border-accent/50 transition-all group"
              >
                <div className="mb-6 p-4 rounded-lg bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-semibold mb-12">
            Powered by Leading Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {AI_STACK.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border/50 shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Intelligent Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need expert consulting for your project or want to
            master AI through our hands-on training, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="px-8 h-12 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8 h-12 text-lg">
                Join Training
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
