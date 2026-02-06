import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactBar() {
  return (
    <section data-testid="contact-bar" className="bg-garage-mid border-y border-garage-panel">
      <div className="section-container py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <a href="tel:+420737553735" data-testid="contactbar-phone"
            className="flex items-center gap-2.5 text-garage-cream-dark hover:text-garage-teal transition-colors"
          >
            <Phone size={14} className="text-garage-teal" />
            <span className="font-body text-sm font-medium">737 553 735</span>
          </a>
          <div className="hidden sm:block text-garage-panel">|</div>
          <div className="flex items-center gap-2.5 text-garage-metal">
            <MapPin size={14} className="text-garage-teal" />
            <span className="font-body text-sm">Skácelova 2057/23, Brno</span>
          </div>
          <div className="hidden sm:block text-garage-panel">|</div>
          <div className="flex items-center gap-2.5 text-garage-metal">
            <Clock size={14} className="text-garage-teal" />
            <span className="font-body text-sm">Po—Pá 14:00—20:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
