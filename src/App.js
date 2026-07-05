import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MealsStrip from "./components/MealsStrip";
import EventsBar from "./components/EventsBar";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MealsStrip />
      <EventsBar />
      <WhyUs />
    </div>
  );
}
