"use client";
import React, { useRef } from "react";
import Image from "next/image";
import img from "../../../../assets/contact-img.png";

const SectionImg = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Image
      ref={imgRef}
      priority
      alt="zdjecie formularza kontaktowego"
      className="ml-20 opacity-0 transition-all duration-300"
      src={img}
      onLoad={() => imgRef?.current?.classList.remove("opacity-0", "ml-20")}
    />
  );
};

export default SectionImg;
