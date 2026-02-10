"use client"

import { useMemo, useState } from "react"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

type TabKey = "about" | "mission" | "vision"

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "about", label: "Quienes Somos" },
  { key: "mission", label: "Misión" },
  { key: "vision", label: "Visión" },
]

export function AboutTabs() {
  const [active, setActive] = useState<TabKey>("about")

  const content = useMemo(() => {
    if (active === "mission") {
      return (
        <>
          Corocito Financial Services S.A. impulsa decisiones financieras
          sólidas mediante asesoría estratégica, estructuración a medida y
          acompañamiento continuo para empresas e inversionistas en la región.
        </>
      )
    }
    if (active === "vision") {
      return (
        <>
          Ser la firma de referencia en Latinoamérica por la calidad, precisión
          y confianza de nuestro asesoramiento financiero y estructuración de
          proyectos.
        </>
      )
    }
    return (
      <>
        Corocito Financial Services S.A. is a financial advisory firm
        incorporated in <span className="text-[#8f8f8f]">Panama</span>,
        strategically positioned to support clients operating in{" "}
        <span className="text-[#8f8f8f]">Venezuela</span> and across Latin
        America.
      </>
    )
  }, [active])

  return (
    <Section className="bg-white py-16 md:py-24 px-6 md:px-10 lg:px-20">
      <Reveal variant="slide-right" className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
        <div className="flex flex-wrap items-center gap-4">
          {tabs.map((tab) => {
            const isActive = tab.key === active
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={[
                  "h-11 rounded-xl px-6 text-sm font-normal transition-colors",
                  isActive
                    ? "bg-[#e65113] text-white shadow-sm"
                    : "bg-[#f2f2f2] text-[#9a9a9a]",
                ].join(" ")}
                type="button"
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <p className="mt-8 max-w-4xl text-2xl leading-tight text-[#1b1b1b] md:text-4xl">
          {content}
        </p>

        <div className="mt-12 flex items-center gap-3">
          <button
            type="button"
            className="h-12 rounded-full bg-[#1b1b1b] px-6 text-sm font-normal text-white"
          >
            Contacto
          </button>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b1b1b]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7M9.5 7H17V14.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
