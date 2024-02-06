import HeroImg from "./elements/HeroImg";
import styles from "../../atoms/frame.module.css";
import CtaButton from "./elements/CtaButton";
import HeroSectionHeading from "./elements/HeroSectionHeading";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:h-[800px] justify-between lg:flex-row">
      <section className="bg-black w-full h-[400px] lg:h-full flex-grow relative">
        <HeroImg />
      </section>
      <section className="bg-black w-full text-white flex-grow pt-10 px-4 pb-10 lg:flex lg:flex-col lg:justify-center lg:h-[800px] lg:px-10">
        <div
          className={`${styles.gradient_bg} bg-gradient-to-r to-yellow-600 from-yellow-900 h-2 w-40 mb-6`}
        />
        <HeroSectionHeading />
        <h2 className="text-gray-400 mt-4 pr-5 max-w-xl lg:text-lg">
          Oferujemy szybką i skuteczną pomoc w rozwiązywaniu Twoich spraw
          urzędowych i prawnych. Dzięki naszej wiedzy i doświadczeniu, możesz
          pokonać biurokrację bez stresu.
        </h2>
        <CtaButton />
      </section>
    </section>
  );
};

export default HeroSection;
