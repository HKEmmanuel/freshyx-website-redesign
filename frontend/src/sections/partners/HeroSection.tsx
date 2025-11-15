export default function PartnerHeroSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[hsl(var(--title))] mb-8">
          Nos partenaires
        </h1>

        <p className="text-xl md:text-2xl text-[hsl(var(--foreground))] mb-12 max-w-2xl">
          Associez-vous à Freshyx et accédez à un réseau international de jeunes
          innovateurs engagés pour l'environnement et le numérique responsable.
        </p>

        <a
          href="#"
          className="inline-block 
                     bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] 
                     text-lg font-bold px-10 py-4 rounded-lg 
                     shadow-lg transition-colors duration-300 
                     hover:bg-[hsl(156 100% 30%)]"
        >
          Allons y
        </a>
      </div>
    </section>
  );
}
