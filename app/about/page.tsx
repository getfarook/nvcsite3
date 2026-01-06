"use client";

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
import { ParticleBackground } from "@/components/particle-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { VALUES, TIMELINE, TEAM, STATS } from "@/lib/constants/about";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      {/* Navbar Spacer */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                NOVIZCO INFOTECH
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming businesses through innovative technology solutions
              since 2019
            </p>
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/team.png"
                alt="NOVIZCO Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, NOVIZCO INFOTECH emerged from a simple yet
                  powerful vision: to bridge the gap between cutting-edge
                  technology and real business outcomes. What started as a small
                  team of passionate developers has grown into a full-service
                  technology partner serving clients across India and beyond.
                </p>
                <p>
                  We've built our reputation on delivering excellence. From web
                  and mobile applications to AI-powered solutions and cloud
                  infrastructure, we bring expertise, innovation, and dedication
                  to every project. Our team of 50+ professionals works
                  tirelessly to ensure your digital transformation journey is
                  smooth, successful, and sustainable.
                </p>
                <p>
                  Today, we're proud to have delivered over 500 projects,
                  helping businesses of all sizes leverage technology to grow,
                  compete, and thrive in the digital age.
                </p>
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
                To be India's most trusted technology partner, recognized for
                transforming businesses through innovation, excellence, and
                sustainable digital solutions. We envision a future where every
                business, regardless of size, can harness the full potential of
                modern technology.
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

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that shaped our story
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIMELINE.map((item, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 hover:border-accent/50 transition-all group"
              >
                <div className="text-4xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Image Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Where We Work
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our modern workspace in Bangalore is designed to foster
                creativity, collaboration, and innovation. With state-of-the-art
                facilities and a culture that celebrates both individuality and
                teamwork, we've created an environment where great ideas
                flourish.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      info@novizco.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/office.png"
                alt="NOVIZCO Office Workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 hover:border-accent/50 transition-all text-center"
              >
                <div className="mb-4 mx-auto p-4 rounded-full bg-accent/10 w-fit">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-accent mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              By The Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about/innovation.png"
              alt="Innovation and Technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end">
              <div className="p-8 text-center w-full">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  Innovating for Tomorrow
                </h3>
                <p className="text-muted-foreground">
                  Building the future of technology, one solution at a time
                </p>
              </div>
            </div>
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
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 transition-colors px-8 h-12"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="px-8 h-12">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
