"use client"

import { useMemo, useRef, useState } from "react"
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion"
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
  const textRef = useRef<HTMLParagraphElement | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const isInView = useInView(textRef, { amount: 0.6, margin: "0px 0px -10% 0px" })
  const isInViewRef = useRef(isInView)
  isInViewRef.current = isInView
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 40%"],
  })
  const revealProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (isInViewRef.current && value >= 0.95) {
      setIsCompleted(true)
    }
  })
  const reveal = useTransform(revealProgress, (value) => (isCompleted ? 1 : value))

  const content = useMemo(() => {
    if (active === "mission") {
      return (
        <>
          Brindar asesoría y soluciones financieras estratégicas en Latinoamérica, 
          estructurando operaciones con rapidez, seguridad y estricto cumplimiento normativo, para apoyar 
          a empresas e inversionistas en la toma de decisiones sólidas y sostenibles en entornos económicos dinámicos.
        </>
      )
    }
    if (active === "vision") {
      return (
        <>
          Consolidarnos como una firma de referencia en asesoría financiera en Latinoamérica, 
          reconocida por su rigor técnico, confiabilidad, excelencia en cumplimiento regulatorio y 
          capacidad de estructurar soluciones eficientes en mercados complejos.
        </>
      )
    }
    return (
      <>
        Corocito Financial Services (CFS) es una firma de asesoría financiera incorporada en Panamá que acompaña a empresas e inversionistas en Latinoamérica, 
        estructurando soluciones estratégicas con rapidez, seguridad y estricto cumplimiento normativo; combinamos estándares internacionales con profundo conocimiento del entorno regional para ofrecer asesoría confiable en contextos económicos y regulatorios complejos.
      </>
    )
  }, [active])

  const words = useMemo(() => {
    const extractText = (node: React.ReactNode): string => {
      if (typeof node === "string") return node
      if (Array.isArray(node)) return node.map(extractText).join("")
      if (node && typeof node === "object" && "props" in node) {
        const props = (node as { props?: { children?: React.ReactNode } }).props
        return extractText(props?.children ?? "")
      }
      return ""
    }
    const text = extractText(content).replace(/\s+/g, " ").trim()
    return text.length ? text.split(" ") : []
  }, [content])

  return (
    <Section id="nosotros" className="bg-white py-16 md:py-24 px-6 md:px-10 lg:px-20">
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

        <p
          ref={textRef}
          className="mt-8 max-w-4xl text-2xl leading-tight text-[#a8a8a8] md:text-4xl"
        >
          {words.map((word, index) => (
            <Word
              key={`${word}-${index}`}
              word={word}
              index={index}
              total={words.length}
              progress={reveal}
            />
          ))}
        </p>

        <div className="mt-12 flex items-center gap-3">
          <a
            href="#contacto"
            className="flex h-12 items-center rounded-full bg-[#1b1b1b] px-6 text-sm font-normal text-white"
          >
            Contacto
          </a>
        </div>
      </Reveal>
    </Section>
  )
}

type WordProps = {
  word: string
  index: number
  total: number
  progress: MotionValue<number>
}

function Word({ word, index, total, progress }: WordProps) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.35, 1])
  const color = useTransform(opacity, (value) => {
    const t = Math.min(1, Math.max(0, value))
    const gray = Math.round(168 + (27 - 168) * t)
    return `rgb(${gray}, ${gray}, ${gray})`
  })

  return (
    <motion.span style={{ color }}>
      {word}
      {index < total - 1 ? " " : ""}
    </motion.span>
  )
}

