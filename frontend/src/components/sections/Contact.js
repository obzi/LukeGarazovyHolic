import { MapPin, Phone, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" data-testid="contact-section" className="py-24 sm:py-32 bg-garage-zinc">
      <div className="section-container">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="amber-line" />
            <span className="font-heading text-garage-amber uppercase tracking-[0.3em] text-sm">
              Kde nás najdete
            </span>
            <div className="amber-line" />
          </div>
          <h2 data-testid="contact-title" className="section-title text-white">
            Kontakt
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div data-testid="contact-address" className="flex gap-5">
              <div className="w-12 h-12 rounded-sm bg-garage-amber/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-garage-amber" size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-1">
                  Adresa
                </h3>
                <p className="font-body text-zinc-400">
                  Skácelova 2057/23
                  <br />
                  612 00 Brno-Královo Pole
                </p>
              </div>
            </div>

            <div data-testid="contact-phone" className="flex gap-5">
              <div className="w-12 h-12 rounded-sm bg-garage-amber/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-garage-amber" size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-1">
                  Telefon
                </h3>
                <a
                  href="tel:+420737553735"
                  className="font-body text-garage-amber hover:text-amber-400 transition-colors text-lg"
                >
                  +420 737 553 735
                </a>
              </div>
            </div>

            <div data-testid="contact-social" className="flex gap-5">
              <div className="w-12 h-12 rounded-sm bg-garage-amber/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="text-garage-amber" size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-1">
                  Sociální sítě
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.instagram.com/luke_holic_z_garaze/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-instagram-link"
                    className="font-body text-zinc-400 hover:text-garage-amber transition-colors"
                  >
                    Instagram — @luke_holic_z_garaze
                  </a>
                  <a
                    href="https://www.facebook.com/lukeholiczgaraze/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-facebook-link"
                    className="font-body text-zinc-400 hover:text-garage-amber transition-colors"
                  >
                    Facebook — Luke-holič z garáže
                  </a>
                </div>
              </div>
            </div>

            <a
              href="tel:+420737553735"
              data-testid="contact-cta"
              className="inline-block bg-garage-amber text-black font-heading font-bold text-base uppercase tracking-wider px-10 py-4 rounded-sm hover:bg-amber-400 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.08)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              Zavolat a objednat se
            </a>
          </div>

          <div className="rounded-sm overflow-hidden border border-zinc-800 h-[400px] lg:h-auto">
            <iframe
              data-testid="contact-map"
              title="Luke-holič z garáže mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.5!2d16.5848249!3d49.2219198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471295f0bdf8a047%3A0x4be49f339d522f5d!2sLuke-holi%C4%8D%20z%20gar%C3%A1%C5%BEe!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(30%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
