import { Award, Trophy } from "lucide-react";

const AWARDS = [
  { year: "2026", title: "Laureát", type: "laureate" },
  { year: "2025", title: "Zlatá medaile", type: "gold" },
  { year: "2025", title: "Laureát", type: "laureate" },
  { year: "2024", title: "Zlatá medaile", type: "gold" },
  { year: "2024", title: "Laureát", type: "laureate" },
];

export default function Awards() {
  return (
    <section data-testid="awards-section" className="py-20 sm:py-24 bg-garage-mid border-y border-garage-panel">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-shrink-0 text-center lg:text-left">
            <div className="ornament mb-5 justify-start">
              <span className="font-vintage italic text-garage-teal text-sm tracking-wider">Ocenění</span>
            </div>
            <h2 data-testid="awards-title" className="font-heading text-3xl sm:text-4xl uppercase tracking-wider font-bold text-garage-cream mb-3">
              Vítěz soutěže
              <br />
              <span className="text-garage-teal">Orlové Krásy</span>
            </h2>
            <p className="font-body text-garage-metal text-sm max-w-sm leading-relaxed">
              Plebiscit sdružující ty nejlepší v oboru. Luke-holič z garáže
              patří mezi nejlépe hodnocená holičství v Brně.
            </p>
            <a href="https://www.orlovekrasy.cz/profile-539952-luke-holic-z-garaze"
              target="_blank" rel="noopener noreferrer" data-testid="awards-link"
              className="inline-block mt-4 font-vintage italic text-xs text-garage-metal hover:text-garage-teal transition-colors underline underline-offset-4"
            >Zobrazit profil na Orlové Krásy</a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {AWARDS.map((a, i) => (
              <div key={i} data-testid={`award-badge-${i}`}
                className="flex flex-col items-center gap-2 p-5 bg-garage-dark border border-garage-panel hover:border-garage-teal/30 transition-colors min-w-[110px]"
              >
                {a.type === "gold"
                  ? <Trophy size={24} className="text-garage-rust" />
                  : <Award size={24} className="text-garage-teal" />
                }
                <span className="font-heading text-xl font-bold text-garage-cream">{a.year}</span>
                <span className="font-body text-[10px] uppercase tracking-wider text-garage-metal text-center">{a.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
