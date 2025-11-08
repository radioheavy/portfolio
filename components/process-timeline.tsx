"use client"

const steps = [
  {
    step: 1,
    title: "Discovery",
    duration: "1-2 days",
    items: ["Analysis", "Technical doc", "Quote"],
  },
  {
    step: 2,
    title: "Planning",
    duration: "2-3 days",
    items: ["Wireframes", "Tech selection", "Milestones"],
  },
  {
    step: 3,
    title: "Development",
    duration: "2-4 weeks",
    items: ["Weekly demos", "Continuous feedback", "Revisions"],
  },
  {
    step: 4,
    title: "Testing & Launch",
    duration: "3-5 days",
    items: ["QA", "Performance optimization", "Go-live"],
  },
  {
    step: 5,
    title: "Support",
    duration: "Ongoing",
    items: ["Bug fixes", "Updates", "Training"],
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Development Process</h2>
          <p className="text-muted-foreground text-lg">Transparent, milestone-based delivery</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-center justify-between mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary/50 to-primary/50 -translate-y-1/2"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center z-10">
                <div className="w-16 h-16 rounded-full gradient-neon flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                  <span className="text-background font-bold text-lg">{step.step}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="glass-dark rounded-xl p-6 text-center">
                <h3 className="font-bold text-lg mb-1 text-foreground">{step.title}</h3>
                <p className="text-sm text-primary mb-4">{step.duration}</p>
                <ul className="text-sm text-foreground space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-dark rounded-2xl p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-neon flex items-center justify-center flex-shrink-0">
                  <span className="text-background font-bold">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-primary mb-3">{step.duration}</p>
                  <ul className="text-sm text-foreground space-y-1">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
