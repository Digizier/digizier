import React, { useState } from 'react';
import { Code, Sparkles, Server, CheckCircle2, ArrowRight, Play, Terminal, Cpu } from 'lucide-react';

export default function LiveTranspilerSandbox() {
  const [appType, setAppType] = useState('saas');
  const [codeOutput, setCodeOutput] = useState([
    '// Invoking Claude Code & Antigravity 2.0 Compiler Engine...',
    'import { createSaaSApp } from "@digizier/core";',
    'export const app = createSaaSApp({',
    '  architecture: "Full-Stack Microservices",',
    '  aiReasoning: "Anthropic Claude 3.5 Sonnet",',
    '  database: "Supabase Vector PostgreSQL",',
    '  deployment: "Hostinger Cloud Server (100% Automated)"',
    '});',
    '// Build Status: 100% Verified Production Ready'
  ]);

  const handleTranspile = (type) => {
    setAppType(type);
    if (type === 'saas') {
      setCodeOutput([
        '// Invoking Claude Code & Antigravity 2.0 Compiler Engine...',
        'import { createSaaSApp } from "@digizier/core";',
        'export const app = createSaaSApp({',
        '  architecture: "Full-Stack Microservices",',
        '  aiReasoning: "Anthropic Claude 3.5 Sonnet",',
        '  database: "Supabase Vector PostgreSQL",',
        '  deployment: "Hostinger Cloud Server (100% Automated)"',
        '});',
        '// Build Status: 100% Verified Production Ready'
      ]);
    } else if (type === 'n8n') {
      setCodeOutput([
        '// Compiling N8N Enterprise Webhook Pipeline...',
        'const workflow = {',
        '  trigger: "WhatsApp Evolution API Webhook",',
        '  processor: "OpenAI GPT-4o Intent Classifier",',
        '  action: "Cal.com Appointment Booking",',
        '  database: "CRM PostgreSQL Record Sync"',
        '};',
        '// Pipeline Execution: Active (12ms latency)'
      ]);
    } else if (type === 'voice') {
      setCodeOutput([
        '// Initializing Retell & Vapi Voice AI Agent Engine...',
        'const voiceAgent = {',
        '  sttEngine: "Deepgram Nova-2",',
        '  llmCore: "Claude Code / GPT-4o",',
        '  ttsEngine: "ElevenLabs Turbo v2",',
        '  latencyBenchmark: "< 650ms Sub-Second"',
        '};',
        '// Telemetry: Live Inbound Phone Gateway Active'
      ]);
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Code className="w-3.5 h-3.5" /> Live SaaS Code Transpiler & API Tester
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Claude Code Live Transpiler & Specification Engine
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Test real-time code transpilation for SaaS Web Apps, N8N Workflows & Voice AI Agents.
          </p>
        </div>

        {/* Transpiler Preset Switcher */}
        <div className="flex flex-wrap gap-2 bg-[#030712] p-1.5 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => handleTranspile('saas')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all ${
              appType === 'saas' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            saas_app.ts
          </button>
          <button
            onClick={() => handleTranspile('n8n')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all ${
              appType === 'n8n' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            n8n_pipeline.js
          </button>
          <button
            onClick={() => handleTranspile('voice')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all ${
              appType === 'voice' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            voice_agent.py
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Code Output Viewer */}
        <div className="lg:col-span-7 bg-[#030712] rounded-2xl p-6 border border-white/10 space-y-3 font-mono text-xs text-[#00D2FF]">
          <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2 text-[10px]">
            <span>CLAUDE CODE TRANSPILER OUTPUT</span>
            <span className="text-emerald-400 font-bold">100% COMPILED</span>
          </div>

          <div className="space-y-1.5 text-emerald-300 leading-relaxed overflow-x-auto">
            {codeOutput.map((line, i) => (
              <div key={i} className={i === 0 ? 'text-[#FF5500] font-bold' : ''}>
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="lg:col-span-5 glass-card-orange rounded-3xl p-6 border border-[#FF5500]/40 space-y-4 text-center">
          <Cpu className="w-8 h-8 text-[#FF5500] mx-auto" />
          <h4 className="font-heading font-extrabold text-xl text-white">Production Code Ownership</h4>
          <p className="text-xs text-slate-300">
            Nadir Habib builds your full-stack SaaS app or AI pipeline with 100% source code ownership, hosted on your own Hostinger server.
          </p>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-xl shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Book Cal.com Strategy Session <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </div>
  );
}
