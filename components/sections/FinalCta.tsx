import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

export function FinalCta() {
  return (
    <Section id="contacto" className="py-0 mb-16 md:mb-20">
      <Reveal
        variant="blur"
        className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-[url('/final.webp')] bg-cover bg-center md:min-h-[520px]"
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative flex max-w-3xl flex-col items-center gap-4 px-6 text-center text-white">
          <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl font-semibold leading-tight md:text-4xl">
            Su aliado financiero estratégico en Latinoamérica.
          </h2>
          <p className="max-w-2xl text-xs text-white/85 md:text-sm">
            Impulse sus decisiones financieras con asesoría experta y ejecución eficiente.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-[#101F48] px-6 py-3 text-sm font-normal text-white">
              Contacto
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
