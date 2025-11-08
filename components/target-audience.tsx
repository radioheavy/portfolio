"use client"

import { Globe2, Building2, TrendingUp } from "lucide-react"

const audiences = [
  {
    icon: Globe2,
    title: "Export Companies",
    features: ["11 language support", "Multi-currency systems", "International SEO"],
  },
  {
    icon: Building2,
    title: "Franchise Businesses",
    features: ["Central admin panel", "Custom product catalogs", "Regional pricing"],
  },
  {
    icon: TrendingUp,
    title: "B2B E-Commerce",
    features: ["Dealer management", "Inventory systems", "Quote automation"],
  },
]

export default function TargetAudience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Who I Work With</h2>
          <p className="text-muted-foreground text-lg">Tailored solutions for your industry</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group glass-dark rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="mb-6">
                  <div className="inline-block p-3 rounded-lg bg-primary/30 group-hover:bg-primary/50 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>

                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
