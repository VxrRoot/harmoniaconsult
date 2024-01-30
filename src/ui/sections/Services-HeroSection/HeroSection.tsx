import React from "react";
import HeroImage from "./elements/HeroImage";

const HeroSection = () => {
  return (
    <section className="h-full relative lg:min-h-[500px] min-h-[300px]">
      <HeroImage />
      <h1 className="uppercase whitespace-nowrap font-bold left-1/2 -translate-x-1/2 lg:mt-[300px] mt-[200px] text-white absolute text-4xl z-20">
        Nasze usługi
      </h1>
    </section>
  );
};

export default HeroSection;
