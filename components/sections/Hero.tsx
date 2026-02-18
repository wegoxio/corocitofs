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
              Soluciones financieras estratégicas
              <br />
              para Latinoamérica.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm font-normal text-[#3d3f44] md:text-base">
              Asesoramos a empresas e inversionistas en toda la región, estructurando operaciones financieras con rapidez, seguridad y estricto cumplimiento normativo. 
              Combinamos estándares internacionales con profundo conocimiento del entorno latinoamericano para diseñar soluciones sólidas en planificación financiera, estructuración de inversiones y corporate finance.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
