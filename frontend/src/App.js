import "@/App.css";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import OpeningHours from "@/components/sections/OpeningHours";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-garage-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <OpeningHours />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
