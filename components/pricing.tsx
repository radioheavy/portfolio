"use client"

import { Check, Zap, Crown, Rocket } from "lucide-react"

const plans = [
  {
    name: "STARTER",
    price: "50,000",
    popular: false,
    icon: Zap,
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
    icon: Crown,
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
    icon: Rocket,
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
    <section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Modern Pricing Page Mockup */}
        <div className="bg-black rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
          {/* Browser Header */}
          <div className="bg-card border-b border-border/50 px-4 py-3 flex items-center gap-2 flex-shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 px-4">
              <div className="flex-1 max-w-2xl bg-secondary rounded-lg px-4 py-1.5 text-xs text-muted-foreground">
                https://pricing.example.com
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="flex-1 overflow-auto min-h-0">
            <div className="p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
                <p className="text-lg text-muted-foreground">Choose the plan that fits your business needs</p>
              </div>

              {/* Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {plans.map((plan, idx) => {
                  const Icon = plan.icon
                  return (
                    <div
                      key={idx}
                      className={`relative rounded-2xl p-8 border-2 transition-all ${
                        plan.popular
                          ? "bg-primary/5 border-primary/50 shadow-xl shadow-primary/10 scale-105"
                          : "bg-card border-border/30 hover:border-primary/30"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-bold text-background">
                          Most Popular
                        </div>
                      )}

                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                            plan.popular ? "bg-primary/20" : "bg-primary/10"
                          }`}
                        >
                          <Icon className={`w-8 h-8 ${plan.popular ? "text-primary" : "text-primary/70"}`} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-primary">{plan.price}</span>
                          <span className="text-muted-foreground">TL</span>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <button
                        className={`w-full py-3 rounded-lg font-semibold transition-all ${
                          plan.popular
                            ? "bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/20"
                            : "bg-secondary border border-border/30 text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {plan.popular ? "Get Started" : "Contact Sales"}
                      </button>
                    </div>
                  )
                })}
              </div>

              {/* Bottom Info */}
              <div className="mt-12 text-center">
                <p className="text-sm text-muted-foreground">
                  All plans include 24/7 support • 30-day money-back guarantee • Free migration assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
