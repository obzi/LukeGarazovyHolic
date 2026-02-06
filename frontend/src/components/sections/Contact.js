import { MapPin, Phone, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" data-testid="contact-section" className="py-24 sm:py-32 bg-garage-dark barber-stripe">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="ornament mb-6">
            <span className="font-vintage italic text-garage-teal text-sm tracking-wider">Kde nás najdete</span>
          </div>
          <h2 data-testid="contact-title" className="section-title text-garage-cream">Kontakt</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-9">
            <div data-testid="contact-address" className="flex gap-5">
              <div className="w-11 h-11 flex items-center justify-center border border-garage-panel bg-garage-mid flex-shrink-0">
                <MapPin className="text-garage-teal" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-base uppercase tracking-wider text-garage-cream mb-1">Adresa</h3>
                <a href="https://www.google.com/maps/place/Luke-holi%C4%8D+z+gar%C3%A1%C5%BEe/@49.2219198,16.5873998,17z" target="_blank" rel="noopener noreferrer" className="font-body text-garage-metal text-sm hover:text-garage-teal transition-colors">Skácelova 2057/23<br />612 00 Brno-Královo Pole</a>
              </div>
            </div>

            <div data-testid="contact-phone" className="flex gap-5">
              <div className="w-11 h-11 flex items-center justify-center border border-garage-panel bg-garage-mid flex-shrink-0">
                <Phone className="text-garage-teal" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-base uppercase tracking-wider text-garage-cream mb-1">Telefon</h3>
                <a href="tel:+420737553735" className="font-body text-garage-teal hover:text-garage-teal-light transition-colors text-lg">
                  +420 737 553 735
                </a>
              </div>
            </div>

            <div data-testid="contact-social" className="flex gap-5">
              <div className="w-11 h-11 flex items-center justify-center border border-garage-panel bg-garage-mid flex-shrink-0">
                <Instagram className="text-garage-teal" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-base uppercase tracking-wider text-garage-cream mb-1">Sociální sítě</h3>
                <div className="flex flex-col gap-1.5">
                  <a href="https://www.instagram.com/luke_holic_z_garaze/" target="_blank" rel="noopener noreferrer"
                    data-testid="contact-instagram-link" className="font-body text-sm text-garage-metal hover:text-garage-teal transition-colors"
                  >Instagram — @luke_holic_z_garaze</a>
                  <a href="https://www.facebook.com/lukeholiczgaraze/" target="_blank" rel="noopener noreferrer"
                    data-testid="contact-facebook-link" className="font-body text-sm text-garage-metal hover:text-garage-teal transition-colors"
                  >Facebook — Luke-holič z garáže</a>
                </div>
              </div>
            </div>

            <a href="tel:+420737553735" data-testid="contact-cta"
              className="inline-block bg-garage-teal text-garage-dark font-heading font-bold text-base uppercase tracking-wider px-10 py-4 hover:bg-garage-teal-light transition-colors"
            >Zavolat a objednat se</a>
          </div>

          <div className="overflow-hidden border border-garage-panel h-[400px] lg:h-auto">
            <iframe data-testid="contact-map" title="Luke-holič z garáže mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.5!2d16.5848249!3d49.2219198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471295f0bdf8a047%3A0x4be49f339d522f5d!2sLuke-holi%C4%8D%20z%20gar%C3%A1%C5%BEe!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz"
              width="100%" height="100%"
              style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) sepia(15%) saturate(0.8)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
