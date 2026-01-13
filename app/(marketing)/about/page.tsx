import { CTA } from "@/components/sections/Cta";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "About Us - MiStartup",
  description: "Conoce la historia, misión y equipo de MiStartup.",
});

export default function About() {
  return (
    <>
      <Hero/>
      <Features/>
      <CTA/>
    </>
  );
}
