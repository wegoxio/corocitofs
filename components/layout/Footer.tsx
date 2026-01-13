import { siteConfig } from "@/lib/siteConfig"
import { Container } from "./Container"

export function Footer() {
  return (
    <footer className="w-full border-t">
      <Container>
        <div className="py-8 text-sm text-center">
          <p>{siteConfig.name} © {new Date().getFullYear()}</p>
          <div className="flex justify-center gap-4 mt-2">
            {Object.entries(siteConfig.socialLinks).map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                {key}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
