import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Award,
  Zap,
  Globe
} from 'lucide-react';

export default function FounderCard() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      className="perspective-1000 w-full max-w-lg mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="glass-card-orange rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-transform duration-200 ease-out shadow-2xl border border-[#FF5500]/30"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Holographic Glowing Orbs */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#FF5500]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Live Status Header Badge */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Custom AI Workflows</span>
          </div>

          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg">
            <Globe className="w-3 h-3 text-[#00D2FF]" /> Digizier Global
          </span>
        </div>

        {/* Photo Spotlight */}
        <div className="relative group mb-6">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FF5500] via-[#00D2FF] to-[#FF5500] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
          <div className="relative rounded-2xl overflow-hidden bg-[#0A192F] border-2 border-white/10 aspect-[4/3] flex items-center justify-center">
            <img 
              src="/nadir_habib.png" 
              alt="Nadir Habib - Founder of Digizier AI Solutions" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay Badge on Image */}
            <div className="absolute bottom-3 left-3 right-3 glass-panel rounded-xl p-3 border border-white/15 flex items-center justify-between">
              <div>
                <h4 className="font-heading font-extrabold text-white text-base">Nadir Habib</h4>
                <p className="text-xs text-[#00D2FF] font-medium">Founder & Lead AI Architect</p>
              </div>
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#FF5500] shadow-md shadow-[#FF5500]/50 bg-[#0A192F] flex items-center justify-center shrink-0">
                <img src="/digizier_logo.png" alt="Digizier Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Badges */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-2.5 text-sm text-slate-200">
            <CheckCircle2 className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
            <span className="font-medium">
              <strong className="text-white">Industry-Leading AI Agent Learner & Builder</strong> creating complex autonomous systems.
            </span>
          </div>

          <div className="flex items-start gap-2.5 text-sm text-slate-200">
            <Zap className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
            <span className="font-medium">
              Specialized in <strong className="text-white">N8N Workflows, Voice AI, RAG & SaaS Apps</strong> (Claude Code, Antigravity 2.0).
            </span>
          </div>

          <div className="flex items-start gap-2.5 text-sm text-slate-200">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <span className="font-medium">
              Founder of <strong className="text-white">Digizier No-Code AI Community</strong> & Skool Mentor.
            </span>
          </div>
        </div>

        {/* Quick Social & Booking CTAs */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://wa.me/923222685868"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/25 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp Direct
          </a>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#FF5500] text-white text-xs font-bold shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors"
          >
            <Sparkles className="w-4 h-4" /> Book Cal.com Call
          </a>
        </div>
      </div>
    </div>
  );
}
