import React, { useState } from 'react';
import { 
  Plus, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Globe, 
  Bot, 
  Database, 
  Server, 
  Calendar,
  MessageSquare,
  ArrowRight,
  Trash2
} from 'lucide-react';

export default function DragDropWorkflow() {
  const nodeLibrary = [
    { type: 'trigger', name: 'Inbound Call / Webhook', icon: Globe, color: 'from-blue-500 to-cyan-400', desc: 'Triggers on call or HTTP request' },
    { type: 'ai', name: 'Claude Code & AI Reasoning', icon: Bot, color: 'from-[#FF5500] to-orange-400', desc: 'Anthropic LLM logic processing' },
    { type: 'ai', name: 'Antigravity 2.0 Agent Engine', icon: Sparkles, color: 'from-purple-500 to-indigo-500', desc: 'Multi-agent task orchestration' },
    { type: 'db', name: 'RAG Knowledge Vector DB', icon: Database, color: 'from-[#00D2FF] to-blue-600', desc: 'Queries enterprise documents' },
    { type: 'deploy', name: 'Hostinger Automated Deploy', icon: Server, color: 'from-purple-600 to-violet-500', desc: 'Continuous Docker deployment' },
    { type: 'action', name: 'Cal.com Meeting Scheduler', icon: Calendar, color: 'from-amber-500 to-orange-500', desc: 'Auto-books client appointment' },
  ];

  const [activePipeline, setActivePipeline] = useState([
    nodeLibrary[0],
    nodeLibrary[1],
    nodeLibrary[3],
    nodeLibrary[4]
  ]);

  const [isExecuting, setIsExecuting] = useState(false);
  const [executionStep, setExecutionStep] = useState(0);

  const addNode = (node) => {
    if (activePipeline.length >= 6) return;
    setActivePipeline([...activePipeline, node]);
  };

  const removeNode = (index) => {
    if (activePipeline.length <= 2) return;
    setActivePipeline(activePipeline.filter((_, i) => i !== index));
  };

  const runSimulation = () => {
    setIsExecuting(true);
    setExecutionStep(1);

    const interval = setInterval(() => {
      setExecutionStep((prev) => {
        if (prev >= activePipeline.length) {
          clearInterval(interval);
          setIsExecuting(false);
          return activePipeline.length;
        }
        return prev + 1;
      });
    }, 800);
  };

  const estimatedHoursSaved = activePipeline.length * 12;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold mb-2">
            <Zap className="w-3.5 h-3.5" /> Interactive Pipeline Architect
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Build Your Autonomous AI & SaaS Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Click nodes from the palette below to customize your custom workflow architecture in real-time.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={runSimulation}
            disabled={isExecuting}
            className={`px-5 py-3 rounded-xl font-extrabold text-xs flex items-center gap-2 shadow-lg transition-all ${
              isExecuting
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : 'bg-[#FF5500] text-white hover:bg-[#FF7700] shadow-[#FF5500]/30'
            }`}
          >
            <Play className="w-4 h-4 fill-white" />
            {isExecuting ? 'Executing Pipeline...' : 'Run Live Data Simulation'}
          </button>

          <button
            onClick={() => {
              setIsExecuting(false);
              setExecutionStep(0);
              setActivePipeline([nodeLibrary[0], nodeLibrary[1], nodeLibrary[3], nodeLibrary[4]]);
            }}
            className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white border border-white/10 transition-colors"
            title="Reset Pipeline"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Active Pipeline Canvas */}
      <div className="bg-[#030712]/90 rounded-2xl p-6 border border-white/10 min-h-[160px] flex items-center relative overflow-x-auto">
        <div className="flex items-center gap-3 w-full min-w-max px-2">
          {activePipeline.map((node, index) => {
            const Icon = node.icon;
            const stepNum = index + 1;
            const isCurrent = executionStep === stepNum;
            const isCompleted = executionStep > stepNum || (executionStep === activePipeline.length && stepNum === activePipeline.length);

            return (
              <React.Fragment key={index}>
                <div 
                  className={`p-4 rounded-2xl border transition-all duration-300 relative group w-52 shrink-0 ${
                    isCurrent
                      ? 'bg-[#0A192F] border-[#FF5500] shadow-xl shadow-[#FF5500]/40 scale-105 ring-2 ring-[#FF5500]/50'
                      : isCompleted
                      ? 'bg-[#0A192F]/90 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300">
                      STEP 0{stepNum}
                    </span>
                    {activePipeline.length > 2 && (
                      <button 
                        onClick={() => removeNode(index)} 
                        className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-rose-400 transition-opacity"
                        title="Remove Step"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${node.color} flex items-center justify-center text-white shadow-md shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-xs line-clamp-1">{node.name}</h4>
                      <p className="text-[10px] text-slate-400 line-clamp-1">{node.desc}</p>
                    </div>
                  </div>

                  {isCurrent && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF5500] animate-ping"></span>
                  )}
                </div>

                {index < activePipeline.length - 1 && (
                  <div className="shrink-0 flex items-center justify-center">
                    <ArrowRight className={`w-5 h-5 ${isCompleted ? 'text-emerald-400' : 'text-slate-600'}`} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Node Palette & Live ROI Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Node Palette */}
        <div className="lg:col-span-8 space-y-2">
          <label className="block text-xs font-semibold text-slate-300">Add Building Block to Pipeline:</label>
          <div className="flex flex-wrap gap-2">
            {nodeLibrary.map((node, i) => {
              const Icon = node.icon;
              return (
                <button
                  key={i}
                  onClick={() => addNode(node)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-[#FF5500]/20 border border-white/10 hover:border-[#FF5500]/30 text-xs font-semibold text-slate-200 hover:text-[#FF5500] transition-all"
                >
                  <Plus className="w-3.5 h-3.5 text-[#FF5500]" />
                  <Icon className="w-4 h-4 text-[#00D2FF]" />
                  <span>{node.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live ROI Output */}
        <div className="lg:col-span-4 glass-card-orange p-4 rounded-2xl border border-[#FF5500]/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-300 font-semibold">Calculated Impact</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Automated
            </span>
          </div>

          <div>
            <span className="text-xs text-slate-400">Est. Monthly Time Saved:</span>
            <p className="font-heading font-black text-2xl text-white">~{estimatedHoursSaved} Hours / Month</p>
          </div>

          <a
            href="https://cal.com/digizier-23voae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-[#FF5500] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/30 hover:bg-[#FF7700] transition-colors flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" /> Build This on Cal.com Call
          </a>
        </div>

      </div>

    </div>
  );
}
