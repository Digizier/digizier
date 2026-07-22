import React from 'react';
import CommunityHub from '../components/CommunityHub';
import { Download, FileCode, Check, Sparkles, MessageSquare } from 'lucide-react';

export default function CommunityPage({ setActivePage }) {
  const templates = [
    {
      title: 'Voice AI Lead Qualifier (Retell + N8N)',
      description: 'Complete JSON blueprint for qualifying inbound calls & booking Google Calendar slots.',
      category: 'Voice AI',
      downloadUrl: 'https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9'
    },
    {
      title: 'WhatsApp Evolution API Auto-Responder',
      description: 'Webhook router connecting Meta/Evolution API with OpenAI GPT-4 for automated FAQs.',
      category: 'Chatbot',
      downloadUrl: 'https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9'
    },
    {
      title: 'CRM Lead Sync Pipeline (HubSpot + Airtable)',
      description: 'Multi-branch workflow that formats incoming webhook payloads & updates sales pipelines.',
      category: 'N8N Workflow',
      downloadUrl: 'https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9'
    }
  ];

  return (
    <div className="space-y-16 py-6">
      {/* Community Hub Grid */}
      <CommunityHub />

      {/* Free Blueprints & Templates Vault */}
      <section className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Free Resource Vault
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-white">
              Download Ready-to-Deploy N8N Workflows
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Access free JSON blueprints shared exclusively in the Digizier WhatsApp & Skool community.
            </p>
          </div>

          <a
            href="https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4" /> Get All Templates on WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((tpl, i) => (
            <div key={i} className="bg-[#030712]/80 rounded-2xl p-5 border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#FF5500] bg-[#FF5500]/10 px-2 py-0.5 rounded border border-[#FF5500]/20">
                  {tpl.category}
                </span>
                <h4 className="font-heading font-bold text-white text-base">{tpl.title}</h4>
                <p className="text-xs text-slate-400">{tpl.description}</p>
              </div>

              <a
                href={tpl.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#FF5500]/20 text-slate-200 hover:text-[#FF5500] border border-white/10 hover:border-[#FF5500]/30 text-xs font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#FF5500]" /> Access Template
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
