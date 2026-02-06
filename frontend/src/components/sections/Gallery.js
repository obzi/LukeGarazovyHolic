const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?w=600&q=80",
    alt: "Barber střih",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1654097800369-abc063d657c4?w=600&q=80",
    alt: "Úprava vousů",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1592845815495-377762cb930c?w=600&q=80",
    alt: "Garážový detail",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1754327524477-057aa059c1f8?w=600&q=80",
    alt: "Neonový nápis",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1727519366940-fd9b926e362e?w=600&q=80",
    alt: "Vintage rock styl",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=600&q=80",
    alt: "Interiér garáže",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" data-testid="gallery-section" className="py-24 sm:py-32 bg-garage-zinc">
      <div className="section-container">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="amber-line" />
            <span className="font-heading text-garage-amber uppercase tracking-[0.3em] text-sm">
              Atmosféra
            </span>
            <div className="amber-line" />
          </div>
          <h2 data-testid="gallery-title" className="section-title text-white">
            Z <span className="text-garage-amber">garáže</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              data-testid={`gallery-item-${i}`}
              className={`gallery-item ${item.span} rounded-sm overflow-hidden relative group cursor-pointer`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-4 left-4 font-heading text-sm uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                {item.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
