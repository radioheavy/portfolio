"use client"

import { Calendar, Clock, DollarSign, Users, Rocket, AlertCircle } from "lucide-react"

export default function Differentiation() {
  const traditionalPhases = [
    { name: "Planning", duration: 3, weeks: "Weeks 1-3", color: "bg-destructive/10", border: "border-destructive/30" },
    { name: "Design", duration: 4, weeks: "Weeks 4-7", color: "bg-destructive/10", border: "border-destructive/30" },
    { name: "Development", duration: 8, weeks: "Weeks 8-15", color: "bg-destructive/10", border: "border-destructive/30" },
    { name: "Testing", duration: 3, weeks: "Weeks 16-18", color: "bg-destructive/10", border: "border-destructive/30" },
    { name: "Revisions", duration: 4, weeks: "Weeks 19-22", color: "bg-destructive/10", border: "border-destructive/30" },
  ]

  const myPhases = [
    { name: "Planning & Design", duration: 1, weeks: "Week 1", color: "bg-primary/10", border: "border-primary/30" },
    { name: "AI Development", duration: 2, weeks: "Weeks 2-3", color: "bg-primary/20", border: "border-primary/40" },
    { name: "Testing & Launch", duration: 1, weeks: "Week 4", color: "bg-primary/10", border: "border-primary/30" },
  ]

  return (
    <section className="h-screen w-full overflow-hidden bg-gradient-to-b from-background via-primary/10 to-background relative flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Project Timeline Mockup */}
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
                https://timeline.example.com/comparison
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="bg-card border-b border-border/50 p-3 sm:p-4 md:p-5 flex-shrink-0">
            <div className="flex items-center justify-between mb-2 flex-col sm:flex-row gap-3 sm:gap-0">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1">Project Timeline Comparison</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Visual comparison of development approaches</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-secondary border border-border/30">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-[10px] sm:text-xs font-medium text-foreground">Timeline View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="flex-1 overflow-auto min-h-0 p-3 sm:p-4 md:p-6">
            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {/* Traditional Approach */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-destructive/10 border border-destructive/30 flex-shrink-0">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-destructive mb-0.5">Traditional Agencies</h4>
                    <p className="text-[10px] sm:text-xs text-muted-foreground break-words">3-4 months • 3-4 people • 200K-300K TL</p>
                  </div>
                </div>

                {/* Timeline Bar */}
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-destructive/10"></div>
                  <div className="relative flex gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto sm:overflow-x-visible custom-scrollbar pb-2 sm:pb-0">
                    {traditionalPhases.map((phase, idx) => (
                      <div
                        key={idx}
                        className={`${phase.color} border-2 ${phase.border} rounded-lg p-2 sm:p-2.5 md:p-3 relative flex-shrink-0 sm:flex-shrink`}
                        style={{ 
                          minWidth: "80px",
                          ...(typeof window !== "undefined" && window.innerWidth >= 640 ? { flex: phase.duration } : {})
                        }}
                      >
                        <div className="flex items-center justify-between mb-0.5 sm:mb-1 flex-col sm:flex-row gap-0.5 sm:gap-0">
                          <span className="text-[10px] sm:text-xs font-semibold text-foreground text-center sm:text-left">{phase.name}</span>
                          <span className="text-[9px] sm:text-[10px] text-muted-foreground whitespace-nowrap">{phase.weeks}</span>
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-muted-foreground text-center sm:text-left">{phase.duration} weeks</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* My Approach */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 border border-primary/30 flex-shrink-0">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <h4 className="text-base sm:text-lg font-bold text-primary">AI-Assisted Development</h4>
                      <span className="px-1.5 sm:px-2 py-0.5 bg-primary rounded-full text-[10px] sm:text-xs font-bold text-background whitespace-nowrap">
                        Recommended
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground break-words">2-4 weeks • Solo + AI • From 150K TL</p>
                  </div>
                </div>

                {/* Timeline Bar */}
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10"></div>
                  <div className="relative flex gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto sm:overflow-x-visible custom-scrollbar pb-2 sm:pb-0">
                    {myPhases.map((phase, idx) => (
                      <div
                        key={idx}
                        className={`${phase.color} border-2 ${phase.border} rounded-lg p-2 sm:p-2.5 md:p-3 relative flex-shrink-0 sm:flex-shrink`}
                        style={{ minWidth: "80px", flex: typeof window !== "undefined" && window.innerWidth >= 640 ? phase.duration : "none" }}
                      >
                        <div className="flex items-center justify-between mb-0.5 sm:mb-1 flex-col sm:flex-row gap-0.5 sm:gap-0">
                          <span className="text-[10px] sm:text-xs font-semibold text-foreground text-center sm:text-left">{phase.name}</span>
                          <span className="text-[9px] sm:text-[10px] text-muted-foreground whitespace-nowrap">{phase.weeks}</span>
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-muted-foreground text-center sm:text-left">{phase.duration} week{phase.duration > 1 ? 's' : ''}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comparison Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/30">
                <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border/30">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold text-foreground">Time Saved</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-0.5 sm:mb-1">10x</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">Faster delivery</div>
                </div>
                <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border/30">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold text-foreground">Cost Savings</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-0.5 sm:mb-1">50%+</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">More affordable</div>
                </div>
                <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border/30 sm:col-span-2 md:col-span-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold text-foreground">Team Efficiency</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-0.5 sm:mb-1">Solo</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">+ AI power</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-secondary border-t border-border/50 p-3 sm:p-4 md:p-5 flex-shrink-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="text-center md:text-left">
                <div className="text-sm sm:text-base font-semibold text-foreground mb-0.5 sm:mb-1">Ready to start your project?</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Get your project delivered in weeks, not months</div>
              </div>
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
