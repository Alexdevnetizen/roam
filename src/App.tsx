import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ClosingCTA } from "./components/sections/ClosingCTA";
import { Destinations } from "./components/sections/Destinations";
import { Difference } from "./components/sections/Difference";
import { Experiences } from "./components/sections/Experiences";
import { Hero } from "./components/sections/Hero";
import { HorizonBand } from "./components/sections/HorizonBand";
import { Journal } from "./components/sections/Journal";
import { Philosophy } from "./components/sections/Philosophy";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-ivory"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Philosophy />
        <Destinations />
        <Experiences />
        <Difference />
        <HorizonBand />
        <Journal />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
