import React from "react";
import SectionImg from "./elements/SectionImg";
import styles from "../../atoms/frame.module.css";

const AboutUsSection = () => {
  return (
    <section className="max-w-7xl mx-auto h-fit py-20">
      <h2 className="font-bold text-3xl text-center lg:text-4xl">O nas</h2>
      <div className={`${styles.gradient_bg} h-2 w-40 my-6`} />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex justify-center items-center flex-col gap-12 px-4 lg:px-10 lg:pl-0  text-md lg:text-xl ">
          <p>
            Naszym celem jest umożliwienie naszym klientom skutecznego i
            bezproblemowego załatwiania formalności. Gwarantujemy szybkie i
            efektywne rozwiązywanie spraw. Dzięki naszemu doświadczeniu i
            profesjonalizmowi jesteśmy w stanie podejmować konkretne kroki,
            które przyspieszą procesy i zapewnią pozytywne rezultaty. Twój czas
            i spokój są dla nas ważne, dlatego też podejmujemy się działań,
            które przynoszą efektywny i satysfakcjonujący wynik.
          </p>
        </div>
        <div className="lg:grow lg:w-1/2">
          <SectionImg />
          <div className={`${styles.gradient_bg} h-2 w-40 my-6 ml-auto`} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
