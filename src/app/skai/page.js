import SkaiPageClient from "./SkaiPageClient";

export const metadata = {
  title: "SKAI – AI & Robotics | SKYXHUB",
  description:
    "Meet SKAI, SkyXHub's AI-powered humanoid robot — real-time multilingual conversation, physical intelligence and Robot-as-a-Service for events, hospitality and enterprise spaces.",
};

// Server Component - section content is static JSON imported by each section
export default function SkaiPage() {
  return <SkaiPageClient />;
}
