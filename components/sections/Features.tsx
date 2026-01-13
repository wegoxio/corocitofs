import { Section } from "@/components/layout/Section"

export function Features() {
  const features = ["Feature One", "Feature Two", "Feature Three"]

  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature} className="p-4 border rounded">
            <h3 className="text-xl font-semibold">{feature}</h3>
            <p className="text-gray-600 mt-2">
              Description for {feature} goes here.
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
