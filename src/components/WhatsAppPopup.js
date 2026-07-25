import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../styles/WhatsAppPopup.css";

export default function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const phone = "50433782622";

  return (
    <div className="wa-fixed">
      {open && (
        <div className="wa-popup">
          <div className="wa-popup-head">
            <FontAwesomeIcon icon={faWhatsapp} />
            <div>
              <div className="wa-popup-name">The Sexy Mermaid</div>
              <div className="wa-popup-sub">
                Typically replies within minutes
              </div>
            </div>
          </div>
          <div className="wa-popup-body">
            <div className="wa-msg">
              Hi! I found The Sexy Mermaid online. I'd love to know more about
              your menu and mangrove tours!
            </div>
            <a
              className="wa-open-btn"
              href={`https://wa.me/${phone}?text=Hi! I found The Sexy Mermaid online. I'd love to know more!`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Open WhatsApp
            </a>
          </div>
        </div>
      )}
      <button className="wa-bubble" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </button>
    </div>
  );
}
