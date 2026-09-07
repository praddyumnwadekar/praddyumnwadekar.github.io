'use client';

import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';

export default function ExperienceArchitecture() {
  const exp = RESUME_DATA.experience[0];

  return (
    <section className="pb-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 space-y-3"
      >
        <div className="section-eyebrow">Engineering Evidence</div>

        <h2 className="text-3xl font-bold text-white tracking-tight">
          How the automation work is structured
        </h2>

        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          A high-level view of the engineering model behind the production
          validation work. Proprietary implementation details are intentionally
          omitted.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-6">

        {/* Validation Architecture */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-800 bg-[#0D121B] p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-7">
            <span className="font-mono text-[11px] uppercase tracking-widest text-sky-400">
              Validation Flow
            </span>

            <span className="font-mono text-[10px] text-slate-500">
              HIGH-LEVEL
            </span>
          </div>

          <div className="space-y-3">
            {[
              ['01', 'Test Runner', 'repeatable execution across validation suites'],
              ['02', 'Reusable OOP Components', 'shared behavior and lower duplication'],
              ['03', 'Protocol Test Suites', 'regression · stress · interoperability · performance'],
              ['04', 'Log & Result Analysis', 'filter large outputs and isolate anomalies'],
              ['05', 'CI/CD Feedback', 'repeatable release and regression validation'],
            ].map(([n, title, desc], i) => (
              <div
                key={n}
                className="relative flex items-start gap-4 rounded-xl border border-slate-800/80 bg-[#090D14] p-4"
              >
                <span className="font-mono text-[10px] text-emerald-400 mt-1">
                  {n}
                </span>

                <div>
                  <div className="text-sm font-semibold text-white">
                    {title}
                  </div>

                  <div className="text-xs text-slate-500 mt-1">
                    {desc}
                  </div>
                </div>

                {i < 4 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[24px] -bottom-3 h-3 w-px bg-slate-700"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career Progression */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-800 bg-[#0D121B] p-6 md:p-8"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
            Career Progression
          </span>

          <p className="mt-3 text-xs text-slate-500 leading-relaxed">
            Increasing scope from test implementation toward reusable
            frameworks, tooling ownership, and validation architecture.
          </p>

          {/* Timeline */}
          <div className="mt-8 relative">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-800" />

            <div className="space-y-7">
              {exp.progression.map((item, i) => {
                const [stage, ...descriptionParts] = item.split(' — ');
                const description = descriptionParts.join(' — ');

                return (
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.1,
                    }}
                    className="relative pl-8"
                  >
                    <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-sky-400 bg-[#0D121B] shadow-[0_0_12px_rgba(56,189,248,.25)]" />

                    <div className="font-mono text-xs font-semibold text-sky-400">
                      {stage}
                    </div>

                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Architecture Principles */}
          <div className="mt-8 border-t border-slate-800 pt-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-3">
              Architecture Principles
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                'Reuse over duplication',
                'Failure visibility',
                'Repeatable validation',
                'Maintainable boundaries',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-800 bg-[#090D14] px-3 py-1.5 text-[11px] font-mono text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}