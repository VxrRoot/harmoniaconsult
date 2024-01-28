import React from "react";
import Image from "next/image";
import heroImage from "../../assets/hero-img-2.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:h-[800px] justify-between lg:flex-row">
      <section className="w-full h-[400px] lg:h-full flex-grow relative">
        <Image
          alt="hero-image"
          src={heroImage}
          className="object-cover object-right-top w-full h-full"
        />
      </section>
      <section className="bg-black w-full text-white flex-grow pt-10 px-4 pb-10 lg:flex lg:flex-col lg:justify-center lg:h-[800px] lg:px-10">
        <div className="bg-gradient-to-r to-yellow-600 from-yellow-900 h-2 w-40 mb-6" />
        <h1 className="text-3xl leading-10 pr-5 max-w-xl lg:text-5xl lg:pr-3 lg:leading-tight">
          Doświadcz Harmonii w biurokracji i prawie. Twoje rozwiązania w
          Holandii.
        </h1>
        <h2 className="text-gray-400 mt-4 pr-5 max-w-xl lg:text-lg">
          Oferujemy szybką i skuteczną pomoc w rozwiązywaniu Twoich spraw
          urzędowych i prawnych. Dzięki naszej wiedzy i doświadczeniu, możesz
          pokonać biurokrację bez stresu.
        </h2>
        <button className="bg-gradient-to-r from-yellow-900 to-yellow-600 text-white font-semibold py-3 px-6 rounded-md mt-8 shadow-md max-w-40">
          Napisz do nas
        </button>
      </section>
    </section>
  );
};

export default HeroSection;
