const GOOGLE_PHOTOS_URL = "https://www.google.com/maps/place/Luke-holi%C4%8D+z+gar%C3%A1%C5%BEe/@49.2219198,16.5873998,17z/data=!3m1!1s0x471295f0bdf8a047:0x4be49f339d522f5d";

const GALLERY_ITEMS = [
  { src: "https://lh5.googleusercontent.com/p/AF1QipOYW0WcYAxGDIZHFo5lbY2OUodC3wwxmXBRf3tl=w650-h486-k-no", alt: "Interiér holičství", span: "col-span-1 row-span-2" },
  { src: "https://lh5.googleusercontent.com/p/AF1QipPyt1cihSdY9_eOvva7p97Aq3r7L26cKSNbSozJ=w369-h500-k-no", alt: "Detail holičství", span: "col-span-1 row-span-1" },
  { src: "https://lh5.googleusercontent.com/p/AF1QipNw09RBDH1RrW-ygICDGPDztQTjcqv61U9WuOoG=w650-h480-k-no", alt: "Pracovní místo", span: "col-span-1 row-span-1" },
  { src: "https://lh5.googleusercontent.com/p/AF1QipMisrwyF66EkxLvVmZsLme0nnVc2CD6UQp3dheO=w375-h500-k-no", alt: "Atmosféra garáže", span: "col-span-1 row-span-2" },
  { src: "https://lh5.googleusercontent.com/p/AF1QipPN0Wnlz_0qylHTbK59yG9hh604jtmJSbo9AwDP=w375-h500-k-no", alt: "Barber vybavení", span: "col-span-1 row-span-1" },
  { src: "https://lh5.googleusercontent.com/p/AF1QipM4_K6eb7WskSmhDQZe33C2hlg3KtN-lhKt3-I6=w375-h500-k-no", alt: "Luke v akci", span: "col-span-1 row-span-1" },
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
          <p className="text-garage-metal mt-3 font-vintage italic text-sm">
            Reálné fotky z holičství
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 auto-rows-[200px] sm:auto-rows-[240px]">
          {GALLERY_ITEMS.map((item, i) => (
            <a key={i} href={GOOGLE_PHOTOS_URL} target="_blank" rel="noopener noreferrer"
              data-testid={`gallery-item-${i}`}
              className={`gallery-item ${item.span} overflow-hidden relative group cursor-pointer border border-garage-panel`}
            >
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-garage-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-3 left-3 font-vintage italic text-sm text-garage-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.alt}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://www.instagram.com/luke_holic_z_garaze/" target="_blank" rel="noopener noreferrer"
            data-testid="gallery-instagram-link"
            className="font-vintage italic text-sm text-garage-metal hover:text-garage-teal transition-colors underline underline-offset-4"
          >Více fotek na Instagramu &rarr;</a>
        </div>
      </div>
    </section>
  );
}
