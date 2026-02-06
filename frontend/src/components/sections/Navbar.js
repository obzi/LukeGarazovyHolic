import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#o-nas", label: "O nás" },
  { href: "#sluzby", label: "Služby" },
  { href: "#galerie", label: "Galerie" },
  { href: "#recenze", label: "Recenze" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-garage-dark/85 backdrop-blur-xl border-b border-garage-navy/60 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        <a
          href="#hero"
          data-testid="nav-logo"
          className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white hover:text-garage-teal transition-colors"
          onClick={(e) => handleClick(e, "#hero")}
        >
          LUKE<span className="text-garage-teal">-</span>HOLIČ
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.slice(1)}`}
              className="nav-link font-heading text-sm uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+420737553735"
            data-testid="nav-cta-call"
            className="bg-garage-teal text-garage-dark font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-teal-300 transition-all shadow-[3px_3px_0px_0px_rgba(45,212,191,0.15)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            Zavolat
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-garage-dark/95 backdrop-blur-xl border-t border-garage-navy/40 animate-fade-in-up"
        >
          <div className="section-container py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`mobile-link-${l.href.slice(1)}`}
                className="font-heading text-lg uppercase tracking-wider text-slate-300 hover:text-garage-teal transition-colors"
                onClick={(e) => handleClick(e, l.href)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+420737553735"
              data-testid="mobile-cta-call"
              className="bg-garage-teal text-garage-dark font-heading font-bold text-center uppercase tracking-wider px-6 py-3 rounded-sm mt-2"
            >
              Zavolat
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
