import React from 'react';
import AIChatSandbox from '../components/AIChatSandbox';
import { 
  Bot, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Briefcase, 
  ExternalLink 
} from 'lucide-react';

export default function PlaygroundPage({ setActivePage }) {
  const caseStudies = [
    {
      title: 'E-Commerce Order & Support Automation',
      client: 'Global Shopify Store',
      result: '82% Reduction in Manual Support Tickets',
      tech: 'WhatsApp Evolution API + N8N + OpenAI',
      details: 'Built an automated WhatsApp bot that tracks orders, resolves return requests, and syncs directly with Shopify & Gorgias CRM.'
    },
    {
      title: 'Voice AI Real Estate Lead Qualifier',
      client: 'US Property Agency',
      result: '4x Faster Response Speed & $45k Revenue Added',
      tech: 'Retell AI + Google Calendar + Retell Voice Agent',
      details: 'Deployed a voice bot to answer missed calls within 5 seconds, qualify buyer budgets, and auto-book agent tours.'
    },
    {
      title: 'SaaS Multi-Channel Lead Scoring',
      client: 'B2B Software Company',
      result: 'Saved 25 Hours/Week Manual Data Entry',
      tech: 'N8N Webhooks + HubSpot + Slack Alerts',
      details: 'Automated instant lead enrichment from Typeform to HubSpot CRM with real-time high-priority alerts sent to sales reps on Slack.'
    }
  ];

  return (
    <div className="space-y-16 py-6">
      
      {/* Live AI Sandbox Header */}
      <section className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-semibold">
          <Bot className="w-3.5 h-3.5" /> Interactive AI Playground & Case Studies
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
          Experience Live AI Agents & Client Proven Results
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Test Digizier’s AI assistant in real-time below, and examine real-world automation case studies built by <strong className="text-white">Nadir Habib</strong>.
        </p>
      </section>

      {/* Sandbox Component */}
      <section>
        <AIChatSandbox />
      </section>

      {/* Client Case Studies */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="font-heading font-extrabold text-2xl text-white">
            Real Business Automation Case Studies
          </h3>
          <p className="text-xs text-slate-400">Proven ROI delivered for clients worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[#00D2FF] bg-[#00D2FF]/10 px-2.5 py-1 rounded-lg border border-[#00D2FF]/20">
                  {cs.client}
                </span>
                <h4 className="font-heading font-extrabold text-xl text-white">{cs.title}</h4>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold text-xs">
                  ⚡ {cs.result}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{cs.details}</p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" /> {cs.tech}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fiverr & Upwork Links */}
      <section className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-bold text-white text-lg">Ready for a custom build?</h4>
          <p className="text-xs text-slate-400">Order directly on Fiverr or Upwork with full escrow protection.</p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://fiverr.com/s/XL5Nbme"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#1DBF73] text-white font-bold text-xs shadow-md shadow-[#1DBF73]/20 hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <Briefcase className="w-4 h-4" /> Fiverr <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href="https://upwork.com/freelancers/~01b5235bf28b7d4ee0?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#14A800] text-white font-bold text-xs shadow-md shadow-[#14A800]/20 hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <Briefcase className="w-4 h-4" /> Upwork <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

    </div>
  );
}
