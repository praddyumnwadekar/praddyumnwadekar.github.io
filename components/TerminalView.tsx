'use client';
import { motion } from 'framer-motion';

export default function TerminalView() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 5 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full rounded-xl bg-[#0F141C] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs hover:border-sky-500/30 transition-colors duration-500">
      <div className="px-4 py-3 bg-[#161D27] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
        </div>
        <span className="text-slate-400 text-[11px]">praddyumn@espressif:~</span>
      </div>
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="p-5 space-y-4 text-slate-300"
      >
        <motion.div variants={item}>
          <span className="text-emerald-400">$</span> <span className="text-slate-100">python -m engineer.profile</span>
        </motion.div>
        <motion.div variants={item} className="text-slate-400 pl-4 border-l border-slate-800 space-y-1">
          <p><span className="text-sky-400">name:</span> &quot;Praddyumn Wadekar&quot;</p>
          <p><span className="text-sky-400">role:</span> &quot;Python Automation Developer&quot;</p>
          <p><span className="text-sky-400">company:</span> &quot;Espressif Systems&quot;</p>
        </motion.div>
        <motion.div variants={item}>
          <span className="text-emerald-400">$</span> <span className="text-slate-100">./run_validation_suite.sh --target=bluetooth</span>
        </motion.div>
        <motion.div variants={item} className="text-slate-400 pl-4 border-l border-slate-800 space-y-1">
          <p className="text-emerald-400">✓ Stress & Regression Suites initialized</p>
          <p className="text-emerald-400">✓ Coverage threshold reached: 95.0%</p>
          <p className="text-sky-400">ℹ Log parsing tools active: Debug overhead -30%</p>
        </motion.div>
        <motion.div variants={item} className="flex items-center gap-1 text-slate-400 pt-1">
          <span className="text-emerald-400">$</span>
          <span className="w-2 h-4 bg-sky-400 inline-block animate-pulse" />
        </motion.div>
      </motion.div>
    </div>
  );
}