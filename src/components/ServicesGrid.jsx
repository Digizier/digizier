import React, { useState } from 'react';
import { 
  Cpu, 
  PhoneCall, 
  MessageSquare, 
  Workflow, 
  TrendingUp, 
  GraduationCap, 
  ArrowRight, 
  Check, 
  Sparkles,
  X,
  Bot
} from 'lucide-react';

export default function ServicesGrid({ onBookClick }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'n8n',
      title: 'N8N Workflow & Webhook Automation',
      tagline: 'Enterprise-Grade No-Code & Low-Code Pipeline Architecture',
      icon: Workflow,
      color: 'from-[#FF5500] to-[#FF7700]',
      features: [
        'Multi-app workflow orchestrations (100+ app connectors)',
        'Custom Webhooks & REST API Endpoint bridging',
        'Self-hosted N8N setup for maximum data privacy',
        'Automated database sync (PostgreSQL, Supabase, Airtable)'
      ],
      details: 'We build custom, scalable N8N pipelines that connect your existing software stack seamlessly. Eliminate manual data entry, automate lead ingestion, and process complex business logic without paying monthly per-execution charges.'
    },
    {
      id: 'voice',
      title: 'Voice AI Agents & RAG Systems',
      tagline: '24/7 Autonomous Inbound & Outbound Call Handling',
      icon: PhoneCall,
      color: 'from-[#00D2FF] to-[#3B82F6]',
      features: [
        'Retell AI & Vapi Voice Bot deployment',
        'Retrieval-Augmented Generation (RAG) on company docs',
        'Real-time appointment scheduling during phone calls',
        'Human-like latency (<800ms) with custom voice cloning'
      ],
      details: 'Transform customer phone support with Voice AI agents that sound remarkably human, answer questions using your custom knowledge base, and book qualified leads directly into your Google Calendar or CRM.'
    },
    {
      id: 'chatbots',
      title: 'Omnichannel WhatsApp & IG Chatbots',
      tagline: 'Evolution API & Meta Official Bot Architecture',
      icon: MessageSquare,
      color: 'from-emerald-500 to-teal-400',
      features: [
        'WhatsApp Automation via Evolution API & Official Meta APIs',
        'Instagram DM auto-responders & story reply triggers',
        'Facebook Messenger & Website widget chatbots',
        'Broadcasting, broadcast sequences & contact tagging'
      ],
      details: 'Reach your customers on their favorite messaging apps. Our chatbots handle FAQs, qualify leads, accept orders, and send instant notifications on WhatsApp, Instagram, and Facebook.'
    },
    {
      id: 'api',
      title: 'APIs Integration & Microservices',
      tagline: 'Seamless Connection Across Enterprise Platforms',
      icon: Cpu,
      color: 'from-purple-500 to-[#00D2FF]',
      features: [
        'Custom Node.js & Python API wrappers',
        'GoHighLevel, HubSpot, & Salesforce custom integrations',
        'Stripe / PayPal automated webhook payment handlers',
        'Real-time notification dispatches via Slack & Telegram'
      ],
      details: 'Connect disconnected platforms with custom API integrations. We build resilient endpoints that handle high concurrency, retry failed requests gracefully, and format data for downstream consumption.'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing & Funnel Automation',
      tagline: 'High-ROI Growth Hacking & Lead Nurturing',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
      features: [
        'Automated lead scoring & CRM pipeline movement',
        'WhatsApp & Email multi-step drip nurturing campaigns',
        'High-converting landing page & appointment funnels',
        'Ad lead instant call-back automation'
      ],
      details: 'Turn ad clicks into booked meetings. We combine strategic marketing funnels with immediate automated follow-ups to maximize lead conversion rates and dramatically lower customer acquisition costs.'
    },
    {
      id: 'skool',
      title: 'Skool Community & 1-on-1 Mentorship',
      tagline: 'Live Doubt Solving & Career Roadmaps',
      icon: GraduationCap,
      color: 'from-rose-500 to-pink-500',
      features: [
        'Skool LIVE doubt-solving & mentorship sessions',
        'Ready-to-deploy N8N JSON workflow templates',
        'Step-by-step career & freelancer roadmaps',
        'Dedicated VIP WhatsApp community support'
      ],
      details: 'Master AI automation with Nadir Habib. Join the Digizier Skool community to get access to battle-tested workflow templates, weekly live Q&A sessions, and direct guidance on building an AI agency.'
    }
  ];

  return (
    <section className="space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> High-Performance AI Solutions
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
          Enterprise AI Agents & Automation Capabilities
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Engineered by <strong className="text-white">Nadir Habib</strong> to eliminate manual bottlenecks, scale customer interactions, and drive real business ROI.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${srv.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 group-hover:border-[#FF5500]/40 group-hover:text-[#FF5500] transition-colors">
                    Click for Details
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#FF5500] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#00D2FF] font-medium mt-1">
                    {srv.tagline}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-white/5">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 flex items-center justify-between text-xs font-semibold text-[#FF5500] group-hover:translate-x-1 transition-transform">
                <span>Explore Solution</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-slate-400 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${selectedService.color} flex items-center justify-center text-white shadow-lg`}>
                {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-white">{selectedService.title}</h3>
                <p className="text-xs text-[#00D2FF] font-medium">{selectedService.tagline}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
              {selectedService.details}
            </p>

            <h4 className="font-heading font-bold text-white text-sm mb-3">Key Solution Deliverables:</h4>
            <ul className="space-y-2 mb-6">
              {selectedService.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onBookClick();
                }}
                className="flex-1 py-3 rounded-xl bg-[#FF5500] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Book Strategy Session for {selectedService.title}
              </button>
              <a
                href="https://wa.me/923222685868"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-500/20 text-emerald-300 font-semibold text-xs border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
