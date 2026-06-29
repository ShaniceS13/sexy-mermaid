import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div className="hero-pill">📍 Roatán, Bay Islands · Honduras</div>
        <h1 className="hero-h1">
          Your Roatán <br /> adventure<em>starts here</em>
        </h1>
        <p className="hero-sub">
          Fresh seafood, frozen cocktails, and <strong>mangrove tours</strong>
          all in one spot! Serving <strong>breakfast, lunch, and dinner</strong>
          every day. Tourists and locals equally welcome
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Explore our menu</button>
          <button className="btn-outline">Book a tour</button>
        </div>
      </div>
      <div className="hero-logo">
        <div className="logo-ring">
          <img
            src={require("../images/logo.jpg")}
            alt="The Sexy Mermaid logo"
          />
        </div>
        <p className="hero-open">Open every day · 8AM – 8PM</p>
      </div>
    </section>
  );
}
