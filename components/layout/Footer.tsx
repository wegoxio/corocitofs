import { Github, Linkedin, Twitter } from "lucide-react"
import { siteConfig } from "@/lib/siteConfig"
import { Container } from "./Container"

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
}

export function Footer() {
  return (
    <footer className="w-full border-t border-[#0b1a3d] bg-[#101F48]">
      <Container>
        <div className="flex flex-col gap-8 py-10 text-white md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-3">
            <img src={siteConfig.logo} alt={siteConfig.name} className="h-8 w-auto brightness-0 invert" />
            <p className="max-w-md text-xs text-white/75">
              Asesoría y estructuración financiera confiable en Latinoamérica.
            </p>
            <p className="text-xs text-white/60">
              {siteConfig.name} &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
