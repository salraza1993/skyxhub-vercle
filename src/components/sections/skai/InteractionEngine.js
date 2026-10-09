import { useRef } from "react";
import Content from "../../../data/sections/skai/engine.json";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiIcon from "./SkaiIcon";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

const InteractionEngine = () => {
  const contentRef = useRef(null);
  useInView(contentRef);

  return (
    <SkaiSection id="engine" className="skai-engine">
      <img className="skai-engine__bg-glow" src="/img/skai/engine-glow.svg" alt="" aria-hidden="true" width="1000" height="1000" />

      <div className="skai-engine__split">
        <div className="skai-engine__diagram" aria-hidden="true">
          <img className="skai-engine__network" src="/img/skai/engine-network.svg" alt="" width="600" height="560" />
          <img className="skai-engine__core-glow" src="/img/skai/engine-core-glow.svg" alt="" width="380" height="380" />
          <span className="skai-engine__core">
            <SkaiIcon name="brain" size={56} />
          </span>
          {Content.nodeLabels.map((node) => (
            <span key={node.label} className={`skai-engine__label skai-engine__label--${node.position}`}>
              {node.label}
            </span>
          ))}
        </div>

        <div className="skai-engine__content" ref={contentRef}>
          <SkaiEyebrow>{Content.eyebrow}</SkaiEyebrow>
          <SkaiHeading segments={Content.title} />
          <p className="skai-engine__description">{Content.description}</p>

          <ul className="skai-engine__list">
            {Content.features.map((feature) => (
              <li key={feature.title} className="skai-engine__item">
                <span className="skai-tile">
                  <SkaiIcon name={feature.icon} size={22} />
                </span>
                <span className="skai-engine__item-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </span>
                <SkaiIcon name="arrow" size={18} className="skai-engine__arrow" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SkaiSection>
  );
};

export default InteractionEngine;
