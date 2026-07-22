import React, { useState } from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Mail, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  ExternalLink
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'N8N Complex Workflow Automation',
    message: ''
  });
  const [deliveryMethod, setDeliveryMethod] = useState('whatsapp'); // 'whatsapp' | 'email'

  const buildFormattedText = () => {
    return `🚀 *New Digizier Project Inquiry*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name || 'Not provided')}%0A` +
      `📧 *Email:* ${encodeURIComponent(formData.email || 'Not provided')}%0A` +
      `📱 *Phone/WhatsApp:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A` +
      `⚡ *Required AI Solution:* ${encodeURIComponent(formData.service)}%0A%0A` +
      `📝 *Project Specs & Bottlenecks:*%0A${encodeURIComponent(formData.message || 'No description provided')}`;
  };

  const handleWhatsAppSubmit = (e) => {
    if (e) e.preventDefault();
    const formatted = buildFormattedText();
    const whatsappUrl = `https://wa.me/923222685868?text=${formatted}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailSubmit = (e) => {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(`New Digizier Project Inquiry from ${formData.name || 'Client'}`);
    const body = buildFormattedText().replace(/%0A/g, '%0D%0A');
    const mailtoUrl = `mailto:digizier@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
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
          Schedule a direct 1-on-1 meeting with <strong className="text-white">Nadir Habib</strong> or send an instant project inquiry via WhatsApp or Email (<strong className="text-[#00D2FF]">digizier@gmail.com</strong>).
        </p>
      </div>

      {/* Main Grid: Booking Link & Direct Line */}
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

        {/* Direct Channels Card */}
        <div className="glass-panel rounded-3xl p-8 border border-emerald-500/30 shadow-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/40">
              <MessageSquare className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Direct Contact Lines
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Instant messaging & email line for project specs & quick quotes.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white">+92 322-2685868</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded font-mono">WhatsApp</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#00D2FF]/10 border border-[#00D2FF]/20 text-xs text-slate-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00D2FF]" />
                  <span className="font-bold text-white">digizier@gmail.com</span>
                </div>
                <span className="text-[10px] text-[#00D2FF] bg-[#00D2FF]/20 px-2 py-0.5 rounded font-mono">Official Email</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              🟢 Usually responds within 1 hour across all channels.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://wa.me/923222685868"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Direct
            </a>

            <a
              href="mailto:digizier@gmail.com"
              className="py-3 px-3 rounded-xl bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 font-bold text-xs hover:bg-[#00D2FF]/30 transition-colors flex items-center justify-center gap-1.5"
            >
              <Mail className="w-4 h-4" /> Email Direct
            </a>
          </div>
        </div>

      </div>

      {/* Instant Project Inquiry Form */}
      <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-white">
              Send An Instant Project Inquiry
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Fill out your project details below and select your preferred delivery channel (WhatsApp or Email).
            </p>
          </div>

          {/* Delivery Method Selection Toggle */}
          <div className="flex items-center gap-2 bg-[#030712] p-1.5 rounded-2xl border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setDeliveryMethod('whatsapp')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                deliveryMethod === 'whatsapp'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" /> Deliver via WhatsApp
            </button>

            <button
              type="button"
              onClick={() => setDeliveryMethod('email')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                deliveryMethod === 'email'
                  ? 'bg-[#00D2FF] text-slate-950 font-bold shadow-md shadow-[#00D2FF]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5" /> Deliver via Email
            </button>
          </div>
        </div>

        <form onSubmit={deliveryMethod === 'whatsapp' ? handleWhatsAppSubmit : handleEmailSubmit} className="space-y-4">
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
                <option value="N8N Complex Workflow Automation">N8N Complex Workflow Automation</option>
                <option value="Voice AI Agent & RAG System">Voice AI Agent & RAG System</option>
                <option value="WhatsApp / IG Chatbot (Evolution API)">WhatsApp / IG Chatbot (Evolution API)</option>
                <option value="Custom REST API Bridges">Custom REST API Bridges</option>
                <option value="Digital Marketing Funnel Automation">Digital Marketing Funnel Automation</option>
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

          {/* Submission Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="w-full py-4 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Redirect & Submit via WhatsApp (+92 322-2685868)
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              className="w-full py-4 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" /> Redirect & Submit via Email (digizier@gmail.com)
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
