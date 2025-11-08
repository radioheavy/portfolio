"use client"

import { Database, Zap, Globe, Brain, Layers, Server, Terminal, ChevronRight, Play, CheckCircle2, Code2 } from "lucide-react"
import { useState } from "react"

const capabilities = [
  {
    icon: Zap,
    category: "Frontend",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "Framer Motion"],
    command: "npm install next@latest react@latest typescript tailwindcss framer-motion",
  },
  {
    icon: Database,
    category: "Backend",
    items: ["API Development", "Authentication", "Database Design", "Real-time Sync"],
    command: "npm install express prisma @prisma/client jsonwebtoken socket.io",
  },
  {
    icon: Globe,
    category: "I18N & L10N",
    items: ["11 Languages", "Auto-translation", "Regional Customization"],
    command: "npm install next-intl i18next react-i18next",
  },
  {
    icon: Brain,
    category: "AI Integration",
    items: ["Groq", "OpenAI", "Content Generation", "Chatbots"],
    command: "npm install @groq/sdk openai langchain",
  },
  {
    icon: Layers,
    category: "CMS & Admin",
    items: ["Custom Panels", "Content Management", "User Roles", "Analytics"],
    command: "npm install @strapi/strapi react-admin",
  },
  {
    icon: Server,
    category: "DevOps",
    items: ["PM2", "Nginx", "Vercel", "CDN", "Performance Optimization"],
    command: "npm install -g pm2 && vercel deploy",
  },
]

export default function Capabilities() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [isInstalling, setIsInstalling] = useState(false)

  const handleCategoryClick = (idx: number) => {
    setSelectedCategory(idx)
    setIsInstalling(true)
    setTimeout(() => setIsInstalling(false), 2000)
  }

  return (
    <section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Terminal/CLI Mockup */}
        <div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
          {/* Terminal Header */}
          <div className="bg-card border-b border-border/50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
            <div className="flex gap-1 sm:gap-1.5 md:gap-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-destructive shadow-sm"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500 shadow-sm"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-primary shadow-sm"></div>
            </div>
            <div className="flex-1 flex items-center justify-between px-2 sm:px-3 md:px-4">
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs">
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-secondary border border-border/30">
                  <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  <span className="text-muted-foreground hidden sm:inline">Tech Stack CLI</span>
                  <span className="text-muted-foreground sm:hidden">CLI</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-muted-foreground hidden md:flex">
                  <Code2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary/50" />
                  <span>Capabilities Manager</span>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-[10px] sm:text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/50 animate-pulse"></div>
                <span className="hidden sm:inline">Ready</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden min-h-0 flex-col md:flex-row">
            {/* Sidebar - Categories */}
            <div className="w-full md:w-64 border-r-0 md:border-r border-border/50 border-b md:border-b-0 bg-secondary flex flex-col flex-shrink-0 max-h-[30vh] md:max-h-none overflow-auto">
              <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-border/30">
                <h2 className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Tech Categories</h2>
                <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">Select to view details</p>
              </div>
              <div className="flex-1 overflow-auto p-1.5 sm:p-2 space-y-0.5 sm:space-y-1">
                {capabilities.map((cap, idx) => {
                  const Icon = cap.icon
                  const isSelected = selectedCategory === idx
                  return (
                    <button
                      key={idx}
                      onClick={() => handleCategoryClick(idx)}
                      className={`w-full text-left p-2 sm:p-2.5 md:p-3 rounded-lg transition-all group ${
                        isSelected
                          ? "bg-primary/20 border border-primary/50 shadow-md"
                          : "bg-secondary/50 border border-border/20 hover:border-primary/30 hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-1 sm:mb-1.5 md:mb-2">
                        <div
                          className={`p-1 sm:p-1.5 rounded flex-shrink-0 ${
                            isSelected ? "bg-primary/30" : "bg-primary/10 group-hover:bg-primary/20"
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? "text-primary" : "text-primary/70"}`} />
                        </div>
                        <span className={`text-xs sm:text-sm font-semibold ${isSelected ? "text-primary" : "text-foreground"}`}>
                          {cap.category}
                        </span>
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground ml-6 sm:ml-7 md:ml-8">
                        {cap.items.length} technologies
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Terminal Output Area */}
            <div className="flex-1 flex flex-col overflow-hidden bg-black">
              {/* Terminal Toolbar */}
              <div className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border-b border-border/30 bg-secondary/30 flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
                  <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span>Output</span>
                </div>
                <div className="flex-1"></div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/50"></div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:inline">Active</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm">
                <div className="space-y-4 max-w-4xl">
                  {/* Welcome Message */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-primary/80">
                      <span className="text-primary">$</span>
                      <span className="break-all">tech-stack --help</span>
                    </div>
                    <div className="text-muted-foreground/80 ml-4 sm:ml-5 md:ml-6 space-y-0.5 sm:space-y-1">
                      <div className="text-[10px] sm:text-xs md:text-sm">Tech Stack CLI v2.0.0</div>
                      <div className="text-[10px] sm:text-xs md:text-sm">Available commands:</div>
                      <div className="ml-2 sm:ml-3 md:ml-4 space-y-0.5">
                        <div className="text-[10px] sm:text-xs md:text-sm">• list - Show all capabilities</div>
                        <div className="text-[10px] sm:text-xs md:text-sm">• install [category] - Install tech stack</div>
                        <div className="text-[10px] sm:text-xs md:text-sm">• info [category] - Show category details</div>
                      </div>
                    </div>
                  </div>

                  {/* Selected Category Output */}
                  {selectedCategory !== null && (
                    <div className="space-y-2 sm:space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-primary/80">
                        <span className="text-primary">$</span>
                        <span className="break-all">tech-stack info {capabilities[selectedCategory].category.toLowerCase()}</span>
                      </div>

                      {/* Category Info */}
                      <div className="bg-secondary/50 border border-border/30 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-border/20">
                          {(() => {
                            const Icon = capabilities[selectedCategory].icon
                            return (
                              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20 flex-shrink-0">
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                              </div>
                            )
                          })()}
                          <div className="min-w-0">
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground">
                              {capabilities[selectedCategory].category}
                            </h3>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">
                              {capabilities[selectedCategory].items.length} technologies available
                            </p>
                          </div>
                        </div>

                        {/* Technologies List */}
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="text-[10px] sm:text-xs font-semibold text-muted-foreground mb-1.5 sm:mb-2">Technologies:</div>
                          {capabilities[selectedCategory].items.map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                              <span className="text-foreground break-words">{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Install Command */}
                        <div className="pt-2 sm:pt-3 border-t border-border/20">
                          <div className="text-[10px] sm:text-xs font-semibold text-muted-foreground mb-1.5 sm:mb-2">Install Command:</div>
                          <div className="bg-black/50 border border-border/30 rounded p-2 sm:p-3 font-mono text-[10px] sm:text-xs">
                            <div className="text-primary/60 mb-0.5 sm:mb-1">$</div>
                            <div className="text-foreground break-all">
                              {capabilities[selectedCategory].command}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Installation Progress */}
                      {isInstalling && (
                        <div className="space-y-1.5 sm:space-y-2 animate-in fade-in duration-300">
                          <div className="flex items-center gap-1.5 sm:gap-2 text-primary/80">
                            <span className="text-primary">$</span>
                            <span className="break-all">npm install...</span>
                          </div>
                          <div className="ml-4 sm:ml-5 md:ml-6 space-y-0.5 sm:space-y-1">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground/80">
                              <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
                              <span className="text-[10px] sm:text-xs md:text-sm">Resolving packages...</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground/80">
                              <div className="w-1 h-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: "200ms" }}></div>
                              <span className="text-[10px] sm:text-xs md:text-sm">Fetching dependencies...</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground/80">
                              <div className="w-1 h-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: "400ms" }}></div>
                              <span className="text-[10px] sm:text-xs md:text-sm">Installing packages...</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Success Message */}
                      {!isInstalling && selectedCategory !== null && (
                        <div className="flex items-center gap-1.5 sm:gap-2 text-primary/80 animate-in fade-in duration-300">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          <span className="text-xs sm:text-sm break-words">✓ {capabilities[selectedCategory].category} stack ready</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Prompt */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-primary/80 mt-4 sm:mt-5 md:mt-6">
                    <span className="text-primary">$</span>
                    <span className="animate-pulse text-sm sm:text-base md:text-lg">▋</span>
                  </div>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="border-t border-border/30 bg-secondary/30 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 flex items-center justify-between text-[10px] sm:text-xs flex-shrink-0 flex-wrap gap-2">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-muted-foreground flex-wrap">
                  <span>6 categories</span>
                  <span className="hidden sm:inline">•</span>
                  <span>30+ technologies</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden md:inline">100% expertise</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                  <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary flex-shrink-0" />
                  <span className="hidden sm:inline">Ready to deploy</span>
                  <span className="sm:hidden">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
