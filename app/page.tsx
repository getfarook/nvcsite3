import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ScrollRevealText } from "@/components/scroll-reveal-text";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ScrollRevealText />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
