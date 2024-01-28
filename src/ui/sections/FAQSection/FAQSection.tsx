import React from "react";
import AccordionFAQ from "./elements/Accordion";

const FAQSection = () => {
  return (
    <section className="bg-black mt-20">
      <div className="max-w-7xl mx-auto h-fit relative py-20 px-4">
        <h2 className="text-white py-6 font-bold text-3xl text-center lg:text-4xl mb-4">
          Wszystko, co Powinieneś Wiedzieć
        </h2>
        <div className=" max-w-lg mx-auto text-white">
          <AccordionFAQ />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
