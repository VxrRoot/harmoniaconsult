import ContactSection from "@/ui/sections/ContactSection/ContactSection ";
import PageHeroSection from "@/ui/sections/PageHeroSection/PageHeroSection";
import React from "react";
import heroImg from "../../assets/contact-page.jpg";

const page = () => {
  return (
    <section className="">
      <PageHeroSection image={heroImg} title="POROZMAWIAJMY" />
      <section className="">
        <ContactSection />
      </section>
    </section>
  );
};

export default page;
