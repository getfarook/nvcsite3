import { ParticleBackground } from "@/components/particle-background";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ScrollRevealText } from "@/components/scroll-reveal-text";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* <ParticleBackground /> */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ScrollRevealText />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
