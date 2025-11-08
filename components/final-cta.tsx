"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/10 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="glass-dark rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Analyze Your Project <span className="gradient-neon-text">Free</span>
          </h2>

          <div className="mb-8 space-y-4">
            {[
              "I'll listen to your needs",
              "Propose technical solution",
              "Provide estimated timeline and budget",
              "No obligation",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-background/50 border border-gray-600 rounded-lg px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />

            <Button
              type="submit"
              size="lg"
              className="w-full gradient-neon text-background font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Request Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">Or call directly:</p>
            <a href="tel:+905xxxxxxxxx" className="text-2xl font-bold gradient-neon-text hover:underline">
              +90 5XX XXX XX XX
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
