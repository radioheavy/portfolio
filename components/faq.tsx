"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How can you deliver professional work without a degree?",
    answer:
      "In the digital world, results matter more than diplomas. My portfolio and client satisfaction speak for themselves. I'm continuously learning and staying updated with the latest technologies.",
  },
  {
    question: "Doesn't AI reduce code quality?",
    answer:
      "Opposite. AI eliminates syntax errors and repetitive tasks, letting me focus on problem-solving and architecture. Result: faster development AND higher quality code with fewer bugs.",
  },
  {
    question: "Why are your prices cheaper than agencies?",
    answer:
      "No office overhead, no team salaries, no marketing budget. I pass these savings directly to clients without compromising on quality. You get agency-level work at a fraction of the cost.",
  },
  {
    question: "What happens after the support period ends?",
    answer:
      "Critical bugs are always free. For minor updates, I offer hourly rates. Or choose monthly maintenance at 5,000 TL/month for ongoing support and improvements.",
  },
  {
    question: "What's your refund policy if I'm not satisfied?",
    answer:
      "If you're unsatisfied after the first milestone, I refund 70% of the payment. I'm confident in my work, but want to ensure complete client satisfaction.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="glass-dark rounded-xl p-6 transition-all">
      <button onClick={() => setOpen(!open)} className="flex items-start justify-between w-full text-left">
        <span className="font-semibold text-lg text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && <p className="text-muted-foreground mt-4 leading-relaxed">{answer}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Got questions? I've got answers</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
