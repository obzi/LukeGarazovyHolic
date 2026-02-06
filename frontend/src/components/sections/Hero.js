import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" data-testid="hero-section"
      className="relative min-h-screen flex items-end pb-20 sm:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipOYW0WcYAxGDIZHFo5lbY2OUodC3wwxmXBRf3tl=w1920-h1080-k-no"
          alt="Luke-holič z garáže interiér"
          className="w-full h-full object-cover"
          style={{ filter: "sepia(20%) saturate(0.85) brightness(0.7)" }}
        />
        <div className="hero-vignette absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-garage-dark via-garage-dark/50 to-transparent" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[1px] bg-garage-teal" />
            <span data-testid="hero-tagline-top"
              className="font-vintage italic text-garage-teal tracking-[0.15em] text-sm"
            >Brno &middot; Královo Pole</span>
          </div>

          <h1 data-testid="hero-title"
            className="font-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase font-bold leading-[0.85] tracking-tight mb-6"
          >
            <span className="text-garage-cream">Luke</span>
            <br />
            <span className="text-garage-teal">Holič</span>
            <br />
            <span className="font-vintage italic font-normal text-garage-metal text-3xl sm:text-4xl lg:text-5xl tracking-wide">
              z garáže
            </span>
          </h1>

          <p data-testid="hero-description"
            className="font-body text-garage-cream-dark text-lg sm:text-xl max-w-lg leading-relaxed mb-10"
          >
            Kde se potkává rock&apos;n&apos;roll s precizním střihem.
            Osobní přístup, garáž plná stylu a poctivé řemeslo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+420737553735" data-testid="hero-cta-book"
              className="bg-garage-teal text-garage-dark font-heading font-bold text-base uppercase tracking-wider px-8 py-4 hover:bg-garage-teal-light transition-colors text-center"
            >Objednat se</a>
            <a href="#sluzby" data-testid="hero-cta-services"
              className="border-2 border-garage-cream-dark/30 text-garage-cream font-heading text-base uppercase tracking-wider px-8 py-4 hover:border-garage-teal hover:text-garage-teal transition-colors text-center"
              onClick={(e) => { e.preventDefault(); document.querySelector("#sluzby")?.scrollIntoView({ behavior: "smooth" }); }}
            >Služby &amp; Ceník</a>
          </div>
        </div>

        <div data-testid="hero-rating-badge"
          className="absolute bottom-20 right-4 sm:right-8 hidden lg:flex flex-col items-center gap-1 float-animation stamp-border bg-garage-dark/80 backdrop-blur-sm px-5 py-4"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-garage-teal fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-heading text-2xl font-bold text-garage-cream">5.0</span>
          <span className="text-garage-metal text-xs font-vintage italic">46+ recenzí</span>
        </div>
      </div>

      <a href="#o-nas" data-testid="scroll-indicator"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-garage-metal animate-bounce"
        onClick={(e) => { e.preventDefault(); document.querySelector("#o-nas")?.scrollIntoView({ behavior: "smooth" }); }}
      ><ChevronDown size={28} /></a>
    </section>
  );
}
