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

          {/* Right side - Mockup */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="glass-dark rounded-2xl p-6 h-full flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/10 group-hover:from-primary/20 group-hover:to-primary/20 transition-all"></div>
              <div className="relative z-10 space-y-4 w-full">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-to-r from-primary/30 to-transparent rounded w-3/4"></div>
                  <div className="h-3 bg-gradient-to-r from-primary/30 to-transparent rounded w-1/2"></div>
                  <div className="h-4 bg-gradient-to-r from-primary/20 to-transparent rounded w-2/3"></div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-4">
                  <div className="h-16 bg-primary/20 rounded"></div>
                  <div className="h-16 bg-primary/20 rounded"></div>
                  <div className="h-16 bg-primary/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
