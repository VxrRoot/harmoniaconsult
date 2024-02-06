"use client";
import { StarIcon } from "@heroicons/react/24/outline";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useRef, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "./OpinionSlider.css";

const opinions: { text: string; author: string }[] = [
  {
    text: "Dzięki szybkiej reakcji i wsparciu Harmonia Consult udało mi się w skuteczny sposób odzyskać prawo jazdy już po dwóch tygodniach od jego zabrania.",
    author: "Piotr Szyma ",
  },
  {
    text: "Zdecydowałam się skorzystać z usług tłumaczenia dokumentów w tej firmie, i jestem zadowolona z rezultatów. Tłumaczenie było czytelne, a współpraca przebiegła bez problemów.",
    author: "Ewa Świderska",
  },
];

const OpinionSlider = () => {
  const splideRef = useRef<Splide | null>(null);

  const splideOptions = {
    arrows: true,
    pagination: true,
    autoplay: true,
    loop: true,
    perPage: 1,
    classes: {
      arrows: "slider__arrows",
      arrow: "slider__arrow",
      prev: "slider__arrow--prev",
      next: "slider__arrow--next",
    },
  };

  return (
    <Splide
      ref={splideRef}
      options={splideOptions}
      className="p-0 m-0  h-full border-yellow-600 border-4 rounded-sm"
    >
      {opinions.map((item, idx) => {
        return (
          <SplideSlide key={`${item.author}-${idx}`} className="">
            <div className="w-full h-80 p-6  flex flex-col justify-center">
              <header className="flex mb-4">
                <StarIcon className="fill-yellow-600 h-8 w-8 stroke-yellow-600" />
                <StarIcon className="fill-yellow-600 h-8 w-8 stroke-yellow-600" />
                <StarIcon className="fill-yellow-600 h-8 w-8 stroke-yellow-600" />
                <StarIcon className="fill-yellow-600 h-8 w-8 stroke-yellow-600" />
                <StarIcon className="fill-yellow-600 h-8 w-8 stroke-yellow-600" />
              </header>
              <div className="mb-6">
                <p className="italic">,,{item.text}"</p>
              </div>
              <footer>{item.author}</footer>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default OpinionSlider;
