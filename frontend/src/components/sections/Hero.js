import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src="/photos/hero.jpg" alt="Luke-holič z garáže interiér"
          className="w-full h-full object-cover"
          style={{ filter: "sepia(25%) saturate(0.75) brightness(0.5) contrast(1.1)" }}
        />
        <div className="hero-vignette absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-garage-dark via-garage-dark/40 to-garage-dark/30" />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* vintage sign frame */}
        <div className="inline-block worn-border p-8 sm:p-12 lg:p-16 bg-garage-dark/70 backdrop-blur-[2px]">

          <div className="ornament-div mb-4">
            <span className="font-vintage italic text-garage-teal text-xs sm:text-sm tracking-[0.3em]">
              &#9733; Brno &middot; Královo Pole &#9733;
            </span>
          </div>

          <h1 data-testid="hero-title">
            <span className="block font-heading text-garage-cream text-5xl sm:text-7xl lg:text-8xl uppercase tracking-[0.15em] sign-glow">
              Luke
            </span>
            <span className="block font-body italic text-garage-cream-dark text-lg sm:text-2xl my-3 tracking-[0.4em]">
              holič
            </span>
            <span className="block font-heading text-garage-teal text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.15em] sign-glow">
              z garáže
            </span>
          </h1>

          <div className="ornament-div mt-5 mb-6">
            <span className="text-garage-metal text-[10px] tracking-[0.4em] uppercase font-body">
              Rock &apos;n&apos; Roll &bull; Precizní střihy
            </span>
          </div>

          <p data-testid="hero-description"
            className="font-body text-garage-cream-dark/80 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8"
          >
            Kde se potkává rock&apos;n&apos;roll s precizním střihem.
            Osobní přístup, garáž plná stylu a poctivé řemeslo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+420737553735" data-testid="hero-cta-book"
              className="bg-garage-teal text-garage-dark font-heading text-sm uppercase tracking-[0.2em] px-8 py-3 hover:bg-garage-teal-light transition-colors"
            >Objednat se</a>
            <a href="#sluzby" data-testid="hero-cta-services"
              className="border-2 border-garage-cream-dark/20 text-garage-cream font-heading text-sm uppercase tracking-[0.2em] px-8 py-3 hover:border-garage-teal hover:text-garage-teal transition-colors"
              onClick={(e) => { e.preventDefault(); document.querySelector("#sluzby")?.scrollIntoView({ behavior: "smooth" }); }}
            >Služby &amp; Ceník</a>
          </div>
        </div>

        {/* rating badge tucked below sign */}
        <div data-testid="hero-rating-badge"
          className="mt-8 inline-flex items-center gap-3 px-5 py-2 border border-garage-panel bg-garage-dark/60"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-garage-rust fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-heading text-lg text-garage-cream">5.0</span>
          <span className="text-garage-metal text-xs font-body italic">/ 46+ recenzí na Google</span>
        </div>
      </div>

      <a href="#o-nas" data-testid="scroll-indicator"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-garage-metal animate-bounce"
        onClick={(e) => { e.preventDefault(); document.querySelector("#o-nas")?.scrollIntoView({ behavior: "smooth" }); }}
      ><ChevronDown size={24} /></a>
    </section>
  );
}
