import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Gallery.css";

const PHOTOS = [
  {
    src: require("../images/gallery-exterior.jpeg"),
    alt: "The Sexy Mermaid restaurant exterior over the water",
    className: "g-tall",
  },
  {
    src: require("../images/gallery-deck-wide.jpeg"),
    alt: "Covered dining deck at The Sexy Mermaid",
    className: "g-wide",
  },
  {
    src: require("../images/gallery-approach.jpeg"),
    alt: "Dock leading to The Sexy Mermaid",
  },
  {
    src: require("../images/gallery-approach-2.jpeg"),
    alt: "Dock and boat near The Sexy Mermaid",
  },
  {
    src: require("../images/gallery-table.jpeg"),
    alt: "Handmade wood table at The Sexy Mermaid",
  },
  {
    src: require("../images/gallery-table-2.jpeg"),
    alt: "Rustic wood dining table at The Sexy Mermaid",
  },
  {
    src: require("../images/gallery-hammock.jpeg"),
    alt: "Hammock corner overlooking the water",
  },
  {
    src: require("../images/gallery-fish.jpeg"),
    alt: "Fresh whole fish plate at The Sexy Mermaid",
  },
  {
    src: require("../images/gallery-lobster.jpeg"),
    alt: "Grilled lobster plate at The Sexy Mermaid",
  },
  {
    src: require("../images/mangrove-roots.jpeg"),
    alt: "Mangrove roots near Oak Ridge, Roatán",
  },
  {
    src: require("../images/gallery-pina-colada.jpg"),
    alt: "Piña colada at The Sexy Mermaid",
  },
  {
    src: require("../images/gallery-long-island.jpg"),
    alt: "Long Island iced tea at The Sexy Mermaid",
  },
];

export default function Gallery() {
  const [ref, isVisible] = useScrollReveal();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const showNext = () => setSelectedIndex((i) => (i + 1) % PHOTOS.length);
  const showPrev = () =>
    setSelectedIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) showNext();
    if (diff < -50) showPrev();
    setTouchStart(null);
  };

  return (
    <section
      className={`gallery reveal ${isVisible ? "visible" : ""}`}
      id="gallery"
      ref={ref}
    >
      <div className="gallery-eyebrow">Gallery</div>
      <h2 className="gallery-h2">Life at The Mermaid</h2>
      <p className="gallery-sub">
        A look at the restaurant, the food, and the water
      </p>

      <div className="gallery-grid">
        {PHOTOS.map((photo, i) => (
          <div
            className={`g-box ${photo.className || ""}`}
            key={i}
            onClick={() => setSelectedIndex(i)}
          >
            <img src={photo.src} alt={photo.alt} className="g-photo" />
          </div>
        ))}

        <div className="g-box g-flyer">
          <div className="flyer-inner">
            <div className="flyer-icon">🎤</div>
            <div className="flyer-title">Karaoke Night</div>
            <div className="flyer-sub">Wednesdays · 3–6PM</div>
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            ‹
          </button>

          <img
            src={PHOTOS[selectedIndex].src}
            alt={PHOTOS[selectedIndex].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-arrow lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
