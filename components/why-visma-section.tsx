import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Globe, TrendingDown, Wrench } from "lucide-react"

export function WhyVismaSection() {
  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Excellent References",
      description: "Proven track record with satisfied customers worldwide",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Reliable Partner",
      description: "Trustworthy partnership you can count on for all your MRO needs",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Supply Network",
      description: "Developed supply network spanning India, China, LAO, and North America",
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-primary" />,
      title: "Cost Optimization",
      description: "Supporting your savings targets through cost avoidance and reduction strategies",
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Professional team with 15+ years international experience in FMCG companies",
    },
  ]

  return (
    <section id="why-visma" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why VISMA?</h2>
          <p className="text-lg text-muted-foreground text-balance">
            We're here to serve you, the ones who get it done!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-balance">Our Vision</h3>
          <p className="text-lg mb-4 max-w-4xl mx-auto text-pretty">
            Complete support and handling of the total need of MRO parts and projects for our customers.
          </p>
          <p className="text-lg max-w-4xl mx-auto text-pretty">
            To find together with our customer the optimal supply chain to supply based on the lowest possible costs.
          </p>
        </div>
      </div>
    </section>
  )
}
