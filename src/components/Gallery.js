import "../styles/Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-eyebrow">Gallery</div>
      <h2 className="gallery-h2">Life at The Mermaid</h2>
      <p className="gallery-sub">Real photos coming soon — watch this space</p>
      <div className="gallery-grid">
        <div className="g-box g-tall">
          <div className="g-ph">
            <span>🏠</span>
            <p>Restaurant</p>
          </div>
        </div>
        <div className="g-box">
          <div className="g-ph">
            <span>🐟</span>
            <p>Fresh seafood</p>
          </div>
        </div>
        <div className="g-box g-green">
          <div className="g-ph">
            <span>🍹</span>
            <p>Cocktails</p>
          </div>
        </div>
        <div className="g-box g-green">
          <div className="g-ph">
            <span>🪸</span>
            <p>Mangrove tours</p>
          </div>
        </div>
        <div className="g-box">
          <div className="g-ph">
            <span>🎤</span>
            <p>Karaoke night</p>
          </div>
        </div>
      </div>
    </section>
  );
}
