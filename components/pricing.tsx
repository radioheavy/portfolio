"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "STARTER",
    price: "50,000",
    popular: false,
    features: [
      "3 language support",
      "50 product capacity",
      "Responsive design",
      "Basic admin panel",
      "2 weeks delivery",
      "3 months support",
    ],
  },
  {
    name: "BUSINESS",
    price: "100,000",
    popular: true,
    features: [
      "5 language support",
      "200 product capacity",
      "Advanced admin panel",
      "Blog system",
      "SEO optimization",
      "3-4 weeks delivery",
      "6 months support",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "150,000+",
    popular: false,
    features: [
      "10+ language support",
      "Unlimited products",
      "AI integration",
      "Custom CMS",
      "API development",
      "6-8 weeks delivery",
      "12 months support",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">Choose the plan that fits your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.popular
                  ? "glass-dark border-primary/50 shadow-2xl shadow-primary/20"
                  : "glass-dark border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-neon text-background text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-bold text-muted-foreground mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold gradient-neon-text">{plan.price}</span>
                  <span className="text-muted-foreground">TL</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold transition-all ${
                  plan.popular
                    ? "gradient-neon text-background hover:shadow-lg hover:shadow-primary/50"
                    : "border border-border hover:bg-secondary/50 text-foreground"
                }`}
              >
                {plan.popular ? "Free Analysis" : "Contact"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
