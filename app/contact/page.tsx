import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
