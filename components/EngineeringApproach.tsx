'use client';

import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';

export default function EngineeringApproach() {
  return (
    <section
      id="approach"
      className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-3 mb-12"
      >
        <div className="section-eyebrow">
          Mental Model & Engineering Philosophy
        </div>

        <h2 className="text-3xl font-bold text-white tracking-tight">
          How I approach complex systems
        </h2>

        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          The same principles show up in both production automation and backend
          application work: reduce repetition, shorten feedback loops, and make
          failures easier to understand.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RESUME_DATA.engineeringPillars.map((p, idx) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="p-6 rounded-xl bg-[#0D121B] border border-slate-800 space-y-4 hover:border-slate-700 hover:bg-[#111722] transition-colors"
          >
            <span className="font-mono text-xs text-sky-400">
              {p.n}.
            </span>

            <h3 className="text-lg font-bold text-white">
              {p.title}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {p.desc}
            </p>

            <span className="inline-block text-[11px] font-mono text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              {p.metric}
            </span>
          </motion.article>
        ))}
      </div>

      {/* Human Element */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 pt-8 border-t border-slate-800/70"
      >
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex shrink-0 w-9 h-9 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20">
            <span className="text-sky-400 text-sm">✦</span>
          </div>

          <div>
            <p className="text-xs font-mono text-slate-500 mb-2">
              Beyond the code
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
              Outside of building automation frameworks and backend systems,
              I enjoy photography, exploring new technologies, and finding new
              ways to simplify complex problems through better engineering.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}