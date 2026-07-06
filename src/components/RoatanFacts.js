import "../styles/RoatanFacts.css";

export default function RoatanFacts() {
  return (
    <div className="roatan-facts">
      <div className="facts-head">
        🌎 Visiting Roatan? Here's why it's special
      </div>
      <div className="facts-row">
        <div className="fact">
          <div className="fact-num">#2</div>
          <div className="fact-lbl">
            World's second largest barrier reef — right outside our door
          </div>
        </div>

        <div className="fact">
          <div className="fact-num">400+</div>
          <div className="fact-lbl">
            Species of Caribbean fish in the surrounding waters
          </div>
        </div>

        <div className="fact">
          <div className="fact-num">Bay Islands</div>
          <div className="fact-lbl">
            English-speaking, welcoming, unlike anywhere else in Honduras
          </div>
        </div>

        <div className="fact">
          <div className="fact-num">Mangroves</div>
          <div className="fact-lbl">
            Among the Caribbean's most biodiverse and beautiful ecosystems
          </div>
        </div>
      </div>
    </div>
  );
}
