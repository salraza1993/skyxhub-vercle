// Renders a heading from JSON segments: [{ text, accent?, light? }].
// accent → brand green, light → thin weight (used in the uppercase hero/CTA headlines).
const SkaiHeading = ({ as: Tag = "h2", segments = [], className = "" }) => (
  <Tag className={`skai-heading${className ? ` ${className}` : ""}`}>
    {segments.map((segment, index) => {
      const classes = [segment.accent && "skai-accent", segment.light && "skai-thin"].filter(Boolean).join(" ");
      return classes ? (
        <span key={index} className={classes}>
          {segment.text}
        </span>
      ) : (
        <span key={index}>{segment.text}</span>
      );
    })}
  </Tag>
);

export default SkaiHeading;
