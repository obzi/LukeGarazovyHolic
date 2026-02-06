import { Scissors, Music, Beer } from "lucide-react";

export default function About() {
  return (
    <section id="o-nas" data-testid="about-section" className="py-24 sm:py-32 bg-garage-dark">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&q=80"
                alt="Garážové holičství"
                data-testid="about-image"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-garage-dark/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-garage-amber/30 rounded-sm hidden sm:block" />
            <div className="absolute -top-4 -left-4 bg-garage-amber text-black font-heading font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-sm">
              Est. Brno
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="amber-line" />
              <span className="font-heading text-garage-amber uppercase tracking-[0.3em] text-sm">
                Příběh
              </span>
            </div>

            <h2 data-testid="about-title" className="section-title text-white mb-8">
              Víc než jen
              <br />
              <span className="text-garage-amber">střih</span>
            </h2>

            <p data-testid="about-text" className="font-body text-zinc-400 text-base leading-loose mb-8">
              Luke-holič z garáže není obyčejné holičství. Je to místo, kde se
              potkává poctivé řemeslo s rock&apos;n&apos;rollovou atmosférou. Interiér
              vyladěný do posledního detailu, melodie Rolling Stones v pozadí,
              nachlazený Birell nebo Kofola v ruce — a k tomu střih, se kterým
              odcházíte s úsměvem na tváři.
            </p>

            <p className="font-body text-zinc-400 text-base leading-loose mb-12">
              Luke věří, že každý zákazník si zaslouží individuální přístup a
              péči na míru. Proto se každé návštěvě věnuje naplno — od konzultace
              přes precizní střih až po rady o péči o vlasy i vousy.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Scissors, label: "Precizní\nřemeslo" },
                { icon: Music, label: "Rock &\nBlues" },
                { icon: Beer, label: "Birell &\nKofola" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  data-testid={`about-feature-${i}`}
                  className="text-center p-4 border border-zinc-800 rounded-sm hover:border-garage-amber/40 transition-colors group"
                >
                  <Icon
                    size={28}
                    className="mx-auto mb-3 text-garage-amber group-hover:scale-110 transition-transform"
                  />
                  <span className="font-heading text-xs uppercase tracking-wider text-zinc-300 whitespace-pre-line">
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
