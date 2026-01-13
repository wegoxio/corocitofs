import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { CTA } from "@/components/sections/Cta"
import { ContactForm } from "@/components/forms/contact-form"
import { generateMetadata } from "@/lib/seo"

export const metadata = generateMetadata({
  title: "Contact - MiStartup",
  description: "Ponte en contacto con MiStartup, estamos listos para ayudarte.",
})

export default function Contact() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <ContactForm />
        </Container>
      </Section>
      <CTA />
    </>
  )
}
