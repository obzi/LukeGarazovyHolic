const REVIEWS = [
  {
    name: "David B.",
    text: "Luke je už dlouhá léta má jasná volba. Holičstvím se vždy rozléhají melodie Stounů, v nabídce nachlazený Birell nebo Kofola, interiér vyladěný do posledního detailu a péče o vlasy je bezkonkurenční.",
    rating: 5,
  },
  {
    name: "Petr K.",
    text: "Osobité, originální a stylové holičství. Sympaťák Luke, se kterým si dobře pokecáte, vás suprově ostříhá, nabídne vám nějaký pití a dá vám rady ohledně účesu. Zkrátka pecka!",
    rating: 5,
  },
  {
    name: "Nicolas D.",
    text: "První návštěva — velmi spokojen s účesem i bradou. S Lukem řeč nestála, příjemně jsme pokecali a nakonec i poradil s péčí o vlasy i bradu. Určitě navštívím znovu!",
    rating: 5,
  },
  {
    name: "Juraj S.",
    text: "Příjemná atmosféra, skvělý interiér, střih bez chyby. Luke je profesionál a pohoďák.",
    rating: 5,
  },
  {
    name: "Ondřej B.",
    text: "Pánské rock&rollové nebe. Díky za to!",
    rating: 5,
  },
  {
    name: "Ivan B.",
    text: "Můžu vřele doporučit. Profesionální služby a přístup. Nadstandardní péče. Vždy fajn pokec. TOP!",
    rating: 5,
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-garage-amber fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="recenze" data-testid="reviews-section" className="py-24 sm:py-32 bg-garage-dark">
      <div className="section-container">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="amber-line" />
            <span className="font-heading text-garage-amber uppercase tracking-[0.3em] text-sm">
              Co říkají zákazníci
            </span>
            <div className="amber-line" />
          </div>
          <h2 data-testid="reviews-title" className="section-title text-white">
            <span className="text-garage-amber">5.0</span> z 5
          </h2>
          <p className="text-zinc-500 mt-4 font-body">Na základě 46+ hodnocení na Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              data-testid={`review-card-${i}`}
              className="bg-garage-zinc border border-zinc-800 rounded-sm p-6 sm:p-8 hover:border-garage-amber/30 transition-colors group"
            >
              <StarRow />
              <p className="font-body text-zinc-300 text-sm leading-relaxed mb-6 group-hover:text-zinc-100 transition-colors">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-garage-amber/20 flex items-center justify-center">
                  <span className="font-heading text-garage-amber font-bold text-sm">
                    {r.name.charAt(0)}
                  </span>
                </div>
                <span className="font-heading text-sm uppercase tracking-wider text-zinc-400">
                  {r.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Luke-holi%C4%8D+z+gar%C3%A1%C5%BEe/@49.2219198,16.5873998,17z"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="reviews-google-link"
            className="border-2 border-zinc-700 text-zinc-300 font-heading text-sm uppercase tracking-wider px-8 py-3 rounded-sm hover:border-garage-amber hover:text-garage-amber transition-colors inline-block"
          >
            Všechny recenze na Google
          </a>
        </div>
      </div>
    </section>
  );
}
