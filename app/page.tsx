import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import AboutSection from '@/components/sections/AboutSection';
import BrandsSection from '@/components/sections/BrandsSection';
import EventStandsSection from '@/components/sections/EventStandsSection';
import HeroSection from '@/components/sections/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { siteFeatures } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-section">
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <ProcessSection />
        <ProjectsSection />
        <EventStandsSection />
        <StatsSection />
        {siteFeatures.isTestimonialsSectionVisible && <TestimonialsSection />}
      </main>
      <SiteFooter />
    </>
  );
}
