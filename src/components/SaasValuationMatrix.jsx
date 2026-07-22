import React, { useState } from 'react';
import { DollarSign, Users, Sparkles, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SaasValuationMatrix() {
  const [mau, setMau] = useState(2500);
  const [price, setPrice] = useState(49);

  const monthlyRevenue = mau * price;
  const annualARR = monthlyRevenue * 12;
  const valuation = annualARR * 8; // 8x ARR multiple valuation
  const hostingerSavings = Math.round(annualARR * 0.4);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
            <TrendingUp className="w-3.5 h-3.5" /> Interactive SaaS Enterprise Valuation Matrix 4.0
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Calculate Your SaaS Valuation & Hostinger ROI
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Adjust sliders to project ARR revenue & enterprise valuation when deployed 100% on Hostinger.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Panel */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Slider 1: Target MAU */}
          <div className="space-y-2 bg-[#030712]/80 p-4 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-slate-300 font-semibold flex items-center gap-2">
                <Users className="w-4 h-4 text-[#00D2FF]" /> Monthly Active Users (MAU):
              </span>
              <span className="font-heading font-black text-lg text-white">{mau.toLocaleString()} Users</span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={mau}
              onChange={(e) => setMau(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00D2FF]"
            />
          </div>

          {/* Slider 2: Subscription Price */}
          <div className="space-y-2 bg-[#030712]/80 p-4 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-slate-300 font-semibold flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#FF5500]" /> Subscription Price ($/month):
              </span>
              <span className="font-heading font-black text-lg text-[#FF5500]">${price} / mo</span>
            </div>
            <input
              type="range"
              min="10"
              max="250"
              step="5"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
            />
          </div>

        </div>

        {/* Financial Output Box */}
        <div className="lg:col-span-5 glass-card-orange rounded-3xl p-6 border border-[#FF5500]/40 space-y-6 text-center">
          
          <div className="space-y-1">
            <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Projected SaaS Valuation (8x ARR)</span>
            <p className="font-heading font-black text-4xl sm:text-5xl text-emerald-400">
              ${(valuation / 1000000).toFixed(2)}M
            </p>
            <p className="text-[11px] text-emerald-300 font-medium">
              ⚡ Projected ARR: ${(annualARR / 1000).toFixed(0)}k / year
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-b border-white/10 py-3 text-center text-xs">
            <div>
              <span className="text-[10px] text-slate-400">Monthly Revenue</span>
              <p className="font-heading font-bold text-white">${(monthlyRevenue / 1000).toFixed(1)}k/mo</p>
            </div>
            <div>
              <span className="text-[10px] text-slate-400">Hostinger Cloud Savings</span>
              <p className="font-heading font-bold text-[#00D2FF]">${(hostingerSavings / 1000).toFixed(1)}k/yr</p>
            </div>
          </div>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-xl shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Build SaaS App on Cal.com Call <ArrowRight className="w-4 h-4" />
          </a>

        </div>

      </div>

    </div>
  );
}
