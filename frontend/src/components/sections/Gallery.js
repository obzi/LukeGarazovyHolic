const GALLERY_ITEMS = [
  { src: "https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?w=600&q=80", alt: "Barber střih", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1654097800369-abc063d657c4?w=600&q=80", alt: "Úprava vousů", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1592845815495-377762cb930c?w=600&q=80", alt: "Retro interiér", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1585747860019-8901a572bb28?w=600&q=80", alt: "Vintage barbershop", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1727519366940-fd9b926e362e?w=600&q=80", alt: "Pánský styl", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80", alt: "Barbershop atmosféra", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="galerie" data-testid="gallery-section" className="py-24 sm:py-32 bg-garage-dark barber-stripe">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="ornament mb-6">
            <span className="font-vintage italic text-garage-teal text-sm tracking-wider">Atmosféra</span>
          </div>
          <h2 data-testid="gallery-title" className="section-title text-garage-cream">
            Z <span className="text-garage-teal">garáže</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 auto-rows-[200px] sm:auto-rows-[240px]">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} data-testid={`gallery-item-${i}`}
              className={`gallery-item ${item.span} overflow-hidden relative group cursor-pointer border border-garage-panel`}
            >
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-garage-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-3 left-3 font-vintage italic text-sm text-garage-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
