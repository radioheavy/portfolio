"use client"

import { Database, Zap, Globe, Brain, Layers, Server } from "lucide-react"

const capabilities = [
  {
    icon: Zap,
    category: "Frontend",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    icon: Database,
    category: "Backend",
    items: ["API Development", "Authentication", "Database Design", "Real-time Sync"],
  },
  {
    icon: Globe,
    category: "I18N & L10N",
    items: ["11 Languages", "Auto-translation", "Regional Customization"],
  },
  {
    icon: Brain,
    category: "AI Integration",
    items: ["Groq", "OpenAI", "Content Generation", "Chatbots"],
  },
  {
    icon: Layers,
    category: "CMS & Admin",
    items: ["Custom Panels", "Content Management", "User Roles", "Analytics"],
  },
  {
    icon: Server,
    category: "DevOps",
    items: ["PM2", "Nginx", "Vercel", "CDN", "Performance Optimization"],
  },
]

export default function Capabilities() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Tech Capabilities</h2>
          <p className="text-muted-foreground text-lg">Full-stack expertise across modern technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div
                key={idx}
                className="glass-dark rounded-2xl p-8 group hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="mb-4">
                  <div className="inline-block p-3 rounded-lg bg-primary/30 group-hover:bg-primary/50 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-4 text-foreground">{cap.category}</h3>

                <ul className="space-y-2">
                  {cap.items.map((item, i) => (
                    <li key={i} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      {item}
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
