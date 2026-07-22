import React from 'react';
import FounderCard from '../components/FounderCard';
import N8nSimulator from '../components/N8nSimulator';
import AIChatSandbox from '../components/AIChatSandbox';
import { 
  Sparkles, 
  Bot, 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2,
  Calendar,
  Globe,
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
            <span>NEXT-GEN AI AUTOMATION & DIGITAL MARKETING</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
            Scale Your Business With <br className="hidden sm:block" />
            <span className="text-gradient-orange">Autonomous AI Agents</span> & <br />
            <span className="text-gradient-blue">N8N Workflows</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Custom Voice AI Agents, RAG Knowledge Systems, Omnichannel WhatsApp/Instagram Chatbots & Enterprise API Integrations — designed by <strong className="text-white">Nadir Habib</strong> to eliminate repetitive manual work and boost conversion ROI.
          </p>

          {/* Core Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#FF5500] text-white font-extrabold text-sm shadow-xl shadow-[#FF5500]/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Book Strategy Meeting
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/923222685868"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-panel border border-emerald-500/30 text-emerald-300 font-bold text-sm hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Key Value Badges */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <span className="block font-heading font-extrabold text-xl text-white">No-Code</span>
              <span className="text-[11px] text-slate-400">N8N Mastery</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="block font-heading font-extrabold text-xl text-[#00D2FF]">Voice AI</span>
              <span className="text-[11px] text-slate-400">RAG Knowledge</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="block font-heading font-extrabold text-xl text-[#FF5500]">24/7</span>
              <span className="text-[11px] text-slate-400">Lead Automation</span>
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
            <span className="text-xs text-slate-400 font-medium">Enterprise N8N Pipelines</span>
          </div>

          <div className="space-y-1">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-amber-400">
              Top Rated
            </span>
            <span className="text-xs text-slate-400 font-medium">Fiverr & Upwork Specialist</span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW SIMULATOR SECTION */}
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
            This live chatbot playground simulates how Digizier deploys conversational AI agents to answer customer questions, schedule meetings, and process webhooks automatically.
          </p>

          <ul className="space-y-2.5 pt-2 text-xs text-slate-200">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
              Instant intelligent answers based on custom knowledge bases
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
              Seamless WhatsApp & Instagram API integration ready
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
            Ready to Master No-Code AI Automation?
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
