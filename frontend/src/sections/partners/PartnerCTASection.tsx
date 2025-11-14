import React from "react";

export default function PartnerCTASection() {
  return (
    <section
      className="w-full py-32 md:py-48 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
      style={{ backgroundImage: "url('public/pretadevenirpartenaire.jpg')" }}
    >
      <div className="absolute inset-0 bg-green-900 opacity-70"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8">
          Prêt à devenir partenaire
        </h2>

        <p className="text-xl md:text-2xl mb-12">
          Il vous faudra au moins **10 opportunités** comme point de départ pour
          devenir Partenaire
        </p>

        <a
          href="#"
          className="inline-block 
                     bg-white text-[hsl(var(--primary))] 
                     text-lg font-bold px-10 py-4 rounded-lg 
                     shadow-lg transition-transform duration-300 
                     hover:scale-105 hover:bg-gray-100"
        >
          Allons y
        </a>
      </div>
    </section>
  );
}
