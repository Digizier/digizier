import React, { useState } from 'react';
import { Calculator, Sparkles, DollarSign, Clock, Users, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RoiCalculator3() {
  const [teamSize, setTeamSize] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);

  const totalWeeklyManualHours = teamSize * hoursPerWeek;
  const totalAnnualManualCost = totalWeeklyManualHours * hourlyRate * 52;
  const estimatedSavings = Math.round(totalAnnualManualCost * 0.85);
  const hoursReclaimedPerYear = Math.round(totalWeeklyManualHours * 52 * 0.85);
  const paybackPeriodDays = 14;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5" /> Interactive ROI & Cost Calculator 3.0
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Calculate Your Business Automation ROI
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Adjust the sliders below to see your projected annual cost savings & hours reclaimed with Digizier.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Control Panel */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Slider 1: Team Size */}
          <div className="space-y-2 bg-[#030712]/80 p-4 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-slate-300 font-semibold flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FF5500]" /> Team Size / Staff Count:
              </span>
              <span className="font-heading font-black text-lg text-white">{teamSize} Employees</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
            />
          </div>

          {/* Slider 2: Staff Hourly Rate */}
          <div className="space-y-2 bg-[#030712]/80 p-4 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-slate-300 font-semibold flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#00D2FF]" /> Average Hourly Staff Rate ($/hr):
              </span>
              <span className="font-heading font-black text-lg text-[#00D2FF]">${hourlyRate} / hr</span>
            </div>
            <input
              type="range"
              min="15"
              max="150"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00D2FF]"
            />
          </div>

          {/* Slider 3: Weekly Manual Hours */}
          <div className="space-y-2 bg-[#030712]/80 p-4 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-slate-300 font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" /> Manual Repetitive Hours (Per Person / Week):
              </span>
              <span className="font-heading font-black text-lg text-amber-400">{hoursPerWeek} Hours / Wk</span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>

        </div>

        {/* Real-Time Projected Impact Summary Box */}
        <div className="lg:col-span-5 glass-card-orange rounded-3xl p-6 border border-[#FF5500]/40 space-y-6 text-center">
          
          <div className="space-y-1">
            <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Projected Annual Savings</span>
            <p className="font-heading font-black text-4xl sm:text-5xl text-emerald-400">
              ${estimatedSavings.toLocaleString()}
            </p>
            <p className="text-[11px] text-emerald-300 font-medium">
              ⚡ ~85% Reduction in Operational Waste
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-b border-white/10 py-4 text-center">
            <div>
              <span className="text-[11px] text-slate-400">Hours Reclaimed</span>
              <p className="font-heading font-bold text-xl text-white">{hoursReclaimedPerYear.toLocaleString()} hrs/yr</p>
            </div>
            <div>
              <span className="text-[11px] text-slate-400">Est. Payback Period</span>
              <p className="font-heading font-bold text-xl text-[#00D2FF]">{paybackPeriodDays} Days</p>
            </div>
          </div>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-xl shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Claim Savings on Cal.com Call <ArrowRight className="w-4 h-4" />
          </a>

        </div>

      </div>

    </div>
  );
}
