const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--title))] mb-6">
          Témoignages & histoires
        </h2>
        <p className="text-lg text-[hsl(var(--foreground))]">
          Grâce à notre soutien, de nombreux jeunes et acteurs du numérique ont
          pu franchir des étapes décisives et réaliser leurs ambitions.
        </p>
      </div>

      <div className="relative pl-4 sm:pl-6 lg:pl-12">
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="hidden lg:block flex-shrink-0 w-14 h-56 bg-[hsl(var(--secondary))] rounded-md"></div>

          <div className="flex-shrink-0 w-[90vw] md:w-[70vw] lg:w-[50rem] flex shadow-lg rounded-lg overflow-hidden">
            <img
              src="public\temoignage1-p11p1.png"
              alt="Femme recyclant des déchets"
              className="w-1/2 object-cover"
            />

            <div className="w-1/2 bg-[hsl(170,100%,13%)] text-[hsl(var(--primary-foreground))] p-8 lg:p-12 flex flex-col justify-center">
              <blockquote className="text-xl lg:text-2xl italic font-medium mb-6">
                “ Grâce à FRESHYX, j’ai pu lancer ma première initiative de
                recyclage dans mon quartier ”.
              </blockquote>
              <p className="text-base lg:text-lg font-semibold">Afi, Lomé</p>
            </div>
          </div>

          <div className="flex-shrink-0 w-[60vw] md:w-[40vw] lg:w-[25rem] shadow-lg rounded-lg overflow-hidden">
            <img
              src="public\temoignage2-p12p1.png"
              alt="Homme au bureau"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center mt-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            aria-label="Témoignage précédent"
            className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] w-10 h-10 rounded-full flex items-center justify-center
                       transition-transform duration-200 hover:scale-105"
          >
            <ArrowLeftIcon />
          </button>

          <button
            aria-label="Témoignage suivant"
            className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] w-10 h-10 rounded-full flex items-center justify-center
                       transition-transform duration-200 hover:scale-105"
          >
            <ArrowRightIcon />
          </button>

          <div className="hidden sm:flex items-center gap-2 ml-4">
            <div className="w-3 h-3 bg-[hsl(var(--border))] rounded-full"></div>
            <div className="w-3 h-3 bg-[hsl(var(--border))] rounded-full"></div>
            <div className="w-3 h-3 bg-[hsl(var(--border))] rounded-full"></div>
          </div>
        </div>

        <a
          href="#"
          className="inline-block bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold py-3 px-6 rounded-lg text-base
                     transition-transform duration-200 ease-in-out hover:scale-105"
        >
          Devenez stagiaire
        </a>
      </div>
    </section>
  );
}
