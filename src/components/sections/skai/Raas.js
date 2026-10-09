import { useRef } from "react";
import Content from "../../../data/sections/skai/raas.json";
import SkaiButton from "./SkaiButton";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiIcon from "./SkaiIcon";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

const Raas = () => {
  const plansRef = useRef(null);
  useInView(plansRef);

  return (
    <SkaiSection id="raas" className="skai-raas">
      <img className="skai-raas__glow" src="/img/skai/raas-glow.svg" alt="" aria-hidden="true" width="900" height="800" />

      <div className="skai-head-center">
        <SkaiEyebrow>{Content.eyebrow}</SkaiEyebrow>
        <SkaiHeading segments={Content.title} />
        <p>{Content.description}</p>
      </div>

      <div className="skai-raas__plans" ref={plansRef}>
        {Content.plans.map((plan) => (
          <div key={plan.name} className={`skai-plan${plan.featured ? " skai-plan--featured" : ""}`}>
            {plan.featured && <img className="skai-plan__glow" src="/img/skai/plan-glow.svg" alt="" aria-hidden="true" width="440" height="440" />}
            <div className="skai-plan__top">
              <span className="skai-plan__tag">{plan.tag}</span>
              {plan.badge && <span className="skai-plan__badge">{plan.badge}</span>}
            </div>
            <h3 className="skai-plan__name">{plan.name}</h3>
            <p className="skai-plan__description">{plan.description}</p>
            <p className="skai-plan__price">
              <span>{plan.price}</span> {plan.priceNote}
            </p>
            <ul className="skai-plan__features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="skai-plan__check">
                    <SkaiIcon name="check" size={12} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <SkaiButton variant={plan.cta.variant} arrow className="skai-btn--block">
              {plan.cta.label}
            </SkaiButton>
          </div>
        ))}
      </div>

      <div className="skai-raas__usecases-head">
        <h3>{Content.useCasesTitle}</h3>
        <p>{Content.useCasesNote}</p>
      </div>
      <ul className="skai-raas__usecases">
        {Content.useCases.map((useCase) => (
          <li key={useCase.label} className="skai-usecase">
            <SkaiIcon name={useCase.icon} size={28} />
            <span>{useCase.label}</span>
          </li>
        ))}
      </ul>
    </SkaiSection>
  );
};

export default Raas;
