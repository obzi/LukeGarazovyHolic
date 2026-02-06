import { Clock } from "lucide-react";

const HOURS = [
  { day: "Pondělí", time: "14:00 — 20:00" },
  { day: "Úterý", time: "14:00 — 20:00" },
  { day: "Středa", time: "14:00 — 20:00" },
  { day: "Čtvrtek", time: "14:00 — 20:00" },
  { day: "Pátek", time: "14:00 — 20:00" },
  { day: "Sobota", time: "Zavřeno", closed: true },
  { day: "Neděle", time: "Zavřeno", closed: true },
];

export default function OpeningHours() {
  const todayIdx = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section data-testid="hours-section" className="py-24 sm:py-32 bg-garage-mid">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="ornament-div mb-6 justify-start">
              <span className="font-vintage italic text-garage-teal text-sm tracking-wider">Kdy nás najdete</span>
            </div>
            <h2 data-testid="hours-title" className="section-title text-garage-cream mb-6">
              Otevírací<br /><span className="text-garage-teal">doba</span>
            </h2>
            <p className="font-body text-garage-metal text-base leading-relaxed mb-8">
              Objednání předem je nutné. Zavolejte nebo napište a domluvíme
              termín, který vám sedne.
            </p>
            <div className="flex items-center gap-3 text-garage-teal">
              <Clock size={18} />
              <span className="font-heading text-sm uppercase tracking-wider">Pouze na objednání</span>
            </div>
          </div>

          <div className="tin-card rust-edge p-8 sm:p-10">
            {HOURS.map((h, i) => (
              <div key={i} data-testid={`hours-row-${i}`}
                className={`flex items-center justify-between py-4 border-b border-garage-panel/60 last:border-0 ${i === todayIdx ? "text-garage-teal" : ""}`}
              >
                <div className="flex items-center gap-3">
                  {i === todayIdx && <div className="w-2 h-2 rounded-full bg-garage-teal animate-pulse" />}
                  <span className="font-heading text-base uppercase tracking-wider">{h.day}</span>
                </div>
                <span className={`font-body text-sm tracking-wider ${h.closed ? "text-garage-metal/50" : i === todayIdx ? "text-garage-teal" : "text-garage-cream-dark"}`}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
