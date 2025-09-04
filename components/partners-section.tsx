import { Card, CardContent } from "@/components/ui/card"

export function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Partners</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Working together with trusted manufacturers and suppliers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">ABIX Corporation</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                VISMA is the official supplier of ABIX belting products, specializing in timing belts and special
                conveyor belts.
              </p>
              <div className="text-sm text-muted-foreground">Timing Belts and Special Conveyor Belts</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Flexatec</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                VISMA is the official supplier of Flexatec belts, including KFG® adhesive release tapes for diaper and
                feminine hygiene production machines.
              </p>
              <div className="text-sm text-muted-foreground">Specialized Industrial Belting Solutions</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
