export default function ParticipationSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center space-x-4 m-auto mb-6 gap-6">
          <span className="block h-1 w-80 bg-[hsl(var(--muted-foreground))] mr-4"></span>
          <h3 className="text-sm font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide">
            À la recherche d'une autre manière d'agir ?
          </h3>
          <span className="block h-1 w-80 bg-[hsl(var(--muted-foreground))] ml-4"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center m-8">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--title))] mb-6 leading-tight">
              Participez aux activites de FRESHYX et vivez des experirnces
              concretes
            </h2>
            <p className="text-lg text-[hsl(var(--foreground))] mb-10">
              Rejoignez l'une de nos sections locales et développez vos
              competences.
            </p>
            <a
              href="#"
              className="inline-block bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold py-3 px-10 rounded-lg text-lg
                         transition-transform duration-200 ease-in-out hover:scale-105"
            >
              Devenir menbre
            </a>
          </div>

          <div>
            <img
              src="public/Participez -p5p1.png"
              alt="Bénévoles et membres de FRESHYX"
              className="w-full h-full object-cover 
                           rounded-tl-[50px] rounded-tr-[190px] rounded-bl-[140px] rounded-br-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
