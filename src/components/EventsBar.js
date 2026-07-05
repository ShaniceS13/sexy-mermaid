import "./EventsBar.css";

export default function EventsBar() {
  return (
    <div className="events-bar">
      <div className="ev-pill">
        <span className="ev-chip ev-chip-coral">🎤 Karaoke</span>
        <span className="ev-txt">
          <strong>Wednesdays</strong> · 3–6PM
        </span>
      </div>
      <div className="ev-sep"></div>
      <div className="ev-pill">
        <span className="ev-chip ev-chip-teal">🍹 Happy hour</span>
        <span className="ev-txt">
          <strong>Fridays</strong> · 5–6PM
        </span>
      </div>
      <div className="ev-sep"></div>
      <div className="ev-pill">
        <span className="ev-chip- ev-chip-gold">🪸 Mangrove tours</span>
        <span className="ev-txt">
          <strong>Ask us</strong> to book!
        </span>
      </div>
      <div className="ev-sep"></div>
      <span className="ev-txt">📍 Lucy Point · By sea or car</span>
    </div>
  );
}
