import React, { useState, useEffect } from "react";

const TARGET_COUNTS = {
  pays: 7,
  partenaires: 10,
  experiences: 50,
};

const ANIMATION_DURATION = 2000;

export default function ImpactMapSection() {
  const [counts, setCounts] = useState({
    pays: 0,
    partenaires: 0,
    experiences: 0,
  });

  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        1,
        (timestamp - startTime) / ANIMATION_DURATION
      );

      const newCounts = {
        pays: Math.floor(progress * TARGET_COUNTS.pays),
        partenaires: Math.floor(progress * TARGET_COUNTS.partenaires),
        experiences: Math.floor(progress * TARGET_COUNTS.experiences),
      };

      setCounts(newCounts);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCounts(TARGET_COUNTS);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="w-full bg-[hsl(var(--background))] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--title))] mb-12">
          Depuis 2023, FRESHYX a semé plus que des graines
        </h2>

        <div className="relative">
          <img
            src="public/Worldmapgreen png.png"
            alt="Carte du monde"
            className="w-full h-auto object-contain max-w-4xl mx-auto opacity-50"
          />

          <div className="absolute top-[20%] left-[15%] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--title))] mb-1">
                {counts.pays}+
              </p>
              <p className="text-sm md:text-lg font-medium text-[hsl(var(--title))]">
                Pays d'action
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--title))] mb-1">
                {counts.partenaires}+
              </p>
              <p className="text-sm md:text-lg font-medium text-[hsl(var(--title))]">
                Partenaires institutionnels
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--title))] mb-1">
                {counts.experiences}+
              </p>
              <p className="text-sm md:text-lg font-medium text-[hsl(var(--title))]">
                Expériences chaque année
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
