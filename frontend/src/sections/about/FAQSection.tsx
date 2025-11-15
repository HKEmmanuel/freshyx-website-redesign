import React, { useState } from "react";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  </svg>
);

const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => {
  return (
    <div className="border-b border-[hsl(var(--border))]">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={toggleFAQ}
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
          {question}
        </span>

        <span
          className={`text-[hsl(var(--primary))] transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-90"
          }`}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base text-[hsl(var(--muted-foreground))] pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: "Qu'est-ce que FRESHYX ?",
      answer:
        "FRESHYX est une plateforme éco-tech à but non lucratif, dirigée par des jeunes. Notre mission est de donner aux jeunes les moyens de créer un impact environnemental et social grâce à l'innovation, aux outils numériques et à des opportunités de leadership concrètes.",
    },
    {
      question: "Que signifie FRESHYX ?",
      answer:
        "Le nom FRESHYX est une contraction de 'FRESH' (frais, nouveau) symbolisant l'énergie et les idées de la jeunesse, et 'X', représentant l'inconnu, le potentiel, et le croisement des chemins (la collaboration). Ensemble, cela incarne notre engagement pour un avenir durable et innovant.",
    },
    {
      question: "Qui peut devenir membre FRESHYX ?",
      answer:
        "Toute personne, principalement des jeunes, passionnée par la transition écologique, l'innovation responsable et souhaitant passer à l'action. Nos membres sont des étudiants, des entrepreneurs ou des volontaires qui veulent développer leurs compétences de leadership et contribuer à un monde meilleur.",
    },
    {
      question: "Dans quels pays FRESHYX est-il actif ?",
      answer:
        "Depuis sa création en 2023, FRESHYX a développé un réseau et opère dans plus de 7 pays africains, avec un objectif d'expansion continue pour maximiser notre impact continental.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[hsl(var(--fronted))] py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mx-auto items-start ">
        <div className="w-full sticky top-24 lg:pt-0  ">
          <h2 className="text-4xl md:text-6xl font-medium text-[hsl(var(--title))] mb-4 ">
            FAQs
          </h2>
          <p className="text-lg font-medium text-[hsl(var(--primary))] mb-16">
            Besoin de précisions ? <br />
            Notre foire aux questions pourrait vous être utile.
          </p>
        </div>

        <div className="w-full text-left">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleFAQ={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
