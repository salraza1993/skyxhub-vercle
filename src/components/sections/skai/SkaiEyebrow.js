const SkaiEyebrow = ({ children, light = false, className = "" }) => (
  <p className={`skai-eyebrow${light ? " skai-eyebrow--light" : ""}${className ? ` ${className}` : ""}`}>
    <span className="skai-eyebrow__dot" aria-hidden="true" />
    {children}
  </p>
);

export default SkaiEyebrow;
