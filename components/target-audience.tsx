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
        {/* Dashboard Mockup */}
        <div className="mb-16 glass-dark rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
          {/* Browser Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/60">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 px-4">
              <div className="flex-1 max-w-md bg-secondary/50 rounded-lg px-4 py-1.5 text-xs text-muted-foreground">
                https://admin.example.com/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 bg-card/30">
            {/* Top Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <div className="text-xs text-muted-foreground mb-1">Total Users</div>
                <div className="text-2xl font-bold text-primary">12,543</div>
                <div className="text-xs text-primary/70 mt-1">↑ 12% this month</div>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <div className="text-xs text-muted-foreground mb-1">Active Products</div>
                <div className="text-2xl font-bold text-primary">1,247</div>
                <div className="text-xs text-primary/70 mt-1">↑ 8% this month</div>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <div className="text-xs text-muted-foreground mb-1">Languages</div>
                <div className="text-2xl font-bold text-primary">11</div>
                <div className="text-xs text-primary/70 mt-1">All active</div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="bg-secondary/40 border border-border/50 rounded-xl p-6 group hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/30 group-hover:bg-primary/50 transition-all">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    </div>

                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Mock Chart */}
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <div className="flex items-end gap-1 h-12">
                        <div className="flex-1 bg-primary/30 rounded-t" style={{ height: "60%" }}></div>
                        <div className="flex-1 bg-primary/40 rounded-t" style={{ height: "80%" }}></div>
                        <div className="flex-1 bg-primary/50 rounded-t" style={{ height: "100%" }}></div>
                        <div className="flex-1 bg-primary/40 rounded-t" style={{ height: "75%" }}></div>
                        <div className="flex-1 bg-primary/30 rounded-t" style={{ height: "55%" }}></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom Table Mock */}
            <div className="mt-6 bg-secondary/40 border border-border/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-foreground">Recent Activity</h4>
                <div className="text-xs text-muted-foreground">View all →</div>
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-foreground">Product updated in {["EN", "TR", "DE"][i - 1]}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">2m ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Original Cards (Hidden on larger screens, shown on mobile) */}
        <div className="grid md:grid-cols-3 gap-8 md:hidden">
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
