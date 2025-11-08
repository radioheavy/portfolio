"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50">
                <span className="text-sm font-medium text-primary">AI-Powered Development</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Enterprise Digital Platforms in{" "}
                <span className="gradient-neon-text font-bold">
                  11 Languages
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                AI-assisted development delivering 150K+ projects in 4 weeks. Fast, affordable, enterprise-grade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="gradient-neon text-background font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                View Projects <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary/50 text-foreground bg-transparent"
              >
                Free Consultation
              </Button>
            </div>
          </div>

          {/* Right side - Enhanced Mockup */}
          <div className="relative h-[500px] lg:h-[600px] min-h-[500px]">
            <div className="glass-dark rounded-2xl overflow-hidden h-full flex flex-col group border border-border/50 shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2 px-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                    <span>localhost:3000</span>
                  </div>
                </div>
              </div>

              {/* Editor Content */}
              <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-16 border-r border-border/50 bg-secondary/30 flex flex-col items-center py-4 gap-3">
                  <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded bg-primary/50"></div>
                  </div>
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded bg-primary/30"></div>
                  </div>
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded bg-primary/30"></div>
                  </div>
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded bg-primary/30"></div>
                  </div>
                </div>

                {/* Main Editor Area */}
                <div className="flex-1 flex flex-col">
                  {/* Tabs */}
                  <div className="flex gap-1 px-2 pt-2 border-b border-border/50 bg-card/30">
                    <div className="px-3 py-1.5 text-xs font-medium text-foreground bg-primary/20 border-b-2 border-primary rounded-t">
                      page.tsx
                    </div>
                    <div className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
                      layout.tsx
                    </div>
                    <div className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
                      globals.css
                    </div>
                  </div>

                  {/* Code Editor */}
                  <div className="flex-1 p-4 font-mono text-xs space-y-2 overflow-hidden">
                    <div className="flex gap-4">
                      <div className="text-muted-foreground select-none w-6 text-right">1</div>
                      <div className="flex-1">
                        <span className="text-primary">export</span>{" "}
                        <span className="text-foreground">default</span>{" "}
                        <span className="text-primary">function</span>{" "}
                        <span className="text-foreground">Page</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground select-none w-6 text-right">2</div>
                      <div className="flex-1 text-foreground">{"{"}</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground select-none w-6 text-right">3</div>
                      <div className="flex-1">
                        <span className="text-foreground">  </span>
                        <span className="text-primary">return</span>{" "}
                        <span className="text-foreground">(</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground select-none w-6 text-right">4</div>
                      <div className="flex-1">
                        <span className="text-foreground">    </span>
                        <span className="text-primary">&lt;</span>
                        <span className="text-foreground">Hero</span>
                        <span className="text-primary">/&gt;</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground select-none w-6 text-right">5</div>
                      <div className="flex-1">
                        <span className="text-foreground">    </span>
                        <span className="text-primary">&lt;</span>
                        <span className="text-foreground">Pricing</span>
                        <span className="text-primary">/&gt;</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground select-none w-6 text-right">6</div>
                      <div className="flex-1">
                        <span className="text-foreground">    </span>
                        <span className="text-primary">&lt;</span>
                        <span className="text-foreground">Capabilities</span>
                        <span className="text-primary">/&gt;</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground select-none w-6 text-right">7</div>
                      <div className="flex-1 text-foreground">  )</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground select-none w-6 text-right">8</div>
                      <div className="flex-1 text-foreground">{"}"}</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-muted-foreground select-none w-6 text-right">9</div>
                      <div className="flex-1">
                        <span className="animate-pulse">▋</span>
                      </div>
                    </div>
                  </div>

                  {/* Terminal */}
                  <div className="border-t border-border/50 bg-secondary/50 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-xs text-muted-foreground font-mono">Terminal</span>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">$</span>
                        <span>npm run dev</span>
                      </div>
                      <div className="mt-1 text-primary/70">
                        ✓ Ready in 1.2s
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
