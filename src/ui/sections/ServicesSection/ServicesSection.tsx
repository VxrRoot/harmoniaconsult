import Frame from "@/ui/atoms/frame";
import React from "react";
import { ToolboxIcon, LangIcon, BuildingIcon } from "@/ui/icons/icons";
import styles from "./ServicesSection.module.css";

const services: { id: number; name: string; desc: string; icon: any }[] = [
  {
    id: 1,
    name: "POMOC PRAWNA",
    desc: "Pomozemy Ci odzyskać spokój i kontrolę w sprawach prawnych. Skutecznie odzyskaj prawo jazdy i rozstrzygnij spory pracownicze oraz prawne.",
    icon: <ToolboxIcon />,
  },
  {
    id: 2,
    name: "POMOC URZĘDOWA",
    desc: "Zajmiemy się Twoimi formalnościami urzędowymi. Dzięki nam, sprawy z UWV, Belastingdienst czy CBR będą prostsze i mniej czasochłonne.",
    icon: <BuildingIcon />,
  },
  {
    id: 3,
    name: "TŁUMACZENIA",
    desc: "Świadczymy usługi w zakresie tłumaczeń, które obejmują pomoc przy spotkaniach fizycznych, online i tłumaczeniu dokumentów.",
    icon: <LangIcon />,
  },
];

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto h-fit relative px-4 lg:mt-10">
      <h2 className="font-bold text-3xl text-center lg:text-5xl mb-4">
        Nasze usługi
      </h2>
      <div className="absolute left-2 -rotate-90">
        <Frame />
      </div>
      <div className="flex flex-col lg:flex-row py-6 px-2">
        {services.map((service) => {
          return (
            <article
              className={`${styles.service_wrapper} cursor-pointer shadow-2xl my-4 py-8 px-4 hover:bg-yellow-600 transition-colors lg:mx-4 border-b-4 flex justify-center items-center flex-col border-yellow-600`}
            >
              <span className={styles.icon_wr}>{service.icon}</span>
              <header className="font-bold mt-6 text-2xl">
                {service.name}
              </header>
              <p className="text-center mt-6">{service.desc}</p>
            </article>
          );
        })}
      </div>
      <div className="absolute bottom-0 right-2 rotate-90">
        <Frame />
      </div>
    </section>
  );
};

export default ServicesSection;
