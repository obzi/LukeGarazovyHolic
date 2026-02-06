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
  const now = new Date();
  const dayIndex = now.getDay();
  const todayMap = [6, 0, 1, 2, 3, 4, 5];
  const todayIdx = todayMap[dayIndex];

  return (
    <section data-testid="hours-section" className="py-24 sm:py-32 bg-garage-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-garage-amber/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="amber-line" />
              <span className="font-heading text-garage-amber uppercase tracking-[0.3em] text-sm">
                Kdy nás najdete
              </span>
            </div>

            <h2 data-testid="hours-title" className="section-title text-white mb-6">
              Otevírací
              <br />
              <span className="text-garage-amber">doba</span>
            </h2>

            <p className="font-body text-zinc-400 text-base leading-relaxed mb-8">
              Objednání předem je nutné. Zavolejte nebo napište a domluvíme
              termín, který vám sedne.
            </p>

            <div className="flex items-center gap-3 text-garage-amber">
              <Clock size={20} />
              <span className="font-heading text-sm uppercase tracking-wider">
                Pouze na objednání
              </span>
            </div>
          </div>

          <div className="bg-garage-zinc border border-zinc-800 rounded-sm p-8 sm:p-10">
            {HOURS.map((h, i) => (
              <div
                key={i}
                data-testid={`hours-row-${i}`}
                className={`flex items-center justify-between py-4 border-b border-zinc-800 last:border-0 ${
                  i === todayIdx ? "text-garage-amber" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {i === todayIdx && (
                    <div className="w-2 h-2 rounded-full bg-garage-amber animate-pulse" />
                  )}
                  <span className="font-heading text-base uppercase tracking-wider">
                    {h.day}
                  </span>
                </div>
                <span
                  className={`font-body text-sm tracking-wider ${
                    h.closed
                      ? "text-zinc-600"
                      : i === todayIdx
                      ? "text-garage-amber"
                      : "text-zinc-300"
                  }`}
                >
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
