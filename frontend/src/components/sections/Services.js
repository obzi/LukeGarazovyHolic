const SERVICES = [
  { name: "Klasický pánský střih", desc: "Konzultace, mytí, střih, styling", price: "od 450 Kč", duration: "45 min" },
  { name: "Fade střih", desc: "Plynulý přechod, precizní kontury", price: "od 500 Kč", duration: "50 min" },
  { name: "Úprava vousů", desc: "Tvarování, holení kontur, ošetření", price: "od 350 Kč", duration: "30 min" },
  { name: "Střih + vousy", desc: "Kompletní péče v jednom", price: "od 700 Kč", duration: "70 min" },
  { name: "Holení hlavy", desc: "Břitvou nebo strojkem, ošetření", price: "od 400 Kč", duration: "30 min" },
  { name: "Dětský střih", desc: "Pro malé gentlemany (do 12 let)", price: "od 300 Kč", duration: "30 min" },
];

export default function Services() {
  return (
    <section id="sluzby" data-testid="services-section" className="py-24 sm:py-32 bg-garage-zinc">
      <div className="section-container">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="amber-line" />
            <span className="font-heading text-garage-amber uppercase tracking-[0.3em] text-sm">
              Co nabízíme
            </span>
            <div className="amber-line" />
          </div>
          <h2 data-testid="services-title" className="section-title text-white">
            Služby & <span className="text-garage-amber">Ceník</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              data-testid={`service-item-${i}`}
              className="group py-6 border-b border-dashed border-zinc-700 last:border-0 hover:border-garage-amber/30 transition-colors"
            >
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-wide text-white group-hover:text-garage-amber transition-colors">
                  {s.name}
                </h3>
                <div className="dotted-leader hidden sm:block" />
                <span className="font-heading text-xl sm:text-2xl text-garage-amber font-bold">
                  {s.price}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-body text-sm text-zinc-500">{s.desc}</p>
                <span className="font-body text-xs text-zinc-600 uppercase tracking-wider">
                  {s.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-zinc-500 text-sm mb-6 font-body">
            Ceny jsou orientační. Přesnou cenu určíme po konzultaci.
          </p>
          <a
            href="tel:+420737553735"
            data-testid="services-cta"
            className="inline-block bg-garage-amber text-black font-heading font-bold text-base uppercase tracking-wider px-10 py-4 rounded-sm hover:bg-amber-400 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.08)] active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            Objednat se na 737 553 735
          </a>
        </div>
      </div>
    </section>
  );
}
