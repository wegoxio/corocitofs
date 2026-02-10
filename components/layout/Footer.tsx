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
              Reliable financial advisory and structuring services across Latin America.
            </p>
            <p className="text-xs text-white/60">
              {siteConfig.name} &copy; {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
              Follow us
            </p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(siteConfig.socialLinks).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons]
                if (!Icon) return null
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/85 transition-colors hover:border-white hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
