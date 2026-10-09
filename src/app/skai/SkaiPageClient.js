"use client";

import { useEffect } from "react";
import Layouts from "../../layouts/Layouts";
import EnterpriseIntegration from "../../components/sections/skai/EnterpriseIntegration";
import Industries from "../../components/sections/skai/Industries";
import InteractionEngine from "../../components/sections/skai/InteractionEngine";
import InteractiveDemo from "../../components/sections/skai/InteractiveDemo";
import MeetSkai from "../../components/sections/skai/MeetSkai";
import PhysicalIntelligence from "../../components/sections/skai/PhysicalIntelligence";
import Raas from "../../components/sections/skai/Raas";
import SkaiCta from "../../components/sections/skai/SkaiCta";
import SkaiHero from "../../components/sections/skai/SkaiHero";

// Client Component - composes the SKAI sections in Figma order
export default function SkaiPageClient() {
  // On a direct load of /skai#section the route's loading fallback can swap in the page
  // after the browser's own hash scroll has run, so re-apply it once mounted.
  useEffect(() => {
    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return; // malformed fragment such as "#%" — nothing to scroll to
    }
    if (!id) return;
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Layouts>
      <SkaiHero />
      <MeetSkai />
      <InteractionEngine />
      <PhysicalIntelligence />
      <Raas />
      <Industries />
      <InteractiveDemo />
      <EnterpriseIntegration />
      <SkaiCta />
    </Layouts>
  );
}
