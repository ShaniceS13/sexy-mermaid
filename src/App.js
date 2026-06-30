import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MealsStrip from "./components/MealsStrip";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MealsStrip />
    </div>
  );
}
