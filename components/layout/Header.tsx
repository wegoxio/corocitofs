"use client"

import Image from "next/image"
import { useEffect, useState, type MouseEvent } from "react"
import { siteConfig } from "@/lib/siteConfig"
import { Container } from "./Container"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsOpen(false)
    window.location.href = "/"
  }

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  return (
    <header className="w-full">
      <Container className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] px-4 md:px-10 lg:px-12">
        <div className="flex h-16 items-center justify-between md:hidden">
          <a href="/" onClick={handleLogoClick} aria-label={`${siteConfig.name} home`}>
            <Image
              src="/mobile_logo.svg"
              alt={`${siteConfig.name} Logo`}
              width={120}
              height={54}
              priority
              className="-ml-1 h-auto w-[110px]"
            />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1b1b1b]/20 bg-white/80 text-[#1b1b1b] shadow-[0_8px_16px_rgba(0,0,0,0.12)] transition-colors hover:bg-white"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-[#1b1b1b]" />
              <span className="h-0.5 w-5 rounded-full bg-[#1b1b1b]" />
              <span className="h-0.5 w-5 rounded-full bg-[#1b1b1b]" />
            </div>
          </button>
        </div>

        <div className="hidden items-center gap-8 py-6 md:flex">
          <a href="/" onClick={handleLogoClick} aria-label={`${siteConfig.name} home`}>
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} Logo`}
              width={240}
              height={60}
              priority
            />
          </a>

          <nav className="ml-auto flex items-center gap-10">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-base font-normal text-[#4b4f56] transition-colors hover:text-[#1b1b1b]"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="flex h-12 items-center justify-center rounded-full bg-[#101F48] px-7 text-sm font-normal text-white transition-colors hover:bg-[#0b1a3d]"
          >
            Contacto
          </a>
        </div>
      </Container>

      <div
        className={[
          "fixed inset-0 z-50 transition-opacity md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-black/35"
          onClick={() => setIsOpen(false)}
        />
        <aside
          id="mobile-menu"
          className={[
            "absolute right-0 top-0 h-full w-72 bg-white px-6 py-6 shadow-xl transition-transform",
            isOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between">
            <a href="/" onClick={handleLogoClick} aria-label={`${siteConfig.name} home`}>
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                width={130}
                height={32}
                priority
              />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9dadd] text-[#1b1b1b]"
            >
              X
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-5">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-base font-normal text-[#2c2c2c] transition-colors hover:text-[#101F48]"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="mt-10 flex h-11 items-center justify-center rounded-full bg-[#101F48] text-sm font-normal text-white transition-colors hover:bg-[#0b1a3d]"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </a>
        </aside>
      </div>
    </header>
  )
}
