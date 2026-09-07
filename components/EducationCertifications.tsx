'use client';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';

export default function EducationCertifications() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Education */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest">Formal Education</div>
            <h2 className="text-2xl font-bold text-white mt-1">Academic Background</h2>
          </div>
          <div className="p-6 rounded-xl bg-[#111722] border border-slate-800 space-y-2 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-white">{RESUME_DATA.education.degree}</h3>
            <p className="text-sm text-slate-300">{RESUME_DATA.education.institution}</p>
            <p className="text-xs font-mono text-slate-400">{RESUME_DATA.education.period}</p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-mono font-semibold">
                {RESUME_DATA.education.grade}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div>
            <div className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Verified Credentials</div>
            <h2 className="text-2xl font-bold text-white mt-1">Certifications & Algorithms</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#111722] border border-slate-800/80 space-y-1 hover:bg-[#151c28] transition-colors">
                <div className="text-xs font-bold text-slate-200">{cert.name}</div>
                <div className="text-[11px] font-mono text-slate-400">{cert.issuer}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}