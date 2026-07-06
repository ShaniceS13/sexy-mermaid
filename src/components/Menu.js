import "../styles/Menu.css";

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="menu-eyebrow">Our menu</div>
      <h2 className="menu-h2">Delicious island menu</h2>
      <p className="menu-sub">
        Serving breakfast, lunch and dinner · Fresh local cuisine daily
      </p>

      <div className="special-box">
        <span>✨</span>
        <p>
          <strong>Today's house special</strong> — Ask your server what's
          freshest off the boat. Local cuisine, made with love every day.
        </p>
      </div>

      <div className="menu-grid">
        <div className="menu-cat">
          <div className="menu-cat-h">🐟 From the sea</div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Baked lobster</div>
              <div className="mi-desc">Baked potatoes and green salad</div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$25</span>
              <span className="mi-lps">L625</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Garlic shrimps</div>
              <div className="mi-desc">Beans n rice and green salad</div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$20</span>
              <span className="mi-lps">L500</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Fried shrimps</div>
              <div className="mi-desc">Green salad and fried plantain</div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$18</span>
              <span className="mi-lps">L450</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Steam fish</div>
              <div className="mi-desc">Beans n rice and fried plantain</div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$15</span>
              <span className="mi-lps">L375</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Fried fish</div>
              <div className="mi-desc">Green salad and fried plantain</div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$15</span>
              <span className="mi-lps">L375</span>
            </div>
          </div>
        </div>

        <div className="menu-cat">
          <div className="menu-cat-h">🔥 From the grill</div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Beef steak</div>
              <div className="mi-desc">Cream potatoes and fried plantain</div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$18</span>
              <span className="mi-lps">L450</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Burger</div>
              <div className="mi-desc">With fries</div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$12</span>
              <span className="mi-lps">L300</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Hot wings</div>
              <div className="mi-desc">Fried plantain or carrot sticks</div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$15</span>
              <span className="mi-lps">L375</span>
            </div>
          </div>
        </div>

        <div className="menu-cat">
          <div className="menu-cat-h">
            🧊 Frozen cocktails — $10 / L250 each
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Frozen margarita</div>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Piña colada</div>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Daiquiri</div>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Virgin daiquiri</div>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Sea breeze</div>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Chocolate mocalala</div>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Long island iced tea</div>
            </div>
          </div>
        </div>

        <div className="menu-cat">
          <div className="menu-cat-h">🍺 Beers</div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Imported beer</div>
              <div className="mi-desc">
                Corona · Coors Light · Michelob Ultra · Heineken
              </div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$5</span>
              <span className="mi-lps">L125</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="mi-l">
              <div className="mi-name">Local beer</div>
              <div className="mi-desc">Barena · Salva Vida · Imperial</div>
            </div>
            <div className="mi-price">
              <span className="mi-usd">$3</span>
              <span className="mi-lps">L75</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bfast-banner">
        <span>☀️</span>
        <div>
          <h4>Breakfast menu available!</h4>
          <p>
            We serve a full breakfast every morning starting at 8AM. Ask your
            server or message us on WhatsApp!
          </p>
        </div>
      </div>
    </section>
  );
}
