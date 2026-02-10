import { AboutTabs } from "@/components/sections/AboutTabs"
import { ComplianceEthics } from "@/components/sections/ComplianceEthics"
import { FinalCta } from "@/components/sections/FinalCta"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { TrustedClients } from "@/components/sections/TrustedClients"
import { WhyUs } from "@/components/sections/WhyUs"
import { generateMetadata } from "@/lib/seo"

export const metadata = generateMetadata({
  title: "Corocito Financial Services - Home",
  description: "Conoce nuestros productos y servicios innovadores en MiStartup.",
});

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTabs />
      <Services />
      <WhyUs />
      <ComplianceEthics />
      <TrustedClients />
      <FinalCta />
    </>
  )
}
