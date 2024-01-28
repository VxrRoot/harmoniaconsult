"use client";
import React from "react";
import ImageAboutUs from "../../../../assets/about-us-img.jpg";
import Image from "next/image";

const SectionImg = () => {
  return (
    <Image
      alt="about-us-image"
      className="w-full mt-8 object-cover h-[400px] lg:h-[800px] opacity-0 duration-300 transition-opacity"
      src={ImageAboutUs}
      onLoadingComplete={(img) => img.classList.remove("opacity-0")}
    />
  );
};

export default SectionImg;
