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
            The Sexy Mermaid is A and S Restaurant — Amstel and Sandra's place
            on the water at Lucy Point. Sandra's love of cooking is the heart of
            the kitchen, and it shows in every plate that comes out of it.
          </p>
          <p>
            From tourists discovering the island for the first time to locals
            who've lived here their whole lives, everyone is welcome at our
            table, morning, noon, or night.
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
      </div>
    </section>
  );
}
