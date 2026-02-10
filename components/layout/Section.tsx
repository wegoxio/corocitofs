import { cn } from "@/lib/utils"
type SectionProps = {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("mx-auto w-full max-w-[1760px]", className)}>
      {children}
    </section>
  )
}
