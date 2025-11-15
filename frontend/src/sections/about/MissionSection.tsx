import React from "react";
import ValuesSection from "./ValuesSection";

const ValueIcon = ({ src, alt }) => (
  <div className="w-100 h-100 ">
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  </div>
);
const ValueCard = ({ title, content }) => (
  <div className="text-left">
    <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--title))] mb-4">
      {title}
    </h3>
    <p className="text-base text-[hsl(var(--foreground))]">{content}</p>
  </div>
);

export default function MissionSection() {
  return (
    <section className="w-full bg-[hsl(var(--card))] py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mx-auto items-center justify-center">
        <div className="text-left sticky">
          <h2 className="text-3xl md:text-4xl font-medium text-[hsl(var(--title))] mb-8">
            Notre mission
          </h2>
          <p className="text-lg text-[hsl(var(--foreground))] mb-6">
            Former une génération de jeunes capables de penser durable,
            d'innover avec conscience et d'agir avec impact.
          </p>
          {/*<p className="text-lg text-[hsl(var(--foreground))]">
            Nous croyons en une éducation par l'expérience. C'est sur le
            terrain, au contact des communautés et des défis réels, que nos
            membres apprennent à devenir des leaders du changement.
          </p>*/}
        </div>

        <div className="mb-8">
          <ValueIcon src="public/valeurs.png" alt="Valeur : Intégrité" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/*<h2 className="text-3xl md:text-4xl font-extra text-[hsl(var(--title))] text-center mb-16">
          Nos valeurs
        </h2>*/}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <ValueCard
            title="L'excellence"
            content="Nous visons l'excellence et délivrons la plus haute qualité dans chacune des initiatives éco-digitales que nous réalisons. Être jeunes ne veut pas dire être débutants. Nous visons haut, parce que la planète le mérite."
          />

          <ValueCard
            title="L'intégrité"
            content="Chez FRESHYX, l'intégrité est au cœur de tout ce que nous faisons. C'est pourquoi nous agissons avec cohérence, transparence et responsabilité."
          />

          <ValueCard
            title="Solidarité"
            content="Chez FRESHYX, l'ouverture à la diversité est essentielle. Nous favorisons l'inclusion en respectant et en valorisant les contributions de chacun. Parce qu'ensemble, nous faisons bien plus que changer : nous construisons."
          />
        </div>
      </div>
    </section>
  );
}
