

const ArrowRightGreenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
);

export default function AboutHero() {
  return (

    <section className="w-full bg-[hsl(var(--background))] px-4 sm:px-6 lg:px-8"> 
      
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
   
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[hsl(var(--primary))] leading-tight mb-8">
            Par les jeunes, <br /> pour les jeunes
          </h1>
          <p className="text-lg text-[hsl(var(--foreground))] mb-10 max-w-lg">
            Freshyx est une communauté de jeunes, passionnément animés par une
            seule cause: l'innovation responsable et l'épanouissement du
            potentiel collectif pour un avenir durable.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-lg font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] 
                       transition-colors duration-200 group"
          >
            <ArrowRightGreenIcon />
            <span className="ml-2">Regardez cette video</span>
          </a>
        </div>
        
        
        <div className="w-full h-auto flex justify-center lg:justify-end"> 
          <img
            src="public/photobulles.png" 
            alt="Groupe de personnes en bulles décoratives"
            className="w-100 h-auto object-contain max-w-sm lg:max-w-xl rounded-xl" 
          />
        </div>
      </div>
    </section>
  );
}