import { useScrollReveal } from "../hooks/useScrollReveal";
import WaveDivider from "./WaveDivider";
import "../styles/CTASection.css";

export default function CTASection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <>
      <section className="cta-sec">
        <div className="cta-eyebrow">Come find us</div>
        <h2 className="cta-h2">
          Ready for a taste of
          <br />
          <em>the real Roatán?</em>
        </h2>
        <p className="cta-sub">
          Whether you're visiting the island or you call it home —<br />
          pull up a chair. The water's warm and the cocktails are cold.
        </p>
        <a
          href="https://wa.me/50433782622"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-wa-btn"
        >
          💬 Message us on WhatsApp
        </a>
      </section>

      <WaveDivider color="#fef9f0" flip />

      <section
        className={`find-us reveal ${isVisible ? "visible" : ""}`}
        id="visit"
        ref={ref}
      >
        <div className="find-us-grid">
          <div className="find-us-info">
            <div className="find-us-eyebrow">Come see us</div>
            <h2 className="find-us-h2">Find The Sexy Mermaid</h2>

            <div className="find-row">
              <span className="find-icon">📍</span>
              <div>
                <div className="find-lbl">Address</div>
                <div className="find-val">
                  Lucy Point, Oak Ridge <br />
                  Roatán, Bay Islands, Honduras
                </div>
              </div>
            </div>

            <div className="find-row">
              <span className="find-icon">🕐</span>
              <div>
                <div className="find-lbl">Hours</div>
                <div className="find-val">
                  8:00AM – 8:00PM, every day of the week
                </div>
              </div>
            </div>

            <div className="find-row">
              <span className="find-icon">📞</span>
              <div>
                <div className="find-lbl">Phone</div>
                <a className="find-val find-link" href="tel:+50433782622">
                  +504 3378 2622
                </a>
              </div>
            </div>

            <div className="find-row">
              <span className="find-icon">✉️</span>
              <div>
                <div className="find-lbl">Email</div>
                <a
                  className="find-val find-link"
                  href="mailto:info@thesexymermaidroatan.com"
                >
                  info@thesexymermaidroatan.com
                </a>
              </div>
            </div>
          </div>

          <div className="find-us-map">
            <iframe
              title="The Sexy Mermaid location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-86.3735%2C16.3851%2C-86.3535%2C16.3951&layer=mapnik&marker=16.3901%2C-86.3635"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=16.3901,-86.3635"
              target="_blank"
              rel="noopener noreferrer"
              className="find-directions-btn"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
