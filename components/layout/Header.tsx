import Image from "next/image"
import { siteConfig } from "@/lib/siteConfig"
import { Container } from "./Container"

export function Header() {
  return (
    <header className="w-full border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} Logo`}
              width={80}           
              height={80}
              priority
            />
            <span className="font-bold text-lg">{siteConfig.name}</span>
          </div>

          {/* Navegación */}
          <nav className="flex gap-4">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}
