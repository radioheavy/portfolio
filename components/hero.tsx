"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Full Screen Code Editor */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="glass-dark rounded-2xl overflow-hidden h-[85vh] min-h-[600px] flex flex-col group border border-border/50 shadow-2xl">
          {/* Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 px-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></div>
                <span>localhost:3000</span>
              </div>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-20 border-r border-border/50 bg-secondary/30 flex flex-col items-center py-6 gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <div className="w-5 h-5 rounded bg-primary/60"></div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-border/30 hover:bg-primary/20 transition-colors cursor-pointer">
                <div className="w-4 h-4 rounded bg-primary/40"></div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-border/30 hover:bg-primary/20 transition-colors cursor-pointer">
                <div className="w-4 h-4 rounded bg-primary/40"></div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-border/30 hover:bg-primary/20 transition-colors cursor-pointer">
                <div className="w-4 h-4 rounded bg-primary/40"></div>
              </div>
            </div>

            {/* Main Editor Area */}
            <div className="flex-1 flex flex-col">
              {/* Tabs */}
              <div className="flex gap-1 px-3 pt-3 border-b border-border/50 bg-card/30">
                <div className="px-4 py-2 text-sm font-medium text-foreground bg-primary/20 border-b-2 border-primary rounded-t">
                  hero.tsx
                </div>
                <div className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                  pricing.tsx
                </div>
                <div className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                  capabilities.tsx
                </div>
                <div className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                  globals.css
                </div>
              </div>

              {/* Code Editor with Hero Content */}
              <div className="flex-1 p-6 lg:p-8 font-mono text-sm lg:text-base space-y-3 overflow-y-auto">
                {/* Badge */}
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">1</div>
                  <div className="flex-1">
                    <span className="text-primary/60">//</span>{" "}
                    <span className="text-muted-foreground">AI-Powered Development</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">2</div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs font-medium">
                      AI-Powered Development
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <div className="flex gap-6 pt-4">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">3</div>
                  <div className="flex-1"></div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">4</div>
                  <div className="flex-1">
                    <span className="text-primary">export</span>{" "}
                    <span className="text-foreground">default</span>{" "}
                    <span className="text-primary">function</span>{" "}
                    <span className="text-foreground">Hero</span>
                    <span className="text-foreground">()</span>{" "}
                    <span className="text-foreground">{"{"}</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">5</div>
                  <div className="flex-1">
                    <span className="text-foreground">  </span>
                    <span className="text-primary">return</span>{" "}
                    <span className="text-foreground">(</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">6</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">h1</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">7</div>
                  <div className="flex-1">
                    <span className="text-foreground">      Enterprise Digital Platforms in </span>
                    <span className="gradient-neon-text font-bold">11 Languages</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">8</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;/</span>
                    <span className="text-foreground">h1</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex gap-6 pt-2">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">9</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">p</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">10</div>
                  <div className="flex-1">
                    <span className="text-foreground">      AI-assisted development delivering 150K+ projects</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">11</div>
                  <div className="flex-1">
                    <span className="text-foreground">      in 4 weeks. Fast, affordable, enterprise-grade.</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">12</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;/</span>
                    <span className="text-foreground">p</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-6 pt-2">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">13</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">Button</span>
                    <span className="text-primary"> className</span>
                    <span className="text-foreground">=</span>
                    <span className="text-primary/70">"gradient-neon"</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">14</div>
                  <div className="flex-1">
                    <span className="text-foreground">      View Projects </span>
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">ArrowRight</span>
                    <span className="text-primary">/&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">15</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;/</span>
                    <span className="text-foreground">Button</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">16</div>
                  <div className="flex-1">
                    <span className="text-foreground">  </span>
                    <span className="text-foreground">)</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">17</div>
                  <div className="flex-1">
                    <span className="text-foreground">{"}"}</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-muted-foreground select-none w-8 text-right font-normal">18</div>
                  <div className="flex-1">
                    <span className="animate-pulse text-primary">▋</span>
                  </div>
                </div>
              </div>

              {/* Terminal */}
              <div className="border-t border-border/50 bg-secondary/50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm text-muted-foreground font-mono">Terminal</span>
                </div>
                <div className="text-sm font-mono text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span>npm run dev</span>
                  </div>
                  <div className="mt-2 text-primary/70">
                    ✓ Ready in 1.2s
                  </div>
                  <div className="mt-1 text-primary/50">
                    ➜ Local: http://localhost:3000
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
