import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Cog, Zap, Settings, Truck, RotateCcw } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tools & Maintenance",
      description: "Professional grade tools and maintenance equipment for industrial applications",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Mechanical Power Transmission",
      description: "Belts, pulleys, chains, and sprockets for reliable power transmission systems",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Motors & Electrical",
      description: "High-quality motors and electrical components for industrial automation",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Bearings & Seals",
      description: "Precision bearings and sealing solutions for optimal equipment performance",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fluid Power",
      description: "Hydraulic and pneumatic components for fluid power systems",
    },
    {
      icon: <RotateCcw className="h-8 w-8" />,
      title: "Linear Motion & Automation",
      description: "Advanced linear motion systems and industrial automation solutions",
    },
  ]

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Product Range</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Shop Trusted Brands - Choice of Manufacturers Available Through One Network
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary mb-2">{product.icon}</div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
