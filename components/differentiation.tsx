"use client"

export default function Differentiation() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/10 to-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose AI-Assisted Development?</h2>
          <p className="text-muted-foreground text-lg">Fast AND quality, powered by AI tools</p>
        </div>

        <div className="glass-dark rounded-2xl overflow-hidden p-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Traditional Agencies */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-destructive mb-6">Traditional Agencies</h3>
              <div className="space-y-4">
                {[
                  "3-4 person team",
                  "3-4 months timeline",
                  "200K-300K TL cost",
                  "Endless revision cycles",
                  "Slow updates",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Approach */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold gradient-neon-text mb-6">My Approach</h3>
              <div className="space-y-4">
                {[
                  "AI-powered solo developer",
                  "2-4 weeks delivery",
                  "Starting at 150K TL",
                  "Clear milestones",
                  "24/7 support availability",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
