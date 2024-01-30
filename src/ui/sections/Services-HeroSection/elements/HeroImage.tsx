"use client";
import React, { useRef } from "react";
import Image from "next/image";
import heroImg from "../../../../assets/services-img.jpg";

const HeroImage = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Image
      ref={imgRef}
      className="lg:h-[500px] h-[300px] brightness-50 grayscale object-cover absolute object-center opacity-0 transition-opacity duration-300"
      alt="zdjęcie hero strony uslugi"
      src={heroImg}
      onLoad={() => imgRef?.current?.classList.remove("opacity-0")}
    />
  );
};

export default HeroImage;
