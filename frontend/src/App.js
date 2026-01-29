import React from 'react';
import './App.css';
import Hero from './components/Hero';
import AboutNew from './components/AboutNew';
import ExperienceNew from './components/ExperienceNew';
import SkillsNew from './components/SkillsNew';
import PersonalProjects from './components/PersonalProjects';
import ProfessionalProjectsCarousel from './components/ProfessionalProjectsCarousel';
import ContactNew from './components/ContactNew';
import ScrollToTop from './components/ScrollToTop';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <div className="App bg-[#0a0a0a] text-white">
      <CursorEffect />
      <Hero />
      <AboutNew />
      <ExperienceNew />
      <SkillsNew />
      <PersonalProjects />
      <ProfessionalProjectsCarousel />
      <ContactNew />
      <ScrollToTop />
      
      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Madhav Bansal. Built with React, Framer Motion & Tailwind CSS
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed with passion & precision
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;