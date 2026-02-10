import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

const standards = [
  "Anti-money laundering (AML) and know-your-customer (KYC) requirements",
  "Applicable financial and securities regulations",
  "Ethical industry standards focused on transparency and accountability",
]

export function ComplianceEthics() {
  return (
    <Section className="py-0">
      <Reveal
        variant="fade-up"
        className="relative grid min-h-[420px] w-full grid-cols-1 overflow-hidden md:min-h-[520px] md:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]"
      >
        <div className="relative min-h-[320px] bg-[url('/compliance.webp')] bg-cover bg-center md:min-h-[520px]">
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute bottom-10 left-8 max-w-md text-white md:left-12">
            <p className="text-lg font-semibold leading-snug">
              “Our commitment to compliance strengthens trust with clients, partners,
              and regulatory authorities.”
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end bg-[#1d1b19] px-8 py-12 text-white md:px-12 md:py-14">
          <div className="ml-auto max-w-sm text-right">
            <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-2xl font-medium tracking-tight md:text-3xl">
              Compliance &amp;
              <br />
              Ethics
            </h2>
            <p className="mt-5 text-sm text-white/70">
              CFS operates under strict legal and ethical standards. All engagements
              comply with:
            </p>
            <div className="mt-6 space-y-6 text-sm">
              {standards.map((item, index) => (
                <div
                  key={item}
                  className={index < standards.length - 1 ? "border-b border-white/25 pb-6" : ""}
                >
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
