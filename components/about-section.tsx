import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            VISMA is a flexible, trustful and financially strong technical MRO supplier committed to procurement
            excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Established Excellence</h3>
              <p className="text-muted-foreground text-pretty">
                Established as a supplier of spare parts, VISMA is now a fast-growing company in the wholesale market
                throughout Russia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Comprehensive Solutions</h3>
              <p className="text-muted-foreground text-pretty">
                We offer MRO Mechanical, Electrical parts, Equipment as well as engineering solutions to deliver
                efficient solutions to our customers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Strategic Partnership</h3>
              <p className="text-muted-foreground text-pretty">
                Together with our partner NeilsoftEngineering India, we provide comprehensive engineering services and
                design solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
