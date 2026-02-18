"use client"

import { motion, type Transition, type Variant } from "framer-motion"
import { cn } from "@/lib/utils"

type RevealVariant =
  | "hero"
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "lift"
  | "zoom"
  | "blur"

type RevealProps = {
  children: React.ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  once?: boolean
  viewport?: {
    amount?: number
    margin?: string
  }
}

type MotionVariant = { hidden: Variant; show: Variant }

const variants: Record<RevealVariant, MotionVariant> = {
  hero: {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
  "fade-up": {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 36 },
    show: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -36 },
    show: { opacity: 1, x: 0 },
  },
  lift: {
    hidden: { opacity: 0, y: 42, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, y: 18, scale: 0.98, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
}

const transitions: Record<RevealVariant, Transition> = {
  hero: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  "fade-up": { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  "slide-left": { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  "slide-right": { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  lift: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  zoom: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  blur: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
}

export function Reveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  once = true,
  viewport,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      variants={variants[variant]}
      transition={{ ...transitions[variant], delay }}
      viewport={{
        once,
        amount: viewport?.amount ?? 0.45,
        margin: viewport?.margin ?? "0px 0px -20% 0px",
      }}
    >
      {children}
    </motion.div>
  )
}
