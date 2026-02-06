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
    <section id="sluzby" data-testid="services-section" className="py-24 sm:py-32 bg-garage-dark barber-stripe">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="ornament mb-6">
            <span className="font-vintage italic text-garage-teal text-sm tracking-wider">Co nabízíme</span>
          </div>
          <h2 data-testid="services-title" className="section-title text-garage-cream">
            Služby &amp; <span className="text-garage-teal">Ceník</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto retro-card p-6 sm:p-10">
          {SERVICES.map((s, i) => (
            <div key={i} data-testid={`service-item-${i}`}
              className="group py-5 border-b border-dashed border-garage-panel last:border-0 hover:border-garage-teal/20 transition-colors"
            >
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-heading text-lg sm:text-xl uppercase tracking-wide text-garage-cream group-hover:text-garage-teal transition-colors">
                  {s.name}
                </h3>
                <div className="dotted-leader hidden sm:block" />
                <span className="font-heading text-lg sm:text-xl text-garage-teal font-bold">{s.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-body text-sm text-garage-metal">{s.desc}</p>
                <span className="font-vintage italic text-xs text-garage-metal">{s.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-garage-metal text-sm mb-5 font-vintage italic">
            Ceny jsou orientační. Přesnou cenu určíme po konzultaci.
          </p>
          <a href="tel:+420737553735" data-testid="services-cta"
            className="inline-block bg-garage-teal text-garage-dark font-heading font-bold text-base uppercase tracking-wider px-10 py-4 hover:bg-garage-teal-light transition-colors"
          >Objednat se na 737 553 735</a>
        </div>
      </div>
    </section>
  );
}
