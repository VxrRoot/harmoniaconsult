import AboutUsSection from "@/ui/sections/AboutUsSection/AboutUsSection";
import ContactSection from "@/ui/sections/ContactSection/ContactSection ";
import FAQSection from "@/ui/sections/FAQSection/FAQSection";
import HeroSection from "@/ui/sections/HeroSection/HeroSection";
import ServicesSection from "@/ui/sections/ServicesSection/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Harmonia Consult",
  description: "...",
};

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
