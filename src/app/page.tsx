import { siteUrl } from "@/constants";
import AboutUsSection from "@/ui/sections/AboutUsSection/AboutUsSection";
import ContactSection from "@/ui/sections/ContactSection/ContactSection ";
import FAQSection from "@/ui/sections/FAQSection/FAQSection";
import HeroSection from "@/ui/sections/HeroSection/HeroSection";
import OpinionSection from "@/ui/sections/OpinionSection/OpinionSection";
import ServicesSection from "@/ui/sections/ServicesSection/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmonia Consult - Doradztwo dla Polaków w Holandii",
  description:
    "Harmonia Consult oferuje profesjonalne doradztwo i wsparcie dla Polaków mieszkających w Holandii. Zyskaj pomoc w rozwoju zawodowym, integracji kulturowej oraz kwestiach prawnych.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    url: siteUrl,
    type: "website",
    title: "Harmonia Consult - Doradztwo dla Polaków w Holandii",
    description:
      "Profesjonalne doradztwo i wsparcie dla Polaków w Holandii. Pomagamy w rozwoju kariery, integracji oraz sprawach administracyjnych i prawnych.",
  },
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
