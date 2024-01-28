"use client";
import React from "react";
import Image from "next/image";
import heroImage from "../../../../assets/hero-img-2.jpg";

const HeroImg = () => {
  return (
    <Image
      alt="hero-image"
      src={heroImage}
      className="object-cover object-right-top w-full h-full opacity-0 transition-opacity duration-300"
      onLoadingComplete={(img) => img.classList.remove("opacity-0")}
    />
  );
};

export default HeroImg;
