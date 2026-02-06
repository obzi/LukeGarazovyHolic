import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-garage-dark border-t border-zinc-800 py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-widest text-white mb-4">
              LUKE<span className="text-garage-amber">-</span>HOLIČ
            </h3>
            <p className="font-body text-zinc-500 text-sm leading-relaxed">
              Kde se potkává rock'n'roll s precizním střihem. Garáž plná stylu v
              srdci Králova Pole.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Navigace
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "#o-nas", label: "O nás" },
                { href: "#sluzby", label: "Služby" },
                { href: "#galerie", label: "Galerie" },
                { href: "#recenze", label: "Recenze" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`footer-link-${l.href.slice(1)}`}
                  className="font-body text-sm text-zinc-500 hover:text-garage-amber transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Sledujte nás
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/luke_holic_z_garaze/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="w-12 h-12 rounded-sm border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-garage-amber hover:border-garage-amber/50 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/lukeholiczgaraze/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook"
                className="w-12 h-12 rounded-sm border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-garage-amber hover:border-garage-amber/50 transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Luke-holič z garáže. Všechna práva
            vyhrazena.
          </p>
          <p className="font-body text-xs text-zinc-700">
            Skácelova 2057/23, Brno-Královo Pole
          </p>
        </div>
      </div>
    </footer>
  );
}
