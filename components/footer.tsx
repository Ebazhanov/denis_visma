export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VISMA</h3>
            <p className="text-primary-foreground/80 text-pretty">
              Global Reach. Local Advantage. Your trusted MRO procurement partner.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>MRO Procurement</li>
              <li>Engineering Solutions</li>
              <li>Supply Chain Optimization</li>
              <li>Cost Reduction Strategies</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>visma@ooovisma.ru</p>
              <p>manager@ooovisma.ru</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 VISMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
