'use client';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';
import AnimatedCounter from './AnimatedCounter';

export default function ImpactSection() {
  return (
    <section className="py-16 border-y border-slate-800/80 bg-gradient-to-b from-[#0A0D12] to-[#0C1017]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {RESUME_DATA.impactMetrics.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="space-y-2 group"
            >
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight flex items-baseline gap-1 group-hover:scale-105 transition-transform duration-500 origin-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                  {item.value}
                  {item.suffix}
                </span>
              </div>
              <h2 className="text-xs uppercase tracking-wider font-bold text-slate-300 font-mono">
                {item.label}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}