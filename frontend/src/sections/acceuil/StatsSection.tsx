export default function ImpactSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-[hsl(var(--title))] mb-16">
          Notre impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="flex flex-col">
            <img
              src="public\septpays-p9p1.png"
              alt="Icône Pays"
              className="h-30 w-30 mb-6"
            />
            <p className="text-4xl font-extra text-[hsl(var(--title))] mb-2">
              7 Pays
            </p>
            <p className="text-lg text-[hsl(var(--foreground))]">
              d'intervention
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="public\iconeprojets-p10p1.png"
              alt="Icône Projets"
              className="h-30 w-30 mb-6"
            />
            <p className="text-4xl font-extra text-[hsl(var(--title))] mb-2">
              5 Projets en cours
            </p>
            <p className="text-lg text-[hsl(var(--foreground))]">
              Initiatives environnementales en activité.
            </p>
          </div>

          <div className="flex flex-col mt-2 md:mt-0">
            <p className="text-7xl lg:text-8xl font-extra text-[hsl(var(--title))] leading-none mb-4">
              90+
            </p>
            <br />
            <h3 className="text-5xl font-extra text-[hsl(var(--title))] mb-2">
              Membres
            </h3>
            <p className="text-xl font-extra text-[hsl(var(--title))]">
              Engagés dans notre mission durable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
