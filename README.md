<p align="center">
  <img src="public/logo.png" alt="MiStartup Logo" width="150" />
</p>

# Wegox Landing Page Boilerplate

Este es un **boilerplate de Next.js 16** usando **App Router**, **TailwindCSS** y **shadcn/ui**, pensado para startups que necesiten landing pages rápidas, limpias y escalables.

Incluye:

- Estructura de páginas: `Home`, `About`, `Contact`
- Layouts:
  - `app/layout` (global, incluye fuentes, preload, SEO por defecto)
  - `(marketing)/layout` (Header + Footer)
- Componentes reutilizables:
  - `Header` y `Footer`
  - `Section` y `Container` para organizar contenido
  - Secciones genéricas: `HeroSection`, `FeaturesSection`, `CTASection`
  - Formulario de contacto (`ContactForm`) usando **shadcn/ui**
- SEO listo para producción:
  - Metadata global y por página
  - Open Graph y Twitter Cards placeholders
  - Canonical URLs y robots meta
- Server Components por defecto (SSR incluido)

---

## 🛠 Instalación

Clona el repositorio y usa **pnpm**:

```bash
pnpm install
pnpm dev
```

La aplicación estará corriendo en `http://localhost:3000`.

---

## 🧩 Estructura del proyecto

```
src/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx        # Home
│  │  ├─ about/page.tsx  # About
│  │  └─ contact/page.tsx # Contact
│  └─ layout.tsx         # RootLayout global
├─ components/
│  ├─ layout/
│  │  ├─ header.tsx
│  │  ├─ footer.tsx
│  │  ├─ section.tsx
│  │  └─ container.tsx
│  ├─ sections/
│  │  ├─ Hero.tsx
│  │  ├─ Features.tsx
│  │  └─ Cta.tsx
│  └─ forms/
│     └─ contact-form.tsx
├─ public/
│  ├─ logo.png
├─ lib/
│  ├─ siteConfig.ts
│  ├─ utils.ts
│  └─ seo.ts
└─ styles/
   └─ global.css
```

---

## ⚡ Uso

### Secciones

Puedes importar y usar las secciones en cualquier página:

```tsx
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <CTA/>
    </>
  );
}
```

### Formulario de contacto

```tsx
import { ContactForm } from "@/components/forms/contact-form"

<ContactForm />
```

---

## 🎨 Personalización del logo

Para mostrar un **logo en el README**, guarda el archivo en:

```
public/logo.png
```

> Para cada cliente:
> - Borra `public/logo.png`
> - Copia el logo de su empresa con el mismo nombre `logo.png`
> - El README y la landing page actualizarán automáticamente la imagen.

---

## 📈 SEO y metadata

- Metadata global en `RootLayout`  
- Metadata específica por página con `generateMetadata`  
- Open Graph y Twitter Cards placeholders  
- Canonical URL y robots meta configurados

---

## 📦 Tecnologías

- Next.js 16 App Router  
- TailwindCSS  
- shadcn/ui  
- TypeScript  

---

## 🔧 Notas

- Boilerplate modular y escalable  
- Server Components (SSR) por defecto  
- Todos los componentes y secciones reutilizables  
- Perfecto para prototipos rápidos o despliegues iniciales



---

## 🚀 Deploy estático en Hostinger (sin SSR)

Este proyecto está configurado para **export estático** con Next.js (`output: "export"`), ideal para Hostinger compartido sin Node runtime.

### 1) Construir en local

```bash
pnpm install
pnpm build
```

### 2) Carpeta que debes subir

Después del build, Next genera la carpeta:

```bash
out/
```

Sube **todo el contenido de `out/`** a `public_html/` en Hostinger.

### 3) Consideraciones importantes

- No necesitas marcar todas las páginas con `"use client"`. Solo componentes con hooks/eventos del navegador deben usarlo.
- `next/image` funciona en export estático aquí porque está configurado con `images.unoptimized: true`.
- Con `trailingSlash: true`, las rutas exportadas son más amigables para hosting estático.
