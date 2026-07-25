import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/MangroveToursSection.css";

export default function MangroveToursSection() {
  return (
    <section className="mangrove" id="mangrove">
      <div className="mangrove-eyebrow">🪸 Mangrove tours</div>
      <h2 className="mangrove-h2">
        Explore Roatan's <br />
        <em>hidden waterways</em>
      </h2>
      <p className="mangrove-desc">
        Step beyond the restaurant and into the wild heart of Roatan. Our
        mangrove tours take you deep into ancient Caribbean waterways. An
        unforgettable experience for first-time visitors and locals alike.
      </p>
      <div className="mangrove-cards">
        <div className="mangrove-card">
          <div className="mangrove-icon">🌿</div>
          <h4>Ancient mangrove forests</h4>
          <p>Navigate through Roatan's lush, protected ecosystems</p>
        </div>
        <div className="mangrove-card">
          <div className="mangrove-icon">🦜</div>
          <h4>Wildlife spotting</h4>
          <p>Birds, fish, and marine life in their natural habitat</p>
        </div>
        <div className="mangrove-card">
          <div className="mangrove-icon">📸</div>
          <h4>Unforgettable views</h4>
          <p>Photo opportunities unlike anywhere else on the island</p>
        </div>
      </div>
      <div className="mangrove-cta-row">
        <button className="mangrove-btn">
          {" "}
          <FontAwesomeIcon icon={faWhatsapp} />
          Ask about availability
        </button>
        <div className="mangrove-soon">
          <FontAwesomeIcon icon={faMoneyBill} /> Pricing and schedules coming
          soon!
        </div>
      </div>
    </section>
  );
}
