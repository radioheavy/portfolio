"use client"

import { Bot, Send, Sparkles, CheckCircle2, Circle, Loader2 } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const faqs = [
  {
    question: "How can you deliver professional work without a degree?",
    answer:
      "In the digital world, results matter more than diplomas. My portfolio and client satisfaction speak for themselves. I'm continuously learning and staying updated with the latest technologies.",
    keywords: ["degree", "education", "professional", "qualification", "certificate"],
  },
  {
    question: "Doesn't AI reduce code quality?",
    answer:
      "Opposite. AI eliminates syntax errors and repetitive tasks, letting me focus on problem-solving and architecture. Result: faster development AND higher quality code with fewer bugs.",
    keywords: ["ai", "quality", "code", "bug", "error", "development"],
  },
  {
    question: "Why are your prices cheaper than agencies?",
    answer:
      "No office overhead, no team salaries, no marketing budget. I pass these savings directly to clients without compromising on quality. You get agency-level work at a fraction of the cost.",
    keywords: ["price", "pricing", "cost", "cheap", "affordable", "agency", "budget"],
  },
  {
    question: "What happens after the support period ends?",
    answer:
      "Critical bugs are always free. For minor updates, I offer hourly rates. Or choose monthly maintenance at 5,000 TL/month for ongoing support and improvements.",
    keywords: ["support", "maintenance", "update", "bug", "help", "after", "period"],
  },
  {
    question: "What's your refund policy if I'm not satisfied?",
    answer:
      "If you're unsatisfied after the first milestone, I refund 70% of the payment. I'm confident in my work, but want to ensure complete client satisfaction.",
    keywords: ["refund", "money back", "satisfaction", "guarantee", "policy", "unsatisfied"],
  },
]

const quickReplies = [
  "Pricing",
  "Quality",
  "Support",
  "Refund Policy",
]

interface Message {
  type: "user" | "bot" | "typing"
  text: string
  timestamp: string
}

export default function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hi! I'm your AI assistant. Ask me anything about our services! 💬",
      timestamp: "Just now",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when new messages arrive (only within chat container)
  useEffect(() => {
    if (messagesContainerRef.current && messagesEndRef.current) {
      const container = messagesContainerRef.current
      const scrollHeight = container.scrollHeight
      const clientHeight = container.clientHeight
      
      // Smooth scroll to bottom
      container.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth"
      })
    }
  }, [messages, isTyping])

  // Find best matching FAQ based on user input
  const findBestMatch = (query: string): typeof faqs[0] => {
    const lowerQuery = query.toLowerCase()
    
    // First try exact keyword match
    for (const faq of faqs) {
      if (faq.keywords.some(keyword => lowerQuery.includes(keyword))) {
        return faq
      }
    }
    
    // Then try question match
    for (const faq of faqs) {
      if (faq.question.toLowerCase().includes(lowerQuery) || lowerQuery.includes(faq.question.toLowerCase().split(" ")[0])) {
        return faq
      }
    }
    
    // Try quick reply match
    const quickReplyMatch = faqs.find((f) => 
      f.question.toLowerCase().includes(lowerQuery) || 
      lowerQuery.includes(f.question.toLowerCase().split(" ")[0])
    )
    
    return quickReplyMatch || faqs[0]
  }

  const getCurrentTime = () => {
    const now = new Date()
    return now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
  }

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      type: "user",
      text: text.trim(),
      timestamp: getCurrentTime(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 800))

    const matchedFaq = findBestMatch(text)
    const matchedIndex = faqs.indexOf(matchedFaq)
    
    setIsTyping(false)
    
    const botMessage: Message = {
      type: "bot",
      text: matchedFaq.answer,
      timestamp: getCurrentTime(),
    }

    setMessages((prev) => [...prev, botMessage])
    setSelectedQuestion(matchedIndex)
  }

  const handleQuickReply = (reply: string) => {
    sendMessage(reply)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage(inputValue)
    }
  }

  return (
    <section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col overflow-hidden">
        {/* AI Chatbot Mockup */}
        <div className="bg-black rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* Browser Header */}
          <div className="bg-black border-b border-border/50 px-4 py-3 flex items-center gap-2 flex-shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 px-4">
              <div className="flex-1 max-w-2xl bg-secondary rounded-lg px-4 py-1.5 text-xs text-muted-foreground">
                https://chat.example.com/assistant
              </div>
            </div>
          </div>

          {/* Chat Header */}
          <div className="bg-black border-b border-border/50 px-6 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full border-2 border-black">
                  <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold flex items-center gap-2">
                  AI Assistant
                  <Sparkles className="w-4 h-4 text-primary" />
                </h1>
                <p className="text-xs text-muted-foreground">Online • Responds instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>AI Powered</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div ref={messagesContainerRef} className="flex-1 overflow-auto min-h-0 p-4 sm:p-6">
            <div className="max-w-3xl mx-auto space-y-4">
              {/* Messages */}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.type === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 transition-all ${
                      msg.type === "user"
                        ? "bg-primary text-background shadow-lg"
                        : "bg-secondary border border-border/30"
                    }`}
                  >
                    <p className={`text-sm leading-relaxed ${msg.type === "user" ? "text-background" : "text-foreground"}`}>
                      {msg.text}
                    </p>
                    <p className={`text-xs mt-1.5 ${msg.type === "user" ? "text-background/70" : "text-muted-foreground"}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-secondary border border-border/30 rounded-2xl px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Reply Buttons */}
              {messages.length === 1 && !isTyping && (
                <div className="flex flex-wrap gap-2 mt-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  {quickReplies.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickReply(reply)}
                      className="px-4 py-2 bg-secondary border border-border/30 rounded-full text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all active:scale-95"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />

              {/* FAQ Questions as Cards */}
              {messages.length > 1 && (
                <div className="mt-4 pt-4 border-t border-border/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <h3 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                    Popular Questions
                  </h3>
                  <div className="space-y-1.5">
                    {faqs.map((faq, idx) => (
                      <button
                        key={idx}
                        onClick={() => sendMessage(faq.question)}
                        className={`w-full text-left px-3 py-2 rounded-lg border transition-all active:scale-[0.98] ${
                          selectedQuestion === idx
                            ? "bg-primary/10 border-primary/40"
                            : "bg-secondary/50 border-border/20 hover:border-primary/30 hover:bg-primary/5"
                        }`}
                      >
                        <span className="text-xs text-foreground/90 leading-relaxed">{faq.question}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Input */}
          <div className="bg-black border-t border-border/50 px-4 sm:px-6 py-4 flex-shrink-0">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  disabled={isTyping}
                  className="w-full pl-4 pr-12 py-3 bg-secondary border border-border/30 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                />
                <button
                  onClick={() => sendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                >
                  {isTyping ? (
                    <Loader2 className="w-4 h-4 text-background animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 text-background" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
