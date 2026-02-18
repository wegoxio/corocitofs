import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

const highlights = [
  {
    title: "Rapidez:",
    text: "Soluciones estructuradas con agilidad y ejecución eficiente en entornos dinámicos.",
  },
  {
    title: "Seguridad:",
    text: "Estrictos estándares de cumplimiento, confidencialidad y rigor normativo.",
  },
  {
    title: "Precios Competitivos:",
    text: "Honorarios eficientes con alto nivel técnico y valor estratégico.",
  },
]

export function WhyUs() {
  return (
    <Section id="seguridad" className="py-0">
      <Reveal
        variant="slide-left"
        className="relative grid min-h-[420px] w-full grid-cols-1 overflow-hidden md:min-h-[520px] md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]"
      >
        <div className="bg-[#1d1b19] px-8 py-12 text-white md:px-12 md:py-14">
          <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-2xl font-medium tracking-tight md:text-3xl">
            ¿Por qué CFS?
          </h2>
          <div className="mt-8 space-y-6 text-sm">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={index < highlights.length - 1 ? "border-b border-white/25 pb-6" : ""}
              >
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-white/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[320px] bg-[url('/why_us.webp')] bg-cover bg-center md:min-h-[520px]">
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute bottom-8 right-6 max-w-xs text-right text-white md:bottom-10 md:right-12">
            <p className="text-base font-semibold">Propuesta de Valor:</p>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              Estructuramos soluciones financieras seguras y eficientes para Latinoamérica, combinando rapidez operativa, cumplimiento normativo y visión estratégica en entornos complejos.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
