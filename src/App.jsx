import React, { useState, useEffect } from 'react';
import WebGLCanvas from './components/WebGLCanvas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import CommunityPage from './pages/CommunityPage';
import PlaygroundPage from './pages/PlaygroundPage';
import ContactPage from './pages/ContactPage';

import { MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-[#FF5500] selection:text-white">
      {/* 3D WebGL Three.js Particle Background */}
      <WebGLCanvas />

      {/* Navigation Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 relative z-10 pt-4 pb-16">
        {activePage === 'home' && <Home setActivePage={setActivePage} />}
        {activePage === 'services' && <ServicesPage setActivePage={setActivePage} />}
        {activePage === 'community' && <CommunityPage setActivePage={setActivePage} />}
        {activePage === 'portfolio' && <PlaygroundPage setActivePage={setActivePage} />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/923222685868"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        title="Chat with Nadir Habib on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          Chat Direct (+92 322-2685868)
        </span>
      </a>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-[#FF5500] transition-all duration-300 shadow-xl"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 text-[#FF5500]" />
        </button>
      )}

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
