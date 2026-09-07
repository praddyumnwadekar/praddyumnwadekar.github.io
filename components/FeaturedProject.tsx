'use client';

import { motion } from 'framer-motion';
import { GitFork, ExternalLink } from 'lucide-react';
import { RESUME_DATA } from '@/lib/resumeData';
import Tilt3DCard from './Tilt3DCard';
import ShipShopEngineeringEvidence from './ShipShopEngineeringEvidence';

export default function FeaturedProject() {
  const featured = RESUME_DATA.projects.find((p) => p.featured);

  if (!featured) return null;

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 space-y-3"
      >
        <div className="section-eyebrow">Architectural Case Study</div>

        <h2 className="text-3xl font-bold tracking-tight text-white">
          ShipShop — from feature list to engineering evidence
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          A production-minded Django project used to demonstrate backend
          architecture, data modeling, security boundaries and payment
          integration.
        </p>
      </motion.div>

      {/* Featured Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="w-full min-w-0"
      >
        <Tilt3DCard className="w-full min-w-0">
          <div className="w-full min-w-0 space-y-7 p-5 sm:p-7 lg:p-10">

            {/* Project Header */}
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="min-w-0">
                <span className="font-mono text-xs text-sky-400">
                  PROJECT 01 — {featured.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white lg:text-4xl">
                  {featured.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {featured.subtitle}
                </p>
              </div>

              {/* GitHub */}
              <a
                href={featured.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/80 px-5 py-2.5 text-xs font-mono text-slate-200 transition-all hover:bg-slate-700 sm:w-auto"
              >
                <GitFork className="h-4 w-4" />
                GitHub Repository
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Description */}
            <p className="max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base">
              {featured.description}
            </p>

            {/* Architecture + Problem */}
            <div className="grid min-w-0 grid-cols-1 gap-6 pt-2 md:grid-cols-2">

              {/* Architecture */}
              <div className="min-w-0 space-y-4 rounded-xl border border-slate-800/80 bg-[#0A0D12]/60 p-5 sm:p-6">
                <div className="font-mono text-xs uppercase tracking-wide text-sky-400">
                  Architecture
                </div>

                <ul className="space-y-3 text-xs text-slate-300 md:text-sm">
                  {(featured.architecture ?? []).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex min-w-0 items-start gap-2"
                    >
                      <span className="mt-0.5 shrink-0 text-emerald-400">
                        ›
                      </span>

                      <span className="min-w-0">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problem → Implementation */}
              <div className="min-w-0 space-y-4 rounded-xl border border-slate-800/80 bg-[#0A0D12]/60 p-5 sm:p-6">
                <div className="font-mono text-xs uppercase tracking-wide text-emerald-400">
                  Problem → Implementation
                </div>

                <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                  <strong className="text-white">Challenge:</strong>{' '}
                  {featured.problem}
                </p>

                <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                  <strong className="text-white">Execution:</strong>{' '}
                  {featured.solution}
                </p>
              </div>
            </div>

            {/* Engineering Decisions */}
            <div className="pt-2">
              <div className="min-w-0 rounded-xl border border-slate-800 bg-[#090D14] p-5">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Engineering decisions
                </div>

                <ul className="space-y-2 text-xs text-slate-400">
                  {(featured.engineeringDecisions ?? []).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex min-w-0 items-start gap-2"
                    >
                      <span className="shrink-0 text-sky-400">+</span>

                      <span className="min-w-0">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Engineering Evidence */}
            <ShipShopEngineeringEvidence />

            {/* Technologies */}
            <div className="min-w-0 border-t border-slate-800/60 pt-6">
              <div className="flex min-w-0 flex-wrap gap-2">
                {featured.technologies.map((technology, idx) => (
                  <span
                    key={idx}
                    className="whitespace-nowrap rounded-lg border border-slate-700/50 bg-slate-900/90 px-3 py-1.5 font-mono text-xs text-sky-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </Tilt3DCard>
      </motion.div>
    </section>
  );
}