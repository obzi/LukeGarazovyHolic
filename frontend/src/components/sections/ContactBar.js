import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactBar() {
  return (
    <section data-testid="contact-bar" className="bg-garage-zinc border-b border-zinc-800">
      <div className="section-container py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <a
            href="tel:+420737553735"
            data-testid="contactbar-phone"
            className="flex items-center gap-3 text-zinc-300 hover:text-garage-amber transition-colors group"
          >
            <Phone size={16} className="text-garage-amber" />
            <span className="font-body text-sm tracking-wide">
              <span className="font-semibold">737 553 735</span>
            </span>
          </a>

          <div className="hidden sm:block w-px h-5 bg-zinc-700" />

          <div className="flex items-center gap-3 text-zinc-400">
            <MapPin size={16} className="text-garage-amber" />
            <span className="font-body text-sm tracking-wide">
              Skácelova 2057/23, Brno
            </span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-zinc-700" />

          <div className="flex items-center gap-3 text-zinc-400">
            <Clock size={16} className="text-garage-amber" />
            <span className="font-body text-sm tracking-wide">
              Po—Pá 14:00—20:00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
