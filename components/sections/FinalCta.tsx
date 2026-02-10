import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

export function FinalCta() {
  return (
    <Section className="py-0">
      <Reveal
        variant="blur"
        className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-[url('/final.webp')] bg-cover bg-center md:min-h-[520px]"
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative flex max-w-3xl flex-col items-center gap-4 px-6 text-center text-white">
          <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl font-semibold leading-tight md:text-4xl">
            Looking for a secure and reliable financial
            <br />
            partner in LATAM?
          </h2>
          <p className="max-w-2xl text-xs text-white/85 md:text-sm">
            We provide reliable financial advisory and structuring services designed to
            help businesses and investors operate confidently across Latin America.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-[#101F48] px-6 py-3 text-sm font-normal text-white">
              Contact us via WhatsApp
            </button>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-normal text-[#1b1b1b]">
              Schedule a call
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
