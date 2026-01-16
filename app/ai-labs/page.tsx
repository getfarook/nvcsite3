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
import { NeuralNetworkBackground } from "@/components/neural-network-background";

// ... existing imports ...

export default function AILabsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <NeuralNetworkBackground spreadNearText />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Bot className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Future of Technology
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              {AI_LABS_HERO.title}
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-muted-foreground font-normal">
                {AI_LABS_HERO.subtitle}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {AI_LABS_HERO.description}
            </p>

            <div className="flex items-center justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 h-12 text-lg bg-white hover:bg-gray-100 text-gray-900 border border-gray-200"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-sm font-medium text-accent">
                Our Tech Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powered by Leading Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge frameworks and tools to deliver
              exceptional AI solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {AI_STACK.map((tech, index) => (
              <Card
                key={tech}
                className="group relative p-5 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium text-sm">{tech}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
