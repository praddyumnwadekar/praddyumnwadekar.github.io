'use client';
import { motion } from 'framer-motion';
import { GitFork, ExternalLink } from 'lucide-react';
import { RESUME_DATA } from '@/lib/resumeData';
import Tilt3DCard from './Tilt3DCard';

export default function FeaturedProject() {
  const featured = RESUME_DATA.projects.find((p) => p.featured);
  if (!featured) return null;

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-3 mb-12">
        <div className="section-eyebrow">Architectural Case Study</div>
        <h2 className="text-3xl font-bold text-white tracking-tight">ShipShop — from feature list to engineering evidence</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">A production-minded Django project used to demonstrate backend architecture, data modeling, security boundaries and payment integration.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: .6 }}>
        <Tilt3DCard className="w-full">
          <div className="p-8 lg:p-10 space-y-7">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <span className="text-xs font-mono text-sky-400">PROJECT 01 — {featured.category}</span>
                <h3 className="text-2xl lg:text-4xl font-bold text-white mt-2">{featured.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{featured.subtitle}</p>
              </div>
              <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/80 text-xs font-mono transition-all">
                <GitFork className="w-4 h-4" /> GitHub Repository <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-4xl">{featured.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl bg-[#0A0D12]/60 border border-slate-800/80 space-y-4">
                <div className="text-xs font-mono text-sky-400 uppercase tracking-wide">Architecture</div>
                <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                  {(featured.architecture ?? []).map((item, idx) => <li key={idx} className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">›</span><span>{item}</span></li>)}
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-[#0A0D12]/60 border border-slate-800/80 space-y-4">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wide">Problem → Implementation</div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed"><strong className="text-white">Challenge:</strong> {featured.problem}</p>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed"><strong className="text-white">Execution:</strong> {featured.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-xl border border-slate-800 bg-[#090D14] p-5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3">Engineering decisions</div>
                <ul className="space-y-2 text-xs text-slate-400">
                  {(featured.engineeringDecisions ?? []).map((item, idx) => <li key={idx} className="flex gap-2"><span className="text-sky-400">+</span>{item}</li>)}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/60 flex flex-wrap gap-2">
              {featured.technologies.map((t, idx) => <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-sky-300 border border-slate-700/50 text-xs font-mono">{t}</span>)}
            </div>
          </div>
        </Tilt3DCard>
      </motion.div>
    </section>
  );
}
