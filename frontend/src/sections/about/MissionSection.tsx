import React from "react";

const ValueIcon = ({ src, alt }) => (
  <div className="w-100 h-100 ">
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  </div>
);

export default function MissionSection() {
  return (
    <section className="w-full bg-[hsl(var(--card))] py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mx-auto items-center justify-center">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--title))] mb-8">
            Notre mission
          </h2>
          <p className="text-lg text-[hsl(var(--foreground))] mb-6">
            Former une génération de jeunes capables de penser durable,
            d'innover avec conscience et d'agir avec impact.
          </p>
          <p className="text-lg text-[hsl(var(--foreground))]">
            Nous croyons en une éducation par l'expérience. C'est sur le
            terrain, au contact des communautés et des défis réels, que nos
            membres apprennent à devenir des leaders du changement.
          </p>
        </div>

        <div className="mb-8">
          <ValueIcon src="public/valeurs.png" alt="Valeur : Intégrité" />
        </div>
      </div>
    </section>
  );
}
