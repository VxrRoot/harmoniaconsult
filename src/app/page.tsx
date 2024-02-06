import AboutUsSection from "@/ui/sections/AboutUsSection/AboutUsSection";
import ContactSection from "@/ui/sections/ContactSection/ContactSection ";
import FAQSection from "@/ui/sections/FAQSection/FAQSection";
import HeroSection from "@/ui/sections/HeroSection/HeroSection";
import OpinionSection from "@/ui/sections/OpinionSection/OpinionSection";
import ServicesSection from "@/ui/sections/ServicesSection/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmonia Consult",
  description: "...",
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <OpinionSection />
    </div>
  );
}
