import HeroSection from '../sections/acceuil/HeroSection.tsx';
import StatsSection from '../sections/acceuil/StatsSection.tsx';
import ProjectsSection from '../sections/acceuil/ProjectsSection.tsx';
import TestimonialsSection from '../sections/acceuil/TestimonialsSection.tsx';
import ActiviteSection from '../sections/acceuil/ActiviteSection.tsx';
import MissionSection from '../sections/acceuil/MissionSection.tsx';
import PartnersSection from '../sections/acceuil/PartnersSection.tsx';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <ActiviteSection />
      <MissionSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection/>
    </main>
  );
};

export default HomePage;
