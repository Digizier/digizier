import React, { useState, useEffect } from 'react';
import { Bot, Cpu, Sparkles, Server, Code, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AgentSwarmVisualizer() {
  const [activeStep, setActiveStep] = useState(0);

  const subagents = [
    { id: 'alpha', name: 'Agent Alpha: React & Tailwind Synthesizer', status: 'SYNTHESIZING UI', icon: Code, color: 'from-[#FF5500] to-orange-400', load: '94%' },
    { id: 'beta', name: 'Agent Beta: Node.js & FastAPI Backend Engine', status: 'BUILDING APIS', icon: Cpu, color: 'from-[#00D2FF] to-blue-600', load: '88%' },
    { id: 'gamma', name: 'Agent Gamma: N8N Webhook Relay', status: 'DISPATCHING HOOKS', icon: Sparkles, color: 'from-purple-500 to-indigo-500', load: '92%' },
    { id: 'delta', name: 'Agent Delta: Retell & Vapi Voice AI Handler', status: 'STREAMING AUDIO', icon: Bot, color: 'from-[#00D2FF] to-teal-400', load: '96%' },
    { id: 'epsilon', name: 'Agent Epsilon: Hostinger Docker Deployer', status: 'CONTAINERIZING', icon: Server, color: 'from-emerald-500 to-teal-400', load: '99%' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % subagents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Bot className="w-3.5 h-3.5" /> Autonomous Multi-Agent Swarm Orchestration
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            5 Parallel AI Subagent Swarm Execution
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Simulating Nadir Habib's autonomous agent swarm coordinating full-stack SaaS app & Voice AI development.
          </p>
        </div>
      </div>

      {/* Subagents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {subagents.map((agent, index) => {
          const Icon = agent.icon;
          const isActive = activeStep === index;
          return (
            <div
              key={agent.id}
              className={`p-4 rounded-2xl border transition-all duration-300 space-y-3 relative overflow-hidden ${
                isActive
                  ? 'bg-[#0A192F] border-[#FF5500] shadow-xl shadow-[#FF5500]/30 scale-105 ring-1 ring-[#FF5500]'
                  : 'bg-[#030712]/80 border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${agent.color} flex items-center justify-center text-white shadow-md`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                  {agent.load}
                </span>
              </div>

              <div>
                <h4 className="font-heading font-bold text-xs text-white line-clamp-2">{agent.name}</h4>
                <p className="text-[10px] text-[#00D2FF] font-mono mt-1">{agent.status}</p>
              </div>

              {isActive && (
                <div className="w-full bg-[#FF5500] h-1 rounded-full animate-pulse"></div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
