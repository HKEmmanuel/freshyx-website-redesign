import React from "react";

const ValueCard = ({ title, content }) => (
  <div className="text-left">
    <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--title))] mb-4">
      {title}
    </h3>
    <p className="text-base text-[hsl(var(--foreground))]">{content}</p>
  </div>
);

export default function ValuesSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-24 px-4 sm:px-6 lg:px-8">
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
