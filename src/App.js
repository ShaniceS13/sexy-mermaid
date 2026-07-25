import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MealsStrip from "./components/MealsStrip";
import EventsBar from "./components/EventsBar";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Menu from "./components/Menu";
import RoatanFacts from "./components/RoatanFacts";
import MangroveToursSection from "./components/MangroveToursSection";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WhatsAppPopup from "./components/WhatsAppPopup";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MealsStrip />
      <EventsBar />
      <WhyUs />
      <About />
      <Menu />
      <RoatanFacts />
      <MangroveToursSection />
      <Reviews />
      <Gallery />
      <CTASection />
      <Footer />
      <WhatsAppPopup />
    </div>
  );
}
