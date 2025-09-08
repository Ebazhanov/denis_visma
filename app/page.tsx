import { AboutSection } from "@/components/about-section";
import { BrandsSection } from "@/components/brands-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PartnersSection } from "@/components/partners-section";
import { ProductsSection } from "@/components/products-section";
import { WhyVismaSection } from "@/components/why-visma-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <PartnersSection />
        <BrandsSection />
        <WhyVismaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
