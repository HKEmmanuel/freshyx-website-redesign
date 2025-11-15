import React from "react";

const PartnerLogo = ({ src, alt }) => (
  <div className="flex justify-center items-center p-4 sm:p-6 lg:p-8">
    <img
      src={src}
      alt={alt}
      className="max-h-16 sm:max-h-20 lg:max-h-24 w-auto object-contain transition-opacity duration-300 hover:opacity-60 hover:grayscale"
    />
  </div>
);

export default function TrustedPartnersSection() {
  const partners = [
    { src: "public/pisha-plus-logo.png", alt: "Logo PISHA Plus" },
    { src: "public/FAWE.png", alt: "Logo FAWE" },
    { src: "public/TCHOM.png", alt: "Logo TCHOM" },
    { src: "public/pisha-plus-logo.png", alt: "" },
    { src: "public/FAWE.png", alt: "" },
    { src: "public/TCHOM.png", alt: "" },
    { src: "public/pisha-plus-logo.png", alt: "" },
    { src: "public/FAWE.png", alt: "" },
    { src: "public/TCHOM.png", alt: "" },
  ];

  return (
    <section className="w-full bg-[hsl(var(--background))] py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-[hsl(var(--title))] mb-16">
          Ils nous font confiance
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 items-center justify-items-center">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} src={partner.src} alt={partner.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
