"use client";
import React, { useRef } from "react";
import Image from "next/image";
import heroImage from "../../../../assets/hero-img-2.jpg";

const HeroImg = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Image
      ref={imgRef}
      alt="hero-image"
      priority
      src={heroImage}
      className="object-cover object-right-top w-full h-full opacity-0 transition-all duration-300"
      onLoad={() => imgRef?.current?.classList.remove("opacity-0")}
    />
  );
};

export default HeroImg;
