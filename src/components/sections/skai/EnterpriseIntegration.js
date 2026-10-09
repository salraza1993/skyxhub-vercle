import { useRef } from "react";
import Content from "../../../data/sections/skai/integration.json";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiIcon from "./SkaiIcon";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

// Connector paths from Figma 23:1930, in the 1270 × 480 diagram coordinate space.
const CONNECTORS = [
  "M250 100C330 100 320 240 390 240",
  "M250 240H390",
  "M250 380C330 380 320 240 390 240",
  "M610 240H700",
  "M930 240H1015",
];
const JOINTS = [
  [390, 240, 5],
  [700, 240, 5],
  [1015, 240, 5],
  [250, 100, 4],
  [250, 240, 4],
  [250, 380, 4],
];

const FlowNode = ({ node, className = "" }) => (
  <div className={`skai-flow-node ${className}`}>
    <span className="skai-flow-node__icon">
      <SkaiIcon name={node.icon} size={22} />
    </span>
    <span>
      <span className="skai-flow-node__title">{node.title}</span>
      <span className="skai-flow-node__text">{node.text}</span>
    </span>
  </div>
);

const EnterpriseIntegration = () => {
  const diagramRef = useRef(null);
  useInView(diagramRef);
  const { sources, gateway, engine, robot } = Content;

  return (
    <SkaiSection id="integration" className="skai-integration">
      <div className="skai-head-center">
        <SkaiEyebrow>{Content.eyebrow}</SkaiEyebrow>
        <SkaiHeading segments={Content.title} />
        <p>{Content.description}</p>
      </div>

      <div className="skai-flow" ref={diagramRef}>
        <img className="skai-flow__dots" src="/img/skai/integration-dots.svg" alt="" aria-hidden="true" width="1242" height="482" />
        <svg className="skai-flow__connectors" viewBox="0 0 1270 480" fill="none" aria-hidden="true" focusable="false">
          {CONNECTORS.map((d) => (
            <path key={d} d={d} />
          ))}
          {JOINTS.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </svg>

        <p className="skai-flow__label skai-flow__label--sources">{sources.label}</p>
        <p className="skai-flow__label skai-flow__label--gateway">{gateway.label}</p>
        <p className="skai-flow__label skai-flow__label--engine">{engine.label}</p>

        <div className="skai-flow__sources">
          {sources.items.map((item) => (
            <FlowNode key={item.title} node={item} />
          ))}
        </div>
        <FlowNode node={gateway} className="skai-flow-node--gateway" />
        <img className="skai-flow__engine-glow" src="/img/skai/integration-glow.svg" alt="" aria-hidden="true" width="430" height="400" />
        <FlowNode node={engine} className="skai-flow-node--engine" />

        <div className="skai-flow__robot">
          <img className="skai-flow__robot-floor" src="/img/skai/integration-floor.svg" alt="" aria-hidden="true" width="180" height="30" />
          <img className="skai-flow__robot-img" src="/img/skai/robots/stand.png" alt="" aria-hidden="true" width="445" height="1200" />
          <span className="skai-flow__robot-text">
            <span className="skai-flow-node__title">{robot.title}</span>
            <span className="skai-accent">{robot.tags}</span>
          </span>
        </div>
      </div>

      <div className="skai-integration__benefits">
        {Content.benefits.map((benefit) => (
          <div key={benefit.title} className="skai-benefit">
            <SkaiIcon name={benefit.icon} size={24} />
            <span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </span>
          </div>
        ))}
      </div>
    </SkaiSection>
  );
};

export default EnterpriseIntegration;
