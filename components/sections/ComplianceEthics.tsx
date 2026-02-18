import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

const standards = [
  "Prevención de legitimación de capitales (AML) y políticas de Conozca a su Cliente (KYC).",
  "Normativas financieras y de mercado de valores aplicables en cada jurisdicción.",
  "Principios éticos de transparencia, responsabilidad y buenas prácticas internacionales.",
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
              “Nuestro compromiso con el cumplimiento normativo fortalece la confianza de clientes, aliados y autoridades regulatorias.”
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end bg-[#1d1b19] px-8 py-12 text-white md:px-12 md:py-14">
          <div className="ml-auto max-w-sm text-right">
            <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-2xl font-medium tracking-tight md:text-3xl">
              Ética &amp;
              <br />
              Compliance
            </h2>
            <p className="mt-5 text-sm text-white/70">
              En Corocito Financial Services (CFS) operamos bajo estrictos estándares legales y éticos. Cada compromiso profesional se desarrolla conforme a:
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
