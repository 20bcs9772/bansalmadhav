import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <div className="App bg-[#0a0a0a] text-white">
      <CursorEffect />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
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