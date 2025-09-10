"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { Cog, RotateCcw, Settings, Truck, Wrench, Zap } from "lucide-react";
import Image from "next/image";

export function ProductsSection() {
  const { t } = useLanguage();

  const products = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tools & Maintenance",
      description:
        "Professional grade tools and maintenance equipment for industrial applications",
      brands: [
        { name: "McMaster-Carr", logo: "/brands/mcmaster.svg" },
        { name: "OSPREY Corporation", logo: "/brands/osprey.svg" }
      ]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Mechanical Power Transmission",
      description:
        "Belts, pulleys, chains, and sprockets for reliable power transmission systems",
      brands: [
        { name: "FESTO", logo: "/brands/festo.svg" },
        { name: "Rexroth Bosch Group", logo: "/brands/rexroth.svg" }
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Motors & Electrical",
      description:
        "High-quality motors and electrical components for industrial automation",
      brands: [
        { name: "SIEMENS", logo: "/brands/siemens.svg" },
        { name: "Rockwell Automation", logo: "/brands/rockwell.svg" }
      ]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Bearings & Seals",
      description:
        "Precision bearings and sealing solutions for optimal equipment performance",
      brands: [
        { name: "SKF", logo: "/brands/skf.svg" },
        { name: "NSK", logo: "/brands/nsk.svg" }
      ]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fluid Power",
      description: "Hydraulic and pneumatic components for fluid power systems",
      brands: [
        { name: "SMC", logo: "/brands/smc.svg" },
        { name: "Parker", logo: "/brands/parker.svg" }
      ]
    },
    {
      icon: <RotateCcw className="h-8 w-8" />,
      title: "Linear Motion & Automation",
      description:
        "Advanced linear motion systems and industrial automation solutions",
      brands: [
        { name: "MAXCESS", logo: "/brands/maxcess.svg" },
        { name: "Nordson", logo: "/brands/nordson.svg" }
      ]
    }
  ];

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t.productsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary mb-2">{product.icon}</div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty mb-4">
                  {product.description}
                </p>
                {product.brands && (
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      Partner Brands:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.brands.map((brand, brandIndex) => (
                        <div key={brandIndex} className="bg-muted/50 rounded-md p-2 flex-shrink-0">
                          <Image
                            src={brand.logo}
                            alt={brand.name}
                            width={80}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
