"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">VISMA</div>
            <div className="hidden md:block text-sm">Global Reach. Local Advantage.</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#products" className="hover:text-accent transition-colors">
              Products
            </a>
            <a href="#partners" className="hover:text-accent transition-colors">
              Partners
            </a>
            <a href="#why-visma" className="hover:text-accent transition-colors">
              Why VISMA
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#about" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#products" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Products
              </a>
              <a href="#partners" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Partners
              </a>
              <a href="#why-visma" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Why VISMA
              </a>
              <a href="#contact" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
