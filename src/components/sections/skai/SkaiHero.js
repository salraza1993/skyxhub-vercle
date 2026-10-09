import Link from "next/link";
import { useRef } from "react";
import Content from "../../../data/sections/skai/hero.json";
import SkaiButton from "./SkaiButton";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

// Heights (px) of the 14 waveform bars in Figma 19:1070.
const WAVE = [8, 16, 26, 14, 30, 20, 10, 24, 18, 8, 14, 6, 20, 12];

const SkaiHero = () => {
  const textRef = useRef(null);
  useInView(textRef);
  const { online, intent, listening, languages } = Content.statusCards;

  return (
    <SkaiSection id="hero" className="skai-hero">
      <img className="skai-hero__grid" src="/img/skai/hero-grid.svg" alt="" aria-hidden="true" width="1441" height="901" />

      <div className="skai-hero__text" ref={textRef}>
        <nav className="skai-breadcrumb" aria-label="Breadcrumb">
          {Content.breadcrumb.map((item, index) =>
            item.href ? (
              <span key={index}>
                <Link href={item.href}>{item.label}</Link>
                <span className="skai-breadcrumb__sep" aria-hidden="true">
                  /
                </span>
              </span>
            ) : (
              <span key={index} className="skai-accent" aria-current="page">
                {item.label}
              </span>
            )
          )}
        </nav>

        <SkaiEyebrow>{Content.eyebrow}</SkaiEyebrow>
        <SkaiHeading as="h1" segments={Content.title} className="skai-hero__title" />
        <p className="skai-hero__description">{Content.description}</p>
        <div className="skai-actions">
          {Content.ctas.map((cta) => (
            <SkaiButton key={cta.label} variant={cta.variant} arrow={cta.arrow}>
              {cta.label}
            </SkaiButton>
          ))}
        </div>
        <a href="#meet" className="skai-hero__scroll">
          {Content.scrollLabel}
        </a>
      </div>

      <div className="skai-hero__stage">
        <img className="skai-hero__glow" src="/img/skai/hero-glow.svg" alt="" aria-hidden="true" width="920" height="960" />
        <img className="skai-hero__ring skai-hero__ring--lg" src="/img/skai/holo-ring-lg.svg" alt="" aria-hidden="true" width="520" height="520" />
        <img className="skai-hero__ring skai-hero__ring--md" src="/img/skai/holo-ring-md.png" alt="" aria-hidden="true" width="400" height="400" />
        <img className="skai-hero__ring skai-hero__ring--sm" src="/img/skai/holo-ring-sm.svg" alt="" aria-hidden="true" width="280" height="280" />
        <img className="skai-hero__floor skai-hero__floor--glow" src="/img/skai/floor-glow.svg" alt="" aria-hidden="true" width="420" height="70" />
        <img className="skai-hero__floor skai-hero__floor--lg" src="/img/skai/floor-ring-lg.svg" alt="" aria-hidden="true" width="380" height="65" />
        <img className="skai-hero__floor skai-hero__floor--sm" src="/img/skai/floor-ring-sm.svg" alt="" aria-hidden="true" width="260" height="44" />
        <img className="skai-hero__robot" src="/img/skai/robots/stand.png" alt="SKAI, SkyXHub's AI-powered humanoid robot" width="445" height="1200" />

        <div className="skai-holo skai-holo--status">
          <p className="skai-holo__title">
            <span className="skai-holo__online" aria-hidden="true" />
            {online.title}
          </p>
          <p className="skai-holo__small">{online.subtitle}</p>
        </div>

        <div className="skai-holo skai-holo--intent">
          <p className="skai-holo__small">{intent.label}</p>
          <p className="skai-holo__value">{intent.value}</p>
          <span className="skai-holo__bar" aria-hidden="true">
            <span />
          </span>
          <p className="skai-holo__small skai-accent">{intent.confidence}</p>
        </div>

        <div className="skai-holo skai-holo--voice">
          <p className="skai-holo__small">{listening.label}</p>
          <span className="skai-wave" aria-hidden="true">
            {WAVE.map((height, index) => (
              <span key={index} style={{ height, animationDelay: `${index * 0.08}s` }} />
            ))}
          </span>
        </div>

        <div className="skai-holo skai-holo--languages">
          <p className="skai-holo__small">{languages.label}</p>
          <span className="skai-holo__langs">
            {languages.items.map((lang) => (
              <span key={lang} className={lang === languages.active ? "skai-accent" : undefined}>
                {lang}
              </span>
            ))}
          </span>
        </div>
      </div>
    </SkaiSection>
  );
};

export default SkaiHero;
