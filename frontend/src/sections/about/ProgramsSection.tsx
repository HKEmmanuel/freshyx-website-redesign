import React from "react";

const ProgramButton = ({ label, colorClass, link = "#" }) => (
  <a
    href={link}
    className={`
      ${colorClass} 
      text-center text-lg font-bold px-8 py-4 rounded-lg 
      shadow-md transition-transform duration-200 
      hover:-translate-y-0.5
    `}
  >
    {label}
  </a>
);

export default function ProgramsSection() {
  const colorClasses = {
    primary:
      "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(156 100% 30%)]",
    secondary:
      "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(44 96% 40%)]",
    muted: "bg-gray-400 text-gray-800 hover:bg-gray-500",
  };

  return (
    <section className="w-full bg-[hsl(var(--background))] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--title))] mb-4">
            Explorez nos programmes
          </h2>
          <p className="text-lg text-[hsl(var(--foreground))]">
            Nos programmes aident les jeunes à développer leurs talents et à
            cultiver leurs compétences de leadership.
          </p>
        </div>

        <div className="space-y-16">
          <div className="relative">
            <div className="flex items-center absolute top-0 w-full">
              <div className="h-0.5 bg-[hsl(var(--border))] w-1/4 transform translate-y-1/2"></div>
              <span className="text-lg font-bold text-[hsl(var(--foreground))] px-4 whitespace-nowrap">
                pour les jeunes
              </span>
              <div className="h-0.5 bg-[hsl(var(--border))] w-full transform translate-y-1/2"></div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-12 md:pt-16">
              <div className="border-l-2 border-b-2 border-[hsl(var(--border))] h-8 w-8 absolute -left-4 top-10 hidden sm:block"></div>

              <ProgramButton
                label="Devenir membre"
                colorClass={colorClasses.primary}
              />
              <ProgramButton
                label="Devenir volontaire"
                colorClass={colorClasses.secondary}
              />
              <ProgramButton
                label="Programme Talent"
                colorClass={colorClasses.muted}
              />
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center absolute top-0 w-full">
              <div className="h-0.5 bg-[hsl(var(--border))] w-1/4 transform translate-y-1/2"></div>
              <span className="text-lg font-bold text-[hsl(var(--foreground))] px-4 whitespace-nowrap">
                Pour les organisations
              </span>
              <div className="h-0.5 bg-[hsl(var(--border))] w-full transform translate-y-1/2"></div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-12 md:pt-16">
              <div className="border-l-2 border-b-2 border-[hsl(var(--border))] h-8 w-8 absolute -left-4 top-10 hidden sm:block"></div>

              <ProgramButton
                label="Devenir partenaire"
                colorClass={colorClasses.primary}
              />
              <ProgramButton
                label="Besoin d'un volontaire"
                colorClass={colorClasses.secondary}
              />
              <ProgramButton
                label="Rejoindre un programme"
                colorClass={colorClasses.muted}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
