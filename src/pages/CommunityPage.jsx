import React from 'react';
import CommunityHub from '../components/CommunityHub';
import MagneticButton from '../components/MagneticButton';
import { Youtube, Users, MessageSquare, Briefcase, Sparkles } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="space-y-16 py-6 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-[#FF5500] text-xs font-bold shadow-lg shadow-[#FF5500]/10">
          <Youtube className="w-4 h-4 text-rose-500" /> Nadir Habib’s Official AI Community
        </div>
        
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
          Learn & Build With <span className="text-gradient-orange">Digizier No-Code AI</span>
        </h1>
        
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Join 4 weekly video tutorials on YouTube, step-by-step Skool courses, or get 1-on-1 assistance in our VIP WhatsApp group.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <MagneticButton href="https://www.youtube.com/@Digizier" variant="primary" icon={Youtube}>
            Subscribe on YouTube (@Digizier)
          </MagneticButton>

          <MagneticButton href="https://skool.com/digizier-4902/classroom" variant="ghost" icon={Users}>
            Join Skool Classroom
          </MagneticButton>
        </div>
      </div>

      {/* Main Community Hub Grid */}
      <CommunityHub />

      {/* Fiverr & Upwork Escrow Bar */}
      <div className="glass-panel rounded-3xl p-8 border border-white/10 text-center space-y-4">
        <h3 className="font-heading font-extrabold text-2xl text-white">Need Custom 1-on-1 Client Project Execution?</h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Order safely via Fiverr or Upwork Escrow Protection, or book a direct strategy call on Cal.com.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://fiverr.com/s/XL5Nbme"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#1DBF73] text-white font-bold text-xs shadow-lg shadow-[#1DBF73]/30 hover:bg-emerald-600 transition-colors flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4" /> View Fiverr Gig Profile
          </a>

          <a
            href="https://upwork.com/freelancers/~01b5235bf28b7d4ee0?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#14A800] text-white font-bold text-xs shadow-lg shadow-[#14A800]/30 hover:bg-emerald-700 transition-colors flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4" /> View Upwork Top Rated Profile
          </a>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#FF5500] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Book Cal.com Call
          </a>
        </div>
      </div>

    </div>
  );
}
