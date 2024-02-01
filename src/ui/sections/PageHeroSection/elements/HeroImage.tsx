"use client";
import React, { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface IPageHeroImage {
  img: StaticImageData;
}

const HeroImage: FC<IPageHeroImage> = ({ img }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Image
      ref={imgRef}
      className="lg:h-[500px] h-[300px] brightness-50 grayscale object-cover absolute object-center opacity-0 transition-opacity duration-300"
      alt="zdjęcie hero strony uslugi"
      src={img}
      onLoad={() => imgRef?.current?.classList.remove("opacity-0")}
    />
  );
};

export default HeroImage;
