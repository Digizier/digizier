import React, { useState } from 'react';
import { Volume2, Mic, Activity, Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';

export default function SpatialVoiceControl() {
  const [spatialX, setSpatialX] = useState(50);
  const [spatialY, setSpatialY] = useState(50);
  const [activeVoice, setActiveVoice] = useState('realestate');

  const voiceAgents = {
    realestate: { name: 'Inbound Real Estate Qualifier', sentiment: 'POSITIVE (98.2%)', pace: '145 WPM', latency: '640ms' },
    saas: { name: 'After-Hours SaaS Customer Support', sentiment: 'HELPFUL (99.4%)', pace: '150 WPM', latency: '580ms' },
    booking: { name: 'Cal.com Strategy Appointment Bot', sentiment: 'ENGAGED (97.8%)', pace: '140 WPM', latency: '620ms' }
  };

  const currentAgent = voiceAgents[activeVoice];

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-semibold mb-2">
            <Volume2 className="w-3.5 h-3.5" /> Spatial Audio Voice AI & Biometric Telemetry
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Spatial 3D Voice Sound Engine
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Drag the 3D spatial node below to adjust sound positioning while observing live speech biometric telemetry.
          </p>
        </div>

        {/* Agent Selector */}
        <div className="flex flex-wrap gap-2 bg-[#030712] p-1.5 rounded-2xl border border-white/10 shrink-0">
          {Object.keys(voiceAgents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveVoice(key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeVoice === key ? 'bg-[#00D2FF] text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Spatial 3D Audio Canvas Pad */}
        <div className="lg:col-span-7 bg-[#030712] rounded-2xl p-6 border border-white/10 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>3D SPATIAL SOUND PAD</span>
            <span className="text-[#00D2FF]">X: {spatialX}px | Y: {spatialY}px</span>
          </div>

          <div 
            className="w-full h-48 bg-[#0A192F]/80 rounded-xl border border-white/10 relative cursor-crosshair overflow-hidden"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setSpatialX(Math.round(e.clientX - rect.left));
              setSpatialY(Math.round(e.clientY - rect.top));
            }}
          >
            {/* Pulsing Target Spatial Node */}
            <div 
              className="absolute w-8 h-8 rounded-full bg-[#FF5500] border-2 border-white shadow-[0_0_20px_#FF5500] -translate-x-1/2 -translate-y-1/2 transition-all duration-75 flex items-center justify-center"
              style={{ left: `${spatialX}px`, top: `${spatialY}px` }}
            >
              <Mic className="w-4 h-4 text-white animate-pulse" />
            </div>

            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-500">
              Drag mouse across pad to test spatial sound positioning
            </div>
          </div>
        </div>

        {/* Biometric Telemetry Output HUD */}
        <div className="lg:col-span-5 glass-card-orange rounded-3xl p-6 border border-[#FF5500]/40 space-y-4 text-center">
          <Activity className="w-8 h-8 text-[#FF5500] mx-auto" />
          <h4 className="font-heading font-extrabold text-xl text-white">Biometric Telemetry HUD</h4>

          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="flex justify-between p-2 rounded-lg bg-white/5 border border-white/10">
              <span>Agent Target:</span>
              <span className="text-white font-bold">{currentAgent.name}</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-white/5 border border-white/10">
              <span>Voice Sentiment:</span>
              <span className="text-emerald-400 font-bold">{currentAgent.sentiment}</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-white/5 border border-white/10">
              <span>Speech Pace:</span>
              <span className="text-[#00D2FF] font-bold">{currentAgent.pace}</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-white/5 border border-white/10">
              <span>Latency Benchmark:</span>
              <span className="text-amber-400 font-bold">{currentAgent.latency}</span>
            </div>
          </div>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#FF5500] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Book Voice Agent Consultation
          </a>
        </div>

      </div>

    </div>
  );
}
