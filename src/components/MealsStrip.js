import "./MealsStrip.css";

export default function MealsStrip() {
  return (
    <div className="meals-strip">
      <div className="meals-item">☀️Breakfast served</div>
      <span className="meals-dot">·</span>
      <div className="meals-item">🍽️ Lunch served</div>
      <span className="meals-dot">·</span>
      <div className="meals-item">🌙 Dinner served</div>
      <span className="meals-dot">·</span>
      <div className="meals-item meals-hours">
        All day, every day · 8AM – 8PM
      </div>
    </div>
  );
}
