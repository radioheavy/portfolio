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
    <section className="h-screen w-full overflow-hidden bg-gradient-to-b from-background via-primary/10 to-background relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Project Timeline Mockup */}
        <div className="bg-black rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
          {/* Header */}
          <div className="bg-card border-b border-border/50 p-5 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold mb-1">Project Timeline Comparison</h3>
                <p className="text-sm text-muted-foreground">Visual comparison of development approaches</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary border border-border/30">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Timeline View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="flex-1 overflow-auto min-h-0 p-6">
            <div className="space-y-8">
              {/* Traditional Approach */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-destructive/10 border border-destructive/30">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-destructive">Traditional Agencies</h4>
                    <p className="text-xs text-muted-foreground">3-4 months • 3-4 people • 200K-300K TL</p>
                  </div>
                </div>

                {/* Timeline Bar */}
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-destructive/10"></div>
                  <div className="relative flex gap-2">
                    {traditionalPhases.map((phase, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 ${phase.color} border-2 ${phase.border} rounded-lg p-3 relative`}
                        style={{ flex: phase.duration }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-foreground">{phase.name}</span>
                          <span className="text-[10px] text-muted-foreground">{phase.weeks}</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground">{phase.duration} weeks</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* My Approach */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-primary">AI-Assisted Development</h4>
                      <span className="px-2 py-0.5 bg-primary rounded-full text-xs font-bold text-background">
                        Recommended
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">2-4 weeks • Solo + AI • From 150K TL</p>
                  </div>
                </div>

                {/* Timeline Bar */}
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10"></div>
                  <div className="relative flex gap-2">
                    {myPhases.map((phase, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 ${phase.color} border-2 ${phase.border} rounded-lg p-3 relative`}
                        style={{ flex: phase.duration }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-foreground">{phase.name}</span>
                          <span className="text-[10px] text-muted-foreground">{phase.weeks}</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground">{phase.duration} week{phase.duration > 1 ? 's' : ''}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comparison Stats */}
              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border/30">
                <div className="bg-secondary rounded-lg p-4 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Time Saved</span>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">10x</div>
                  <div className="text-xs text-muted-foreground">Faster delivery</div>
                </div>
                <div className="bg-secondary rounded-lg p-4 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Cost Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">50%+</div>
                  <div className="text-xs text-muted-foreground">More affordable</div>
                </div>
                <div className="bg-secondary rounded-lg p-4 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Team Efficiency</span>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">Solo</div>
                  <div className="text-xs text-muted-foreground">+ AI power</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-secondary border-t border-border/50 p-5 flex-shrink-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-foreground mb-1">Ready to start your project?</div>
                <div className="text-sm text-muted-foreground">Get your project delivered in weeks, not months</div>
              </div>
              <button className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
