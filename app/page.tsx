import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { PricingSection } from "@/components/pricing-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { LeadCaptureSection } from "@/components/lead-capture-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <PricingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <LeadCaptureSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
