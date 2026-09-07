'use client';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';
import SpotlightCard from './SpotlightCard';

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-3 mb-12"
      >
        <div className="inline-block font-mono text-xs text-sky-400 uppercase tracking-widest">
          Capabilities Matrix
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Categorized Technical Expertise
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl">
          Technologies and engineering methodologies validated through daily production usage.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-6 flex flex-col justify-between group">
              <div>
                <h3 className="text-sm font-bold font-mono text-white tracking-wide uppercase pb-3 border-b border-slate-800/50 group-hover:border-sky-500/30 transition-colors">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2 pt-5">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 rounded-lg bg-[#0A0D12]/80 border border-slate-800/80 text-xs font-mono text-slate-300 hover:text-sky-950 hover:bg-sky-400 hover:border-sky-400 transition-all cursor-default shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}