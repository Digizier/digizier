import React from 'react';
import { 
  Youtube, 
  Users, 
  MessageSquare, 
  ExternalLink, 
  Award, 
  Sparkles,
  Download,
  CheckCircle2,
  Globe,
  Briefcase
} from 'lucide-react';

export default function CommunityHub() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-semibold">
          <Youtube className="w-3.5 h-3.5" /> Digizier Global AI Community & Ecosystem
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
          Join the Largest No-Code AI Community
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Subscribe on YouTube, join the Skool classroom, and connect on WhatsApp for weekly AI agent tutorials, templates, and live doubt-solving with <strong className="text-white">Nadir Habib</strong>.
        </p>
      </div>

      {/* Main Grid: YouTube, Skool, WhatsApp */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* YouTube Card */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-600/30">
                <Youtube className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
                4 Videos / Week
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-rose-400 transition-colors">
                Digizier YouTube Channel
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Step-by-step English tutorials on N8N, Voice AI, APIs, WhatsApp Chatbots & RAG Systems.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>N8N Tutorials & API Workflows</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Voice AI Agents & Evolution API</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Real Business AI Case Studies</span>
              </li>
            </ul>
          </div>

          <a
            href="https://www.youtube.com/@Digizier"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-3 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-lg shadow-rose-600/30 hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
          >
            <Youtube className="w-4 h-4" /> Subscribe on YouTube <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Skool Classroom Card */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                LIVE Mentorship
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-amber-400 transition-colors">
                Skool Community Classroom
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Interactive platform for LIVE doubt-solving, career roadmaps, and ready-to-use JSON blueprints.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Skool LIVE Doubt-Solving Sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Downloadable N8N Workflow Blueprints</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AI Agency & Career Growth Roadmaps</span>
              </li>
            </ul>
          </div>

          <a
            href="https://skool.com/digizier-4902/classroom"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs shadow-lg shadow-amber-500/30 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Users className="w-4 h-4" /> Join Skool Classroom <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* WhatsApp VIP Community Card */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                Instant Updates
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-emerald-400 transition-colors">
                WhatsApp VIP Community
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct broadcast channel for instant N8N updates, API alerts, and exclusive group discussions.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant Workflow JSON Drops</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Access to Nadir Habib</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Evolution API & Chatbot Tips</span>
              </li>
            </ul>
          </div>

          <a
            href="https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Join WhatsApp Group <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Freelance Work Showcase: Fiverr & Upwork */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Award className="w-3.5 h-3.5" /> Verified Freelance Accounts
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-white">
              Hire Nadir Habib on Fiverr & Upwork
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Looking for guaranteed escrow protection and top-rated client reviews? Order directly on major freelance platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://fiverr.com/s/XL5Nbme"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#1DBF73] text-white font-bold text-xs shadow-lg shadow-[#1DBF73]/30 hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" /> Order on Fiverr <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://upwork.com/freelancers/~01b5235bf28b7d4ee0?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#14A800] text-white font-bold text-xs shadow-lg shadow-[#14A800]/30 hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" /> Hire on Upwork <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
