import Frame from "@/ui/atoms/frame";
import ContactForm from "@/ui/molecules/ContactForm";
import React from "react";
import SectionImg from "./elements/SectionImg";

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4" id="contact">
      <h2 className="font-bold text-3xl text-center lg:text-4xl mb-20">
        Czekamy na Twoją wiadomość
      </h2>
      <div className="flex flex-col lg:flex-row ">
        <div className="basis-3/5 flex justify-center relative px-4 ">
          <div className="absolute -left-2 -rotate-90">
            <Frame />
          </div>
          <div className="max-w-lg w-full py-8">
            <ContactForm />
          </div>
          <div className="absolute bottom-0 -right-2 rotate-90">
            <Frame />
          </div>
        </div>
        <div className="mt-20 lg:mt-0 flex items-center basis-2/5">
          <SectionImg />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
