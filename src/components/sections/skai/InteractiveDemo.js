import { useRef, useState } from "react";
import Content from "../../../data/sections/skai/demo.json";
import SkaiButton from "./SkaiButton";
import SkaiEyebrow from "./SkaiEyebrow";
import SkaiHeading from "./SkaiHeading";
import SkaiIcon from "./SkaiIcon";
import SkaiSection from "./SkaiSection";
import useInView from "./useInView";

const InteractiveDemo = () => {
  const { tabs, conversations, agent } = Content;
  const [active, setActive] = useState(tabs[0].id);
  const tabRefs = useRef([]);
  const gridRef = useRef(null);
  useInView(gridRef);

  const selectTab = (index) => {
    setActive(tabs[index].id);
    tabRefs.current[index]?.focus();
    // On small screens the active card replaces the others right below the tabs; on larger
    // screens all four are visible, so scroll the highlighted one into view if it is off-screen.
    if (window.matchMedia("(max-width: 768px)").matches) return;
    document.getElementById(`skai-panel-${tabs[index].id}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const onKeyDown = (event, index) => {
    const last = tabs.length - 1;
    const next = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    selectTab(next);
  };

  return (
    <SkaiSection id="demo" className="skai-demo">
      <img className="skai-demo__glow skai-demo__glow--left" src="/img/skai/demo-glow-left.svg" alt="" aria-hidden="true" width="900" height="900" />
      <img className="skai-demo__glow skai-demo__glow--right" src="/img/skai/demo-glow-right.svg" alt="" aria-hidden="true" width="900" height="800" />

      <div className="skai-head-center">
        <SkaiEyebrow>{Content.eyebrow}</SkaiEyebrow>
        <SkaiHeading segments={Content.title} />
        <p>{Content.description}</p>
      </div>

      <div className="skai-demo__tabs" role="tablist" aria-label="Example conversations">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(node) => (tabRefs.current[index] = node)}
            type="button"
            role="tab"
            id={`skai-tab-${tab.id}`}
            aria-controls={`skai-panel-${tab.id}`}
            aria-selected={active === tab.id}
            tabIndex={active === tab.id ? 0 : -1}
            className={`skai-demo__tab${active === tab.id ? " skai-demo__tab--active" : ""}`}
            onClick={() => selectTab(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="skai-demo__grid" ref={gridRef}>
        {tabs.map((tab) => {
          const conversation = conversations[tab.id];
          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`skai-panel-${tab.id}`}
              aria-labelledby={`skai-tab-${tab.id}`}
              className={`skai-chat${active === tab.id ? " skai-chat--active" : ""}`}
            >
              <div className="skai-chat__header">
                <span className="skai-chat__agent">
                  <span className="skai-chat__avatar" aria-hidden="true">
                    <img src="/img/skai/robots/half.png" alt="" width="240" height="223" />
                  </span>
                  <span>
                    <span className="skai-chat__name">{agent.name}</span>
                    <span className="skai-chat__status">{agent.status}</span>
                  </span>
                </span>
                <span className="skai-chat__badge">
                  <SkaiIcon name={tab.icon} size={14} />
                  {tab.label}
                </span>
              </div>

              <div className="skai-chat__messages">
                {conversation.messages.map((message, index) => (
                  <p key={index} className={`skai-chat__bubble skai-chat__bubble--${message.from}`}>
                    {message.text}
                  </p>
                ))}
              </div>

              <div className="skai-chat__footer" aria-hidden="true">
                <span className="skai-chat__chips">
                  {conversation.suggestions.map((suggestion) => (
                    <span key={suggestion}>{suggestion}</span>
                  ))}
                </span>
                <span className="skai-chat__mic">
                  <SkaiIcon name="mic" size={18} />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="skai-demo__cta">
        <SkaiButton variant={Content.cta.variant} arrow>
          {Content.cta.label}
        </SkaiButton>
      </div>
    </SkaiSection>
  );
};

export default InteractiveDemo;
