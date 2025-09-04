import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Ready to optimize your MRO procurement? Contact us today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">visma@ooovisma.ru</p>
                    <p className="text-muted-foreground">manager@ooovisma.ru</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Global Presence</p>
                    <p className="text-muted-foreground">Russia, India, China, LAO, North America</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Ready to Partner?</h3>
                <p className="text-muted-foreground text-pretty">
                  Let's work together to optimize your MRO procurement and achieve your cost savings targets.
                </p>
                <Button className="w-full" size="lg">
                  Request a Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
