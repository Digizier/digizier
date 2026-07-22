import React, { useState, useEffect } from 'react';
import { Activity, Mic, Volume2, Sparkles, PhoneCall, Zap } from 'lucide-react';

export default function AudioSpectrum() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeBotPreset, setActiveBotPreset] = useState('inbound');

  const presets = {
    inbound: { name: 'Inbound Real Estate Lead Qualifier', stt: '180ms', llm: '340ms', tts: '210ms', total: '730ms' },
    support: { name: 'After-Hours SaaS Customer Support', stt: '160ms', llm: '310ms', tts: '190ms', total: '660ms' },
    booking: { name: 'Cal.com Appointment Booking Agent', stt: '190ms', llm: '350ms', tts: '220ms', total: '760ms' }
  };

  const currentPreset = presets[activeBotPreset];

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-semibold mb-2">
            <Activity className="w-3.5 h-3.5" /> Neural Voice AI Spectrum & Latency Telemetry
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Sub-800ms Latency Voice Audio Equalizer
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time audio frequency analyzer simulating Retell & Vapi Voice AI speech pipeline.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap gap-2 bg-[#030712] p-1.5 rounded-2xl border border-white/10 shrink-0">
          {Object.keys(presets).map((key) => (
            <button
              key={key}
              onClick={() => setActiveBotPreset(key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeBotPreset === key ? 'bg-[#00D2FF] text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Animated Spectrum Waveform Canvas */}
        <div className="lg:col-span-7 bg-[#030712] rounded-2xl p-6 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-2">
              <Mic className="w-4 h-4 text-[#FF5500]" /> {currentPreset.name}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
              TOTAL LATENCY: {currentPreset.total}
            </span>
          </div>

          {/* Equalizer Frequency Bars */}
          <div className="h-28 flex items-end justify-between gap-1.5 px-4 bg-[#0A192F]/60 rounded-xl p-4 border border-white/10">
            {[45, 80, 60, 100, 30, 90, 75, 50, 95, 40, 85, 70, 65, 90, 55, 100, 80, 40, 85, 60, 95, 70, 50, 90].map((bar, i) => (
              <div
                key={i}
                className="w-full rounded-t bg-gradient-to-t from-[#FF5500] via-[#00D2FF] to-cyan-300 animate-pulse"
                style={{
                  height: `${Math.min(100, bar * (Math.random() + 0.3))}%`,
                  animationDuration: `${0.4 + (i % 5) * 0.15}s`
                }}
              />
            ))}
          </div>

          <p className="text-[11px] text-slate-400 text-center font-mono">
            🎙️ Speech Stream: 16kHz PCM Audio • Ultra Low Latency Vapi Engine
          </p>
        </div>

        {/* Telemetry Breakdown HUD */}
        <div className="lg:col-span-5 glass-card-orange rounded-3xl p-6 border border-[#FF5500]/40 space-y-4 text-center">
          <Zap className="w-8 h-8 text-[#FF5500] mx-auto" />
          <h4 className="font-heading font-extrabold text-xl text-white">Latency Telemetry Breakdown</h4>

          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="flex justify-between p-2 rounded-lg bg-white/5 border border-white/10">
              <span>Speech-to-Text (STT):</span>
              <span className="text-[#00D2FF] font-bold">{currentPreset.stt}</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-white/5 border border-white/10">
              <span>LLM Reasoning (Claude/GPT):</span>
              <span className="text-purple-300 font-bold">{currentPreset.llm}</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-white/5 border border-white/10">
              <span>Text-to-Speech (TTS):</span>
              <span className="text-emerald-400 font-bold">{currentPreset.tts}</span>
            </div>
          </div>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#FF5500] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Deploy Voice AI Agent
          </a>
        </div>

      </div>

    </div>
  );
}
