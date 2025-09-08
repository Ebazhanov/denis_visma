"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { CheckCircle, Globe, TrendingDown, Users, Wrench } from "lucide-react";

export function WhyVismaSection() {
  const { t } = useLanguage();
  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: t.excellentReferences,
      description: t.excellentReferencesDesc
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t.reliablePartner,
      description: t.reliablePartnerDesc
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t.globalSupply,
      description: t.globalSupplyDesc
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-primary" />,
      title: t.costOptimization,
      description: t.costOptimizationDesc
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: t.expertTeam,
      description: t.expertTeamDesc
    }
  ];

  return (
    <section id="why-visma" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t.whyVismaTitle}
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            {t.whyVismaSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-balance">Our Vision</h3>
          <p className="text-lg mb-4 max-w-4xl mx-auto text-pretty">
            Complete support and handling of the total need of MRO parts and
            projects for our customers.
          </p>
          <p className="text-lg max-w-4xl mx-auto text-pretty">
            To find together with our customer the optimal supply chain to
            supply based on the lowest possible costs.
          </p>
        </div>
      </div>
    </section>
  );
}
