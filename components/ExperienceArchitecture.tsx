'use client';

import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';

export default function ExperienceArchitecture() {
  const exp = RESUME_DATA.experience[0];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 space-y-3"
      >
        <div className="section-eyebrow">Engineering Evidence</div>

        <h2 className="text-3xl font-bold tracking-tight text-white">
          How the automation work is structured
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          A high-level view of the engineering model behind the production
          validation work. Proprietary implementation details are intentionally
          omitted.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">

        {/* Validation Architecture */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-800 bg-[#0D121B] p-6 md:p-8"
        >
          <div className="mb-7 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-sky-400">
              Validation Flow
            </span>

            <span className="font-mono text-[10px] text-slate-500">
              HIGH-LEVEL
            </span>
          </div>

          <div className="space-y-3">
            {[
              [
                '01',
                'Test Runner',
                'repeatable execution across validation suites',
              ],
              [
                '02',
                'Reusable Python Components',
                'OOP design · encapsulation · abstraction · inheritance · polymorphism',
              ],
              [
                '03',
                'Protocol Test Suites',
                'regression · stress · interoperability · performance',
              ],
              [
                '04',
                'Log & Result Analysis',
                'filter large outputs and isolate anomalies',
              ],
              [
                '05',
                'CI/CD Feedback',
                'repeatable release and regression validation',
              ],
            ].map(([n, title, desc], i) => (
              <div
                key={n}
                className="relative flex items-start gap-4 rounded-xl border border-slate-800/80 bg-[#090D14] p-4"
              >
                <span className="mt-1 shrink-0 font-mono text-[10px] text-emerald-400">
                  {n}
                </span>

                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">
                    {title}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {desc}
                  </div>
                </div>

                {i < 4 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[-12px] left-[24px] h-3 w-px bg-slate-700"
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

          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Increasing scope from test implementation toward reusable
            frameworks, tooling ownership, and validation architecture.
          </p>

          {/* Timeline */}
          <div className="relative mt-8">
            {/* Timeline Track */}
            <div
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-800"
            />

            <div className="space-y-7">
              {exp.progression.map((item, i) => {
                const [stage, ...descriptionParts] = item.split(' — ');
                const description = descriptionParts.join(' — ');

                const isCompleted = i < exp.progression.length - 1;
                const isCurrent = i === exp.progression.length - 1;

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
                    className="relative min-w-0"
                  >
                    {/* Node — always stays on the timeline */}
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-0 z-20 flex h-4 w-4 items-center justify-center"
                    >
                      <div
                        className={[
                          'flex h-4 w-4 items-center justify-center rounded-full border-2',
                          isCompleted
                            ? 'border-emerald-400 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.35)]'
                            : 'border-sky-400 bg-[#0D121B] shadow-[0_0_12px_rgba(56,189,248,0.35)]',
                        ].join(' ')}
                      >
                        {/* Completed milestone */}
                        {isCompleted && (
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-2.5 w-2.5 text-[#07100D]"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 10.5L8.2 13.5L15 6.5"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}

                        {/* Current milestone — deliberately NOT completed */}
                        {isCurrent && (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-sky-400"
                          />
                        )}
                      </div>
                    </div>

                    {/* Content — subtle progression only */}
                    <div
                      className={[
                        'min-w-0 pl-7',
                        i === 1 ? 'ml-1' : '',
                        i === 2 ? 'ml-2' : '',
                        i === 3 ? 'ml-3' : '',
                      ].join(' ')}
                    >
                      <div
                        className={[
                          'font-mono text-xs font-semibold',
                          isCurrent ? 'text-sky-300' : 'text-sky-400',
                        ].join(' ')}
                      >
                        {stage}
                      </div>

                      <p className="mt-2 text-xs leading-relaxed text-slate-300">
                        {description}
                      </p>

                      {/* Current Role Indicator */}
                      {isCurrent && (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-2.5 py-1">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />

                          <span className="font-mono text-[9px] uppercase tracking-wider text-sky-300">
                            Current Role
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Architecture Principles */}
          <div className="mt-8 border-t border-slate-800 pt-6">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
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
                  className="rounded-lg border border-slate-800 bg-[#090D14] px-3 py-1.5 font-mono text-[11px] text-slate-300"
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