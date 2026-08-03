import "../styles/WaveDivider.css";

export default function WaveDivider({ color, flip = false }) {
  return (
    <div className={`wave-divider ${flip ? "wave-flip" : ""}`}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" fill={color} />
      </svg>
    </div>
  );
}
