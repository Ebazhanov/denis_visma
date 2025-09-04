import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20 md:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">VISMA</h1>
        <p className="text-xl md:text-2xl mb-4 text-balance">Global Reach. Local Advantage.</p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-pretty">
          Committed to procurement excellence. We are your flexible, trustful and financially strong technical MRO
          supplier.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
          Learn More About Our Services
        </Button>
      </div>
    </section>
  )
}
