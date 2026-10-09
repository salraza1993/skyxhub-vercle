"use client";

import Layouts from "../layouts/Layouts";

import ContactSection from "../components/sections/Contact";
import Divider from "../components/sections/Divider";
import HomeSpecialSection from "../components/sections/HomeSpecialSection";
import HowItWorksSection from "../components/sections/HowItWorks";
import PartnersSection from "../components/sections/Partners";
import ServicesSection from "../components/sections/Services";
import SkillsSection from "../components/sections/Skills";
import LatestProjectsSlider from "../components/sliders/LatestProjects.js";
import HeroSlideshowSlider from "../components/sliders/HeroSlideshow.js";
import SkaiTeaser from "../components/sections/skai/SkaiTeaser";

// Client Component - handles interactive elements
export default function HomePageClient({ posts, projects }) {
  return (
    <Layouts transparent>
      <HeroSlideshowSlider />
      <SkaiTeaser />
      <PartnersSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <LatestProjectsSlider projects={projects} />
      <HomeSpecialSection />
      <HowItWorksSection />
      <SkillsSection />
      <ContactSection />
    </Layouts>
  );
}
