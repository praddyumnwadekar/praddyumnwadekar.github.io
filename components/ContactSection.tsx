'use client';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#080B10] border-t border-slate-800">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <div className="inline-block font-mono text-xs text-sky-400 uppercase tracking-widest">
          Initiate Contact
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Have an engineering challenge? Let&apos;s build.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Open to senior backend development, test automation architecture, and Python systems engineering roles.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href={`mailto:${RESUME_DATA.email}`}
            className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-sky-500/20 flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            Start a Conversation →
          </a>
          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl bg-[#111722] hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-sm transition-all hover:scale-105 active:scale-95"
          >
            LinkedIn Profile
          </a>
          <a
            href={RESUME_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl bg-[#111722] hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-sm transition-all hover:scale-105 active:scale-95"
          >
            GitHub
          </a>
          <a
            href={RESUME_DATA.resumeUrl}
            download="praddyumn-wadekar-resume.pdf"
            className="px-6 py-4 rounded-xl bg-[#111722] hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-sm transition-all hover:scale-105 active:scale-95"
          >
            Download Resume
          </a>
        </div>

        <div className="pt-12 text-xs font-mono text-slate-400 space-y-2">
          <div>Direct Email: <span className="text-slate-300">{RESUME_DATA.email}</span></div>
          <div className="text-slate-500">Targeting backend, automation and Python systems engineering roles.</div>
        </div>
      </motion.div>
    </section>
  );
}