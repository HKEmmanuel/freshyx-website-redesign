import HeroSection from "../sections/about/HeroSection";
import ImpactMapSection from "../sections/about/ImpactMapSection";
import TimelineSection from "../sections/about/TimelineSection";
import MissionSection from "../sections/about/MissionSection";
import ValuesSection from "../sections/about/ValuesSection";
import PhotoGallerySection from "../sections/about/PhotoGallerySection";
import PartnersSection from "../sections/acceuil/PartnersSection";
import FAQSection from "../sections/about/FAQSection";
import ProgramsSection from "../sections/about/ProgramsSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <ImpactMapSection />
      <TimelineSection />
      <MissionSection />
      <ValuesSection />
      <PhotoGallerySection />
      <FAQSection />
      <PartnersSection />
      <ProgramsSection />
    </>
  );
}