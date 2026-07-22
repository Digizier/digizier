import React from 'react';
import ServicesGrid from '../components/ServicesGrid';
import MagneticButton from '../components/MagneticButton';
import { Cpu, Sparkles, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, Code, Server, Bot } from 'lucide-react';

export default function ServicesPage({ setActivePage }) {
  return (
    <div className="space-y-16 py-6 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-[#FF5500] text-xs font-bold shadow-lg shadow-[#FF5500]/10">
          <Cpu className="w-4 h-4 text-[#FF5500]" /> Enterprise AI & Full-Stack Web Engineering
        </div>
        
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
          Custom AI Automation & <span className="text-gradient-orange">SaaS Solutions</span>
        </h1>
        
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Designed & deployed by <strong className="text-white">Nadir Habib</strong> to eliminate manual business bottlenecks using Claude Code, Antigravity 2.0, N8N, Voice AI & Hostinger cloud hosting.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <MagneticButton href="https://cal.com/digizier-23voae/30min" variant="primary">
            Book 30-Min Cal.com Strategy Call
          </MagneticButton>

          <MagneticButton href="https://wa.me/923222685868" variant="ghost" icon={MessageSquare}>
            Direct WhatsApp Quote (+92 322-2685868)
          </MagneticButton>
        </div>
      </div>

      {/* Main Interactive Services Grid */}
      <ServicesGrid />

      {/* Guarantees Banner */}
      <div className="glass-panel-orange rounded-3xl p-8 border border-[#FF5500]/30 text-center space-y-4">
        <ShieldCheck className="w-12 h-12 text-[#FF5500] mx-auto" />
        <h3 className="font-heading font-extrabold text-2xl text-white">
          Zero-SaaS Lock-In & 100% Code Ownership
        </h3>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto">
          Every custom application & automation workflow built by Nadir Habib is delivered with 100% full source code ownership and deployed directly on your own Hostinger server.
        </p>

        <div className="pt-2">
          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#FF5500] text-white font-extrabold text-xs shadow-xl shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors"
          >
            <Sparkles className="w-4 h-4" /> Schedule Cal.com App Architecture Audit
          </a>
        </div>
      </div>

    </div>
  );
}
