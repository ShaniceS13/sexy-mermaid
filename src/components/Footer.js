import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            The <span>Sexy</span> <em>Mermaid</em>
          </div>
          <div className="footer-tagline">
            A and S Restaurant · Lucy Point, Roatán
            <br />
            Bay Islands, Honduras
            <br />
            Breakfast · Lunch · Dinner · 8AM – 8PM daily
            <br />
            Seafood · Cocktails · Mangrove Tours
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-h">Navigate</div>
          <a className="footer-link" href="#home">
            Home
          </a>
          <a className="footer-link" href="#menu">
            Menu
          </a>
          <a className="footer-link" href="#tours">
            Tours
          </a>
          <a className="footer-link" href="#gallery">
            Gallery
          </a>
          <a className="footer-link" href="#about">
            About
          </a>
        </div>
        <div className="footer-col">
          <div className="footer-col-h">Visit us</div>
          <a className="footer-link" href="#">
            By sea — Jonesville
          </a>
          <a className="footer-link" href="#">
            By car — Lucy Point
          </a>
          <a className="footer-link" href="#">
            WhatsApp us
          </a>
          <a className="footer-link" href="#">
            Instagram
          </a>
          <a className="footer-link" href="#">
            Facebook
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2025 The Sexy Mermaid · A and S Restaurant · Roatan, Bay Islands,
          Honduras
        </div>
      </div>
    </footer>
  );
}
