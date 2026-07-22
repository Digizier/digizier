import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle, 
  Zap, 
  Bot, 
  MessageSquare, 
  Database, 
  Globe, 
  Code, 
  ArrowRight,
  Sparkles,
  Server
} from 'lucide-react';

export default function N8nSimulator() {
  const [activeWorkflow, setActiveWorkflow] = useState('voice');
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [logs, setLogs] = useState([]);

  const workflows = {
    voice: {
      name: 'Voice AI Lead Qualifier & Appointment Scheduler',
      description: 'Incoming Call ➔ Retell/Vapi Voice Bot ➔ RAG Knowledge Lookup ➔ Auto-Book Calendar & Send WhatsApp Confirmation',
      nodes: [
        { id: 1, title: 'Inbound Call Webhook', icon: Globe, status: 'Trigger', color: 'from-[#00D2FF] to-[#3B82F6]' },
        { id: 2, title: 'RAG Knowledge DB', icon: Database, status: 'AI Vector Lookup', color: 'from-[#FF5500] to-[#FF7700]' },
        { id: 3, title: 'Voice AI Agent', icon: Bot, status: 'Speech-to-Text & LLM', color: 'from-[#00D2FF] to-[#00F0FF]' },
        { id: 4, title: 'WhatsApp Evolution API', icon: MessageSquare, status: 'Dispatch Confirmation', color: 'from-emerald-500 to-teal-400' },
      ],
      sampleOutput: {
        event: 'call_completed',
        duration_sec: 142,
        lead_qualification: 'HOT_BUYER',
        sentiment: 'POSITIVE',
        booked_slot: 'Tomorrow 3:00 PM EST',
        whatsapp_status: 'SENT_WITH_DELIVERY_RECEIPT'
      }
    },
    chat: {
      name: 'Omnichannel WhatsApp & Instagram Support Bot',
      description: 'Customer Message ➔ Evolution API ➔ OpenAI Intent Classifier ➔ FAQ DB ➔ Instant Response',
      nodes: [
        { id: 1, title: 'Meta Webhook', icon: MessageSquare, status: 'Inbound Event', color: 'from-emerald-500 to-teal-400' },
        { id: 2, title: 'GPT-4 Intent Engine', icon: Bot, status: 'NLP Analysis', color: 'from-[#FF5500] to-[#FF7700]' },
        { id: 3, title: 'CRM Lead Sync', icon: Server, status: 'HubSpot & Airtable', color: 'from-[#00D2FF] to-[#3B82F6]' },
        { id: 4, title: 'WhatsApp Auto-Reply', icon: Zap, status: 'Instant Delivery', color: 'from-amber-500 to-orange-500' },
      ],
      sampleOutput: {
        platform: 'WhatsApp Business',
        user_query: 'Pricing for AI Agent setup',
        intent: 'INQUIRY_PRICING',
        confidence: '99.4%',
        auto_response_sent: true,
        calendar_link_sent: 'digizier.com/appointment-booking'
      }
    }
  };

  const currentWf = workflows[activeWorkflow];

  const handleRunPipeline = () => {
    setIsRunning(true);
    setActiveStep(1);
    setLogs(['🚀 [00:00:01] Workflow execution initialized...']);

    setTimeout(() => {
      setActiveStep(2);
      setLogs(prev => [...prev, '🔍 [00:00:02] Querying RAG Vector Database & AI LLM...']);
    }, 1000);

    setTimeout(() => {
      setActiveStep(3);
      setLogs(prev => [...prev, '⚡ [00:00:03] Processing logic & generating response payload...']);
    }, 2000);

    setTimeout(() => {
      setActiveStep(4);
      setLogs(prev => [...prev, '✅ [00:00:04] WhatsApp API dispatched message successfully! Pipeline complete.']);
      setIsRunning(false);
    }, 3000);
  };

  const handleReset = () => {
    setIsRunning(false);
    setActiveStep(0);
    setLogs([]);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive 3D Workflow Simulator
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-white">
            N8N Automation & API Pipeline Visualizer
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Test how Digizier connects AI models, databases, and messaging APIs in real-time.
          </p>
        </div>

        {/* Workflow Switcher */}
        <div className="flex items-center gap-2 bg-[#030712] p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => { setActiveWorkflow('voice'); handleReset(); }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeWorkflow === 'voice' 
                ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Voice AI & RAG
          </button>

          <button
            onClick={() => { setActiveWorkflow('chat'); handleReset(); }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeWorkflow === 'chat' 
                ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            WhatsApp Support Bot
          </button>
        </div>
      </div>

      {/* Pipeline Visual Canvas */}
      <div className="bg-[#030712]/90 rounded-2xl p-6 border border-white/10 mb-6 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {currentWf.nodes.map((node, index) => {
            const Icon = node.icon;
            const stepNum = index + 1;
            const isCurrent = activeStep === stepNum;
            const isCompleted = activeStep > stepNum || (activeStep === 4 && stepNum === 4);

            return (
              <div key={node.id} className="relative">
                <div 
                  className={`p-4 rounded-xl border transition-all duration-500 relative ${
                    isCurrent 
                      ? 'bg-[#0A192F] border-[#FF5500] shadow-xl shadow-[#FF5500]/30 scale-105 ring-2 ring-[#FF5500]/50'
                      : isCompleted
                      ? 'bg-[#0A192F]/80 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                      : 'bg-white/5 border-white/10 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300">
                      NODE 0{node.id}
                    </span>
                    {isCompleted ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : isCurrent ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-ping"></span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${node.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm">{node.title}</h4>
                      <p className="text-[11px] text-slate-400">{node.status}</p>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  {index < currentWf.nodes.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className={`w-5 h-5 ${isCompleted ? 'text-emerald-400' : 'text-slate-600'}`} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Controls & JSON Log Output */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        {/* Run Controls */}
        <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-3">
          <h4 className="font-heading font-bold text-white text-sm flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FF5500]" /> Simulation Console
          </h4>

          <div className="flex gap-2">
            <button
              onClick={handleRunPipeline}
              disabled={isRunning}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
                isRunning
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-[#FF5500] text-white hover:bg-[#FF7700] shadow-[#FF5500]/30'
              }`}
            >
              <Play className="w-4 h-4 fill-white" /> 
              {isRunning ? 'Executing Pipeline...' : 'Test Workflow'}
            </button>

            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
              title="Reset Simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 text-[11px] text-slate-400 border-t border-white/5 space-y-1">
            <p>• Connects N8N, Evolution API & Vector DBs.</p>
            <p>• Zero human intervention required.</p>
          </div>
        </div>

        {/* Live Execution Logs */}
        <div className="lg:col-span-2 bg-[#030712] rounded-xl p-4 border border-white/10 font-mono text-xs text-slate-300 h-40 overflow-y-auto space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-white/5 pb-1 mb-2 font-sans">
            <span>REAL-TIME EXECUTION LOG</span>
            <span className="text-emerald-400">STATUS: {isRunning ? 'RUNNING' : activeStep === 4 ? 'SUCCESS' : 'READY'}</span>
          </div>

          {logs.length === 0 ? (
            <p className="text-slate-600 italic">Click "Test Workflow" to run simulated live N8N execution data stream...</p>
          ) : (
            logs.map((log, idx) => (
              <div key={idx} className="text-emerald-300 leading-relaxed">
                {log}
              </div>
            ))
          )}

          {activeStep === 4 && (
            <div className="mt-3 p-3 bg-slate-900/90 rounded-lg border border-emerald-500/30 text-[11px] text-slate-200 overflow-x-auto">
              <span className="text-amber-400 font-bold">// Output Payload:</span>
              <pre className="mt-1 text-slate-300">{JSON.stringify(currentWf.sampleOutput, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
