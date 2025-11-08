"use client"

export default function CaseStudy() {
  return (
    <section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Live Site Preview */}
        <div className="bg-black rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
          {/* Browser Header */}
          <div className="bg-card border-b border-border/50 px-4 py-3 flex items-center gap-2 flex-shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 px-4">
              <div className="flex-1 max-w-2xl bg-secondary rounded-lg px-4 py-1.5 text-xs text-muted-foreground">
                https://www.ofistek.com.tr
              </div>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="flex-1 overflow-hidden min-h-0">
            <iframe
              src="https://www.ofistek.com.tr"
              className="w-full h-full border-0"
              title="Ofistek E-Commerce Platform"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
