import React from 'react';
import AIChatSandbox from '../components/AIChatSandbox';
import N8nSimulator from '../components/N8nSimulator';
import VoiceCallSimulator from '../components/VoiceCallSimulator';
import CyberTerminal from '../components/CyberTerminal';
import MagneticButton from '../components/MagneticButton';
import { Bot, Sparkles, Code, PhoneCall, Terminal } from 'lucide-react';

export default function PlaygroundPage() {
  return (
    <div className="space-y-16 py-6 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-bold shadow-lg shadow-[#00D2FF]/10">
          <Bot className="w-4 h-4 text-[#00D2FF]" /> Interactive Digizier AI Playground
        </div>
        
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
          Test Autonomous <span className="text-gradient-blue">AI Agents & Workflows</span>
        </h1>
        
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Experience live simulated N8N automations, Voice AI call handling, Cyber IDE code compilation, and conversational AI chatbots in action.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <MagneticButton href="https://cal.com/digizier-23voae/30min" variant="primary">
            Book Cal.com Strategy Call
          </MagneticButton>
        </div>
      </div>

      {/* 1. CYBER TERMINAL & COMPILER */}
      <CyberTerminal />

      {/* 2. VOICE AI PHONE DIALER DEMO */}
      <VoiceCallSimulator />

      {/* 3. N8N WORKFLOW SIMULATOR */}
      <N8nSimulator />

      {/* 4. CONVERSATIONAL AI ASSISTANT CHATBOT */}
      <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-heading font-extrabold text-2xl text-white">Live AI Assistant Sandbox</h3>
          <p className="text-xs text-slate-400">Ask questions about N8N automations, Voice AI, Claude Code & SaaS web app development.</p>
        </div>
        <AIChatSandbox />
      </div>

    </div>
  );
}
