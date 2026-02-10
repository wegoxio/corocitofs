import Image from "next/image"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

const testimonials = [
  {
    name: "Carlos",
    image: "/carlos.webp",
    quote:
      "Necesitaba un pr\u00e9stamo para hacer mejoras en casa y Corocito me sorprendi\u00f3 con su rapidez y atenci\u00f3n. Fue todo digital, sin vueltas innecesarias.",
  },
  {
    name: "Mar\u00eda",
    image: "/maria.jpg",
    quote:
      "El equipo nos ayud\u00f3 a estructurar la operaci\u00f3n con claridad y tiempos muy eficientes. Volver\u00eda a elegirlos.",
  },
  {
    name: "Jorge",
    image: "/miguel.jpg",
    quote:
      "Valor\u00e9 mucho la transparencia del proceso y el acompa\u00f1amiento en cada paso. Todo qued\u00f3 claro desde el inicio.",
  },
  {
    name: "Andrea",
    image: "/angel.webp",
    quote:
      "Profesionales, \u00e1giles y muy confiables. Sentimos que nuestras necesidades fueron escuchadas y resueltas.",
  },
]

export function TrustedClients() {
  return (
    <Section className="bg-[#f7f5f2] py-16">
      <Reveal
        variant="zoom"
        className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]"
      >
        <div className="px-6 lg:px-12">
          <h2 className="max-w-md font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl font-semibold leading-tight text-[#1b1b1b] sm:text-4xl lg:text-5xl">
            Trusted by
            <br />
            clients who
            <br />
            value speed,
            <br />
            security, and
            <br />
            clarity.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#2c2c2c]">
            We work closely with businesses and investors who operate in complex
            environments and need financial decisions executed with precision and
            confidence.
          </p>
        </div>
        <div className="flex min-h-[360px] w-full items-stretch gap-4 overflow-x-auto pb-2 px-6 sm:min-h-[420px] lg:min-h-[520px] lg:justify-end lg:gap-0 lg:overflow-visible lg:px-12">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={[
                "group relative flex-none w-[220px] overflow-hidden rounded-2xl bg-cover bg-center transition-all duration-500 ease-out sm:w-[240px] md:w-[260px] lg:w-auto lg:flex-[0.55] lg:max-w-[180px] lg:hover:flex-[1.7] lg:hover:max-w-[360px] lg:hover:z-20",
                index === 0 ? "" : "lg:-ml-12",
              ].join(" ")}
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <div className="absolute inset-0 bg-black/25 transition-colors duration-500 lg:group-hover:bg-black/35" />
              <div className="absolute left-5 top-5 flex h-9 w-11 items-center justify-center rounded-full bg-white/10">
                <Image
                  src="/mobile_logo_white.svg"
                  alt={`${item.name} logo`}
                  width={38}
                  height={18}
                  className="h-5 w-auto"
                />
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white opacity-100 transition-all duration-500 lg:opacity-0 lg:group-hover:opacity-100">
                <p className="text-lg font-semibold">{item.name}</p>
                <div className="mt-2 h-px w-12 bg-white/70" />
                <p className="mt-2 text-xs leading-relaxed text-white/90">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
