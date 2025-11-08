"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Loader2, Mail, Calendar, Clock, Video, User, Phone, MessageSquare, ChevronLeft, ChevronRight, Sparkles, Zap, Send, Minimize2 } from "lucide-react"
import { useState } from "react"

const timeSlots = [
  { time: "09:00", available: true },
  { time: "10:00", available: true },
  { time: "11:00", available: false },
  { time: "12:00", available: true },
  { time: "13:00", available: true },
  { time: "14:00", available: false },
  { time: "15:00", available: true },
  { time: "16:00", available: true },
  { time: "17:00", available: true },
]

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const currentDate = new Date()
const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()

export default function FinalCTA() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonthView, setCurrentMonthView] = useState(currentMonth)
  const [currentYearView, setCurrentYearView] = useState(currentYear)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [step, setStep] = useState<"date" | "time" | "form">("date")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return
    
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
    
    setTimeout(() => {
      setFormData({ fullName: "", email: "", phone: "", message: "" })
      setSelectedDate(null)
      setSelectedTime(null)
      setStep("date")
      setIsSuccess(false)
    }, 5000)
  }

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const handlePrevMonth = () => {
    if (currentMonthView === 0) {
      setCurrentMonthView(11)
      setCurrentYearView(currentYearView - 1)
    } else {
      setCurrentMonthView(currentMonthView - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonthView === 11) {
      setCurrentMonthView(0)
      setCurrentYearView(currentYearView + 1)
    } else {
      setCurrentMonthView(currentMonthView + 1)
    }
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const daysInMonth = getDaysInMonth(currentMonthView, currentYearView)
  const firstDay = getFirstDayOfMonth(currentMonthView, currentYearView)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const isToday = (day: number) => {
    const today = new Date()
    return (
      day === today.getDate() &&
      currentMonthView === today.getMonth() &&
      currentYearView === today.getFullYear()
    )
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      day === selectedDate.getDate() &&
      currentMonthView === selectedDate.getMonth() &&
      currentYearView === selectedDate.getFullYear()
    )
  }

  const handleDateClick = (day: number) => {
    const date = new Date(currentYearView, currentMonthView, day)
    setSelectedDate(date)
    setSelectedTime(null)
    setStep("time")
  }

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
    setStep("form")
  }

  return (
    <section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Calendly-Style Booking Mockup */}
        <div className="bg-secondary rounded-2xl overflow-hidden border border-border shadow-2xl flex-1 flex flex-col min-h-0">
          {/* Browser Header */}
          <div className="bg-secondary/80 border-b border-border px-4 py-3 flex items-center gap-2 flex-shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 px-4">
              <div className="flex-1 max-w-2xl bg-background border border-border rounded-lg px-4 py-1.5 text-xs text-muted-foreground">
                https://calendly.com/yourname/consultation
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden min-h-0 bg-secondary relative">
            {/* Left Side - Event Info */}
            <div className="absolute left-0 top-0 bottom-0 w-96 border-r border-border bg-secondary/50 flex flex-col z-0 overflow-hidden">
              <div className="p-8 flex-1 flex flex-col overflow-y-auto min-h-0">
                {/* Event Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-foreground">Free Consultation</h1>
                      <p className="text-sm text-muted-foreground">30 min</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-muted-foreground" />
                      <span>Video call</span>
                    </div>
                  </div>
      </div>

                {/* Selected Booking Info */}
                {selectedDate && selectedTime && (
                  <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">Selected Time</div>
                    <div className="text-sm font-bold text-foreground">
                      {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                    </div>
                    <div className="text-sm text-foreground">{selectedTime}</div>
                  </div>
                )}

                {/* Benefits */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-xs font-semibold text-muted-foreground mb-3">What to expect:</div>
                  <div className="space-y-2">
                    {[
                      "Free consultation",
              "No obligation",
                      "Expert advice",
                      "Project discussion",
            ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <Zap className="w-3 h-3 text-primary" />
                <span>{item}</span>
              </div>
            ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Calendar/Time/Form */}
            <div className="flex-1 flex flex-col overflow-hidden bg-secondary relative z-10">
              {isSuccess ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="max-w-md w-full text-center animate-in fade-in zoom-in duration-500">
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-4 border-primary/30">
                          <CheckCircle2 className="w-10 h-10 text-primary animate-in zoom-in duration-300" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"></div>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      You're all set!
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Your consultation is scheduled. Check your email for confirmation.
                    </p>
                    <div className="bg-background/50 border border-border rounded-xl p-6">
                      <div className="text-sm font-semibold text-foreground mb-3">Meeting Details</div>
                      <div className="space-y-2 text-sm text-foreground text-left">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span>{formData.email || "your email"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 overflow-auto min-h-0 flex items-center justify-center">
                  <div className="p-8 w-full max-w-4xl">
                    {/* Step Indicator */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                      <div className={`flex items-center gap-2 ${step === "date" ? "text-primary" : "text-muted-foreground"}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "date" ? "bg-primary text-background" : "bg-secondary border border-border text-muted-foreground"}`}>
                          1
                        </div>
                        <span className="text-sm font-medium">Date</span>
                      </div>
                      <div className={`w-12 h-0.5 ${selectedDate ? "bg-primary" : "bg-border"}`}></div>
                      <div className={`flex items-center gap-2 ${step === "time" ? "text-primary" : selectedTime ? "text-primary" : "text-muted-foreground"}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "time" || selectedTime ? "bg-primary text-background" : "bg-secondary border border-border text-muted-foreground"}`}>
                          2
                        </div>
                        <span className="text-sm font-medium">Time</span>
                      </div>
                      <div className={`w-12 h-0.5 ${selectedTime ? "bg-primary" : "bg-border"}`}></div>
                      <div className={`flex items-center gap-2 ${step === "form" ? "text-primary" : selectedTime ? "text-primary" : "text-muted-foreground"}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "form" ? "bg-primary text-background" : selectedTime ? "bg-secondary border border-border text-muted-foreground" : "bg-secondary border border-border text-muted-foreground"}`}>
                          3
                        </div>
                        <span className="text-sm font-medium">Details</span>
                      </div>
                    </div>

                    {/* Date Selection */}
                    {step === "date" && (
                      <div className="animate-in fade-in slide-in-from-right-2 duration-300 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                          Select a date
                        </h2>
                        <div className="max-w-md w-full">
                          {/* Month Navigation */}
                          <div className="flex items-center justify-between mb-6">
                            <button
                              onClick={handlePrevMonth}
                              className="p-2 rounded-lg hover:bg-background/50 transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5 text-foreground" />
                            </button>
                            <div className="text-lg font-bold text-foreground">
                              {monthNames[currentMonthView]} {currentYearView}
                            </div>
                            <button
                              onClick={handleNextMonth}
                              className="p-2 rounded-lg hover:bg-background/50 transition-colors"
                            >
                              <ChevronRight className="w-5 h-5 text-foreground" />
                            </button>
                          </div>

                          {/* Calendar Grid */}
                          <div className="space-y-2">
                            <div className="grid grid-cols-7 gap-1 mb-2">
                              {daysOfWeek.map((day) => (
                                <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
                                  {day}
                                </div>
                              ))}
                            </div>
                            <div className="grid grid-cols-7 gap-1">
                              {emptyDays.map((_, idx) => (
                                <div key={`empty-${idx}`} className="aspect-square"></div>
                              ))}
                              {days.map((day) => {
                                const today = new Date()
                                today.setHours(0, 0, 0, 0)
                                const checkDate = new Date(currentYearView, currentMonthView, day)
                                const isPast = checkDate < today
                                return (
                                  <button
                                    key={day}
                                    onClick={() => !isPast && handleDateClick(day)}
                                    disabled={isPast}
                                    className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                                      isSelected(day)
                                        ? "bg-primary text-background shadow-lg scale-105"
                                        : isToday(day)
                                        ? "bg-primary/20 border-2 border-primary text-primary font-bold"
                                        : isPast
                                        ? "text-muted-foreground/30 cursor-not-allowed"
                                        : "text-foreground hover:bg-background/50 border border-transparent hover:border-border"
                                    }`}
                                  >
                                    {day}
                                  </button>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Time Selection */}
                    {step === "time" && selectedDate && (
                      <div className="animate-in fade-in slide-in-from-right-2 duration-300">
                        <div className="mb-6 text-center">
                          <button
                            onClick={() => {
                              setStep("date")
                              setSelectedTime(null)
                            }}
                            className="text-sm text-muted-foreground hover:text-primary mb-2 inline-flex items-center gap-1"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            Change date
                          </button>
                          <h2 className="text-2xl font-bold text-foreground mb-2">
                            {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                          </h2>
                          <p className="text-sm text-muted-foreground">Select a time</p>
                        </div>
                        <div className="max-w-2xl mx-auto">
                          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                            {timeSlots.map((slot, idx) => (
                              <button
                                key={idx}
                                onClick={() => slot.available && handleTimeClick(slot.time)}
                                disabled={!slot.available}
                                className={`p-4 rounded-lg text-sm font-medium transition-all ${
                                  selectedTime === slot.time
                                    ? "bg-primary text-background shadow-lg scale-105"
                                    : slot.available
                                    ? "bg-background/50 text-foreground border-2 border-border hover:border-primary hover:bg-primary/10"
                                    : "bg-secondary text-muted-foreground/50 cursor-not-allowed border-2 border-transparent"
                                }`}
                              >
                                {slot.time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Form */}
                    {step === "form" && selectedDate && selectedTime && (
                      <div className="animate-in fade-in slide-in-from-right-2 duration-300">
                        <div className="mb-6 text-center">
                          <button
                            onClick={() => {
                              setStep("time")
                              setSelectedTime(null)
                            }}
                            className="text-sm text-muted-foreground hover:text-primary mb-2 inline-flex items-center gap-1"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            Change time
                          </button>
                          <h2 className="text-2xl font-bold text-foreground mb-2">
                            Enter your details
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {selectedTime}
                          </p>
          </div>

                        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Name *
                            </label>
              <input
                type="text"
                name="fullName"
                              placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                              className="w-full bg-background border-2 border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Email *
                            </label>
              <input
                type="email"
                name="email"
                              placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                              className="w-full bg-background border-2 border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Phone (Optional)
                            </label>
              <input
                type="tel"
                name="phone"
                              placeholder="+90 5XX XXX XX XX"
                value={formData.phone}
                onChange={handleChange}
                              className="w-full bg-background border-2 border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Additional notes (Optional)
                            </label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
                              className="w-full bg-background border-2 border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
                          </div>

            <Button
              type="submit"
              size="lg"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-background font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                Scheduling...
                              </>
                            ) : (
                              <>
                                Schedule Event <ArrowRight className="ml-2 w-5 h-5" />
                              </>
                            )}
            </Button>
          </form>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Chatbox Widget */}
              <div className="absolute bottom-4 left-4 w-80 z-20">
                <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-primary/10 border-b border-border px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">Need help?</div>
                        <div className="text-xs text-muted-foreground">We're here to assist</div>
                      </div>
                    </div>
                    <button className="p-1.5 hover:bg-background/50 rounded-lg transition-colors">
                      <Minimize2 className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 max-h-48 overflow-y-auto bg-secondary/30">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-secondary rounded-lg px-3 py-2 text-sm text-foreground">
                          Hi! How can I help you today?
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 ml-1">Just now</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 justify-end">
                      <div className="flex-1 flex justify-end">
                        <div className="bg-primary/20 rounded-lg px-3 py-2 text-sm text-foreground max-w-[80%]">
                          I have a question about pricing
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="border-t border-border p-3 bg-background">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                      <button className="p-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors">
                        <Send className="w-4 h-4" />
                      </button>
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
