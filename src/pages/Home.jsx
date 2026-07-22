import React from 'react';
import FounderCard from '../components/FounderCard';
import DragDropWorkflow from '../components/DragDropWorkflow';
import VoiceCallSimulator from '../components/VoiceCallSimulator';
import SaasArchVisualizer from '../components/SaasArchVisualizer';
import TechStackGrid from '../components/TechStackGrid';
import CyberTerminal from '../components/CyberTerminal';
import RoiCalculator3 from '../components/RoiCalculator3';
import CaseStudyMatrix from '../components/CaseStudyMatrix';
import WebGLGlobe from '../components/WebGLGlobe';
import MultiDeviceViewport from '../components/MultiDeviceViewport';
import Button3D from '../components/Button3D';
import BlueprintGenerator from '../components/BlueprintGenerator';
import AudioSpectrum from '../components/AudioSpectrum';
import EscrowBadgeSuite from '../components/EscrowBadgeSuite';
import SynapticNeuralMatrix from '../components/SynapticNeuralMatrix';
import SpatialVoiceControl from '../components/SpatialVoiceControl';
import LiveTranspilerSandbox from '../components/LiveTranspilerSandbox';
import AgentSwarmVisualizer from '../components/AgentSwarmVisualizer';
import SaasValuationMatrix from '../components/SaasValuationMatrix';
import N8nSimulator from '../components/N8nSimulator';
import AIChatSandbox from '../components/AIChatSandbox';
import { 
  Sparkles, 
  Bot, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2,
  Youtube,
  Users
} from 'lucide-react';

export default function Home({ setActivePage }) {
  return (
    <div className="space-y-20 py-6">
      
      {/* HERO SECTION */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline & Action */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-[#FF5500] text-xs font-bold shadow-lg shadow-[#FF5500]/10">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping"></span>
            <span>NEXT-GEN AI AUTOMATION & SAAS WEB ENGINEERING</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
            Scale Your Business With <br className="hidden sm:block" />
            <span className="text-gradient-orange">Autonomous AI Agents</span> & <br />
            <span className="text-gradient-blue">SaaS Web Apps</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Custom Voice AI Agents, RAG Systems, Full-Stack SaaS Apps (Claude Code, Antigravity 2.0, Codex) & N8N Automations — designed by <strong className="text-white">Nadir Habib</strong> to eliminate manual bottlenecks and boost ROI.
          </p>

          {/* Core Action CTAs with 3D Parallax Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Button3D href="https://cal.com/digizier-23voae/30min" variant="orange">
              Book Cal.com Strategy Call
            </Button3D>

            <Button3D href="https://wa.me/923222685868" variant="ghost" icon={MessageSquare}>
              Chat on WhatsApp
            </Button3D>
          </div>

          {/* Key Value Badges */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <span className="block font-heading font-extrabold text-xl text-white">SaaS Apps</span>
              <span className="text-[11px] text-slate-400">Claude Code Engine</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="block font-heading font-extrabold text-xl text-[#00D2FF]">Voice AI</span>
              <span className="text-[11px] text-slate-400">RAG Systems</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="block font-heading font-extrabold text-xl text-[#FF5500]">24/7</span>
              <span className="text-[11px] text-slate-400">N8N Pipelines</span>
            </div>
          </div>

        </div>

        {/* Right Column: Founder Spotlight Card */}
        <div className="lg:col-span-5 flex justify-center">
          <FounderCard />
        </div>

      </section>

      {/* DYNAMIC HIGH-GROWTH METRICS BANNER */}
      <section className="glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-gradient-orange">
              Active Community
            </span>
            <span className="text-xs text-slate-400 font-medium">YouTube & Skool Mentorship</span>
          </div>

          <div className="space-y-1">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-gradient-blue">
              Custom AI Bots
            </span>
            <span className="text-xs text-slate-400 font-medium">Voice & WhatsApp Solutions</span>
          </div>

          <div className="space-y-1">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-emerald-400">
              100% Automated
            </span>
            <span className="text-xs text-slate-400 font-medium">SaaS Apps & Hostinger Deploy</span>
          </div>

          <div className="space-y-1">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-amber-400">
              Top Rated
            </span>
            <span className="text-xs text-slate-400 font-medium">Fiverr & Upwork Specialist</span>
          </div>
        </div>
      </section>

      {/* 1. AUTONOMOUS MULTI-AGENT SWARM VISUALIZER */}
      <AgentSwarmVisualizer />

      {/* 2. INTERACTIVE SAAS VALUATION MATRIX 4.0 */}
      <SaasValuationMatrix />

      {/* 3. LIVE CLAUDE CODE TRANSPILER SANDBOX */}
      <LiveTranspilerSandbox />

      {/* 4. SPATIAL AUDIO VOICE CONTROL & TELEMETRY */}
      <SpatialVoiceControl />

      {/* 5. SCI-FI SYNAPTIC AI NEURAL MATRIX */}
      <SynapticNeuralMatrix />

      {/* 6. TECH STACK SHOWCASE GRID */}
      <TechStackGrid />

      {/* 7. INTERACTIVE SAAS FULL-STACK BLUEPRINT GENERATOR */}
      <BlueprintGenerator />

      {/* 8. VOICE AI NEURAL AUDIO SPECTRUM ANALYZER */}
      <AudioSpectrum />

      {/* 9. 3D WEBGL GLOBAL AGENT DEPLOYMENT GLOBE */}
      <WebGLGlobe />

      {/* 10. MULTI-DEVICE SAAS LIVE VIEWPORT */}
      <MultiDeviceViewport />

      {/* 11. LIVE INTERACTIVE CYBER TERMINAL & COMPILER */}
      <CyberTerminal />

      {/* 12. LIVE INTERACTIVE DRAG & DROP PIPELINE ARCHITECT */}
      <DragDropWorkflow />

      {/* 13. INTERACTIVE BUSINESS ROI CALCULATOR 3.0 */}
      <RoiCalculator3 />

      {/* 14. SAAS WEB APP ENGINEERING VISUALIZER */}
      <SaasArchVisualizer />

      {/* 15. LIVE VOICE AI PHONE DIALER DEMO */}
      <VoiceCallSimulator />

      {/* 16. ENTERPRISE ESCROW PROTECTION & GUARANTEE SUITE */}
      <EscrowBadgeSuite />

      {/* 17. VERIFIED CASE STUDY & REVIEW MATRIX */}
      <CaseStudyMatrix />

      {/* 18. N8N SIMULATOR SECTION */}
      <section className="space-y-4">
        <N8nSimulator />
      </section>

      {/* LIVE AI CHATBOT PLAYGROUND DEMO */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-semibold">
            <Bot className="w-3.5 h-3.5" /> Experience AI Agents Live
          </div>
          <h2 className="font-heading font-extrabold text-3xl text-white leading-tight">
            Test Digizier’s AI Assistant Right Now
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            This live chatbot playground simulates how Digizier deploys conversational AI agents to answer customer questions, schedule meetings on Cal.com, and process webhooks automatically.
          </p>

          <ul className="space-y-2.5 pt-2 text-xs text-slate-200">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
              Instant intelligent answers based on custom knowledge bases
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
              SaaS Application & N8N automated backend setup
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
              Zero downtime & 24/7 lead qualification
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => setActivePage('services')}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/10 transition-all flex items-center gap-2"
            >
              Explore Full AI Services Grid <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <AIChatSandbox />
        </div>
      </section>

      {/* COMMUNITY CTA HUB */}
      <section className="glass-panel-orange rounded-3xl p-8 border border-[#FF5500]/30 relative overflow-hidden text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-[#FF5500] text-white text-xs font-extrabold tracking-wider uppercase inline-block shadow-md">
            Join Nadir Habib's Community
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-white">
            Ready to Master No-Code AI & SaaS Development?
          </h2>
          <p className="text-slate-300 text-sm">
            Subscribe on YouTube for 4 videos every week, join our Skool classroom for live doubt solving, or message directly on WhatsApp!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://www.youtube.com/@Digizier"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-lg shadow-rose-600/30 hover:bg-rose-700 transition-all flex items-center gap-2"
          >
            <Youtube className="w-4 h-4" /> YouTube Channel (@Digizier)
          </a>

          <a
            href="https://skool.com/digizier-4902/classroom"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-amber-500 text-white font-bold text-xs shadow-lg shadow-amber-500/30 hover:bg-amber-600 transition-all flex items-center gap-2"
          >
            <Users className="w-4 h-4" /> Skool Classroom
          </a>

          <a
            href="https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Group
          </a>
        </div>
      </section>

    </div>
  );
}
