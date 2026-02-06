import { Scissors, Music, Beer } from "lucide-react";

export default function About() {
  return (
    <section id="o-nas" data-testid="about-section" className="py-24 sm:py-32 bg-garage-dark barber-stripe">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="stamp-border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1585747860019-8901a572bb28?w=800&q=80"
                alt="Interiér holičství"
                data-testid="about-image"
                className="w-full h-[480px] object-cover"
                style={{ filter: "sepia(15%) saturate(0.9)" }}
              />
            </div>
            <div className="absolute -top-3 -left-3 bg-garage-teal text-garage-dark font-heading font-bold text-xs uppercase tracking-[0.2em] px-4 py-2">
              Est. Brno
            </div>
          </div>

          <div>
            <div className="ornament mb-8 justify-start">
              <span className="font-vintage italic text-garage-teal text-sm tracking-wider">Příběh</span>
            </div>

            <h2 data-testid="about-title" className="section-title text-garage-cream mb-8">
              Víc než jen
              <br />
              <span className="text-garage-teal">střih</span>
            </h2>

            <p data-testid="about-text" className="font-body text-garage-cream-dark text-base leading-loose mb-6">
              Luke-holič z garáže není obyčejné holičství. Je to místo, kde se
              potkává poctivé řemeslo s rock&apos;n&apos;rollovou atmosférou. Interiér
              vyladěný do posledního detailu, melodie Rolling Stones v pozadí,
              nachlazený Birell nebo Kofola v ruce — a k tomu střih, se kterým
              odcházíte s úsměvem na tváři.
            </p>

            <p className="font-body text-garage-metal text-base leading-loose mb-12">
              Luke věří, že každý zákazník si zaslouží individuální přístup a
              péči na míru. Proto se každé návštěvě věnuje naplno — od konzultace
              přes precizní střih až po rady o péči o vlasy i vousy.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Scissors, label: "Precizní\nřemeslo" },
                { icon: Music, label: "Rock &\nBlues" },
                { icon: Beer, label: "Birell &\nKofola" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} data-testid={`about-feature-${i}`}
                  className="text-center p-4 border border-garage-panel hover:border-garage-teal/30 transition-colors group bg-garage-mid/50"
                >
                  <Icon size={24} className="mx-auto mb-3 text-garage-teal group-hover:scale-110 transition-transform" />
                  <span className="font-heading text-[11px] uppercase tracking-wider text-garage-cream-dark whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
