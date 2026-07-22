import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Lock, ExternalLink, Briefcase, DollarSign } from 'lucide-react';

export default function EscrowBadgeSuite() {
  return (
    <section className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Escrow Protection & Satisfaction Guarantee
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Enterprise Guarantee & Zero-SaaS Lock-In
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Work safely via Fiverr Escrow, Upwork Escrow, or Direct Enterprise Contract with 100% source code ownership.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Fiverr Escrow Card */}
        <div className="bg-[#030712] rounded-2xl p-6 border border-[#1DBF73]/30 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#1DBF73]/20 text-[#1DBF73] flex items-center justify-center font-black text-lg">
              F
            </div>
            <h4 className="font-heading font-extrabold text-xl text-white">Fiverr Verified Pro</h4>
            <p className="text-xs text-slate-300">
              Order safely through Fiverr's official Escrow Payment System with 100% Buyer Protection & Money-Back Guarantee.
            </p>

            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1DBF73]" /> 100% Escrow Funds Protection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1DBF73]" /> Verified 5-Star Rating Profile
              </li>
            </ul>
          </div>

          <a
            href="https://fiverr.com/s/XL5Nbme"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#1DBF73] text-white font-extrabold text-xs shadow-lg shadow-[#1DBF73]/30 hover:bg-emerald-600 transition-colors flex items-center justify-center gap-1.5"
          >
            <Briefcase className="w-4 h-4" /> View Fiverr Gig <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Upwork Escrow Card */}
        <div className="bg-[#030712] rounded-2xl p-6 border border-[#14A800]/30 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#14A800]/20 text-[#14A800] flex items-center justify-center font-black text-lg">
              Up
            </div>
            <h4 className="font-heading font-extrabold text-xl text-white">Upwork Top Rated</h4>
            <p className="text-xs text-slate-300">
              Contract Nadir Habib on Upwork with Fixed-Price Escrow Milestones or Hourly Payment Protection.
            </p>

            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14A800]" /> Upwork Escrow Milestone Protection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14A800]" /> Verified Top Rated AI Specialist
              </li>
            </ul>
          </div>

          <a
            href="https://upwork.com/freelancers/~01b5235bf28b7d4ee0?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#14A800] text-white font-extrabold text-xs shadow-lg shadow-[#14A800]/30 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <Briefcase className="w-4 h-4" /> View Upwork Profile <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Direct Hostinger Cloud Deployment Card */}
        <div className="glass-card-orange rounded-2xl p-6 border border-[#FF5500]/40 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5500] text-white flex items-center justify-center font-black text-lg">
              ⚡
            </div>
            <h4 className="font-heading font-extrabold text-xl text-white">Zero SaaS Lock-In</h4>
            <p className="text-xs text-slate-200">
              Your software & AI web apps are deployed 100% on your own Hostinger server. You pay $0 recurring SaaS fees to third-party vendors.
            </p>

            <ul className="space-y-1.5 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500]" /> 100% Full Source Code Ownership
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500]" /> Deployed 100% on Hostinger Cloud
              </li>
            </ul>
          </div>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4" /> Book Strategy Call
          </a>
        </div>

      </div>

    </section>
  );
}
