"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, GitBranch, Circle } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Full Screen Code Editor */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col">
        <div className="bg-black rounded-2xl overflow-hidden flex-1 flex flex-col group border border-border/50 shadow-2xl min-h-0">
          {/* Window Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-card">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-primary shadow-sm"></div>
            </div>
            <div className="flex-1 flex items-center justify-between px-4">
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-secondary border border-border/30">
                  <GitBranch className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground">main</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Circle className="w-2 h-2 fill-primary/50 text-primary/50" />
                  <span>TypeScript React</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></div>
                <span>localhost:3000</span>
            </div>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-48 border-r border-border/50 bg-secondary flex flex-col py-4 min-w-[180px]">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Explorer
              </div>
              <div className="flex-1 px-2 space-y-1 overflow-y-auto custom-scrollbar">
                <div className="px-2 py-1.5 rounded bg-primary/20 border border-primary/30 flex items-center gap-2 group cursor-pointer hover:bg-primary/30 transition-colors">
                  <div className="w-4 h-4 rounded bg-primary/60 group-hover:bg-primary/80 transition-colors flex-shrink-0"></div>
                  <span className="text-xs text-foreground font-medium truncate">components</span>
                </div>
                <div className="px-2 py-1 rounded flex items-center gap-2 group cursor-pointer hover:bg-secondary/50 transition-colors">
                  <div className="w-3 h-3 rounded bg-primary/30 group-hover:bg-primary/50 transition-colors flex-shrink-0"></div>
                  <span className="text-xs text-muted-foreground truncate">hero.tsx</span>
                </div>
                <div className="px-2 py-1 rounded flex items-center gap-2 group cursor-pointer hover:bg-secondary/50 transition-colors">
                  <div className="w-3 h-3 rounded bg-primary/20 group-hover:bg-primary/40 transition-colors flex-shrink-0"></div>
                  <span className="text-xs text-muted-foreground truncate">pricing.tsx</span>
                </div>
                <div className="px-2 py-1 rounded flex items-center gap-2 group cursor-pointer hover:bg-secondary/50 transition-colors">
                  <div className="w-3 h-3 rounded bg-primary/20 group-hover:bg-primary/40 transition-colors flex-shrink-0"></div>
                  <span className="text-xs text-muted-foreground truncate">capabilities.tsx</span>
                </div>
              </div>
            </div>

            {/* Main Editor Area */}
            <div className="flex-1 flex flex-col">
              {/* Tabs */}
              <div className="flex items-end gap-0.5 px-2 pt-2 border-b border-border/50 bg-card">
                <div className="px-4 py-2.5 text-sm font-medium text-foreground bg-card border-t border-x border-border/50 rounded-t-lg relative">
                  <span>hero.tsx</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                </div>
                <div className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground cursor-pointer hover:bg-secondary rounded-t transition-colors">
                  pricing.tsx
                </div>
                <div className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground cursor-pointer hover:bg-secondary rounded-t transition-colors">
                  capabilities.tsx
                </div>
                <div className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground cursor-pointer hover:bg-secondary rounded-t transition-colors">
                  globals.css
                </div>
                <div className="flex-1"></div>
                <div className="px-3 py-2 text-xs text-muted-foreground">
                  <span className="text-primary">●</span> Modified
                </div>
              </div>

              {/* Code Editor with Hero Content */}
              <div className="flex-1 p-6 lg:p-8 font-mono text-sm lg:text-base space-y-2 overflow-y-auto custom-scrollbar">
                {/* Badge */}
                <div className="flex gap-6 group">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">1</div>
                  <div className="flex-1">
                    <span className="text-primary/40">//</span>{" "}
                    <span className="text-muted-foreground/80 italic">AI-Powered Development</span>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">2</div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs font-medium shadow-sm">
                      AI-Powered Development
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <div className="flex gap-6 pt-3 group">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">3</div>
                  <div className="flex-1"></div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">4</div>
                  <div className="flex-1">
                    <span className="text-primary font-semibold">export</span>{" "}
                    <span className="text-primary/80">default</span>{" "}
                    <span className="text-primary font-semibold">function</span>{" "}
                    <span className="text-foreground font-semibold">Hero</span>
                    <span className="text-foreground">()</span>{" "}
                    <span className="text-foreground">{"{"}</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">5</div>
                  <div className="flex-1">
                    <span className="text-foreground">  </span>
                    <span className="text-primary font-semibold">return</span>{" "}
                    <span className="text-foreground">(</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">6</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">h1</span>
                    <span className="text-primary"> className</span>
                    <span className="text-primary/70">=</span>
                    <span className="text-primary/70">"text-5xl font-bold"</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">7</div>
                  <div className="flex-1">
                    <span className="text-foreground">      Enterprise Digital Platforms in </span>
                    <span className="gradient-neon-text font-bold">11 Languages</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">8</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;/</span>
                    <span className="text-foreground">h1</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex gap-6 pt-2 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">9</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">p</span>
                    <span className="text-primary"> className</span>
                    <span className="text-primary/70">=</span>
                    <span className="text-primary/70">"text-xl text-muted-foreground"</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">10</div>
                  <div className="flex-1">
                    <span className="text-foreground">      AI-assisted development delivering </span>
                    <span className="text-primary/80 font-semibold">150K+</span>
                    <span className="text-foreground"> projects</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">11</div>
                  <div className="flex-1">
                    <span className="text-foreground">      in </span>
                    <span className="text-primary/80 font-semibold">4 weeks</span>
                    <span className="text-foreground">. Fast, affordable, enterprise-grade.</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">12</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;/</span>
                    <span className="text-foreground">p</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-6 pt-2 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">13</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">Button</span>
                    <span className="text-primary"> className</span>
                    <span className="text-primary/70">=</span>
                    <span className="text-primary/70">"gradient-neon"</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">14</div>
                  <div className="flex-1">
                    <span className="text-foreground">      View Projects </span>
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">ArrowRight</span>
                    <span className="text-primary">/&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">15</div>
                  <div className="flex-1">
                    <span className="text-foreground">    </span>
                    <span className="text-primary">&lt;/</span>
                    <span className="text-foreground">Button</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">16</div>
                  <div className="flex-1">
                    <span className="text-foreground">  </span>
                    <span className="text-foreground">)</span>
                  </div>
                </div>
                <div className="flex gap-6 group hover:bg-primary/5 transition-colors rounded px-2 -mx-2">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">17</div>
                  <div className="flex-1">
                    <span className="text-foreground">{"}"}</span>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-muted-foreground/60 select-none w-10 text-right font-normal text-xs">18</div>
                  <div className="flex-1">
                    <span className="animate-pulse text-primary font-bold text-lg">▋</span>
                  </div>
                </div>
              </div>

              {/* Terminal */}
              <div className="border-t border-border/50 bg-secondary p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-sm text-muted-foreground font-mono font-semibold">Terminal</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Problems</span>
                    <span>Output</span>
                    <span className="text-primary">Debug Console</span>
                  </div>
                </div>
                <div className="text-sm font-mono space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary font-bold">$</span>
                    <span>npm run dev</span>
                  </div>
                  <div className="text-primary/80 mt-2">
                    <span className="text-primary/60">[</span>
                    <span className="text-primary">✓</span>
                    <span className="text-primary/60">]</span> Ready in <span className="text-primary font-semibold">1.2s</span>
                  </div>
                  <div className="text-primary/70 mt-1">
                    <span className="text-primary/50">➜</span> Local: <span className="text-primary underline">http://localhost:3000</span>
                  </div>
                  <div className="text-muted-foreground/60 mt-2 text-xs">
                    <span className="text-primary/50">○</span> Compiled successfully
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="border-t border-border/50 bg-card px-4 py-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span>Ln 18, Col 15</span>
                  <span>Spaces: 2</span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span>TypeScript</span>
                  <span className="text-primary">●</span>
                  <span>Prettier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
