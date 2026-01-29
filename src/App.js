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
      {/* <AboutNew /> */}
      <ExperienceNew />
      <SkillsNew />
      <PersonalProjects />
      <ProfessionalProjectsCarousel />
      <ContactNew />      
    </div>
  );
}

export default App;