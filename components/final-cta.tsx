"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Loader2, Mail, Send, Sparkles, Inbox, User, Building2, Phone, MessageSquare, Clock, Check, X } from "lucide-react"
import { useState } from "react"

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Contact Management Dashboard Mockup */}
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
                https://contact.example.com/inbox
              </div>
            </div>
          </div>

          {/* Dashboard Header */}
          <div className="bg-card border-b border-border/50 px-6 py-4 flex items-center justify-between flex-shrink-0">
            <div>
              <h1 className="text-xl font-bold mb-1">Contact Inbox</h1>
              <p className="text-xs text-muted-foreground">Manage consultation requests</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border/30 rounded-lg">
                <Inbox className="w-4 h-4 text-primary" />
                <span className="text-xs text-foreground">24 requests</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden min-h-0">
            {/* Sidebar - Recent Requests */}
            <div className="w-80 border-r border-border/50 bg-secondary flex flex-col flex-shrink-0">
              <div className="px-4 py-3 border-b border-border/30">
                <h2 className="text-sm font-semibold text-foreground mb-3">Recent Requests</h2>
                <div className="space-y-2">
                  {[
                    { name: "John Doe", company: "Tech Corp", time: "2h ago", unread: true },
                    { name: "Sarah Smith", company: "Design Co", time: "5h ago", unread: false },
                    { name: "Mike Johnson", company: "Startup Inc", time: "1d ago", unread: false },
                  ].map((req, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        req.unread
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-secondary/50 border border-border/20 hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-foreground">{req.name}</span>
                            {req.unread && (
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">{req.company}</div>
                        </div>
                        <span className="text-xs text-muted-foreground">{req.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Form Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {isSuccess ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="max-w-md w-full text-center animate-in fade-in zoom-in duration-500">
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-4 border-primary/30">
                          <CheckCircle2 className="w-10 h-10 text-primary animate-in zoom-in duration-300" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="gradient-neon-text">Request Received!</span>
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      I'll review your project and get back to you within 24 hours.
                    </p>
                    <div className="bg-secondary/50 rounded-xl p-6 border border-border/30">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <Mail className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Confirmation Email Sent</span>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>✓ Check your inbox at {formData.email || "your email"}</p>
                        <p>✓ We'll start analyzing your project</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 overflow-auto min-h-0">
                  <div className="p-8">
                    {/* Form Header */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">New Consultation Request</span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                        Let's Analyze Your Project <span className="gradient-neon-text">Free</span>
                      </h2>
                      <p className="text-muted-foreground">Fill out the form below and I'll get back to you within 24 hours</p>
                    </div>

                    {/* Benefits List */}
                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                      {[
                        "I'll listen to your needs",
                        "Propose technical solution",
                        "Provide estimated timeline and budget",
                        "No obligation",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                            <User className="w-3 h-3" />
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-secondary border border-border/30 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                            <Mail className="w-3 h-3" />
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-secondary border border-border/30 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                            <Phone className="w-3 h-3" />
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+90 5XX XXX XX XX"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-secondary border border-border/30 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                            <Building2 className="w-3 h-3" />
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-secondary border border-border/30 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                          <MessageSquare className="w-3 h-3" />
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell me about your project, requirements, timeline, and budget..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full bg-secondary border border-border/30 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <div className="flex items-center gap-4 pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="gradient-neon text-background font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Request <ArrowRight className="ml-2 w-5 h-5" />
                            </>
                          )}
                        </Button>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>Response within 24 hours</span>
                        </div>
                      </div>
                    </form>

                    {/* Alternative Contact */}
                    <div className="mt-8 pt-6 border-t border-border/30">
                      <p className="text-sm text-muted-foreground mb-2">Or contact directly:</p>
                      <a href="tel:+905xxxxxxxxx" className="text-lg font-semibold gradient-neon-text hover:underline">
                        +90 5XX XXX XX XX
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Loading Overlay */}
              {isSubmitting && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-20 animate-in fade-in duration-300">
                  <div className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                          <Send className="w-8 h-8 text-primary animate-pulse" />
                        </div>
                        <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Sending your request...</h3>
                    <p className="text-sm text-muted-foreground">Please wait a moment</p>
                    <div className="mt-4 flex justify-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
