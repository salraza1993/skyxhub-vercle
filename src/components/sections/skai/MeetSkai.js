import { useRef } from "react";
import Content from "../../../data/sections/skai/meet.json";
import SkaiDivider from "./SkaiDivider";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiHotspot from "./SkaiHotspot";
import SkaiIcon from "./SkaiIcon";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

const MeetSkai = () => {
  const stageRef = useRef(null);
  useInView(stageRef);
  const { hotspots, caption } = Content.stage;

  return (
    <SkaiSection id="meet" className="skai-meet">
      <SkaiDivider />

      <div className="skai-head-row">
        <div>
          <SkaiEyebrow>{Content.eyebrow}</SkaiEyebrow>
          <SkaiHeading segments={Content.title} />
        </div>
        <p className="skai-head-row__text">{Content.description}</p>
      </div>

      <div className="skai-meet__stage" ref={stageRef}>
        <img className="skai-meet__light skai-meet__light--1" src="/img/skai/stage-light.svg" alt="" aria-hidden="true" width="300" height="600" />
        <img className="skai-meet__light skai-meet__light--2" src="/img/skai/stage-light-center.svg" alt="" aria-hidden="true" width="300" height="600" />
        <img className="skai-meet__light skai-meet__light--3" src="/img/skai/stage-light.svg" alt="" aria-hidden="true" width="300" height="600" />
        <img className="skai-meet__floor" src="/img/skai/stage-floor.svg" alt="" aria-hidden="true" width="900" height="120" />
        <img className="skai-meet__robot" src="/img/skai/robots/stand.png" alt="SKAI humanoid robot standing on stage" width="445" height="1200" />
        <img className="skai-meet__side skai-meet__side--left" src="/img/skai/robots/stand-reverse.png" alt="" aria-hidden="true" width="372" height="800" />
        <img className="skai-meet__side skai-meet__side--right" src="/img/skai/robots/stand-reverse.png" alt="" aria-hidden="true" width="372" height="800" />
        <span className="skai-meet__fade" aria-hidden="true" />

        <div className="skai-meet__caption">
          <p className="skai-meet__caption-title">{caption.title}</p>
          <p className="skai-meet__caption-tags">{caption.tags}</p>
        </div>

        {hotspots.map((hotspot) => (
          <SkaiHotspot key={hotspot.label} label={hotspot.label} className={`skai-meet__hotspot skai-meet__hotspot--${hotspot.position}`} />
        ))}
      </div>

      <div className="skai-pillars">
        {Content.pillars.map((pillar) => (
          <div key={pillar.number} className="skai-pillar">
            <span className="skai-pillar__line" aria-hidden="true" />
            <h3 className="skai-pillar__title">
              <SkaiIcon name={pillar.icon} size={28} />
              <span>
                <span className="skai-accent">{pillar.number}</span> {pillar.title}
              </span>
            </h3>
            <p>{pillar.text}</p>
          </div>
        ))}
      </div>
    </SkaiSection>
  );
};

export default MeetSkai;
