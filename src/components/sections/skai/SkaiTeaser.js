import { useRef } from "react";
import Content from "../../../data/sections/skai/teaser.json";
import SkaiButton from "./SkaiButton";
import SkaiDivider from "./SkaiDivider";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiHotspot from "./SkaiHotspot";
import SkaiIcon from "./SkaiIcon";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

// Home page teaser for the SKAI page (Figma 11:754): sits between the hero and partner logos.
const SkaiTeaser = () => {
  const rowRef = useRef(null);
  useInView(rowRef);

  return (
    <SkaiSection id="skai-teaser" className="skai-teaser">
      <SkaiDivider />

      <div className="skai-teaser__row" ref={rowRef}>
        <div className="skai-teaser__text">
          <SkaiEyebrow>{Content.eyebrow}</SkaiEyebrow>
          <SkaiHeading segments={Content.title} />
          <p className="skai-teaser__description">{Content.description}</p>
          <ul className="skai-teaser__chips">
            {Content.features.map((feature) => (
              <li key={feature} className="skai-chip">
                <span className="skai-chip__check" aria-hidden="true">
                  <SkaiIcon name="check" size={12} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="skai-actions">
            {Content.ctas.map((cta) => (
              <SkaiButton key={cta.label} href={cta.href} variant={cta.variant} arrow={cta.arrow}>
                {cta.label}
              </SkaiButton>
            ))}
          </div>
        </div>

        <div className="skai-teaser__visual">
          <img className="skai-teaser__glow" src="/img/skai/teaser-glow.svg" alt="" aria-hidden="true" width="540" height="540" />
          <span className="skai-teaser__hex skai-teaser__hex--green" aria-hidden="true">
            <img src="/img/skai/hex-grid-green.svg" alt="" width="186" height="147" />
          </span>
          <span className="skai-teaser__hex skai-teaser__hex--light" aria-hidden="true">
            <img src="/img/skai/hex-grid-light.svg" alt="" width="186" height="147" />
          </span>
          <img className="skai-teaser__ring skai-teaser__ring--lg" src="/img/skai/teaser-ring-lg.svg" alt="" aria-hidden="true" width="300" height="54" />
          <img className="skai-teaser__ring skai-teaser__ring--sm" src="/img/skai/teaser-ring-sm.svg" alt="" aria-hidden="true" width="200" height="36" />
          <img className="skai-teaser__ring skai-teaser__ring--glow" src="/img/skai/teaser-floor-glow.svg" alt="" aria-hidden="true" width="260" height="40" />
          <img className="skai-teaser__robot" src="/img/skai/robots/stand.png" alt="SKAI, SkyXHub's AI-powered humanoid robot" width="445" height="1200" />
          {Content.hotspots.map((hotspot) => (
            <SkaiHotspot key={hotspot.label} label={hotspot.label} className={`skai-teaser__hotspot skai-teaser__hotspot--${hotspot.position}`} />
          ))}
        </div>
      </div>
    </SkaiSection>
  );
};

export default SkaiTeaser;
