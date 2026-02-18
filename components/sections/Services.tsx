"use client"

import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

type ServiceItem = {
  id: string
  label: string
  title: string
  description: string
  icon: React.ReactNode
  badgeIconSrc: string
  defaultActive?: boolean
}

const services: ServiceItem[] = [
  {
    id: "payment",
    label: "Estructuración de pagos",
    title: "Estructuración\nde\npagos\n",
    description:
      "Diseño de esquemas de pago seguros, ágiles y alineados al marco regulatorio.",
    defaultActive: true,
    badgeIconSrc: "/payment.svg",
    icon: (
      <img
        src="/payment.svg"
        alt=""
        aria-hidden="true"
        className="h-16 w-16 [filter:brightness(0)_contrast(200%)] md:h-24 md:w-24 lg:h-28 lg:w-28"
      />
    ),
  },
  {
    id: "intl",
    label: "Servicios Financieros Internacionales",
    title: "Servicios\nFinancieros\nInternacionales",
    description:
      "Soluciones para operaciones y flujos financieros transfronterizos.",
    badgeIconSrc: "/globe.svg",
    icon: (
      <img
        src="/globe.svg"
        alt=""
        aria-hidden="true"
        className="h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28"
      />
    ),
  },
  {
    id: "advisory",
    label: "Asesoría Financiera",
    title: "Asesoría\nFinanciera",
    description:
      "Consultoría estratégica para decisiones financieras sólidas y estructuradas.",
    badgeIconSrc: "/financial.svg",
    icon: (
      <img
        src="/financial.svg"
        alt=""
        aria-hidden="true"
        className="h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28"
      />
    ),
  },
  {
    id: "latam",
    label: "Soluciones Financieras para Venezuela y LATAM",
    title: "Soluciones\nFinancieras\npara\nVenezuela\ny\nLATAM",
    description:
      "Estrategias adaptadas al entorno económico y regulatorio regional.",
    badgeIconSrc: "/continent.svg",
    icon: (
      <img
        src="/continent.svg"
        alt=""
        aria-hidden="true"
        className="h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28"
      />
    ),
  },
]

export function Services() {
  return (
    <Section id="servicios" className="bg-white px-6 py-16 md:px-10 md:py-24 lg:px-20">
      <Reveal
        variant="lift"
        viewport={{ amount: 0.2, margin: "0px 0px -30% 0px" }}
        className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif]"
      >
        <h2 className="text-3xl font-medium text-[#1b1b1b] md:text-4xl">
          Nuestros Servicios
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-[300px] overflow-hidden rounded-2xl bg-[#f7f7f7] sm:h-[320px] lg:h-[380px]"
            >
              <button
                type="button"
                aria-label="Expandir"
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1b1b1b] transition-transform duration-500 ease-out group-hover:rotate-180 sm:h-12 sm:w-12"
              >
                +
              </button>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center sm:gap-4">
                {service.icon}
                <p className="whitespace-pre-line text-sm font-normal text-[#1b1b1b] sm:text-base">
                  {service.title}
                </p>
              </div>

              <div
                className={[
                  "absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#1f2d57] text-white transition-transform duration-500 ease-out",
                  "translate-y-full group-hover:translate-y-0",
                  service.defaultActive ? "translate-y-0" : "",
                ].join(" ")}
              >
                <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-[#1f2d57]/80" />
                <div className="relative z-10 flex h-full flex-col justify-between p-5">
                  <div className="flex items-start justify-between">
                    <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-white/80">
                      {service.id === "payment" ? (
                        <img
                          src={service.badgeIconSrc}
                          alt=""
                          aria-hidden="true"
                          className="h-4 w-4 brightness-0 invert"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="h-4 w-4 bg-white"
                          style={{
                            maskImage: `url('${service.badgeIconSrc}')`,
                            WebkitMaskImage: `url('${service.badgeIconSrc}')`,
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                          }}
                        />
                      )}
                      {service.label}
                    </span>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="rounded-md bg-white px-4 py-2 text-xs font-medium text-[#1b1b1b]"
                    >
                      Descripcion
                    </button>
                    <p className="mt-3 max-w-[210px] text-xs font-normal text-white/85">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
