import React, { useState, useEffect } from 'react';
import { Bot, Cpu, Sparkles, Terminal, Activity, Zap, X, Shield, Calendar, MessageSquare } from 'lucide-react';

export default function RoboticAgentHud() {
  const [isOpen, setIsOpen] = useState(true);
  const [tflops, setTflops] = useState(98.4);
  const [activeLog, setActiveLog] = useState('Monitoring workspace & webhooks...');

  useEffect(() => {
    const interval = setInterval(() => {
      setTflops((prev) => (98.0 + Math.random() * 1.5).toFixed(1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const logs = [
    'Scanning inbound lead queries...',
    'Optimizing N8N webhook latency (12ms)...',
    'Claude Code reasoning engine synced.',
    'Hostinger SSL certificate active.',
    'Cal.com appointment scheduler ready.'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % logs.length;
      setActiveLog(logs[index]);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-24 right-6 z-50 p-3.5 rounded-full bg-[#0A192F] border-2 border-[#FF5500] text-[#FF5500] shadow-2xl hover:scale-110 transition-transform"
      title="Open Robot AI Agent HUD"
    >
      <Bot className="w-6 h-6 animate-pulse" />
    </button>
  );

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 max-w-sm w-[90vw] sm:w-80">
      <div className="glass-panel-orange rounded-3xl p-4 border-2 border-[#FF5500]/60 shadow-2xl backdrop-blur-2xl bg-[#030712]/95 space-y-3 relative overflow-hidden">
        
        {/* Holographic Glowing Pulse Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF5500] to-[#00D2FF] p-[2px]">
              <div className="w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#00D2FF] animate-pulse" />
              </div>
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-white text-xs flex items-center gap-1.5">
                AUTONOMOUS ROBOT AI AGENT
              </h4>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE • WORKING LIVE
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Robotic Telemetry Specs */}
        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
          <div className="p-2 rounded-xl bg-[#0A192F] border border-white/10">
            <span className="text-slate-400 block">NEURAL LOAD:</span>
            <span className="text-[#FF5500] font-bold text-xs">{tflops} TFLOPS</span>
          </div>
          <div className="p-2 rounded-xl bg-[#0A192F] border border-white/10">
            <span className="text-slate-400 block">SYNAPSE LATENCY:</span>
            <span className="text-[#00D2FF] font-bold text-xs">12ms (FAST)</span>
          </div>
        </div>

        {/* Live Terminal Agent Activity Stream */}
        <div className="p-2.5 rounded-xl bg-[#030712] border border-white/10 text-[11px] font-mono text-slate-300 flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
          <span className="truncate text-emerald-300">{activeLog}</span>
        </div>

        {/* Action Button */}
        <a
          href="https://cal.com/digizier-23voae/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" /> Book Agent Integration
        </a>

      </div>
    </div>
  );
}
