import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-photo-wrap">
          <img
            src={require("../images/about-main.jpeg")}
            alt="Dining deck overlooking the water at The Sexy Mermaid"
            className="about-main-photo"
          />
          <div className="about-float-photo">
            <img
              src={require("../images/about-food.jpeg")}
              alt="Grilled lobster tail plate at The Sexy Mermaid"
            />
          </div>
        </div>
        <div className="about-text">
          <div className="about-eyebrow">Our story</div>
          <h2 className="about-h2">
            More than a meal. <br />
            <em>It's an experience.</em>
          </h2>
          <p>
            Born on the shores of Roatan, The Sexy Mermaid is where fresh
            Caribbean seafood meets real island hospitality. We're not just a
            restaurant, we're a destination
          </p>
          <p>
            From tourists discovering the island for the first time to locals
            who've lived here their whole lives, everyone is welcome at our
            table, morning, noon, or night
          </p>
          <blockquote className="about-quote">
            Come hungry. Leave happy. Come back tomorrow.
          </blockquote>
          <div className="dir-grid">
            <div className="dir-card">
              <div className="dir-head">⚓ By sea</div>
              <p>Across from BP gas station in Jonesville</p>
            </div>
            <div className="dir-card">
              <div className="dir-head">🚗 By car</div>
              <p>
                Lucy Point - mini super Maite, make a left, follow the arrow
              </p>
            </div>
          </div>
        </div>

        <div className="about-info">
          <div className="about-info-top">
            <h3>Find us in Roatan</h3>
            <span>A and S Restaurant · Lucy Point, Bay Islands</span>
          </div>
          <div className="about-info-body">
            <div className="info-row">
              <span className="info-icon">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <div>
                <div className="info-lbl">Hours</div>
                <div className="info-val">Every day · 8AM – 8PM</div>
              </div>
            </div>

            <div className="info-row">
              <span className="info-icon">☀️</span>
              <div>
                <div className="info-lbl">Meals served</div>
                <div className="info-val">Breakfast · Lunch · Dinner</div>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">
                <FontAwesomeIcon icon={faMicrophone} />
              </span>
              <div>
                <div className="info-lbl">Karaoke night</div>
                <div className="info-val">Wednesdays · 3PM – 6PM</div>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">🍹</span>
              <div>
                <div className="info-lbl">Happy hour</div>
                <div className="info-val">Fridays · 5PM – 6PM</div>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">⛵</span>{" "}
              <div>
                <div className="info-lbl">Mangrove tours</div>
                <div className="info-val">Ask us for availability!</div>
              </div>
            </div>
            <div className="soc-row">
              <a
                className="soc-btn"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
              <a
                className="soc-btn"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
              <a
                className="soc-btn"
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} /> TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
