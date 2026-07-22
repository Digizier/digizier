import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Youtube, 
  Briefcase, 
  Calendar, 
  Menu, 
  X, 
  MessageSquare, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Bot },
    { id: 'services', label: 'AI Services', icon: Cpu },
    { id: 'community', label: 'YouTube & Community', icon: Youtube },
    { id: 'portfolio', label: 'AI Sandbox & Work', icon: Briefcase },
    { id: 'contact', label: 'Book & Contact', icon: Calendar },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 py-3 sm:px-8">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl border border-white/10 px-4 py-3 sm:px-6 flex items-center justify-between shadow-2xl backdrop-blur-xl">
        
        {/* Brand Logo */}
        <button 
          onClick={() => setActivePage('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5500] via-[#FF7700] to-[#00D2FF] p-[2px] shadow-lg shadow-[#FF5500]/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center">
              <Bot className="w-6 h-6 text-[#FF5500] group-hover:text-[#00D2FF] transition-colors" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-[#FF5500] transition-colors">
                DIGIZIER
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30">
                AI AGENTS
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">
              BY NADIR HABIB
            </p>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#030712]/60 p-1.5 rounded-xl border border-white/5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-[#FF5500] to-[#FF7700] shadow-md shadow-[#FF5500]/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Community</span>
          </a>

          <button
            onClick={() => setActivePage('contact')}
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs text-white shadow-lg shadow-[#FF5500]/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF5500] via-[#00D2FF] to-[#FF5500] animate-pulse-glow"></span>
            <span className="relative block px-4 py-2 rounded-[11px] bg-[#0A192F] group-hover:bg-transparent transition-colors duration-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500] group-hover:text-white" />
              Book AI Call
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 glass-panel rounded-2xl p-4 border border-white/10 shadow-2xl space-y-2 backdrop-blur-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#FF5500] text-white font-bold shadow-lg shadow-[#FF5500]/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href="https://wa.me/923222685868"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 font-semibold text-xs border border-emerald-500/30"
            >
              <MessageSquare className="w-4 h-4" /> Direct WhatsApp (+92 322-2685868)
            </a>
            <button
              onClick={() => {
                setActivePage('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30"
            >
              Book Strategy Meeting
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
