import { Section } from "@/components/layout/Section"

export function Hero() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h1 className="text-4xl font-bold">Hero Title</h1>
        <p className="max-w-xl text-gray-600">Hero subtitle / tagline goes here.</p>
        <div>
          <button className="px-6 py-3 rounded bg-gray-800 text-white">
            Call to Action
          </button>
        </div>
      </div>
    </Section>
  )
}
