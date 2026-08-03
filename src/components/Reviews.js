import { useScrollReveal } from "../hooks/useScrollReveal";
import WaveDivider from "./WaveDivider";
import "../styles/Reviews.css";

export default function Reviews() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <>
      <WaveDivider color="#fef3e2" />

      <section
        className={`reviews reveal ${isVisible ? "visible" : ""}`}
        id="reviews"
        ref={ref}
      >
        <div className="reviews-eyebrow">What people are saying</div>
        <h2 className="reviews-h2">Real reviews from real guests</h2>
        <p className="reviews-sub">
          Tourists and locals — here's what they think of The Sexy Mermaid
        </p>

        <div className="reviews-grid">
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">
              "The best seafood we had in all Roatán. The steam fish was
              incredible and the frozen margaritas? We ordered THREE rounds.
              Coming back tomorrow!"
            </p>
            <div className="review-author">
              <div className="review-avatar" style={{ background: "#1D9E75" }}>
                S
              </div>
              <div>
                <div className="review-name">Sarah M.</div>
                <div className="review-origin">Tourist · United States</div>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">
              "The mangrove tour was the highlight of our entire trip. Our guide
              was amazing and the views were breathtaking. The lobster after was
              the perfect ending!"
            </p>
            <div className="review-author">
              <div className="review-avatar" style={{ background: "#C45A2A" }}>
                J
              </div>
              <div>
                <div className="review-name">James T.</div>
                <div className="review-origin">Tourist · Canada</div>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">
              "Como local de Roatán, este es mi lugar favorito. La comida es
              auténtica, el ambiente es increíble y el servicio con una
              sonrisa!"
            </p>
            <div className="review-author">
              <div
                className="review-avatar"
                style={{ background: "#C8A96A", color: "#2C1A0E" }}
              >
                M
              </div>
              <div>
                <div className="review-name">María R.</div>
                <div className="review-origin">Local · Roatán, Honduras</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-cta">
          <p>
            Love The Sexy Mermaid? Leave us a review — it means the world to us!
          </p>
          <a
            href="https://www.google.com/search?q=The+Sexy+Mermaid+Roatan"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-btn"
          >
            ⭐ Leave a Google review
          </a>
        </div>
      </section>

      <WaveDivider color="#fef9f0" flip />
    </>
  );
}
