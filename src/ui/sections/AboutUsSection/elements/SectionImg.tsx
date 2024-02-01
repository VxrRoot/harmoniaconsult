"use client";
import React, { useRef } from "react";
import ImageAboutUs from "../../../../assets/about-us-img.jpg";
import Image from "next/image";

const SectionImg = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Image
      ref={imgRef}
      alt="about-us-image"
      className="w-full mt-8 object-cover h-[400px] lg:h-[800px] opacity-0 duration-300 transition-opacity"
      src={ImageAboutUs}
      onLoad={() => imgRef?.current?.classList.remove("opacity-0")}
    />
  );
};

export default SectionImg;
