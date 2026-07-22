import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  PhoneOff, 
  Mic, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  Bot, 
  Calendar,
  MessageSquare
} from 'lucide-react';

export default function VoiceCallSimulator() {
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [transcript, setTranscript] = useState([]);

  useEffect(() => {
    let timer;
    if (isCalling) {
      timer = setInterval(() => setCallDuration((prev) => prev + 1), 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(timer);
  }, [isCalling]);

  const startCall = () => {
    setIsCalling(true);
    setTranscript([
      { speaker: 'AI Agent', text: "📞 Hello! Thanks for calling Digizier AI Solutions. I'm Nadir Habib's AI Assistant. How can I help automate your business today?" }
    ]);

    setTimeout(() => {
      setTranscript((prev) => [
        ...prev,
        { speaker: 'Caller (You)', text: "Hi! I need a Voice AI agent that can handle inbound calls and book appointments on my calendar." }
      ]);
    }, 2500);

    setTimeout(() => {
      setTranscript((prev) => [
        ...prev,
        { speaker: 'AI Agent', text: "⚡ Excellent! Our Voice AI agents run on Retell & Vapi with under 800ms latency. I can schedule a 30-min strategy call with Nadir Habib on Cal.com right now. Does tomorrow at 3:00 PM work for you?" }
      ]);
    }, 5500);

    setTimeout(() => {
      setTranscript((prev) => [
        ...prev,
        { speaker: 'Caller (You)', text: "Yes, tomorrow at 3:00 PM works perfectly!" }
      ]);
    }, 8500);

    setTimeout(() => {
      setTranscript((prev) => [
        ...prev,
        { speaker: 'AI Agent', text: "✅ Done! Your appointment is locked in on Cal.com, and I've sent a WhatsApp confirmation receipt to your phone number. Have a great day!" }
      ]);
    }, 11500);
  };

  const endCall = () => {
    setIsCalling(false);
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `0${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-semibold mb-2">
            <PhoneCall className="w-3.5 h-3.5" /> Interactive Voice AI Phone Demo
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Test Autonomous 24/7 Voice AI Call Handling
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Simulate an inbound phone call to experience real-time Voice AI lead qualification & appointment booking.
          </p>
        </div>
      </div>

      {/* Main Interactive Phone Dialer & Live Transcript */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Phone UI Dialer Card */}
        <div className="lg:col-span-5 glass-card-orange rounded-3xl p-6 border border-[#FF5500]/40 text-center space-y-6 relative overflow-hidden">
          
          <div className="space-y-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF5500] to-[#00D2FF] p-[2px] mx-auto">
              <div className="w-full h-full bg-[#0A192F] rounded-full flex items-center justify-center">
                <Bot className="w-8 h-8 text-[#00D2FF]" />
              </div>
            </div>

            <h4 className="font-heading font-extrabold text-xl text-white">Digizier Voice AI Agent</h4>
            <p className="text-xs text-[#00D2FF] font-mono">
              {isCalling ? `LIVE CALL IN PROGRESS (${formatTime(callDuration)})` : 'READY FOR TEST CALL'}
            </p>
          </div>

          {/* Animated Waveform Spectrum */}
          <div className="h-12 flex items-center justify-center gap-1.5 bg-[#030712]/80 rounded-2xl px-4 border border-white/10">
            {[40, 70, 30, 90, 60, 100, 45, 80, 50, 95, 35, 75].map((h, i) => (
              <div
                key={i}
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  isCalling ? 'bg-[#FF5500] animate-pulse' : 'bg-slate-700'
                }`}
                style={{ height: isCalling ? `${Math.min(100, h * (Math.random() + 0.5))}%` : '20%' }}
              />
            ))}
          </div>

          {/* Phone Controls */}
          <div className="flex items-center justify-center gap-4">
            {!isCalling ? (
              <button
                onClick={startCall}
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xl shadow-emerald-600/30 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Start Voice AI Call
              </button>
            ) : (
              <button
                onClick={endCall}
                className="px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-xl shadow-rose-600/30 transition-all flex items-center gap-2"
              >
                <PhoneOff className="w-4 h-4" /> End Call
              </button>
            )}
          </div>

          <p className="text-[11px] text-slate-400">
            • Sub-800ms Latency • Retell & Vapi Voice Bot Integration
          </p>

        </div>

        {/* Live Conversation Transcript Feed */}
        <div className="lg:col-span-7 bg-[#030712] rounded-2xl p-6 border border-white/10 space-y-4 h-[320px] overflow-y-auto font-sans">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-2">
            <span>REAL-TIME CALL TRANSCRIPT</span>
            <span className="text-emerald-400 font-mono">LATENCY: ~640ms</span>
          </div>

          {transcript.length === 0 ? (
            <div className="text-center py-16 space-y-2 text-slate-500 text-xs italic">
              <PhoneCall className="w-8 h-8 mx-auto opacity-30 text-[#00D2FF]" />
              <p>Click "Start Voice AI Call" to launch live call simulation...</p>
            </div>
          ) : (
            <div className="space-y-3">
              {transcript.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    item.speaker.includes('AI') 
                      ? 'bg-[#0A192F] border border-[#00D2FF]/30 text-slate-200' 
                      : 'bg-[#FF5500]/20 border border-[#FF5500]/30 text-white'
                  }`}
                >
                  <span className="block font-bold text-[10px] uppercase font-mono text-[#00D2FF] mb-1">
                    {item.speaker}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
