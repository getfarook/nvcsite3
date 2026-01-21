"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Users,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NeuralNetworkBackground } from "@/components/neural-network-background";
import { ContactPopup } from "@/components/contact-popup";

import { VALUES } from "@/lib/constants/about";

export default function AboutPage() {
  const [showContactPopup, setShowContactPopup] = useState(false);
  return (
    <main className="relative min-h-screen">
      <Navbar />
      {/* Navbar Spacer */}

      {/* Our Story Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <NeuralNetworkBackground />
        <div className="relative z-10 mx-auto max-w-7xl pt-24 pb-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Our{" "}
              <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">
                Story
              </span>
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/about/team.png"
                alt="NOVIZCO Team Collaboration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Story Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Your Perfect technology partner
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  Novizco is a software services company specialised in AI
                  Development, Mobile App, Web App Development, Cloud
                  Platform Consulting and Data Engineering Solutions. Our expertise in
                  Application Development, Machine Learning and Cloud Platform
                  helps us to develop Web and Mobile applications that are
                  highly scalable, robust and dynamic with Artificial
                  Intelligence features enabled.
                </p>
                <p>
                  In a fast-paced digital world, you need a safe pair of hands
                  that have the real potential to offer trustworthy solutions
                  on-time and within your budget. At Novizco, we set significant
                  success criteria to develop outstanding applications to meet
                  your corporate goals.
                </p>
                <p>
                  Our expertise begins with advanced AI Development that
                  transforms how businesses operate.
                  Alongside this, our Flutter-based Mobile App Development
                  delivers robust, high-performance digital products.The
                  talented pool of industry experts working with us builds
                  bespoke and outstanding software solutions by adhering to the
                  highest standards of quality, performance and timely delivery.
                  We have an excellent in-house team of AI Engineers, Software
                  Developers, Creative Designers, Cloud Architects and
                  Insightful Testers dedicated to upscale your business with
                  sophisticated skills.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-12"
                  onClick={() => setShowContactPopup(true)}
                >
                  Let's Work Together
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-border/50 hover:border-accent/50 transition-all">
              <div className="mb-6 p-4 rounded-lg bg-accent/10 w-fit">
                <Target className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with cutting-edge technology solutions
                that drive growth, enhance efficiency, and create lasting value.
                We're committed to delivering excellence through innovation,
                quality, and unwavering dedication to our clients' success.
              </p>
            </Card>

            <Card className="p-8 border-border/50 hover:border-accent/50 transition-all">
              <div className="mb-6 p-4 rounded-lg bg-accent/10 w-fit">
                <Eye className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted global technology partner known for
                converting ideas into intelligent digital systems. We strive to
                lead the shift toward AI, autonomous solutions, and modern
                engineering that empowers businesses to grow confidently.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="mb-4 p-3 rounded-lg bg-accent/10 w-fit">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with
            innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 transition-colors px-8 h-12"
              onClick={() => setShowContactPopup(true)}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ContactPopup
        open={showContactPopup}
        onOpenChange={setShowContactPopup}
      />
    </main>
  );
}
