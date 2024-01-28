import AboutUsSection from "@/ui/sections/AboutUsSection/AboutUsSection";
import HeroSection from "@/ui/sections/HeroSection/HeroSection";
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
    </main>
  );
}
