export default function MissionSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-[hsl(var(--title))] mb-8">
            La voie FRESHYX
          </h2>

          <div className="space-y-6 text-lg text-[hsl(var(--foreground))] max-w-3xl">
            <p>
              Freshyx est une plateforme éco-tech qui donne aux jeunes les
              moyens de créer un impact environnemental et social grâce à
              l'innovation, aux outils numériques et aux opportunités de
              leadership.
            </p>
            <p>
              Fondée en 2023, Freshyx est une organisation à but non lucratif
              dirigée par des jeunes, qui connecte, forme et inspire la
              prochaine génération de changemakers engagés dans la construction
              d'un avenir durable.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center gap-x-10 md:gap-x-16 mb-12">
            <img
              src="public\solidarite-p6p1.png"
              alt="Valeur 1"
              className="h-20 md:h-24 w-auto"
            />
            <img
              src="public\integrite-p7p1.png"
              alt="Valeur 2"
              className="h-20 md:h-24 w-auto"
            />
            <img
              src="public\excellence-p8p1.png"
              alt="Valeur 3"
              className="h-20 md:h-24 w-auto"
            />
          </div>

          <h3 className="text-2xl font-semi text-[hsl(var(--title))] mb-4 max-w-lg mx-auto">
            Nous formons des éco-leaders animés par le sens et l'action.
          </h3>

          <p className="text-lg text-[hsl(var(--foreground))] mb-6 max-w-2xl mx-auto">
            Freshyx donne aux jeunes les moyens d'incarner les valeurs
            d'innovation, de durabilité et d'impact collectif qui définissent
            les leaders de demain. En
          </p>

          <a
            href="#"
            className="text-lg font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
          >
            savoir plus →
          </a>
        </div>
      </div>
    </section>
  );
}
