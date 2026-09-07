'use client';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';
import TerminalView from './TerminalView';
import MagneticButton from './MagneticButton';
import ScrambleText from './ScrambleText';
import BeamBorder from './BeamBorder';
import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-28 pb-16 px-6 overflow-hidden bg-[#0A0D12]">
      <ParticleNetwork />
      
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/70 text-xs font-mono text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {/* Scramble Text Effect Applied Here */}
            <ScrambleText text="PYTHON • AUTOMATION • BACKEND • CI/CD" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Engineering reliable Python systems <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-emerald-400">
              at scale.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            I build robust backend applications using <strong className="text-white font-semibold">Django/DRF</strong> and architect <strong className="text-white font-semibold">automated validation frameworks</strong> at <strong className="text-white font-semibold">Espressif Systems</strong>—driving software coverage to 95% and slashing debugging cycles by 30%.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <MagneticButton 
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors shadow-[0_0_30px_rgba(56,189,248,0.3)] flex items-center gap-2 z-10 relative"
            >
              Explore Architecture
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </MagneticButton>
            
            <MagneticButton 
              href="#experience"
              className="px-7 py-3.5 rounded-xl bg-slate-900/50 backdrop-blur-md hover:bg-slate-800 text-slate-200 border border-slate-700/50 font-semibold text-sm transition-colors z-10 relative"
            >
              View Track Record
            </MagneticButton>
          </div>
        </motion.div>

        {/* Floating Terminal wrapped in BeamBorder */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <BeamBorder className="shadow-2xl shadow-sky-500/10">
              <TerminalView />
            </BeamBorder>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}