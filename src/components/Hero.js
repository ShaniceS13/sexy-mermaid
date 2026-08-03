import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Hero.css";

export default function Hero() {
  const [ref, isVisible] = useScrollReveal();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`hero reveal ${isVisible ? "visible" : ""}`}
      id="home"
      ref={ref}
    >
      <div className="hero-text">
        <div className="hero-pill">📍 Lucy Point · Oak Ridge · Roatán</div>
        <h1 className="hero-h1">
          Caught this morning. <br />
          <em>On your plate by noon.</em>
        </h1>
        <p className="hero-sub">
          A little seafood house on the quiet east side of the island. Lobster,
          snapper, conch, and cold beer, served over the water from{" "}
          <strong>8 in the morning until 8 at night</strong>, every single day.
        </p>

        <div className="hero-tags">
          <span className="hero-tag hero-tag-teal">🐟 Fresh daily catch</span>
          <span className="hero-tag hero-tag-teal">❄️ Cocktails $10</span>
          <span className="hero-tag hero-tag-teal">🪸 Mangrove tours</span>
          <span className="hero-tag hero-tag-teal">🎤 Karaoke Wednesdays</span>
        </div>

        <div className="hero-btns">
          <button
            className="btn-primary"
            onClick={() => scrollToSection("menu")}
          >
            See the menu
          </button>

          <a
            className="btn-outline"
            href="https://wa.me/50433782622"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
