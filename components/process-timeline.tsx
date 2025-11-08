"use client"

import { GitBranch, GitCommit, GitMerge, CheckCircle2, Circle, Clock } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Discovery",
    duration: "1-2 days",
    items: ["Analysis", "Technical doc", "Quote"],
    status: "completed",
    branch: "discovery",
    commits: 3,
    color: "bg-blue-500",
  },
  {
    step: 2,
    title: "Planning",
    duration: "2-3 days",
    items: ["Wireframes", "Tech selection", "Milestones"],
    status: "completed",
    branch: "planning",
    commits: 4,
    color: "bg-purple-500",
  },
  {
    step: 3,
    title: "Development",
    duration: "2-4 weeks",
    items: ["Weekly demos", "Continuous feedback", "Revisions"],
    status: "active",
    branch: "develop",
    commits: 12,
    color: "bg-primary",
  },
  {
    step: 4,
    title: "Testing & Launch",
    duration: "3-5 days",
    items: ["QA", "Performance optimization", "Go-live"],
    status: "pending",
    branch: "testing",
    commits: 0,
    color: "bg-yellow-500",
  },
  {
    step: 5,
    title: "Support",
    duration: "Ongoing",
    items: ["Bug fixes", "Updates", "Training"],
    status: "pending",
    branch: "main",
    commits: 0,
    color: "bg-green-500",
  },
]

export default function ProcessTimeline() {
  return (
    <section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* GitHub Workflow Mockup */}
        <div className="bg-black rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
          {/* Browser Header */}
          <div className="bg-black border-b border-border/50 px-4 py-3 flex items-center gap-2 flex-shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 px-4">
              <div className="flex-1 max-w-2xl bg-secondary rounded-lg px-4 py-1.5 text-xs text-muted-foreground">
                https://github.com/example/project/network
              </div>
            </div>
        </div>

          {/* GitHub Header */}
          <div className="bg-black border-b border-border/50 px-6 py-4 flex items-center justify-between flex-shrink-0">
            <div>
              <h1 className="text-xl font-bold mb-1">Development Process</h1>
              <p className="text-xs text-muted-foreground">Git workflow visualization</p>
                </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border/30 rounded-lg">
                <GitBranch className="w-4 h-4 text-primary" />
                <span className="text-xs text-foreground">5 branches</span>
              </div>
            </div>
          </div>

          {/* Git Graph */}
          <div className="flex-1 overflow-auto min-h-0 p-8">
            <div className="max-w-6xl mx-auto">
              {/* Timeline Container */}
              <div className="relative">
                {/* Main Timeline Line */}
                <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/30 to-border"></div>

                {/* Branches */}
                <div className="space-y-8">
                  {steps.map((step, idx) => {
                    const isCompleted = step.status === "completed"
                    const isActive = step.status === "active"
                    const isPending = step.status === "pending"

                    // Color mapping for borders
                    const getBorderColor = () => {
                      if (isCompleted) {
                        if (step.color === "bg-blue-500") return "border-blue-600"
                        if (step.color === "bg-purple-500") return "border-purple-600"
                        return "border-primary/80"
                      }
                      if (isActive) return "border-primary/60"
                      return "border-border"
                    }

                    return (
                      <div key={idx} className="relative pl-20">
                        {/* Branch Node on Timeline */}
                        <div className="absolute left-8 top-6 -translate-x-1/2 z-10">
                          <div
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                              isCompleted
                                ? `${step.color} ${getBorderColor()}`
                                : isActive
                                ? `${step.color} ${getBorderColor()} animate-pulse`
                                : "bg-secondary border-border"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-background" />
                            ) : (
                              <span className="text-xs font-bold text-foreground">{step.step}</span>
                            )}
                          </div>
                        </div>

                        {/* Branch Card */}
                        <div
                          className={`rounded-xl border-2 p-5 transition-all ${
                            isCompleted
                              ? "bg-primary/5 border-primary/20"
                              : isActive
                              ? "bg-secondary border-primary/40 shadow-lg shadow-primary/10"
                              : "bg-secondary/50 border-border/30"
                          }`}
                        >
                          {/* Branch Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <GitBranch className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-mono font-bold text-foreground">
                                  {step.branch}
                                </span>
                                {isActive && (
                                  <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-semibold rounded">
                                    Active
                                  </span>
                                )}
                              </div>
                              <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{step.duration}</span>
                                </div>
                                {step.commits > 0 && (
                                  <div className="flex items-center gap-1">
                                    <GitCommit className="w-3 h-3" />
                                    <span>{step.commits} commits</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Branch Line with Commits */}
                          <div className="mb-4 pb-4 border-b border-border/20">
                            <div className="flex items-center gap-3">
                              <div
                                className={`h-1 flex-1 rounded-full ${
                                  isCompleted || isActive ? step.color : "bg-border"
                                }`}
                              />
                              <div className="flex items-center gap-1.5">
                                {step.commits > 0 ? (
                                  <>
                                    {Array.from({ length: Math.min(step.commits, 10) }).map((_, i) => (
                                      <div
                                        key={i}
                                        className={`w-2.5 h-2.5 rounded-full border-2 ${
                                          isCompleted
                                            ? `${step.color} ${getBorderColor()}`
                                            : isActive
                                            ? `${step.color} ${getBorderColor()}`
                                            : "bg-secondary border-border"
                                        }`}
                                      />
                                    ))}
                                    {step.commits > 10 && (
                                      <span className="text-xs text-muted-foreground ml-1">
                                        +{step.commits - 10}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
                                    <Circle className="w-3 h-3" />
                                    <span>No commits</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Task Items */}
                          <div className="grid grid-cols-3 gap-3">
                  {step.items.map((item, i) => (
                              <div
                                key={i}
                                className={`flex items-center gap-2 text-xs p-2 rounded ${
                                  isCompleted
                                    ? "text-muted-foreground bg-primary/5"
                                    : isActive
                                    ? "text-foreground bg-primary/5"
                                    : "text-muted-foreground/60"
                                }`}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                ) : (
                                  <Circle className="w-3.5 h-3.5 text-muted-foreground/30 flex-shrink-0" />
                                )}
                                <span className={isCompleted ? "line-through" : ""}>{item}</span>
              </div>
            ))}
          </div>
        </div>

                        {/* Merge Indicator */}
                        {isCompleted && idx < steps.length - 1 && (
                          <div className="absolute left-8 top-full -translate-y-1/2 z-20">
                            <div className="w-10 h-10 rounded-full bg-black border-4 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                              <GitMerge className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Legend */}
                <div className="mt-12 pt-6 border-t border-border/30">
                  <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary/60 animate-pulse"></div>
                      <span>Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-blue-600"></div>
                      <span>Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary border-2 border-border"></div>
                      <span>Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
