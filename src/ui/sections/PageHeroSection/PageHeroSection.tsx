import { StaticImageData } from "next/image";
import React, { FC } from "react";
import HeroImage from "./elements/HeroImage";

interface IPageHeroSection {
  title: string;
  image: StaticImageData;
}

const HeroSection: FC<IPageHeroSection> = ({ image, title }) => {
  return (
    <section className="h-full relative lg:min-h-[500px] min-h-[300px]">
      <HeroImage img={image} />
      <h1 className="uppercase text-center w-full font-bold left-1/2 -translate-x-1/2 lg:mt-[300px] mt-[200px] text-white absolute text-2xl lg:text-4xl z-20">
        {title}
      </h1>
    </section>
  );
};

export default HeroSection;
