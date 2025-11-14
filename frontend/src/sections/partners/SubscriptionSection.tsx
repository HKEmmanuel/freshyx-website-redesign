import React from "react";

const AdvantageCard = ({ headline, description }) => (
  <div className="text-left space-y-3">
    <h3 className="text-lg font-bold text-[hsl(var(--title))] mb-2">
      {headline}
    </h3>

    <p className="text-xl font-medium text-[hsl(var(--primary))] leading-relaxed">
      {description}
    </p>
  </div>
);

export default function SubscriptionAdvantages() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--title))] mb-16 text-left">
          Avantages de l'abonnement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          <AdvantageCard
            headline="Les opportunités sont mises en avant"
            description="Attirez les meilleurs candidats du monde entier en mettant en valeur vos opportunités dans notre outil de recherche et en augmentant le nombre de vos candidats"
          />

          <AdvantageCard
            headline="Marque unique sur FRESHYX"
            description="Développez une marque employeur forte sur notre plateforme grâce aux options de personnalisation réservées à nos partenaires internationaux."
          />

          <AdvantageCard
            headline="Présenté dans les médias de FRESHYX"
            description="Obtenez une reconnaissance et une affiliation avec notre groupe de partenaires sur notre site web, dans notre rapport annuel et sur nos canaux médiatiques."
          />
        </div>
      </div>
    </section>
  );
}
