import { Metadata } from "next"
import { siteConfig } from "./siteConfig"

export function generateMetadata(options?: Partial<Metadata>): Metadata {
  const defaultMetadata: Metadata = {
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
    robots:{
      index: true,
      follow: true
    }
  }

  return {
    ...defaultMetadata,
    ...options,
  }
}

