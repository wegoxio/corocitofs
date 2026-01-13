import { Section } from "@/components/layout/Section"

export function CTA() {
  return (
    <Section>
      <div className="flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl font-bold">Ready to get started?</h2>
        <button className="px-6 py-3 rounded bg-gray-800 text-white">
          Sign Up
        </button>
      </div>
    </Section>
  )
}
