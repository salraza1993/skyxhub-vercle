const SkaiHotspot = ({ label, className = "" }) => (
  <span className={`skai-hotspot${className ? ` ${className}` : ""}`}>
    <span className="skai-hotspot__plus" aria-hidden="true">
      +
    </span>
    <span className="skai-hotspot__label">{label}</span>
  </span>
);

export default SkaiHotspot;
