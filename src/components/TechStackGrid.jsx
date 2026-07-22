import React from 'react';
import { Sparkles } from 'lucide-react';

export default function TechStackGrid() {
  const techPartners = [
    {
      name: 'Claude Code',
      category: 'AI Software Architecture',
      description: 'Advanced Anthropic reasoning model for deep full-stack code synthesis and automated refactoring.',
      logo: '/tech/claude_logo.png',
      badge: 'Anthropic AI'
    },
    {
      name: 'Antigravity 2.0',
      category: 'Autonomous Agent Engine',
      description: 'Google Deepmind next-gen agentic framework powering multi-agent workflows and complex task execution.',
      logo: '/tech/antigravity_logo.png',
      badge: 'Agentic Core'
    },
    {
      name: 'Codex & LLM Code Orchestration',
      category: 'Code Generation System',
      description: 'High-speed automated code generation, complex API bridging, and automated test harness suite.',
      logo: '/tech/antigravity_logo.png',
      badge: 'LLM Compiler'
    },
    {
      name: 'N8N Workflow Engine',
      category: 'Enterprise Integration',
      description: 'No-code & low-code pipeline orchestrator bridging 100+ platforms with custom webhooks.',
      logo: '/tech/n8n_flow_logo.png',
      badge: 'Workflow Core'
    },
    {
      name: 'Hostinger & Cloud Deployments',
      category: '100% Automated Hosting',
      description: 'Containerized Nginx & Node.js deployment, domain routing, SSL security, and continuous delivery.',
      logo: '/tech/hostinger_logo.png',
      badge: 'Cloud Infrastructure'
    }
  ];

  return (
    <section className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Advanced Engineering Stack
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Powered By Next-Gen AI & Cloud Engines
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Nadir Habib leverages cutting-edge LLMs, agentic orchestration, and cloud deployment pipelines to build enterprise software.
          </p>
        </div>
      </div>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techPartners.map((tech, idx) => (
          <div
            key={idx}
            className="bg-[#030712]/80 rounded-2xl p-5 border border-white/10 space-y-4 hover:border-[#FF5500]/40 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/20 font-mono">
                {tech.badge}
              </span>
            </div>

            <div>
              <h4 className="font-heading font-extrabold text-lg text-white group-hover:text-[#FF5500] transition-colors">
                {tech.name}
              </h4>
              <p className="text-[11px] font-semibold text-[#00D2FF] mt-0.5">
                {tech.category}
              </p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
