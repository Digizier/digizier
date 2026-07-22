import React, { useState } from 'react';
import { 
  Code, 
  Sparkles, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Globe, 
  Cpu,
  ShieldCheck
} from 'lucide-react';

export default function SaasArchVisualizer() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: '01. AI Software Architecture',
      engine: 'Claude Code & Antigravity 2.0',
      logo: '/tech/claude_logo.png',
      desc: 'Nadir Habib architects the system blueprint using Claude Code reasoning and Deepmind Antigravity 2.0 multi-agent prompts.',
      deliverables: [
        'Domain schema & database architecture',
        'API endpoint specifications & security protocols',
        'UI/UX design system & responsive layout'
      ]
    },
    {
      id: 2,
      title: '02. Automated Code Synthesis',
      engine: 'Codex & LLM Compiler',
      logo: '/tech/antigravity_logo.png',
      desc: 'Codex LLM code engine generates clean React frontend, Node.js REST APIs, and database migrations in record speed.',
      deliverables: [
        '100% clean React + Vite + Tailwind frontend',
        'RESTful API microservices & webhook handlers',
        'Automated unit & integration test suites'
      ]
    },
    {
      id: 3,
      title: '03. Continuous Integration',
      engine: 'Git & Docker Pipelines',
      logo: '/tech/n8n_flow_logo.png',
      desc: 'Code is automatically audited, containerized with multi-stage Dockerfiles, and pushed to production Git repositories.',
      deliverables: [
        'Optimized multi-stage Docker containers',
        'Automated linting & build verification',
        'Git version control on GitHub / GitLab'
      ]
    },
    {
      id: 4,
      title: '04. 100% Automated Deployment',
      engine: 'Hostinger & EasyPanel Cloud',
      logo: '/tech/hostinger_logo.png',
      desc: 'Direct automated deployment to Hostinger cloud servers with SSL certificate issuance, custom domain DNS, and Nginx reverse proxy.',
      deliverables: [
        'Live hosting on Hostinger cloud infrastructure',
        'Auto-renewing SSL / HTTPS security certificate',
        'Custom domain DNS setup & global CDN acceleration'
      ]
    }
  ];

  const currentStage = stages.find(s => s.id === activeStage);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Code className="w-3.5 h-3.5" /> Full-Stack SaaS Web Engineering
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            SaaS App Pipeline: Claude Code ➔ Hostinger Deploy
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Click stages below to examine how Nadir Habib builds & deploys enterprise web apps at 10x speed.
          </p>
        </div>

        <a
          href="https://cal.com/digizier-23voae/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-[#FF5500] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2 shrink-0"
        >
          <Sparkles className="w-4 h-4" /> Build SaaS App on Cal.com Call
        </a>
      </div>

      {/* Stage Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stages.map((stg) => {
          const isActive = activeStage === stg.id;
          return (
            <button
              key={stg.id}
              onClick={() => setActiveStage(stg.id)}
              className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                isActive
                  ? 'bg-[#0A192F] border-[#FF5500] shadow-xl shadow-[#FF5500]/30 ring-1 ring-[#FF5500]'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                  isActive ? 'bg-[#FF5500] text-white' : 'bg-white/10 text-slate-400'
                }`}>
                  STAGE 0{stg.id}
                </span>
                <img src={stg.logo} alt={stg.engine} className="w-5 h-5 object-contain" />
              </div>

              <h4 className={`font-heading font-bold text-xs sm:text-sm ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {stg.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card */}
      <div className="bg-[#030712] rounded-2xl p-6 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0">
              <img src={currentStage.logo} alt={currentStage.engine} className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-xl text-white">{currentStage.title}</h4>
              <p className="text-xs text-[#00D2FF] font-semibold">{currentStage.engine}</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
            {currentStage.desc}
          </p>

          <div>
            <h5 className="font-heading font-bold text-xs text-white uppercase tracking-wider mb-2">Key Stage Deliverables:</h5>
            <ul className="space-y-2">
              {currentStage.deliverables.map((del, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Box */}
        <div className="lg:col-span-4 glass-card-orange p-6 rounded-2xl border border-[#FF5500]/30 space-y-4 text-center">
          <ShieldCheck className="w-10 h-10 text-[#FF5500] mx-auto" />
          <h5 className="font-heading font-extrabold text-lg text-white">Guaranteed Production Quality</h5>
          <p className="text-xs text-slate-300">
            100% deployed & hosted on your own Hostinger server with full source code ownership.
          </p>
          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#FF5500] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Book App Consultation
          </a>
        </div>
      </div>

    </div>
  );
}
