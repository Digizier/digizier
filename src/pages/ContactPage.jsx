import React, { useState } from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Globe, 
  Youtube, 
  Briefcase, 
  Users, 
  Instagram, 
  Facebook,
  ExternalLink
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'n8n',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5" /> Book A Strategy Session Or Reach Out
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
          Let’s Build Your AI Automation System
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Schedule a direct 1-on-1 meeting with <strong className="text-white">Nadir Habib</strong> or send a message on WhatsApp for instant feedback.
        </p>
      </div>

      {/* Main Grid: Booking Link & WhatsApp Direct */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Meeting Booking Card */}
        <div className="glass-card-orange rounded-3xl p-8 border border-[#FF5500]/40 shadow-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500] text-white flex items-center justify-center shadow-lg shadow-[#FF5500]/40">
              <Calendar className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Book 1-on-1 Meeting Link
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Select your preferred date & time on Nadir Habib’s official calendar portal.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                30-Minute AI Workflow Strategy Audit
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                Custom Architecture & Cost Roadmap
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                Direct 1-on-1 Zoom / Google Meet Call
              </li>
            </ul>
          </div>

          <a
            href="https://digizier.com/appointment-booking"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-xl shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Open Appointment Booking Portal <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* WhatsApp Direct Card */}
        <div className="glass-panel rounded-3xl p-8 border border-emerald-500/30 shadow-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/40">
              <MessageSquare className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                WhatsApp Direct Chat
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Instant messaging line for project inquiries, technical specs & quick quotes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white text-sm">+92 322-2685868</span>
              </div>
              <p className="text-[11px] text-emerald-300">
                🟢 Usually responds within 1 hour
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant project scope discussions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Voice notes & workflow JSON previews
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/923222685868"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-xl shadow-emerald-600/30 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Start Direct WhatsApp Chat <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Quick Inquiry Form */}
      <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl">
        <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
          Send An Instant Project Inquiry
        </h3>
        <p className="text-xs text-slate-400 mb-6">Fill out your project requirements below to receive a custom proposal.</p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="font-heading font-bold text-white text-lg">Inquiry Submitted Successfully!</h4>
            <p className="text-xs text-slate-300">Nadir Habib will review your project specs and respond on WhatsApp / Email shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs focus:border-[#FF5500] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs focus:border-[#FF5500] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp / Phone Number</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs focus:border-[#FF5500] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Required AI Solution</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs focus:border-[#FF5500] focus:outline-none"
                >
                  <option value="n8n">N8N Complex Workflow Automation</option>
                  <option value="voice">Voice AI Agent & RAG System</option>
                  <option value="chatbot">WhatsApp / IG Chatbot (Evolution API)</option>
                  <option value="api">Custom API & Microservices</option>
                  <option value="marketing">Digital Marketing Funnel</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details & Bottlenecks</label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your current manual workflow bottlenecks and desired AI automation outcome..."
                className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs focus:border-[#FF5500] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Submit Inquiry To Nadir Habib
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
