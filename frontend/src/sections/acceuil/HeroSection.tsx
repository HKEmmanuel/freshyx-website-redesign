import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="py-8 md:py-0 bg-background">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-4 items-center">
        <div className="space-y-6 justify-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-title mb-4">
            Allions la technologie et l'environnement
          </h1>
          <p className="text-lg text-foreground/90">
            Que ce soit dans votre ville, en ligne ou à l’international, lancez
            votre aventure de leadership écoresponsable dès maintenant.
          </p>
          <div className="space-x-4 pt-4">
            <Link
              to="/adhesion"
              className="font-semibold transition-colors duration-200 focus:outline-none bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-primary/90 shadow-md px-6 py-3 rounded-full"
            >
              Rejoignez-nous
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end h-[400px] lg:h-[550px]">
          <img
            src="/public/allions-technologie-p1p1.png"
            alt="FRESHYX Leadership et Activités"
            className="w-full h-full object-contain absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
