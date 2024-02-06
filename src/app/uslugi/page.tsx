import React from "react";
import heroImg from "../../assets/services-img.jpg";
import FAQSection from "@/ui/sections/FAQSection/FAQSection";
import PageHeroSection from "@/ui/sections/PageHeroSection/PageHeroSection";
import ContactSection from "@/ui/sections/ContactSection/ContactSection ";
import ServicesSection from "@/ui/sections/Services-ServicesSection/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nasze usługi",
};

const ServicesPage = () => {
  return (
    <section>
      <PageHeroSection image={heroImg} title="NASZE USŁUGi" />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
    </section>
  );
};

export default ServicesPage;
