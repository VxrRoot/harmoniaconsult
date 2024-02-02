"use client";
import React, { useRef } from "react";
import Image from "next/image";
import officeImg from "../../../assets/office.jpg";
import lawImg from "../../../assets/law-helper.jpg";
import translateImg from "../../../assets/translate.jpg";
import Frame from "@/ui/atoms/frame";

const ServicesSection = () => {
  const imgRefOne = useRef<HTMLImageElement>(null);
  const imgRefTwo = useRef<HTMLImageElement>(null);
  const imgRefThree = useRef<HTMLImageElement>(null);

  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col lg:flex-row max-w-6xl mt-20 lg:mt-40 relative ">
        <Image
          ref={imgRefOne}
          onLoad={() => imgRefOne?.current?.classList.remove("opacity-0")}
          alt="zdjecie uslugi prawa"
          src={lawImg}
          className="lg:w-1/2 opacity-0 transition-opacity duration-300"
        />
        <div className="py-8 px-4 flex flex-col justify-center lg:pl-12">
          <p className="text-3xl font-bold mb-8">Pomoc prawna</p>
          <p className="text-justify">
            Nasze doświadczenie i fachowa wiedza pozwalają nam oferować wsparcie
            na każdym etapie postępowania prawnego, zapewniając profesjonalne
            doradztwo i reprezentację w sądzie. Dzięki naszej pomocy, odzyskasz
            nie tylko prawo jazdy, ale także zyskasz pewność, że Twoje sprawy
            pracownicze i inne spory prawne będą traktowane z najwyższą
            starannością. Z nami możesz liczyć na indywidualne podejście i
            strategie dostosowane do Twoich potrzeb, co zwiększa szanse na
            pomyślne rozwiązanie nawet najbardziej skomplikowanych problemów
            prawnych.
          </p>
        </div>

        <div className="absolute bottom-0 -right-2 rotate-90">
          <Frame />
        </div>
        <div className="absolute bottom-0 -left-2 rotate-180 lg:hidden">
          <Frame />
        </div>
        <div className="absolute top-0 -right-2 hidden lg:block">
          <Frame />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-6xl mt-20 lg:mt-40 relative">
        <div className="py-8 px-4 flex flex-col justify-center lg:pr-12">
          <p className="text-3xl font-bold mb-8">Pomoc urzędowa</p>
          <p className="text-justify">
            Naszym celem jest odciążenie Cię od zawiłości biurokratycznych,
            dzięki czemu możesz skupić się na swoich priorytetach. Nasz zespół
            ekspertów dokładnie zna procedury i wymogi instytucji takich jak
            UWV, Belastingdienst czy CBR, co pozwala nam efektywnie nawigować
            przez procesy urzędowe. Zapewniamy kompleksową pomoc w
            przygotowywaniu niezbędnych dokumentów, składaniu wniosków oraz
            odpowiadaniu na zapytania tych organów. Dzięki naszej interwencji,
            skomplikowane sprawy urzędowe staną się znacznie prostsze i szybciej
            znajdą swoje rozwiązanie, oszczędzając Twój cenny czas i nerwy.
          </p>
        </div>
        <div className="absolute bottom-0 hidden lg:block -left-2 -rotate-180">
          <Frame />
        </div>
        <div className="absolute top-0 -left-2 -rotate-90 lg:hidden">
          <Frame />
        </div>
        <div className="absolute top-0 -right-2  lg:hidden">
          <Frame />
        </div>
        <div className="absolute top-0 -left-2 hidden -rotate-90 lg:block">
          <Frame />
        </div>
        <Image
          alt="pomoc urzedowa zdjecie"
          src={officeImg}
          className="lg:w-1/2 opacity-0 transition-opacity duration-300"
          ref={imgRefTwo}
          onLoad={() => imgRefTwo?.current?.classList.remove("opacity-0")}
        />
      </div>
      <div className="flex flex-col lg:flex-row max-w-6xl mt-20 lg:mt-40 relative">
        <Image
          alt="usluga tlumaczenia zdjecie"
          src={translateImg}
          className="lg:w-1/2 opacity-0 transition-opacity duration-300"
          ref={imgRefThree}
          onLoad={() => imgRefThree?.current?.classList.remove("opacity-0")}
        />
        <div className="px-4 py-8 flex flex-col justify-center lg:pl-12">
          <p className="text-3xl font-bold mb-8">Tłumaczenia</p>
          <p className="text-justify">
            Nasza oferta tłumaczeń jest kompleksowa i dostosowana do
            indywidualnych potrzeb naszych klientów. Oferujemy wsparcie
            tłumaczeniowe zarówno w kontekście spotkań bezpośrednich, jak i tych
            realizowanych w formie online, zapewniając płynną komunikację
            międzykulturową. Specjalizujemy się również w tłumaczeniu dokumentów
            różnego rodzaju, od oficjalnych pism po specjalistyczne teksty
            branżowe. Dzięki naszym usługom, bariera językowa nie będzie
            stanowiła przeszkody w załatwianiu spraw osobistych, biznesowych czy
            urzędowych. Nasz zespół doświadczonych tłumaczy gwarantuje najwyższą
            jakość i precyzję tłumaczeń, co pozwoli Ci swobodnie poruszać się w
            międzynarodowym środowisku.
          </p>
        </div>
        <div className="absolute bottom-0 -right-2 rotate-90">
          <Frame />
        </div>
        <div className="absolute bottom-0 -left-2 rotate-180 lg:hidden">
          <Frame />
        </div>
        <div className="absolute top-0 -right-2 hidden lg:block">
          <Frame />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
