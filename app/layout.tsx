import type { Metadata } from "next"
import "@/styles/global.css"
import { siteConfig } from "@/lib/siteConfig"

// Metadata global por default => Si una pagina especifica no tiene MetaData se utiliza este por defecto
export const metadata: Metadata = {
  title: siteConfig.name,
  description: `${siteConfig.name} - Landing page oficial.`,
  openGraph: {
    title: siteConfig.name,
    description: `${siteConfig.name} - Landing page oficial.`,
    url: "https://www.mistartup.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-placeholder.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: `${siteConfig.name} - Landing page oficial.`,
    images: ["/og-placeholder.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.mistartup.com/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
