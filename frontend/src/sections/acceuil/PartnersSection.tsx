export default function PartnersSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--title))] text-center mb-12">
          Ils nous font confiance
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-10">
          <img
            src="public\pisha-plus-logo.png"
            alt="Logo Pisha Plus"
            className="h-10 md:h-12 lg:h-14 w-auto object-contain flex-shrink-0"
          />

          <img
            src="public\pisha-plus-logo.png"
            alt="Logo FAWE - Forum for African Women Educationalists"
            className="h-10 md:h-12 lg:h-16 w-auto object-contain flex-shrink-0"
          />
          <img
            src="public\pisha-plus-logo.png"
            alt="Logo TCHOM !"
            className="h-10 md:h-12 lg:h-16 w-auto object-contain flex-shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
