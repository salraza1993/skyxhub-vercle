import { useRef } from "react";
import Content from "../../../data/sections/skai/cta.json";
import SkaiButton from "./SkaiButton";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

const SkaiCta = () => {
  const panelRef = useRef(null);
  useInView(panelRef);
  const { email, phone } = Content.contacts;

  return (
    <SkaiSection id="get-started" className="skai-cta">
      <div className="skai-cta__panel" ref={panelRef}>
        <img className="skai-cta__grid" src="/img/skai/cta-grid.svg" alt="" aria-hidden="true" width="1270" height="500" />

        <div className="skai-cta__stage" aria-hidden="true">
          <img className="skai-cta__glow" src="/img/skai/cta-glow.svg" alt="" width="640" height="640" />
          <img className="skai-cta__orbit skai-cta__orbit--lg" src="/img/skai/cta-orbit-lg.svg" alt="" width="520" height="520" />
          <img className="skai-cta__orbit skai-cta__orbit--md" src="/img/skai/cta-orbit-md.png" alt="" width="380" height="380" />
          <img className="skai-cta__floor" src="/img/skai/cta-floor.svg" alt="" width="280" height="40" />
          <img className="skai-cta__robot" src="/img/skai/robots/stand.png" alt="" width="445" height="1200" />
        </div>

        <div className="skai-cta__content">
          <SkaiEyebrow>{Content.eyebrow}</SkaiEyebrow>
          <SkaiHeading segments={Content.title} className="skai-cta__title" />
          <p className="skai-cta__description">{Content.description}</p>
          <div className="skai-actions">
            {Content.ctas.map((cta) => (
              <SkaiButton key={cta.label} variant={cta.variant} arrow={cta.arrow}>
                {cta.label}
              </SkaiButton>
            ))}
          </div>
          <p className="skai-cta__contacts">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
          </p>
        </div>
      </div>
    </SkaiSection>
  );
};

export default SkaiCta;
