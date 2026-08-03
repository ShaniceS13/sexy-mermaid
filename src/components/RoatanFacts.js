import WaveDivider from "./WaveDivider";
import "../styles/RoatanFacts.css";

const FACTS = [
  {
    icon: "🌊",
    title: "Second largest reef on earth",
    text: "The Mesoamerican Barrier Reef runs right past the east end. Some of it starts a short swim from our dock.",
  },
  {
    icon: "🛶",
    title: "Oak Ridge is the island Venice",
    text: "Families here get around by water taxi between stilt houses. Roads came late; boats came first.",
  },
  {
    icon: "🐟",
    title: "The east end still fishes for real",
    text: "Lucy Point men leave before sunrise. What lands on your plate at noon was swimming at dawn.",
  },
  {
    icon: "🌊",
    title: "Mangrove tunnels you can paddle",
    text: "Oak Ridge and Jonesville are connected by natural mangrove canals cut through the roots.",
  },
  {
    icon: "🛶",
    title: "Roatán speaks two tongues",
    text: "Spanish and Caribbean English creole, often in the same sentence. Both are welcome at our tables.",
  },
  {
    icon: "🐟",
    title: "Sunrise side of the island",
    text: "West End gets the sunsets, the east end gets first light on the water. Quieter, greener, ours.",
  },
];

export default function RoatanFacts() {
  return (
    <>
      <WaveDivider color="#14342b" />

      <div className="roatan-facts">
        <div className="facts-overlay">
          <div className="facts-head">Fun facts</div>
          <h2 className="facts-h2">
            Things worth knowing <br /> about the east end of Roatan
          </h2>

          <div className="facts-row">
            {FACTS.map((fact, i) => (
              <div className="fact" key={i}>
                <div className="fact-icon">{fact.icon}</div>
                <div className="fact-title">{fact.title}</div>
                <div className="fact-lbl">{fact.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveDivider color="#fef9f0" flip />
    </>
  );
}
