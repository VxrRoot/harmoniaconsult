"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSectionHeading = () => {
  return (
    <h1 className="text-3xl leading-10 pr-5 max-w-xl lg:text-5xl lg:pr-3 lg:leading-tight">
      Doświadcz{" "}
      <TypeAnimation
        sequence={[
          "Harmonii",
          3000,
          "Balansu",
          3000,
          "Spokoju",
          3000,
          "Porządku",
          3000,
        ]}
        wrapper="span"
        speed={20}
        repeat={Infinity}
      />
      <br />w biurokracji i prawie. Twoje rozwiązania w Holandii.
    </h1>
  );
};

export default HeroSectionHeading;
