import { cn } from "@/lib/utils"
import { Container } from "./Container"

type SectionProps = {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>{children}</Container>
    </section>
  )
}
