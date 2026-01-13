import { CTA } from "@/components/sections/Cta";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Home - MiStartup",
  description: "Conoce nuestros productos y servicios innovadores en MiStartup.",
});

export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <CTA/>
    </>
  );
}
