import React from "react";

const programs = [
  {
    title: "Empreinte carbone",
    imageUrl: "/public/empreintecarbone-p2p1.png",
    accentColor: "primary",
    buttonText: "Empreinte carbone",
    isButton: true,
  },
  {
    title: "Volontaire",
    imageUrl: "/public/volontaire-p3p1.png",
    accentColor: "secondary",
    buttonText: "Volontaire",
    isButton: false,
  },
  {
    title: "Developpez vos Talents",
    imageUrl: "/public/talent-p4p1.png",
    accentColor: "muted",
    buttonText: "Talent",
    isButton: true,
  },
];

interface ProgramCardProps {
  program: (typeof programs)[0];
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const accentClass = `bg-${program.accentColor}`;
  const buttonClass = program.isButton
    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
    : `text-title/90 ${accentClass}`;

  return (
    <div className="group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-background border border-border/50">
      <div className="relative h-64 w-full">
        <img
          src={program.imageUrl}
          alt={`Programme ${program.title}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div
        className={`w-full py-4 text-center font-bold text-lg cursor-pointer transition-colors duration-300 
                            ${buttonClass} ${
          program.isButton
            ? " bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
            : "text-title"
        }`}
      >
        {program.buttonText}
      </div>
    </div>
  );
};

const ProgramsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container m-auto mx-12 px-4">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-title mb-4">
            Nos programmes
          </h2>
          <p className="text-lg text-foreground/90">
            Nous faisons de vos expériences une opportunité d'agir pour
            l'environnement et de créer des solutions durables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
