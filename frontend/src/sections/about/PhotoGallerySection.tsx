import React from "react";

const GalleryImage = ({ src, alt }) => (
  <div
    className="relative group overflow-hidden rounded-lg shadow-md
               cursor-pointer transform transition-all duration-300 ease-in-out
               hover:scale-105"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover 
                 transition-all duration-300 ease-in-out
                 group-hover:brightness-75"
    />
  </div>
);

export default function PhotoGallerySection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/*<h2 className="text-3xl md:text-4xl font-extra text-[hsl(var(--title))] text-center mb-16">
          Nos moments en images
        </h2>*/}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          <GalleryImage
            src="public/plavalaguna.jpg"
            alt=""
            className="col-span-1"
          />

          <GalleryImage
            src="public/pexels-rdne.jpg"
            alt=""
            className="col-span-2"
          />

          <GalleryImage
            src="public/katerina.jpg"
            alt=""
            className="col-span-1"
          />

          <GalleryImage src="public/pexel6.jpg" alt="" className="col-span-1" />

          <GalleryImage src="public/keira.jpg" alt="" className="col-span-2" />

          <GalleryImage
            src="public/yanku.jpg"
            alt=""
            className="col-span-2 row-span-2"
          />

          <GalleryImage
            src="public\stephen.jpg"
            alt=""
            className="col-span-1"
          />

          <GalleryImage
            src="public/pexels-wundef-3607333.jpg"
            alt=""
            className="col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
