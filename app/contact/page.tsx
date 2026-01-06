import { ParticleBackground } from "@/components/particle-background";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <div className="h-16" />
      <ContactSection />
      <Footer />
    </main>
  );
}
