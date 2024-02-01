import PageHeroSection from "@/ui/sections/PageHeroSection/PageHeroSection";
import React from "react";
import heroImg from "../../assets/blog-page-img.jpg";

const page = () => {
  return (
    <section className="h-screen">
      <PageHeroSection image={heroImg} title="BLOG" />
    </section>
  );
};

export default page;
