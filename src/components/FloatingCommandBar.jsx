import React, { useState } from 'react';
import { MessageSquare, Calendar, Sparkles, Bot, PhoneCall, X } from 'lucide-react';

export default function FloatingCommandBar({ setActivePage }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%] sm:w-auto">
      <div className="glass-panel rounded-full p-2 border border-white/20 shadow-2xl backdrop-blur-2xl flex items-center justify-between gap-2 sm:gap-3 bg-[#0A192F]/90">
        
        {/* Cal.com Direct Call */}
        <a
          href="https://cal.com/digizier-23voae/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-extrabold text-xs shadow-lg shadow-[#FF5500]/30 hover:scale-105 transition-all whitespace-nowrap"
        >
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
          <span>Book Cal.com Meeting</span>
        </a>

        {/* Direct WhatsApp */}
        <a
          href="https://wa.me/923222685868"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/30 transition-all whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* AI Sandbox Jump */}
        <button
          onClick={() => setActivePage('portfolio')}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold hover:bg-white/20 transition-all whitespace-nowrap"
        >
          <Bot className="w-4 h-4 text-[#00D2FF]" />
          <span className="hidden sm:inline">AI Playground</span>
        </button>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          title="Minimize HUD"
        >
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
