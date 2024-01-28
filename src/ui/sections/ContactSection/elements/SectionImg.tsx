"use client";
import React from "react";
import Image from "next/image";
import img from "../../../../assets/contact-img.png";

const SectionImg = () => {
  return (
    <Image
      alt="zdjecie formularza kontaktowego"
      className="ml-20 opacity-0 transition-all duration-300"
      src={img}
      onLoadingComplete={(img) => img.classList.remove("opacity-0", "ml-20")}
    />
  );
};

export default SectionImg;
