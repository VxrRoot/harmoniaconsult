import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import OpinionSlider from "./elements/OpinionSlider";

const OpinionSection = () => {
  return (
    <section className="flex flex-col lg:flex-row max-w-7xl mx-auto my-20 px-2 gap-4">
      <div className="basis-1/2 p-4 flex flex-col justify-center">
        <header className="mb-8">
          <h2 className="font-bold text-4xl ">Co mówią inni?</h2>
        </header>
        <div>
          <p>
            Nasze wieloletnie doświadczenie pomogło już wielu klientom, takim
            jak Ty. Jednak nie musisz przyjmować naszych słów za pewnik -
            zapraszamy do zapoznania się z opiniami naszych zadowolonych
            klientów!
          </p>
        </div>
        <footer className="flex items-center font-semibold mt-8">
          <span className="mr-2">+20 opinii</span>
          <div>
            <StarIcon className="fill-yellow-600 h-8 w-8 stroke-yellow-600" />
          </div>
          <span className="ml-2">śr. ocena 4.9</span>
        </footer>
      </div>
      <div className=" basis-1/2">
        <OpinionSlider />
      </div>
    </section>
  );
};

export default OpinionSection;
