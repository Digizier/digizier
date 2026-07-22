import React, { useState, useEffect } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle2, Sparkles, Code, Cpu } from 'lucide-react';

export default function CyberTerminal() {
  const [selectedScript, setSelectedScript] = useState('n8n');
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isCompiling, setIsCompiling] = useState(false);

  const scripts = {
    n8n: {
      name: 'build_n8n_pipeline.js',
      command: 'n8n execute --workflow=lead_qualification_v4.json',
      lines: [
        '⚡ [00:00:01] Initializing N8N Webhook Listener on port 5678...',
        '🔍 [00:00:02] Parsing inbound HTTP payload from Meta Evolution API...',
        '🧠 [00:00:03] Querying Claude Code LLM for intent classification...',
        '📊 [00:00:04] Intent verified: HIGH_PRIORITY_SAAS_INQUIRY',
        '💾 [00:00:05] Syncing lead record to Supabase & PostgreSQL database...',
        '🚀 [00:00:06] Dispatched automated WhatsApp notification receipt.',
        '✅ [00:00:07] Workflow execution completed successfully in 842ms!'
      ]
    },
    voice: {
      name: 'deploy_voice_ai.py',
      command: 'python deploy_retell_agent.py --mode=inbound --rag=enabled',
      lines: [
        '🎙️ [00:00:01] Initializing Retell & Vapi Voice AI Agent Core...',
        '📚 [00:00:02] Loading vector embeddings into RAG Knowledge Base...',
        '⚡ [00:00:03] Voice Bot latency benchmarked at 640ms (Sub-second)...',
        '📅 [00:00:04] Connected Cal.com appointment booking API endpoint...',
        '✅ [00:00:05] Autonomous Voice Agent is live & listening for inbound calls!'
      ]
    },
    saas: {
      name: 'compile_saas_app.ts',
      command: 'npx vite build && docker build -t digizier-saas:latest .',
      lines: [
        '💻 [00:00:01] Invoking Claude Code & Antigravity 2.0 compiler engine...',
        '✨ [00:00:02] Transpiling React + TypeScript + Tailwind UI components...',
        '🐳 [00:00:03] Building multi-stage production Docker container...',
        '🚀 [00:00:04] Deploying container to Hostinger Cloud infrastructure...',
        '🔒 [00:00:05] Provisioned auto-renewing SSL certificate & Nginx reverse proxy.',
        '✅ [00:00:06] SaaS Web Application is 100% live & operational!'
      ]
    }
  };

  const currentScript = scripts[selectedScript];

  const runTerminal = () => {
    setIsCompiling(true);
    setProgress(0);
    setTerminalOutput(['$ ' + currentScript.command]);

    let step = 0;
    const interval = setInterval(() => {
      if (step < currentScript.lines.length) {
        setTerminalOutput(prev => [...prev, currentScript.lines[step]]);
        setProgress(Math.round(((step + 1) / currentScript.lines.length) * 100));
        step++;
      } else {
        clearInterval(interval);
        setIsCompiling(false);
      }
    }, 600);
  };

  useEffect(() => {
    runTerminal();
  }, [selectedScript]);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Terminal className="w-3.5 h-3.5" /> Cyber IDE & Code Terminal
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Live AI Code & Automation Compiler
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Test Nadir Habib's automated deployment & pipeline compilation scripts in real-time.
          </p>
        </div>

        {/* Script Selection Tabs */}
        <div className="flex flex-wrap gap-2 bg-[#030712] p-1.5 rounded-2xl border border-white/10">
          {Object.keys(scripts).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedScript(key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                selectedScript === key
                  ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {scripts[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Display Container */}
      <div className="bg-[#030712] rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
        {/* Terminal Header Bar */}
        <div className="bg-[#0A192F] px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span className="text-xs font-mono text-slate-400 ml-2">bash - digizier-core-v4.2</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-emerald-400">
              STATUS: {isCompiling ? 'COMPILING...' : 'READY'}
            </span>
            <button
              onClick={runTerminal}
              disabled={isCompiling}
              className="p-1.5 rounded-lg bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Re-run Terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Live Output Feed */}
        <div className="p-5 font-mono text-xs text-slate-300 space-y-2 h-64 overflow-y-auto bg-[#030712]/95">
          {terminalOutput.map((line, i) => (
            <div key={i} className={i === 0 ? 'text-[#00D2FF] font-bold' : 'text-emerald-300'}>
              {line}
            </div>
          ))}

          {isCompiling && (
            <div className="flex items-center gap-2 text-amber-400 italic pt-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              Executing script steps...
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="bg-[#0A192F] px-4 py-2 flex items-center justify-between border-t border-white/10 text-[11px] font-mono">
          <span className="text-slate-400">COMPILATION PROGRESS</span>
          <div className="w-48 bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#FF5500] to-[#00D2FF] h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-white font-bold">{progress}%</span>
        </div>
      </div>

    </div>
  );
}
