import React from 'react';
import { 
  Bot, 
  Youtube, 
  MessageSquare, 
  Users, 
  Briefcase, 
  Calendar, 
  Instagram, 
  Facebook,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030712]/90 backdrop-blur-2xl text-slate-400 py-12 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Brand */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#FF5500]/50 shadow-lg shadow-[#FF5500]/30 bg-[#0A192F] flex items-center justify-center">
              <img 
                src="/digizier_logo.png" 
                alt="Digizier Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl text-white">DIGIZIER</span>
              <p className="text-[10px] text-slate-400">BY NADIR HABIB</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Enterprise AI Agents, N8N Workflow Automation, Voice AI & Digital Marketing Solutions for High-Growth Businesses Worldwide.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <a
              href="https://www.youtube.com/@Digizier"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-rose-600/20 hover:text-rose-400 border border-white/10 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href="https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-emerald-600/20 hover:text-emerald-400 border border-white/10 transition-colors"
              title="WhatsApp Community"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/digizier/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 border border-white/10 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61573866376528"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => setActivePage('home')} className="hover:text-[#FF5500] transition-colors">
                Home (Command Center)
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('services')} className="hover:text-[#FF5500] transition-colors">
                AI Services & N8N Simulator
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('community')} className="hover:text-[#FF5500] transition-colors">
                YouTube & Skool Community
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('portfolio')} className="hover:text-[#FF5500] transition-colors">
                AI Sandbox & Client Work
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('contact')} className="hover:text-[#FF5500] transition-colors">
                Book Consultation Call
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Official Ecosystem */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">Official Ecosystem</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="https://skool.com/digizier-4902/classroom" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5500] transition-colors flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" /> Skool Classroom <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5500] transition-colors flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp VIP Group <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://fiverr.com/s/XL5Nbme" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5500] transition-colors flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" /> Fiverr Gig Profile <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://upwork.com/freelancers/~01b5235bf28b7d4ee0?mp_source=share" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5500] transition-colors flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" /> Upwork Profile <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://digizier.com/appointment-booking" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5500] transition-colors flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#00D2FF]" /> Direct Booking Link <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Direct WhatsApp */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">Direct Contact</h4>
          <p className="text-xs text-slate-300">
            Work directly with Nadir Habib for custom AI integrations & consulting.
          </p>

          <a
            href="https://wa.me/923222685868"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/20 text-emerald-300 font-semibold text-xs border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp: +92 322-2685868
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Digizier. All rights reserved. Designed for Nadir Habib.</p>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1 text-[11px] text-[#00D2FF]">
            <Sparkles className="w-3 h-3 text-[#FF5500]" /> EasyPanel & GitHub Ready
          </span>
        </div>
      </div>
    </footer>
  );
}
