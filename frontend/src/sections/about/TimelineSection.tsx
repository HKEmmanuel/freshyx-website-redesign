import React from "react";

const TimelineItem = ({ year, title, text, imageUrl, isLast = false }) => (
  <div
    className={`relative ${!isLast ? "pb-16 lg:pb-24" : "pb-0"} pl-8 lg:pl-10`}
  >
    <div className="absolute top-0 -left-1.5 lg:-left-2 w-3 h-3 rounded-full bg-[hsl(var(--primary))] border-2 border-[hsl(var(--background))] shadow-md"></div>

    <p className="text-xl font-bold text-[hsl(var(--title))] mb-2">{year}</p>
    <h3 className="text-2xl font-bold text-[hsl(var(--title))] mb-4">
      {title}
    </h3>
    <p className="text-base text-[hsl(var(--foreground))] mb-4">{text}</p>

    {imageUrl && (
      <img
        src={imageUrl}
        alt={`Illustration de l'étape ${year}`}
        className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md mt-4"
      />
    )}
  </div>
);

export default function TimelineSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="w-full sticky top-24 lg:pt-0">
          <img
            src="public/Group 633090.png"
            alt="Graphique S-shape FRESHYX"
            className="w-full h-auto object-contain max-w-md lg:max-w-full mx-auto lg:mx-0"
          />
        </div>

        <div className="w-full border-l border-[hsl(var(--primary))] pl-4 lg:pl-8">
          <TimelineItem
            year="2023"
            title="FRESHYX a été créée"
            text="Tout a commencé en 2023. Quelques jeunes, un rêve commun : prouver que l'Afrique peut mener la transition écologique, grâce à sa créativité et à son génie."
            imageUrl="public/creation.png"
          />

          <TimelineItem
            year="2024"
            title="Répartis dans 7 pays"
            text="Aujourd'hui, Freshyx c'est un réseau qui s'étend à travers 7 pays africains, plus de 10 partenaires institutionnels, et une énergie contagieuse : celle d'une jeunesse qui apprend, agit et inspire."
            imageUrl="public/ag2024.png"
          />

          <TimelineItem
            year="2025"
            title="Mouvement de leadership des jeunes"
            text="Chaque projet, chaque campagne, chaque formation est une expérience de leadership. Parce qu'on ne change pas le monde derrière un écran, mais les mains dans la terre et les yeux tournés vers l'avenir."
            imageUrl="public/7pays.png"
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
}
