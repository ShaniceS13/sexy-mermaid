import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/MangroveToursSection.css";

export default function MangroveToursSection() {
  return (
    <section className="mangrove" id="mangrove">
      <div className="mangrove-grid">
        <div className="mangrove-photo-wrap">
          <img
            src={require("../images/mangrove-tunnel.jpg")}
            alt="Boat passing through mangrove tunnels near Oak Ridge, Roatán"
            className="mangrove-photo"
          />
          <div className="mangrove-photo-caption">
            Through the tunnels of Oak Ridge
          </div>
        </div>

        <div className="mangrove-info">
          <div className="mangrove-eyebrow">🪸 Mangrove tours</div>
          <h2 className="mangrove-h2">
            Boat out with <br />
            <em>a local captain</em>
          </h2>
          <p className="mangrove-desc">
            We run small-boat tours straight from our dock into the mangrove
            canals that connect Oak Ridge and Jonesville: narrow green tunnels,
            herons, upside-down jellyfish, and the stilt-house communities along
            the way.
          </p>

          <ul className="mangrove-list">
            <li>⏱️ About 60 to 90 minutes on the water</li>
            <li>🛶 Small groups, shaded boat, captain who grew up here</li>
            <li>🌅 Morning trips are calmest, afternoons are best for birds</li>
            <li>🍽️ Come back hungry — your table will be waiting</li>
          </ul>

          <div className="mangrove-note">
            Availability changes with the weather and the tide. Message us on
            WhatsApp and we'll tell you exactly what's running today.
          </div>

          <a
            className="mangrove-btn"
            href="https://wa.me/50433782622"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Ask about tour availability
          </a>
        </div>
      </div>
    </section>
  );
}
