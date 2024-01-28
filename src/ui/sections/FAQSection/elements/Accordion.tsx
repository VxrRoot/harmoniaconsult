"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems: { question: string; answear: string }[] = [
  {
    question: "Jak mogę rozpocząć współpracę z Harmonia Consult?",
    answear:
      "Zacznij od bezpłatnej konsultacji. Wypełnij formularz, aby omówić Twoje potrzeby i dowiedz się, jak możemy Ci pomóc",
  },
  {
    question: "Czy dostanę pomoc dostosowaną do mojej sytuacji?",
    answear:
      "Tak, każdy klient jest dla nas wyjątkowy, a każdą sytuację traktujemy indywidualnie. Skontaktuj się, aby uzyskać spersonalizowane porady dopasowane do Twoich unikalnych okoliczności.",
  },
  {
    question:
      "Jakie kroki należy podjąć, aby rozwiązać mój problem prawny/urzędowy?",
    answear:
      "Najpierw przeanalizujemy Twój przypadek podczas osobistej konsultacji. Wypełnij formularz kontaktowy, a my przedstawimy Ci plan działania.",
  },
  {
    question: "Jakie są koszty wykonywanych usług?",
    answear:
      "Koszty usług uzależnione są od indywidualnej sprawy i zostają omówione podczas pierwszej darmowej konsultacji. Proste porady w większości przypadków są darmowe. ",
  },
  {
    question: "Jak szybko otrzymam odpowiedź po wypełnieniu formularza?",
    answear:
      "Kontakt z klientem podejmujemy w ciągu 24 godzin. Bardzo ważne jest, aby w formularzu zawrzeć jak najwiecej informacji, aby konsultacja przebiegła jak najsprawniej. ",
  },
  {
    question: "Czy mogę umówić się na spotkanie lub konsultację osobistą?",
    answear:
      "Dążymy do jak najszybszego rozwiązywania spraw, dlatego konsultacje zazwyczaj odbywają się telefonicznie lub przez wideokonferencje, istnieje jednak również możliwość umówienia się na konsultacje osobista. W tym celu prosimy o kontakt mailowy, abyśmy mogli zaplanować spotkanie. ",
  },
];

const AccordionFAQ = () => {
  return (
    <Accordion type="single" collapsible>
      {faqItems.map((item) => (
        <AccordionItem value={item.question}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answear}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionFAQ;
