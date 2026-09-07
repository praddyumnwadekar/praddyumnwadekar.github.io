// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImpactSection from '@/components/ImpactSection';
import ScrollVelocity from '@/components/ScrollVelocity';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ExperienceArchitecture from '@/components/ExperienceArchitecture';
import FeaturedProject from '@/components/FeaturedProject';
import ProjectsGrid from '@/components/ProjectsGrid';
import TechnicalSkills from '@/components/TechnicalSkills';
import EngineeringApproach from '@/components/EngineeringApproach';
import EducationCertifications from '@/components/EducationCertifications';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#080C12] overflow-x-hidden">
      <Navbar />
      <Hero />

      <ImpactSection />

      {/* Scroll velocity ticker — technology marquee */}
      <div className="border-y border-slate-800/50 bg-[#0D1119]">
        <ScrollVelocity baseVelocity={-1.5}>
          PYTHON &nbsp;·&nbsp; AUTOMATION &nbsp;·&nbsp; DJANGO REST FRAMEWORK &nbsp;·&nbsp; CI/CD &nbsp;·&nbsp; BLUETOOTH VALIDATION &nbsp;·&nbsp; MYSQL &nbsp;·&nbsp; OOP ARCHITECTURE &nbsp;·&nbsp;
        </ScrollVelocity>
      </div>

      <ExperienceTimeline />
      <ExperienceArchitecture />
      <FeaturedProject />
      <ProjectsGrid />
      <TechnicalSkills />

      <div className="border-y border-slate-800/50 bg-[#0D1119]">
        <ScrollVelocity baseVelocity={1.9}>
          REST APIS &nbsp;·&nbsp; TENSORFLOW &nbsp;·&nbsp; CNN &nbsp;·&nbsp; PYTEST &nbsp;·&nbsp; LOG ANALYSIS &nbsp;·&nbsp; PAYPAL API &nbsp;·&nbsp; DJANGO ORM &nbsp;·&nbsp;
        </ScrollVelocity>
      </div>

      <EngineeringApproach />
      <EducationCertifications />
      <ContactSection />
      <Footer />
    </main>
  );
}