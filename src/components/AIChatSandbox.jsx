import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  MessageSquare, 
  Calendar, 
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

export default function AIChatSandbox() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '👋 Welcome to Digizier AI! I am Nadir Habib’s AI Assistant. Ask me anything about N8N automations, Voice AI agents, or how we can automate your business operations!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    'How do Voice AI & RAG systems work?',
    'What N8N automations can Digizier build?',
    'How can I book a 1-on-1 strategy call?'
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botReply = "Digizier specializes in custom AI Agent workflows, N8N webhooks, Voice AI (Retell/Vapi), WhatsApp/Instagram Chatbots (Evolution API), and Digital Marketing automation! Reach out directly via WhatsApp or Book a Strategy Session.";
      
      const qLower = query.toLowerCase();
      if (qLower.includes('voice') || qLower.includes('rag')) {
        botReply = "🎙️ Voice AI Agents combine Speech-to-Text, LLM Reasoning (GPT-4), and RAG Knowledge bases to handle inbound & outbound phone calls, qualify leads, and auto-book appointments 24/7!";
      } else if (qLower.includes('n8n') || qLower.includes('automation')) {
        botReply = "⚡ N8N allows us to build complex, enterprise-grade logic connecting your CRM (HubSpot, GoHighLevel, Airtable), WhatsApp, Email, and custom APIs without recurring high SaaS fees!";
      } else if (qLower.includes('book') || qLower.includes('call') || qLower.includes('nadir') || qLower.includes('meeting')) {
        botReply = "📅 You can book a direct 1-on-1 appointment with Nadir Habib right here: digizier.com/appointment-booking or message directly on WhatsApp (+92 322-2685868)!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col h-[520px]">
      {/* Sandbox Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5500] to-[#00D2FF] p-[2px]">
            <div className="w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#00D2FF]" />
            </div>
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-white text-base flex items-center gap-2">
              Digizier AI Assistant Playground
            </h4>
            <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Agent Operational
            </p>
          </div>
        </div>

        <button
          onClick={() => setMessages([{ sender: 'bot', text: '👋 Chat reset! How can I help you today?' }])}
          className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs flex items-center gap-1"
          title="Reset Conversation"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Clear
        </button>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-4 scrollbar-thin">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              msg.sender === 'user' 
                ? 'bg-[#FF5500] text-white' 
                : 'bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/30'
            }`}>
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
              msg.sender === 'user'
                ? 'bg-[#FF5500] text-white rounded-tr-none font-medium'
                : 'bg-[#0A192F] border border-white/10 text-slate-200 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-9">
            <Bot className="w-3.5 h-3.5 animate-spin text-[#00D2FF]" />
            Digizier AI is thinking...
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {quickPrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#FF5500]/20 text-slate-300 hover:text-[#FF5500] border border-white/10 hover:border-[#FF5500]/30 text-[11px] font-medium transition-all"
          >
            💡 {prompt}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2 bg-[#030712] p-2 rounded-2xl border border-white/10 focus-within:border-[#FF5500] transition-colors"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about AI Agents, N8N, Voice Bots..."
          className="flex-1 bg-transparent px-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className={`p-2.5 rounded-xl font-bold transition-all ${
            input.trim()
              ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30 hover:bg-[#FF7700]'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
