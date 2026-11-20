import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { Project } from './types';
import { PROJECTS_DATA } from './data/projectsData';
import { smoothScrollTo } from './utils/smoothScroll';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [enquiryCategory, setEnquiryCategory] = useState<string>('');
  const [enquiryBudget, setEnquiryBudget] = useState<string>('');

  const handleScrollTo = (id: string) => {
    smoothScrollTo(`#${id}`, { duration: 900, offset: 72 });
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState({ modal: project.id }, '', `#${project.id}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleNavigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;

    const newIndex = direction === 'next'
      ? (currentIndex + 1) % PROJECTS_DATA.length
      : (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    const nextProj = PROJECTS_DATA[newIndex];
    setSelectedProject(nextProj);
    window.history.replaceState({ modal: nextProj.id }, '', `#${nextProj.id}`);
  };

  React.useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      const matched = PROJECTS_DATA.find((p) => p.id === hash);
      setSelectedProject(matched || null);
    };

    window.addEventListener('popstate', handlePopState);

    // Initial load check if URL already has #project-xx
    const initialHash = window.location.hash.replace('#', '');
    const initialMatched = PROJECTS_DATA.find((p) => p.id === initialHash);
    if (initialMatched) {
      setSelectedProject(initialMatched);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleStartSimilarProject = (category: string) => {
    setEnquiryCategory(category);
    handleScrollTo('enquiry');
  };

  const handleSelectServiceForEnquiry = (serviceName: string) => {
    setEnquiryCategory(serviceName);
    handleScrollTo('enquiry');
  };

  const handleSelectTierForEnquiry = (tierName: string) => {
    setEnquiryBudget(tierName);
    handleScrollTo('enquiry');
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-[#f7f7f5] overflow-x-hidden selection:bg-[#d4ff00] selection:text-black">
      {/* Subtle Tactile Film Grain */}
      <div className="film-grain" />

      {/* Restrained Luxury Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* Fixed Luxury Navigation */}
      <Navbar onOpenEnquiry={() => handleScrollTo('enquiry')} />

      {/* Hero Section */}
      <HeroSection
        onExploreWork={() => handleScrollTo('portfolio')}
        onStartProject={() => handleScrollTo('enquiry')}
      />

      {/* Portfolio Campaign Exhibition Section */}
      <PortfolioSection
        onSelectProject={handleSelectProject}
      />

      {/* Immersive Case Study Modal / Drawer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={handleCloseProject}
        onNavigateProject={handleNavigateProject}
        onStartSimilarProject={handleStartSimilarProject}
      />

      {/* Services Section */}
      <ServicesSection
        onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
      />

      {/* Why Work With Us Section */}
      <WhyUsSection />

      {/* Four-Step Process Section & Client Checklist */}
      <ProcessSection />

      {/* Transparent Pricing Packages Section */}
      <PricingSection
        onSelectTier={handleSelectTierForEnquiry}
      />

      {/* About & Studio Philosophy Section */}
      <AboutSection />

      {/* Functional Conversion Enquiry Section */}
      <EnquirySection
        initialCategory={enquiryCategory}
        initialBudget={enquiryBudget}
      />

      {/* Luxury Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
