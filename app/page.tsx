import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { PartnersSection } from "@/components/partners-section"
import { WhyVismaSection } from "@/components/why-visma-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <PartnersSection />
        <WhyVismaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
