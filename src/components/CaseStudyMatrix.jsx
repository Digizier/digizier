import React, { useState } from 'react';
import { Award, Star, ExternalLink, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CaseStudyMatrix() {
  const [filter, setFilter] = useState('all');

  const caseStudies = [
    {
      category: 'voice',
      title: 'Voice AI Real Estate Lead Qualifier',
      client: 'US Property Investment Group',
      rating: 5.0,
      metrics: '4x Faster Response & $45k Revenue Added',
      tech: 'Retell AI + Google Calendar + Voice Bot',
      review: '"Nadir Habib built a voice bot that handles missed inbound calls within 5 seconds and schedules buyers directly on our calendar. Game-changer!"',
      fiverrLink: 'https://fiverr.com/s/XL5Nbme',
      upworkLink: 'https://upwork.com/freelancers/~01b5235bf28b7d4ee0?mp_source=share'
    },
    {
      category: 'n8n',
      title: 'Enterprise N8N E-Commerce Automation',
      client: 'Global Shopify Brand',
      rating: 5.0,
      metrics: '82% Reduction in Manual Support Tickets',
      tech: 'WhatsApp Evolution API + N8N + OpenAI',
      review: '"Our customer support is 100% automated on WhatsApp. Order tracking and return requests execute automatically with zero human effort."',
      fiverrLink: 'https://fiverr.com/s/XL5Nbme',
      upworkLink: 'https://upwork.com/freelancers/~01b5235bf28b7d4ee0?mp_source=share'
    },
    {
      category: 'saas',
      title: 'Full-Stack SaaS Web App & Hostinger Deploy',
      client: 'B2B Software Platform',
      rating: 5.0,
      metrics: 'Built & Deployed in 7 Days with 100% Uptime',
      tech: 'Claude Code + Antigravity 2.0 + Hostinger',
      review: '"Nadir engineered our SaaS web app using Claude Code and deployed it seamlessly on Hostinger. Fast, reliable, and top quality work!"',
      fiverrLink: 'https://fiverr.com/s/XL5Nbme',
      upworkLink: 'https://upwork.com/freelancers/~01b5235bf28b7d4ee0?mp_source=share'
    }
  ];

  const filtered = filter === 'all' ? caseStudies : caseStudies.filter(c => c.category === filter);

  return (
    <section className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
            <Award className="w-3.5 h-3.5" /> Verified Client Work & 5-Star Reviews
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Client Success Stories & Verified ROI
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real business results delivered by Nadir Habib on Fiverr, Upwork, and direct enterprise contracts.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex flex-wrap gap-2 bg-[#030712] p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setFilter('voice')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'voice' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Voice AI
          </button>
          <button
            onClick={() => setFilter('n8n')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'n8n' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            N8N Automation
          </button>
          <button
            onClick={() => setFilter('saas')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'saas' ? 'bg-[#FF5500] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            SaaS Apps
          </button>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((cs, i) => (
          <div key={i} className="bg-[#030712]/90 rounded-2xl p-6 border border-white/10 space-y-4 flex flex-col justify-between hover:border-[#FF5500]/40 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#00D2FF] bg-[#00D2FF]/10 px-2.5 py-1 rounded-lg border border-[#00D2FF]/20">
                  {cs.client}
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" /> {cs.rating}
                </div>
              </div>

              <h4 className="font-heading font-extrabold text-xl text-white">{cs.title}</h4>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold text-xs">
                ⚡ {cs.metrics}
              </div>

              <p className="text-xs text-slate-300 italic leading-relaxed">
                {cs.review}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" /> {cs.tech}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={cs.fiverrLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-[#1DBF73]/20 text-[#1DBF73] border border-[#1DBF73]/30 font-bold text-[11px] hover:bg-[#1DBF73]/30 transition-colors flex items-center justify-center gap-1"
                >
                  <Briefcase className="w-3 h-3" /> Fiverr Gig
                </a>

                <a
                  href={cs.upworkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-[#14A800]/20 text-[#14A800] border border-[#14A800]/30 font-bold text-[11px] hover:bg-[#14A800]/30 transition-colors flex items-center justify-center gap-1"
                >
                  <Briefcase className="w-3 h-3" /> Upwork Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
