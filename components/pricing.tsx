"use client"

import { Check, Zap, Crown, Rocket, FileText, Download, Printer, Mail, Calculator, TrendingUp, ArrowRight } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "STARTER",
    price: 50000,
    popular: false,
    icon: Zap,
    features: [
      "3 language support",
      "50 product capacity",
      "Responsive design",
      "Basic admin panel",
      "2 weeks delivery",
      "3 months support",
    ],
    color: "bg-blue-500",
  },
  {
    name: "BUSINESS",
    price: 100000,
    popular: true,
    icon: Crown,
    features: [
      "5 language support",
      "200 product capacity",
      "Advanced admin panel",
      "Blog system",
      "SEO optimization",
      "3-4 weeks delivery",
      "6 months support",
    ],
    color: "bg-primary",
  },
  {
    name: "ENTERPRISE",
    price: 150000,
    popular: false,
    icon: Rocket,
    features: [
      "10+ language support",
      "Unlimited products",
      "AI integration",
      "Custom CMS",
      "API development",
      "6-8 weeks delivery",
      "12 months support",
    ],
    color: "bg-purple-500",
  },
]

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<number>(1)
  const [quantity, setQuantity] = useState(1)
  const [showInvoice, setShowInvoice] = useState(false)

  const basePrice = plans[selectedPlan].price
  const subtotal = basePrice * quantity
  const tax = subtotal * 0.18
  const total = subtotal + tax

  return (
    <section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Invoice Generator Mockup */}
        <div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
          {/* Browser Header */}
          <div className="bg-black border-b border-border/50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <div className="flex gap-1 sm:gap-1.5 md:gap-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-destructive"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4">
              <div className="flex-1 max-w-2xl bg-secondary rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs text-muted-foreground truncate">
                https://billing.example.com/invoice-generator
              </div>
            </div>
          </div>

          {/* Invoice Header */}
          <div className="bg-card border-b border-border/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between flex-shrink-0 flex-wrap gap-2 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1">Invoice Generator</h1>
                <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">Create professional quotes and invoices</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary border border-border/30 rounded-lg hover:border-primary/50 transition-colors flex items-center gap-1.5 sm:gap-2">
                <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span className="text-[10px] sm:text-xs text-foreground">Calculate</span>
              </button>
              {showInvoice && (
                <>
                  <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary border border-border/30 rounded-lg hover:border-primary/50 transition-colors flex items-center gap-1.5 sm:gap-2">
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-[10px] sm:text-xs text-foreground hidden sm:inline">PDF</span>
                  </button>
                  <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary border border-border/30 rounded-lg hover:border-primary/50 transition-colors flex items-center gap-1.5 sm:gap-2">
                    <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-[10px] sm:text-xs text-foreground hidden sm:inline">Print</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden min-h-0 flex-col md:flex-row">
            {/* Left Sidebar - Plan Selector */}
            <div className="w-full md:w-80 border-r-0 md:border-r border-border/50 border-b md:border-b-0 bg-secondary flex flex-col flex-shrink-0 max-h-[40vh] md:max-h-none overflow-auto">
              <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-border/30">
                <h2 className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Select Plan</h2>
                <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">Choose your service package</p>
              </div>

              <div className="flex-1 overflow-auto p-2 sm:p-3 space-y-1.5 sm:space-y-2">
                {plans.map((plan, idx) => {
                  const Icon = plan.icon
                  const isSelected = selectedPlan === idx
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedPlan(idx)}
                      className={`w-full text-left p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${
                        isSelected
                          ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10"
                          : plan.popular
                          ? "bg-primary/5 border-primary/30"
                          : "bg-secondary/50 border-border/20 hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                        <div className={`p-1.5 sm:p-2 rounded-lg ${plan.color}/20 flex-shrink-0`}>
                          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${plan.color.replace("bg-", "text-")}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                            <h3 className="text-xs sm:text-sm font-bold text-foreground">{plan.name}</h3>
                            {plan.popular && (
                              <span className="px-1.5 sm:px-2 py-0.5 bg-primary rounded-full text-[9px] sm:text-[10px] font-bold text-background whitespace-nowrap">
                                POPULAR
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] sm:text-xs font-bold text-primary mt-0.5">{plan.price.toLocaleString('en-US')} TL</div>
                        </div>
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{plan.features.length} features included</div>
                    </button>
                  )
                })}
              </div>

              {/* Calculator Controls */}
              <div className="border-t border-border/30 p-2 sm:p-3 md:p-4 bg-secondary/50 space-y-3 sm:space-y-4">
                <div>
                  <label className="text-[10px] sm:text-xs font-semibold text-foreground mb-1.5 sm:mb-2 block">Quantity</label>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-secondary border border-border/30 hover:border-primary/50 flex items-center justify-center text-foreground text-sm sm:text-base"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-secondary border border-border/30 rounded-lg text-xs sm:text-sm text-foreground text-center"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-secondary border border-border/30 hover:border-primary/50 flex items-center justify-center text-foreground text-sm sm:text-base"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setShowInvoice(true)}
                  className="w-full py-2 sm:py-2.5 md:py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                >
                  Generate Invoice <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Main Invoice Area */}
            <div className="flex-1 overflow-auto min-h-0 bg-secondary/30">
              {showInvoice ? (
                <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 max-w-4xl mx-auto">
                  {/* Invoice Document */}
                  <div className="bg-white border-2 border-gray-300 rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
                    {/* Invoice Header */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8 pb-3 sm:pb-4 md:pb-6 border-b-2 border-gray-300 flex-col sm:flex-row gap-3 sm:gap-0">
                      <div>
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">INVOICE</div>
                        <div className="text-xs sm:text-sm text-gray-600">Invoice #INV-2024-001</div>
                        <div className="text-xs sm:text-sm text-gray-600">Date: {new Date().toLocaleDateString("tr-TR")}</div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">Your Company</div>
                        <div className="text-[10px] sm:text-xs text-gray-600">123 Business St.</div>
                        <div className="text-[10px] sm:text-xs text-gray-600">Istanbul, Turkey</div>
                      </div>
                    </div>

                    {/* Bill To */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                      <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">Bill To:</div>
                      <div className="text-xs sm:text-sm text-gray-700">Client Company Name</div>
                      <div className="text-xs sm:text-sm text-gray-700">Client Address</div>
                      <div className="text-xs sm:text-sm text-gray-700">City, Country</div>
                    </div>

                    {/* Invoice Items */}
                    <div className="mb-4 sm:mb-6 md:mb-8 overflow-x-auto">
                      <table className="w-full min-w-[500px]">
                        <thead>
                          <tr className="border-b-2 border-gray-300">
                            <th className="text-left py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900">Description</th>
                            <th className="text-center py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900">Qty</th>
                            <th className="text-right py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900">Unit Price</th>
                            <th className="text-right py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-2 sm:py-3 md:py-4">
                              <div className="text-xs sm:text-sm font-semibold text-gray-900">{plans[selectedPlan].name} Plan</div>
                              <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">
                                {plans[selectedPlan].features.slice(0, 3).join(" • ")}
                              </div>
                            </td>
                            <td className="text-center py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-gray-700">{quantity}</td>
                            <td className="text-right py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-gray-700">{basePrice.toLocaleString('en-US')} TL</td>
                            <td className="text-right py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-gray-900">{subtotal.toLocaleString('en-US')} TL</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Invoice Totals */}
                    <div className="flex justify-end mb-4 sm:mb-6 md:mb-8">
                      <div className="w-full sm:w-64 space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm text-gray-700">
                          <span>Subtotal:</span>
                          <span>{subtotal.toLocaleString('en-US')} TL</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm text-gray-700">
                          <span>Tax (18%):</span>
                          <span>{tax.toLocaleString('en-US')} TL</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base md:text-lg font-bold text-gray-900 pt-1.5 sm:pt-2 border-t-2 border-gray-300">
                          <span>Total:</span>
                          <span className="text-primary">{total.toLocaleString('en-US')} TL</span>
                        </div>
                      </div>
                    </div>

                    {/* Invoice Footer */}
                    <div className="pt-3 sm:pt-4 md:pt-6 border-t border-gray-200">
                      <div className="text-[10px] sm:text-xs text-gray-600 text-center">
                        Payment terms: Net 30 days • Thank you for your business!
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="text-center space-y-3 sm:space-y-4 max-w-md">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center border-2 sm:border-3 md:border-4 border-primary/20">
                      <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary/50" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">Generate Your Invoice</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Select a plan, adjust quantity and discount, then click "Generate Invoice" to create a professional invoice document.
                      </p>
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
