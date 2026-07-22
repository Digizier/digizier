import React, { useState } from 'react';
import { 
  Calculator, 
  CheckSquare, 
  Square, 
  Clock, 
  Zap, 
  MessageSquare,
  Calendar
} from 'lucide-react';

export default function CostCalculator() {
  const [selectedServices, setSelectedServices] = useState(['n8n', 'voice', 'saas']);
  const [timeline, setTimeline] = useState('standard');

  const availableServices = [
    { id: 'saas', name: 'SaaS App & Web Dev (Claude Code & Hostinger)', baseDays: 5 },
    { id: 'n8n', name: 'N8N Workflow Automation & Webhooks', baseDays: 3 },
    { id: 'voice', name: 'Voice AI Agent & RAG System (Retell/Vapi)', baseDays: 4 },
    { id: 'whatsapp', name: 'WhatsApp / Instagram Chatbot (Evolution API)', baseDays: 3 },
    { id: 'api', name: 'Custom REST API Bridges & CRM Sync', baseDays: 2 },
    { id: 'marketing', name: 'Digital Marketing & Auto-Followup Funnel', baseDays: 3 },
  ];

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length === 1) return;
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const totalDays = selectedServices.reduce((acc, currId) => {
    const srv = availableServices.find(s => s.id === currId);
    return acc + (srv ? srv.baseDays : 0);
  }, 0);

  const adjustedDays = timeline === 'express' ? Math.ceil(totalDays * 0.6) : totalDays;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold w-fit mb-3">
        <Calculator className="w-3.5 h-3.5" /> Interactive Project Scope & ROI Estimator
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Service Options Selection */}
        <div className="lg:col-span-2 space-y-4">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-white">
              Customize Your AI Solution Scope
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select the automation & web engineering building blocks your business requires.
            </p>
          </div>

          <div className="space-y-2.5">
            {availableServices.map((srv) => {
              const isSelected = selectedServices.includes(srv.id);
              return (
                <div
                  key={srv.id}
                  onClick={() => toggleService(srv.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0A192F] border-[#FF5500] shadow-md shadow-[#FF5500]/10 text-white'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isSelected ? (
                      <CheckSquare className="w-5 h-5 text-[#FF5500]" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-500" />
                    )}
                    <span className="text-xs sm:text-sm font-semibold">{srv.name}</span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    ~{srv.baseDays} Days
                  </span>
                </div>
              );
            })}
          </div>

          {/* Speed Selection */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-300 mb-2">Delivery Speed:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTimeline('standard')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  timeline === 'standard'
                    ? 'bg-[#00D2FF]/20 text-[#00D2FF] border-[#00D2FF]/50'
                    : 'bg-white/5 text-slate-400 border-white/10'
                }`}
              >
                Standard Deployment
              </button>
              <button
                type="button"
                onClick={() => setTimeline('express')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  timeline === 'express'
                    ? 'bg-[#FF5500]/20 text-[#FF5500] border-[#FF5500]/50'
                    : 'bg-white/5 text-slate-400 border-white/10'
                }`}
              >
                ⚡ Express Priority Deployment
              </button>
            </div>
          </div>
        </div>

        {/* Estimation Output Card */}
        <div className="glass-card-orange rounded-2xl p-6 border border-[#FF5500]/30 space-y-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-semibold text-slate-300">Selected Modules</span>
              <span className="text-xs font-bold text-[#FF5500]">{selectedServices.length} Active</span>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00D2FF]" /> Estimated Turnaround:
                </span>
                <p className="font-heading font-black text-3xl text-white mt-1">
                  {adjustedDays} - {adjustedDays + 2} Days
                </p>
              </div>

              <div>
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Projected Productivity ROI:
                </span>
                <p className="font-heading font-black text-2xl text-emerald-400 mt-1">
                  10x Time Saved
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  ~85% reduction in manual staff labor
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10">
            <a
              href="https://cal.com/digizier-23voae/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#FF5500] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Scope Cal.com Call
            </a>

            <a
              href={`https://wa.me/923222685868?text=Hi%20Nadir!%20I%20want%20a%20custom%20quote%20for%20${selectedServices.length}%20AI%20modules.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 font-semibold text-xs border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Quote (+92 322-2685868)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
