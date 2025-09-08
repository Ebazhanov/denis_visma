"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">VISMA</div>
            <div className="hidden md:block text-sm">
              Global Reach. Local Advantage.
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-accent transition-colors">
              {t.about}
            </a>
            <a href="#products" className="hover:text-accent transition-colors">
              {t.products}
            </a>
            <a href="#partners" className="hover:text-accent transition-colors">
              {t.partners}
            </a>
            <a
              href="#why-visma"
              className="hover:text-accent transition-colors"
            >
              {t.whyVisma}
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              {t.contact}
            </a>
            <div className="flex items-center space-x-1">
              <Button
                onClick={() => setLanguage("en")}
                variant={language === "en" ? "secondary" : "ghost"}
                size="sm"
              >
                EN
              </Button>
              <Button
                onClick={() => setLanguage("ru")}
                variant={language === "ru" ? "secondary" : "ghost"}
                size="sm"
              >
                RU
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#about"
                className="hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.about}
              </a>
              <a
                href="#products"
                className="hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.products}
              </a>
              <a
                href="#partners"
                className="hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.partners}
              </a>
              <a
                href="#why-visma"
                className="hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.whyVisma}
              </a>
              <a
                href="#contact"
                className="hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contact}
              </a>
              <div className="flex items-center space-x-2 pt-2">
                <Button
                  onClick={() => {
                    setLanguage("en");
                    setIsMenuOpen(false);
                  }}
                  variant={language === "en" ? "secondary" : "ghost"}
                  className="w-full justify-center"
                >
                  EN
                </Button>
                <Button
                  onClick={() => {
                    setLanguage("ru");
                    setIsMenuOpen(false);
                  }}
                  variant={language === "ru" ? "secondary" : "ghost"}
                  className="w-full justify-center"
                >
                  RU
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
