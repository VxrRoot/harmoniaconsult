"use client";
import React from "react";

const CtaButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={scrollToContact}
      aria-label="Napisz do nas"
      className="bg-gradient-to-r from-yellow-900 to-yellow-600 text-white font-semibold py-3 px-6 rounded-md mt-8 shadow-md max-w-40"
    >
      Napisz do nas
    </button>
  );
};

export default CtaButton;
