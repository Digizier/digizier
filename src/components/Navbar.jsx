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
  Sparkles
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Bot },
    { id: 'services', label: 'AI Services', icon: Cpu },
    { id: 'community', label: 'YouTube & Community', icon: Youtube },
    { id: 'portfolio', label: 'AI Sandbox', icon: Briefcase },
    { id: 'contact', label: 'Book & Contact', icon: Calendar },
  ];

  return (
    <header className="sticky top-0 z-50 px-2 py-3 sm:px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto glass-panel rounded-2xl border border-white/10 px-3 py-2 sm:px-5 md:px-6 flex items-center justify-between shadow-2xl backdrop-blur-xl gap-2 md:gap-4">
        
        {/* Clean Brand Logo & Title */}
        <button 
          onClick={() => setActivePage('home')}
          className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none shrink-0"
        >
          {/* Official Orange Circle Logo */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#FF5500]/60 shadow-lg shadow-[#FF5500]/30 group-hover:scale-105 transition-transform duration-300 bg-[#0A192F] flex items-center justify-center shrink-0">
            <img 
              src="/digizier_logo.png" 
              alt="Digizier Official Logo" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Clean Title Stack */}
          <div className="flex flex-col justify-center">
            <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tight text-white group-hover:text-[#FF5500] transition-colors leading-none">
              DIGIZIER
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-0.5 sm:mt-1">
              BY NADIR HABIB
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#030712]/70 p-1.5 rounded-xl border border-white/5 mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-300 relative whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-[#FF5500] to-[#FF7700] shadow-md shadow-[#FF5500]/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href="https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Community</span>
          </a>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-[#FF5500]/30 hover:scale-105 transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 border border-[#FF5500]/40"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            Book Cal.com Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white shrink-0"
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
            <a
              href="https://cal.com/digizier-23voae/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30 flex items-center justify-center gap-2"
            >
              Book Cal.com Meeting
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
