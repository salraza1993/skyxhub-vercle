import { useRef } from "react";
import Content from "../../../data/sections/skai/physical.json";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiIcon from "./SkaiIcon";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

// Decorations drawn on top of specific poses in Figma 20:1266.
const OVERLAYS = {
  detect: { src: "/img/skai/vision-scan.svg", className: "skai-pose-card__scan", width: 150, height: 120 },
  greet: { src: "/img/skai/motion-path.svg", className: "skai-pose-card__motion skai-pose-card__motion--greet", width: 80, height: 80 },
};

const PhysicalIntelligence = () => {
  const sequenceRef = useRef(null);
  useInView(sequenceRef);

  return (
    <SkaiSection id="physical" className="skai-physical">
      <img className="skai-physical__glow" src="/img/skai/physical-glow.svg" alt="" aria-hidden="true" width="1000" height="800" />

      <div className="skai-head-center">
        <SkaiEyebrow>{Content.eyebrow}</SkaiEyebrow>
        <SkaiHeading segments={Content.title} />
        <p>{Content.description}</p>
      </div>

      <div className="skai-physical__sequence" ref={sequenceRef}>
        {Content.steps.map((step) => {
          const overlay = OVERLAYS[step.id];
          return (
            <div key={step.id} className={`skai-pose-card${step.highlighted ? " skai-pose-card--active" : ""}`}>
              <div className="skai-pose-card__stage" aria-hidden="true">
                <img className="skai-pose-card__floor" src="/img/skai/pose-floor.svg" alt="" width="150" height="24" />
                <img className={`skai-pose-card__pose skai-pose-card__pose--${step.id}`} src={step.image.src} alt="" width={step.image.width} height={step.image.height} />
                {overlay && <img className={overlay.className} src={overlay.src} alt="" width={overlay.width} height={overlay.height} />}
              </div>
              <span className="skai-pose-card__fade" aria-hidden="true" />
              <div className="skai-pose-card__label">
                <h3>
                  <span className="skai-accent">{step.number}</span> {step.title}
                </h3>
                <p>{step.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="skai-physical__capabilities">
        {Content.capabilities.map((capability) => (
          <div key={capability.title} className="skai-capability">
            <span className="skai-tile skai-tile--sm">
              <SkaiIcon name={capability.icon} size={22} />
            </span>
            <h3>{capability.title}</h3>
            <p>{capability.text}</p>
          </div>
        ))}
      </div>
    </SkaiSection>
  );
};

export default PhysicalIntelligence;
