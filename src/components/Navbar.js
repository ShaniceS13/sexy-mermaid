import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-name">
          The <span className="coral">Sexy</span> <em>Mermaid</em>
        </span>
        <span className="logo-tagline">
          Seafood · Cocktails · Mangrove Tours · Roatán
        </span>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#tours">Tours</a>
        <a href="gallery">Gallery</a>
        <a href="#about">About</a>
      </div>
      <button className="nav-wa-btn">WhatsApp Us</button>
    </nav>
  );
}
