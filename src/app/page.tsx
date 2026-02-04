import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AuditCalculator } from "@/components/AuditCalculator";
import { ClientCarousel } from "@/components/ClientCarousel";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ServicesGrid />
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <AuditCalculator />
          </div>
        </section>
        <ClientCarousel />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
