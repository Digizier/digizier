import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WebGLCanvas from './components/WebGLCanvas';
import Footer from './components/Footer';
import FloatingCommandBar from './components/FloatingCommandBar';
import RoboticAgentHud from './components/RoboticAgentHud';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import CommunityPage from './pages/CommunityPage';
import PlaygroundPage from './pages/PlaygroundPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'services':
        return <ServicesPage setActivePage={setActivePage} />;
      case 'community':
        return <CommunityPage setActivePage={setActivePage} />;
      case 'portfolio':
        return <PlaygroundPage setActivePage={setActivePage} />;
      case 'contact':
        return <ContactPage setActivePage={setActivePage} />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-[#FF5500] selection:text-white relative overflow-x-hidden">
      {/* Interactive WebGL 3D Background Shader Canvas */}
      <WebGLCanvas />

      {/* Persistent Navigation Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page View Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 pb-28">
        {renderPage()}
      </main>

      {/* Persistent Floating Robotic AI Agent HUD */}
      <RoboticAgentHud />

      {/* Persistent Floating Command Bar HUD */}
      <FloatingCommandBar setActivePage={setActivePage} />

      {/* Persistent Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
