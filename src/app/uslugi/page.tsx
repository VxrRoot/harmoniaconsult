import React from "react";
import heroImg from "../../assets/services-img.jpg";
import FAQSection from "@/ui/sections/FAQSection/FAQSection";
import PageHeroSection from "@/ui/sections/PageHeroSection/PageHeroSection";

const page = () => {
  return (
    <section>
      <PageHeroSection image={heroImg} title="NASZE USŁUGi" />
      <section></section>
      <FAQSection />
    </section>
  );
};

export default page;
