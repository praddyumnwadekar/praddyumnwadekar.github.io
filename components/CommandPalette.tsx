'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';

type Action = { id: string; name: string; shortcut?: string; icon: React.ReactNode; perform: () => void };

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setIsOpen((open) => !open); }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) { setQuery(''); setStatus(null); requestAnimationFrame(() => inputRef.current?.focus()); }
  }, [isOpen]);

  const close = () => setIsOpen(false);
  const actions: Action[] = useMemo(() => [
    { id: 'copy-email', name: 'Copy Email Address', shortcut: 'E', icon: <span className="text-sky-400 font-mono">@</span>, perform: async () => { try { await navigator.clipboard.writeText(RESUME_DATA.email); setStatus('Email copied to clipboard.'); } catch { setStatus('Copy failed — use the email shown in Contact.'); } } },
    { id: 'github', name: 'Open GitHub Profile', shortcut: 'G', icon: <span className="text-slate-400 font-mono">{'</>'}</span>, perform: () => { window.open(RESUME_DATA.github, '_blank', 'noopener,noreferrer'); close(); } },
    { id: 'linkedin', name: 'Open LinkedIn', shortcut: 'L', icon: <span className="text-sky-600 font-mono">in</span>, perform: () => { window.open(RESUME_DATA.linkedin, '_blank', 'noopener,noreferrer'); close(); } },
    { id: 'resume', name: 'Download Resume PDF', shortcut: 'R', icon: <span className="text-emerald-400 font-mono">↓</span>, perform: () => { const a = document.createElement('a'); a.href = RESUME_DATA.resumeUrl; a.download = 'praddyumn-wadekar-resume.pdf'; a.click(); close(); } },
    { id: 'nav-exp', name: 'Navigate to Experience', icon: <span className="text-emerald-400 font-mono">→</span>, perform: () => { document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); close(); } },
    { id: 'nav-proj', name: 'Navigate to Projects', icon: <span className="text-emerald-400 font-mono">→</span>, perform: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); close(); } },
    { id: 'run-diagnostics', name: 'Run System Validation', icon: <span className="text-sky-400 font-mono">⚡</span>, perform: () => setStatus('VALIDATION PASS · 95%+ COVERAGE · DEBUG EFFORT −30%') },
  ], []);

  const filteredActions = actions.filter((action) => action.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && <div className="fixed inset-0 z-[999] flex items-start justify-center pt-[12vh] sm:pt-[18vh] px-4" role="presentation">
        <motion.button aria-label="Close command palette" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} className="absolute inset-0 bg-[#0A0D12]/70 backdrop-blur-sm" />
        <motion.div role="dialog" aria-modal="true" aria-labelledby="command-title" initial={{ opacity: 0, scale: .96, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96, y: -20 }} className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#111722] border border-slate-700/80 shadow-2xl shadow-black/50">
          <h2 id="command-title" className="sr-only">Command palette</h2>
          <div className="flex items-center border-b border-slate-700/80 px-4 py-3">
            <span className="text-slate-400 font-mono mr-3">&gt;</span>
            <input ref={inputRef} type="text" aria-label="Search commands" className="w-full bg-transparent text-slate-200 placeholder-slate-500 focus:outline-none font-mono text-sm" placeholder="Type a command or search..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <span className="text-[10px] font-mono text-slate-500 border border-slate-700 rounded px-1.5 py-0.5 ml-2">ESC</span>
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {filteredActions.map((action) => <button key={action.id} onClick={action.perform} className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-left text-sm text-slate-300 hover:bg-sky-500/10 hover:text-sky-300 transition-colors group">
              <div className="flex items-center gap-3"><div className="w-6 h-6 rounded bg-[#0A0D12] border border-slate-800 flex items-center justify-center">{action.icon}</div><span className="font-medium">{action.name}</span></div>
              {action.shortcut && <span className="text-[10px] font-mono text-slate-500">{action.shortcut}</span>}
            </button>)}
            {!filteredActions.length && <div className="py-8 text-center text-sm text-slate-500 font-mono">No commands found.</div>}
          </div>
          {status && <div role="status" className="border-t border-slate-800 bg-[#0A0D12] px-4 py-3 text-[11px] font-mono text-emerald-300">✓ {status}</div>}
        </motion.div>
      </div>}
    </AnimatePresence>
  );
}
