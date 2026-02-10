import { Header } from "@/components/layout/Header"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

export function Hero() {
  return (
    <Section
      id="inicio"
      className="relative w-full max-w-none overflow-hidden bg-[url('/hero-bg.webp')] bg-cover bg-center py-0"
    >
      <div className="pointer-events-none absolute inset-0 bg-white/65" />
      <div className="relative">
        <div className="mx-auto w-full max-w-[1760px] px-6">
          <Header />
        </div>
        <div className="flex min-h-[520px] items-center justify-center text-center md:min-h-[640px] lg:min-h-[720px]">
          <Reveal
            variant="hero"
            className="mx-auto max-w-2xl font-['Helvetica_Neue',Helvetica,Arial,sans-serif]"
          >
            <h1 className="text-3xl font-semibold leading-tight text-[#1b1b1b] sm:text-4xl md:text-5xl lg:text-6xl">
              Fast. Secure. Financial
              <br />
              solutions for LATAM.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm font-normal text-[#3d3f44] md:text-base">
              We provide reliable financial advisory and structuring services designed
              to help businesses and investors operate confidently across Latin America.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-full bg-[#101F48] px-6 py-3 text-sm font-normal text-white transition-colors hover:bg-[#0b1a3d]">
                Contact us via WhatsApp
              </button>
              <button className="rounded-full border border-[#cfd3d7] bg-white px-6 py-3 text-sm font-normal text-[#1b1b1b] transition-colors hover:border-[#9aa0a6] hover:text-[#101F48]">
                Schedule a call
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
