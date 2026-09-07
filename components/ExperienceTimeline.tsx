'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-3 mb-16"
      >
        <div className="inline-block font-mono text-xs text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Career Track Record
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Production Experience & Impact
        </h2>
      </motion.div>

      <div ref={containerRef} className="relative pl-4 md:pl-0">
        {/* The Track */}
        <div className="absolute left-4 md:left-[28px] top-0 bottom-0 w-[2px] bg-slate-800 rounded-full origin-top" />
        
        {/* The Animated Glowing Line */}
        <motion.div 
          className="absolute left-4 md:left-[28px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-400 to-emerald-400 rounded-full origin-top shadow-[0_0_10px_rgba(56,189,248,0.5)] z-10"
          style={{ scaleY }}
        />

        <div className="space-y-12">
          {RESUME_DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-20">
              
              {/* Timeline Node */}
              <div className="absolute left-[-5px] md:left-[19px] top-6 w-[20px] h-[20px] rounded-full bg-[#0A0D12] border-4 border-slate-700 z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-8 rounded-2xl bg-[#111722] border border-slate-800 hover:border-slate-700 transition-colors duration-300 relative shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex flex-wrap items-center gap-3">
                      {exp.role}
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {exp.company}
                      </span>
                    </h3>
                    <p className="text-sm font-mono text-slate-400 mt-2">{exp.location} • {exp.period}</p>
                  </div>
                </div>

                <div className="py-6 space-y-6">
                  <p className="text-sm text-slate-300 leading-relaxed text-balance">
                    {exp.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.challenges.map((c, cIdx) => (
                      <div key={cIdx} className="p-5 rounded-xl bg-[#0B0F16] border border-slate-800/50 space-y-4 hover:border-slate-700 transition-colors">
                        <div>
                          <div className="text-[11px] font-mono uppercase text-sky-400 tracking-wider">Engineering Focus</div>
                          <p className="text-xs text-slate-300 mt-1">{c.solution}</p>
                        </div>
                        <div className="pt-3 border-t border-slate-800/60">
                          <div className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider">Verified Impact</div>
                          <p className="text-xs font-bold text-emerald-300 mt-1">{c.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-md bg-[#0A0D12] text-slate-400 border border-slate-800 font-mono text-[11px] shadow-inner">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}