import React, { useState } from 'react';
import { Monitor, Laptop, Smartphone, Sparkles, Server, Code, ExternalLink, ShieldCheck } from 'lucide-react';

export default function MultiDeviceViewport() {
  const [device, setDevice] = useState('desktop');

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
      
      {/* Header & Device Selectors */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Monitor className="w-3.5 h-3.5" /> Interactive Multi-Device SaaS Viewport
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Responsive SaaS Apps Deployed on Hostinger
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Engineered by Nadir Habib using Claude Code, Antigravity 2.0 & Codex with 100% automated hosting.
          </p>
        </div>

        {/* Device Switcher Controls */}
        <div className="flex items-center gap-2 bg-[#030712] p-1.5 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setDevice('desktop')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              device === 'desktop' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> 4K Monitor
          </button>

          <button
            onClick={() => setDevice('macbook')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              device === 'macbook' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" /> MacBook
          </button>

          <button
            onClick={() => setDevice('phone')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              device === 'phone' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> Mobile
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex justify-center transition-all duration-500 py-4">
        <div className={`transition-all duration-500 bg-[#0A192F] rounded-3xl border-4 border-slate-700 shadow-2xl p-4 overflow-hidden relative ${
          device === 'desktop' ? 'w-full max-w-4xl h-[380px]' :
          device === 'macbook' ? 'w-full max-w-2xl h-[320px]' :
          'w-[280px] h-[480px] rounded-[40px] border-8'
        }`}>
          {/* Top Browser URL Bar */}
          <div className="flex items-center gap-2 bg-[#030712] px-3 py-1.5 rounded-xl border border-white/10 mb-4 text-[10px] font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="truncate">https://app.digizier.com/saas-dashboard</span>
            <span className="ml-auto text-emerald-400 font-bold">HTTPS SSL</span>
          </div>

          {/* Simulated App Content */}
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-heading font-extrabold text-white text-base">Digizier Autonomous SaaS Hub</h4>
                <p className="text-[10px] text-[#00D2FF]">Claude Code Engine • Hostinger Cloud Deployment</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#FF5500] text-white text-[10px] font-bold">
                100% Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400">Total API Webhooks</span>
                <p className="font-heading font-bold text-lg text-white">1,240,500</p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400">Voice AI Call Time</span>
                <p className="font-heading font-bold text-lg text-emerald-400">420.5 Hours</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Hostinger Server Health: 100% Uptime
              </span>
              <a 
                href="https://cal.com/digizier-23voae/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-[#FF5500] underline"
              >
                Book Custom App
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
