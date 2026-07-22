import React, { useState } from 'react';
import { Cpu, Sparkles, Server, Code, Bot, ArrowRight, Zap } from 'lucide-react';

export default function SynapticNeuralMatrix() {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { name: 'Claude Code AI', engine: 'Anthropic Reasoning', icon: Bot, color: 'from-[#FF5500] to-orange-400', packets: '4,280/sec' },
    { name: 'Antigravity 2.0', engine: 'Multi-Agent Orchestration', icon: Sparkles, color: 'from-purple-500 to-indigo-500', packets: '9,120/sec' },
    { name: 'Codex Compiler', engine: 'Automated Code Synth', icon: Code, color: 'from-[#00D2FF] to-blue-600', packets: '6,450/sec' },
    { name: 'Hostinger Cloud', engine: 'Containerized Nginx', icon: Server, color: 'from-emerald-500 to-teal-400', packets: '12,890/sec' },
  ];

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Cpu className="w-3.5 h-3.5" /> Sci-Fi Synaptic AI Neural Matrix
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Live High-Speed AI Synapse Firing Engine
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Visualizing high-speed neural data packets firing across Nadir Habib's AI model architecture.
          </p>
        </div>
      </div>

      {/* Nodes Matrix Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {nodes.map((n, idx) => {
          const Icon = n.icon;
          const isSelected = activeNode === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveNode(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 relative overflow-hidden ${
                isSelected
                  ? 'bg-[#0A192F] border-[#FF5500] shadow-xl shadow-[#FF5500]/20 scale-105'
                  : 'bg-[#030712]/80 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Pulsing Synapse Laser Packet */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00D2FF]/10 rounded-full blur-xl pointer-events-none"></div>

              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${n.color} flex items-center justify-center text-white shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                  ⚡ {n.packets}
                </span>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white text-base">{n.name}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{n.engine}</p>
              </div>

              {isSelected && (
                <div className="w-full bg-[#FF5500] h-1 rounded-full animate-pulse"></div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
