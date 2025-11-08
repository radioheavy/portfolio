"use client"

import { CheckCircle2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudy() {
  const results = [
    { label: "Development Time", value: "4 weeks" },
    { label: "Markets Launched", value: "11 simultaneously" },
    { label: "Translation Costs", value: "0% manual" },
    { label: "Management", value: "Single dashboard" },
  ]

  const tech = ["Next.js 15", "React 19", "TypeScript", "Groq AI", "Tailwind CSS", "Framer Motion"]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="glass-dark rounded-3xl p-8 lg:p-12 overflow-hidden">
          {/* Mockup placeholder */}
          <div className="mb-12 relative h-64 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/20 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="text-6xl mb-4">🌍</div>
              <p>Multi-Language E-Commerce Platform</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Multi-Language E-Commerce Platform for Office Supplies Franchise
              </h2>
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-destructive mb-3">The Problem</h3>
                <p className="text-foreground">
                  Managing 500+ products across 11 languages manually was impossible. Existing solutions were either too
                  expensive or insufficient.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary mb-3">The Solution</h3>
                <ul className="space-y-2">
                  {[
                    "Central admin panel with one-click translation",
                    "Automated product sync with CDN",
                    "AI-powered blog system",
                    "PWA support for mobile",
                    "SEO optimized for each language",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-lg font-bold mb-4">Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {results.map((result, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold gradient-neon-text mb-1">{result.value}</div>
                    <div className="text-sm text-muted-foreground">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-sm font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Button className="gradient-neon text-background font-semibold w-full">
              View Live Site <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
