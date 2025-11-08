"use client"

import { Globe2, Building2, TrendingUp, Network, Zap, Activity, Users, MapPin, Target } from "lucide-react"
import { useState, useEffect } from "react"

const audiences = [
  {
    icon: Globe2,
    title: "Export Companies",
    features: ["11 language support", "Multi-currency systems", "International SEO"],
    percentage: 45,
    color: "bg-blue-500",
    colorGlow: "shadow-blue-500/50",
    projects: 127,
    growth: "+23%",
    countries: ["US", "UK", "DE", "FR", "IT", "ES", "NL", "BE", "SE", "NO"],
    revenue: "€2.4M",
    position: { x: 30, y: 40 },
    connections: [1, 2],
  },
  {
    icon: Building2,
    title: "Franchise Businesses",
    features: ["Central admin panel", "Custom product catalogs", "Regional pricing"],
    percentage: 32,
    color: "bg-purple-500",
    colorGlow: "shadow-purple-500/50",
    projects: 89,
    growth: "+18%",
    countries: ["TR", "US", "UK", "DE", "FR", "IT"],
    revenue: "€1.8M",
    position: { x: 50, y: 60 },
    connections: [0, 2],
  },
  {
    icon: TrendingUp,
    title: "B2B E-Commerce",
    features: ["Dealer management", "Inventory systems", "Quote automation"],
    percentage: 23,
    color: "bg-primary",
    colorGlow: "shadow-primary/50",
    projects: 64,
    growth: "+31%",
    countries: ["TR", "US", "UK", "DE", "FR"],
    revenue: "€1.2M",
    position: { x: 70, y: 40 },
    connections: [0, 1],
  },
]

export default function TargetAudience() {
  const [selectedAudience, setSelectedAudience] = useState<number | null>(null)
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([])

  useEffect(() => {
    // Generate particles for animation
    const newParticles: Array<{ id: number; x: number; y: number; color: string; delay: number }> = []
    audiences.forEach((audience, idx) => {
      for (let i = 0; i < 8; i++) {
        newParticles.push({
          id: idx * 10 + i,
          x: audience.position.x + (Math.random() - 0.5) * 20,
          y: audience.position.y + (Math.random() - 0.5) * 20,
          color: audience.color,
          delay: i * 100,
        })
      }
    })
    setParticles(newParticles)
  }, [])

  return (
    <section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Network Visualization Mockup */}
        <div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
          {/* Browser Header */}
          <div className="bg-black border-b border-border/50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <div className="flex gap-1 sm:gap-1.5 md:gap-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-destructive"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4">
              <div className="flex-1 max-w-2xl bg-secondary rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs text-muted-foreground truncate">
                https://network.example.com/audience-map
              </div>
            </div>
          </div>

          {/* Dashboard Header */}
          <div className="bg-card border-b border-border/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between flex-shrink-0 flex-wrap gap-2 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20">
                <Network className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1">Audience Network Map</h1>
                <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">Interactive visualization of market segments and connections</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary border border-border/30 rounded-lg">
                <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
                <span className="text-[10px] sm:text-xs text-foreground">280 nodes</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden min-h-0">
            {/* Left Sidebar - Info Panel */}
            <div className="hidden md:flex w-80 border-r border-border/50 bg-secondary flex flex-col flex-shrink-0">
              <div className="px-4 py-3 border-b border-border/30">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <h2 className="text-sm font-semibold text-foreground">Market Segments</h2>
                </div>
                <div className="text-xs text-muted-foreground">3 segments • 280 projects • 16 countries</div>
              </div>

              <div className="flex-1 overflow-auto p-3 space-y-3">
                {audiences.map((audience, idx) => {
                  const Icon = audience.icon
                  const isSelected = selectedAudience === idx
                  const isHovered = hoveredNode === idx
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedAudience(selectedAudience === idx ? null : idx)}
                      onMouseEnter={() => setHoveredNode(idx)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        isSelected
                          ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10 scale-105"
                          : isHovered
                          ? "bg-primary/5 border-primary/30 scale-[1.02]"
                          : "bg-secondary/50 border-border/20 hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2.5 rounded-lg ${isSelected ? "bg-primary/20" : "bg-primary/10"}`}>
                          <Icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-primary/70"}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-foreground mb-0.5">{audience.title}</h3>
                          <div className="text-xs text-muted-foreground">{audience.projects} projects</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Market Share</span>
                          <span className="font-bold text-primary">{audience.percentage}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden border border-border/20">
                          <div
                            className={`h-full ${audience.color} rounded-full transition-all duration-1000 shadow-sm`}
                            style={{ width: `${audience.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-border/20 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{audience.countries.length} countries</span>
                        </div>
                        <span className="text-xs font-semibold text-primary">{audience.growth}</span>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Stats Footer */}
              <div className="border-t border-border/30 p-4 bg-secondary/50">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 bg-primary/5 rounded-lg">
                    <div className="text-lg font-bold text-primary">280</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-2 bg-primary/5 rounded-lg">
                    <div className="text-lg font-bold text-primary">16</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Network Visualization */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-br from-black via-secondary/5 to-black relative">
              {/* Animated Background Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.isArray(particles) && particles.length > 0 ? (
                  particles.map((particle) => {
                    const animationDuration = 2000 + Math.random() * 1000
                    return (
                      <div
                        key={particle.id}
                        className={`absolute w-1.5 h-1.5 ${particle.color} rounded-full opacity-40`}
                        style={{
                          left: `${particle.x}%`,
                          top: `${particle.y}%`,
                          animation: `pulse ${animationDuration}ms ease-in-out infinite`,
                          animationDelay: `${particle.delay}ms`,
                        }}
                      ></div>
                    )
                  })
                ) : null}
              </div>

              {/* Network Canvas */}
              <div className="flex-1 relative p-3 sm:p-4 md:p-6 lg:p-8">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {audiences.map((audience, idx) =>
                    audience.connections.map((targetIdx) => {
                      const source = audience.position
                      const target = audiences[targetIdx].position
                      const isActive = selectedAudience === idx || selectedAudience === targetIdx || hoveredNode === idx || hoveredNode === targetIdx
                      return (
                        <line
                          key={`${idx}-${targetIdx}`}
                          x1={source.x}
                          y1={source.y}
                          x2={target.x}
                          y2={target.y}
                          stroke={isActive ? "rgba(26, 136, 109, 0.5)" : "rgba(255, 255, 255, 0.15)"}
                          strokeWidth={isActive ? "0.3" : "0.2"}
                          strokeDasharray={isActive ? "0" : "1,1"}
                          className="transition-all duration-500"
                        />
                      )
                    })
                  )}
                </svg>

                {/* Network Nodes */}
                <div className="relative w-full h-full z-10">
                  {audiences.map((audience, idx) => {
                    const Icon = audience.icon
                    const isSelected = selectedAudience === idx
                    const isHovered = hoveredNode === idx
                    const scale = isSelected ? 1.15 : isHovered ? 1.05 : 1

                return (
                  <div
                    key={idx}
                        className="absolute transition-all duration-300 cursor-pointer group z-10"
                        style={{
                          left: `${audience.position.x}%`,
                          top: `${audience.position.y}%`,
                          transform: `translate(-50%, -50%) scale(${scale})`,
                        }}
                        onClick={() => setSelectedAudience(selectedAudience === idx ? null : idx)}
                        onMouseEnter={() => setHoveredNode(idx)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        {/* Outer Glow Ring */}
                        {isSelected && (
                          <>
                            <div
                              className={`absolute inset-0 rounded-full ${audience.colorGlow} animate-ping opacity-75`}
                              style={{ width: "80px", height: "80px", margin: "-40px" }}
                            ></div>
                            <div
                              className={`hidden sm:block absolute inset-0 rounded-full ${audience.colorGlow} animate-ping opacity-75`}
                              style={{ width: "100px", height: "100px", margin: "-50px" }}
                            ></div>
                            <div
                              className={`hidden md:block absolute inset-0 rounded-full ${audience.colorGlow} animate-ping opacity-75`}
                              style={{ width: "120px", height: "120px", margin: "-60px" }}
                            ></div>
                          </>
                        )}
                        <div
                          className={`absolute inset-0 rounded-full ${audience.colorGlow} opacity-0 group-hover:opacity-30 transition-opacity`}
                          style={{ width: "80px", height: "80px", margin: "-40px" }}
                        ></div>
                        <div
                          className={`hidden sm:block absolute inset-0 rounded-full ${audience.colorGlow} opacity-0 group-hover:opacity-30 transition-opacity`}
                          style={{ width: "100px", height: "100px", margin: "-50px" }}
                        ></div>
                        <div
                          className={`hidden md:block absolute inset-0 rounded-full ${audience.colorGlow} opacity-0 group-hover:opacity-30 transition-opacity`}
                          style={{ width: "120px", height: "120px", margin: "-60px" }}
                        ></div>

                        {/* Node Circle */}
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full ${audience.color} border-2 sm:border-3 md:border-4 border-background shadow-2xl flex items-center justify-center transition-all ${
                            isSelected ? "ring-2 sm:ring-3 md:ring-4 ring-primary/50" : ""
                          }`}
                        >
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-background" />
                        </div>

                        {/* Percentage Badge */}
                        <div
                          className={`absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 md:-top-2 md:-right-2 bg-primary text-background text-[9px] sm:text-[10px] md:text-xs font-bold rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center border-1.5 sm:border-2 border-background shadow-lg transition-all z-20 ${
                            isSelected ? "scale-110" : ""
                          }`}
                        >
                          {audience.percentage}%
                        </div>

                        {/* Node Label */}
                        <div
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 sm:mt-2.5 md:mt-3 whitespace-nowrap transition-all z-30 ${
                            isSelected || isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                          }`}
                        >
                          <div className="bg-black/90 backdrop-blur-sm border border-border/50 rounded-lg px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 md:py-2 shadow-xl">
                            <div className="text-xs sm:text-sm font-bold text-foreground mb-0.5 sm:mb-1">{audience.title}</div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
                              <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              <span>{audience.projects} projects</span>
                              <span>•</span>
                              <span className="text-primary font-semibold">{audience.growth}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Selected Audience Details */}
                {selectedAudience !== null && (
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-secondary/95 backdrop-blur-md border border-border/50 rounded-lg sm:rounded-xl md:rounded-xl p-3 sm:p-4 md:p-6 shadow-2xl">
                      <div className="flex items-start justify-between mb-3 sm:mb-4 flex-col sm:flex-row gap-3 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                          {(() => {
                            const Icon = audiences[selectedAudience].icon
                            return (
                              <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-primary/20">
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
                              </div>
                            )
                          })()}
                          <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                              {audiences[selectedAudience].title}
                            </h2>
                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap">
                              <span>{audiences[selectedAudience].projects} active projects</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="text-primary font-semibold">{audiences[selectedAudience].growth}</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="hidden md:inline">{audiences[selectedAudience].revenue} revenue</span>
                            </div>
                          </div>
                        </div>
                    </div>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                        {audiences[selectedAudience].features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 md:p-3 bg-primary/5 rounded-lg border border-primary/10"
                          >
                            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Countries */}
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span className="text-[10px] sm:text-xs text-muted-foreground">Active in:</span>
                        {audiences[selectedAudience].countries.map((country, i) => (
                          <span
                            key={i}
                            className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-primary/10 border border-primary/30 rounded text-[10px] sm:text-xs font-medium text-primary"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Empty State */}
                {selectedAudience === null && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 opacity-40 px-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center border-2 sm:border-3 md:border-4 border-primary/20">
                        <Network className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary/50" />
            </div>
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1 sm:mb-2">Explore the Network</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Click on a node or select a segment to view details
                        </p>
              </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
