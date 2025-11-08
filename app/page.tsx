import Hero from "@/components/hero"
import TargetAudience from "@/components/target-audience"
import Differentiation from "@/components/differentiation"
import CaseStudy from "@/components/case-study"
import Pricing from "@/components/pricing"
import Capabilities from "@/components/capabilities"
import ProcessTimeline from "@/components/process-timeline"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <TargetAudience />
      <Differentiation />
      <CaseStudy />
      <Pricing />
      <Capabilities />
      <ProcessTimeline />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
