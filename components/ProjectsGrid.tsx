'use client';
import { motion } from 'framer-motion';
import { ExternalLink, GitFork, LockKeyhole } from 'lucide-react';
import { RESUME_DATA } from '@/lib/resumeData';
import SpotlightCard from './SpotlightCard';

export default function ProjectsGrid() {
  const secondaryProjects = RESUME_DATA.projects.filter((p) => !p.featured);

  return (
    <section className="pb-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secondaryProjects.map((project, index) => (
          <motion.article key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }} className="h-full">
            <SpotlightCard className="h-full p-6 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">{project.subtitle}</p>
                  </div>
                  {project.confidential && <LockKeyhole aria-label="Proprietary details omitted" className="w-4 h-4 text-slate-500 shrink-0" />}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
                <div className="rounded-xl bg-[#0A0D12]/60 border border-slate-800/80 p-4 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-sky-400">Engineering Summary</div>
                  <p className="text-xs text-slate-300 leading-relaxed"><strong className="text-white">Challenge:</strong> {project.problem}</p>
                  <p className="text-xs text-slate-300 leading-relaxed"><strong className="text-white">Approach:</strong> {project.solution}</p>
                  {'impact' in project && project.impact && <p className="text-xs font-bold text-emerald-300">{project.impact}</p>}
                </div>
                {project.architecture && (
                  <div className="grid grid-cols-1 gap-2">
                    {project.architecture.map((item, idx) => <div key={idx} className="text-xs text-slate-400 flex gap-2"><span className="text-emerald-400">›</span><span>{item}</span></div>)}
                  </div>
                )}
              </div>
              <div className="pt-6 border-t border-slate-800/50 mt-6 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech, idx) => <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-slate-800 font-mono text-[10px]">{tech}</span>)}
                </div>
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`} className="shrink-0 inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:text-sky-300"><GitFork className="w-4 h-4" /> GitHub <ExternalLink className="w-3 h-3" /></a>}
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
