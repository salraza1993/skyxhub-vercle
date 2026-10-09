import Link from "next/link";
import { useRef } from "react";
import Content from "../../../data/sections/skai/industries.json";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiIcon from "./SkaiIcon";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

const TextLink = ({ children }) => (
  <Link href="/contact" className="skai-text-link">
    {children}
    <SkaiIcon name="arrow" size={16} />
  </Link>
);

const Industries = () => {
  const gridRef = useRef(null);
  useInView(gridRef);
  const { custom } = Content;

  return (
    <SkaiSection id="industries" className="skai-industries" light>
      <div className="skai-head-row">
        <div>
          <SkaiEyebrow light>{Content.eyebrow}</SkaiEyebrow>
          <SkaiHeading segments={Content.title} />
        </div>
        <p className="skai-head-row__text">{Content.description}</p>
      </div>

      <div className="skai-industries__grid" ref={gridRef}>
        {Content.items.map((item) => (
          <div key={item.number} className="skai-industry">
            <span className="skai-industry__icon" aria-hidden="true">
              <SkaiIcon name={item.icon} size={34} />
            </span>
            <h3>
              <span className="skai-accent">{item.number}</span> {item.title}
            </h3>
            <p>{item.text}</p>
            <TextLink>{Content.linkLabel}</TextLink>
          </div>
        ))}
        <div className="skai-industry--custom">
          <SkaiIcon name={custom.icon} size={34} />
          <h3>{custom.title}</h3>
          <p>{custom.text}</p>
          <TextLink>{custom.linkLabel}</TextLink>
        </div>
      </div>
    </SkaiSection>
  );
};

export default Industries;
