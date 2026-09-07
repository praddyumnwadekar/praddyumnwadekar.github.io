'use client';
import { RESUME_DATA } from '@/lib/resumeData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800/60 bg-[#080C12] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#111722] border border-slate-700 flex items-center justify-center font-mono text-[11px] font-bold text-sky-400">
            PW
          </div>
          <span className="font-mono text-xs text-slate-500">
            {RESUME_DATA.name} &nbsp;·&nbsp; Python Backend & Automation Engineer
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={RESUME_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${RESUME_DATA.email}`}
            className="font-mono text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            Email
          </a>
        </div>
        <span className="font-mono text-xs text-slate-600">
          © {year}
        </span>
      </div>
    </footer>
  );
}