const SkaiSection = ({ id, className = "", light = false, children }) => (
  <section
    id={id}
    className={`skai-section${light ? " skai-section--light" : ""}${className ? ` ${className}` : ""}`}
  >
    <div className="container">{children}</div>
  </section>
);

export default SkaiSection;
