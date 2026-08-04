import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={require("../images/logo.jpg")}
          alt="The Sexy Mermaid logo"
          className="navbar-logo-img"
        />
        <div>
          <span className="logo-name">
            The <span className="coral">Sexy</span> <em>Mermaid</em>
          </span>
          <span className="logo-tagline">
            Seafood · Cocktails · Mangrove Tours · Roatán
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#mangrove">Tours</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}
