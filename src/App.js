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
    </div>
  );
}
