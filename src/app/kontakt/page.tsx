import { links, siteUrl } from "@/constants";
import ContactSection from "@/ui/sections/ContactSection/ContactSection ";
import PageHeroSection from "@/ui/sections/PageHeroSection/PageHeroSection";
import { Metadata } from "next";
import React from "react";
import heroImg from "../../assets/contact-page.jpg";

export const metadata: Metadata = {
  title: "Kontakt",
  alternates: {
    canonical: `${siteUrl}${links.contact}`,
  },
};

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
