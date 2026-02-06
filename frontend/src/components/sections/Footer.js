import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-garage-mid border-t border-garage-panel py-14">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-heading text-xl font-bold uppercase tracking-[0.15em] text-garage-cream mb-3">
              LUKE<span className="text-garage-teal">-</span>HOLIČ
            </h3>
            <p className="font-body text-garage-metal text-sm leading-relaxed">
              Kde se potkává rock&apos;n&apos;roll s precizním střihem.
              Garáž plná stylu v srdci Králova Pole.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-garage-cream-dark mb-4">Navigace</h4>
            <div className="flex flex-col gap-2.5">
              {["O nás|#o-nas","Služby|#sluzby","Galerie|#galerie","Recenze|#recenze","Kontakt|#kontakt"].map((s) => {
                const [label, href] = s.split("|");
                return (
                  <a key={href} href={href} data-testid={`footer-link-${href.slice(1)}`}
                    className="font-body text-sm text-garage-metal hover:text-garage-teal transition-colors"
                    onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
                  >{label}</a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-garage-cream-dark mb-4">Sledujte nás</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/luke_holic_z_garaze/" target="_blank" rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="w-11 h-11 border border-garage-panel flex items-center justify-center text-garage-metal hover:text-garage-teal hover:border-garage-teal/40 transition-all"
              ><Instagram size={18} /></a>
              <a href="https://www.facebook.com/lukeholiczgaraze/" target="_blank" rel="noopener noreferrer"
                data-testid="footer-facebook"
                className="w-11 h-11 border border-garage-panel flex items-center justify-center text-garage-metal hover:text-garage-teal hover:border-garage-teal/40 transition-all"
              ><Facebook size={18} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-garage-panel pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-garage-metal/60">&copy; {new Date().getFullYear()} Luke-holič z garáže. Všechna práva vyhrazena.</p>
          <p className="font-body text-xs text-garage-metal/40">Skácelova 2057/23, Brno-Královo Pole</p>
        </div>
      </div>
    </footer>
  );
}
