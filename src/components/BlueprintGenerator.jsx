import React, { useState } from 'react';
import { Layers, Sparkles, CheckCircle2, ArrowRight, Code, Server, Bot, Cpu, ShieldCheck } from 'lucide-react';

export default function BlueprintGenerator() {
  const [frontend, setFrontend] = useState('React 18 + Tailwind CSS + WebGL 3D');
  const [backend, setBackend] = useState('Node.js REST APIs & Express Microservices');
  const [aiEngine, setAiEngine] = useState('Claude Code + Antigravity 2.0 + Codex');
  const [hosting, setHosting] = useState('Hostinger Containerized Nginx & SSL');

  const encodedSpec = encodeURIComponent(
    `Custom SaaS Spec: Frontend (${frontend}), Backend (${backend}), AI Engine (${aiEngine}), Hosting (${hosting})`
  );

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" /> Interactive SaaS Full-Stack Configurator
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Generate Your Custom SaaS System Blueprint
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Configure your technical tech stack below to calculate instant architecture specifications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Selection Options */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Frontend Selection */}
          <div className="space-y-1.5 bg-[#030712]/80 p-4 rounded-2xl border border-white/10">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
              <Code className="w-4 h-4 text-[#FF5500]" /> 1. Frontend Web Architecture:
            </label>
            <select
              value={frontend}
              onChange={(e) => setFrontend(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#0A192F] border border-white/10 text-white text-xs focus:border-[#FF5500] focus:outline-none"
            >
              <option value="React 18 + Tailwind CSS + WebGL 3D">React 18 + Tailwind CSS + WebGL 3D</option>
              <option value="Next.js 14 App Router + Glassmorphism">Next.js 14 App Router + Glassmorphism</option>
              <option value="Vite High-Speed Single Page App">Vite High-Speed Single Page App</option>
            </select>
          </div>

          {/* Backend Selection */}
          <div className="space-y-1.5 bg-[#030712]/80 p-4 rounded-2xl border border-white/10">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00D2FF]" /> 2. Backend & Webhooks Layer:
            </label>
            <select
              value={backend}
              onChange={(e) => setBackend(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#0A192F] border border-white/10 text-white text-xs focus:border-[#00D2FF] focus:outline-none"
            >
              <option value="Node.js REST APIs & Express Microservices">Node.js REST APIs & Express Microservices</option>
              <option value="Python FastAPI + Async Background Workers">Python FastAPI + Async Background Workers</option>
              <option value="Supabase PostgreSQL + Vector Embeddings">Supabase PostgreSQL + Vector Embeddings</option>
            </select>
          </div>

          {/* AI Engine Selection */}
          <div className="space-y-1.5 bg-[#030712]/80 p-4 rounded-2xl border border-white/10">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400" /> 3. Code Generation & AI Reasoning Core:
            </label>
            <select
              value={aiEngine}
              onChange={(e) => setAiEngine(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#0A192F] border border-white/10 text-white text-xs focus:border-purple-400 focus:outline-none"
            >
              <option value="Claude Code + Antigravity 2.0 + Codex">Claude Code + Antigravity 2.0 + Codex</option>
              <option value="OpenAI GPT-4o + Vector RAG Knowledge Base">OpenAI GPT-4o + Vector RAG Knowledge Base</option>
              <option value="N8N Complex Webhooks + Custom API Bridges">N8N Complex Webhooks + Custom API Bridges</option>
            </select>
          </div>

          {/* Hosting Selection */}
          <div className="space-y-1.5 bg-[#030712]/80 p-4 rounded-2xl border border-white/10">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" /> 4. Cloud Server & Deployment Target:
            </label>
            <select
              value={hosting}
              onChange={(e) => setHosting(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#0A192F] border border-white/10 text-white text-xs focus:border-emerald-400 focus:outline-none"
            >
              <option value="Hostinger Containerized Nginx & SSL">Hostinger Containerized Nginx & SSL</option>
              <option value="Vercel Continuous Delivery + Cloudflare CDN">Vercel Continuous Delivery + Cloudflare CDN</option>
              <option value="Self-Hosted Docker VP Server">Self-Hosted Docker VP Server</option>
            </select>
          </div>

        </div>

        {/* Blueprint Output Summary Box */}
        <div className="lg:col-span-5 glass-card-orange rounded-3xl p-6 border border-[#FF5500]/40 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-bold text-white">Generated System Blueprint</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
              READY FOR DEPLOYMENT
            </span>
          </div>

          <div className="space-y-3 text-xs text-slate-200">
            <div>
              <span className="text-slate-400 block text-[10px]">FRONTEND:</span>
              <p className="font-bold text-white">{frontend}</p>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">BACKEND:</span>
              <p className="font-bold text-[#00D2FF]">{backend}</p>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">AI ENGINE:</span>
              <p className="font-bold text-purple-300">{aiEngine}</p>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">HOSTING TARGET:</span>
              <p className="font-bold text-emerald-400">{hosting}</p>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href={`https://cal.com/digizier-23voae/30min?notes=${encodedSpec}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-xl shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Book Cal.com Call With This Spec <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
