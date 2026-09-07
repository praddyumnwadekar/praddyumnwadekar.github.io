'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { RESUME_DATA } from '@/lib/resumeData';

const navLinks = [
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Architecture', id: 'approach' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['hero', 'experience', 'projects', 'skills', 'approach', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (current) setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0A0D12]/85 backdrop-blur-lg border-b border-slate-800/80 py-3 shadow-2xl shadow-black/40' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#hero" aria-label="Praddyumn Wadekar home" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-[#111722] border border-slate-700 flex items-center justify-center font-mono text-sm font-bold text-sky-400 group-hover:border-sky-400 transition-all">PW</div>
            <span className="font-mono text-sm font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors">praddyumn.py</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1 bg-[#111722]/50 p-1 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${activeSection === link.id ? 'bg-slate-800 text-sky-300 shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}>{link.name}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))} aria-label="Open command palette" className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0D12] border border-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors">
              <span>Command</span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px]">⌘K</kbd>
            </button>
            <a href={`mailto:${RESUME_DATA.email}`} className="hidden sm:inline-flex px-5 py-2.5 text-xs font-mono font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-lg transition-all">Contact.init()</a>
            <button onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen} aria-controls="mobile-nav" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#111722] text-slate-300">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav id="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden">
              <div className="mt-3 rounded-2xl border border-slate-800 bg-[#0D121B]/95 p-2 backdrop-blur-xl">
                {navLinks.map((link) => <button key={link.id} onClick={() => goTo(link.id)} className="w-full text-left rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-300">{link.name}</button>)}
                <a href={`mailto:${RESUME_DATA.email}`} className="block rounded-xl px-4 py-3 text-sm text-sky-400 hover:bg-sky-500/10 sm:hidden">Contact.init()</a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
