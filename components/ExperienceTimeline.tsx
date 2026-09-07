'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { RESUME_DATA } from '@/lib/resumeData';

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        className="mb-16 space-y-3"
      >
        <div className="inline-block rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-sky-400">
          Career Track Record
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          Production Experience & Impact
        </h2>
      </motion.div>

      {/* Experience Timeline */}
      <div
        ref={containerRef}
        className="relative"
      >
        {/* =========================
            TIMELINE TRACK
           ========================= */}

        {/* Static Track */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-[9px]
            top-0
            bottom-0
            z-0
            w-[2px]
            rounded-full
            bg-slate-800
            md:left-[29px]
          "
        />

        {/* Animated Progress */}
        <motion.div
          aria-hidden="true"
          className="
            absolute
            left-[9px]
            top-0
            bottom-0
            z-10
            w-[2px]
            origin-top
            rounded-full
            bg-gradient-to-b
            from-sky-400
            to-emerald-400
            shadow-[0_0_10px_rgba(56,189,248,0.5)]
            md:left-[29px]
          "
          style={{ scaleY }}
        />

        {/* Experience Items */}
        <div className="space-y-12">
          {RESUME_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className="
                relative
                min-w-0
                pl-14
                md:pl-20
              "
            >
              {/* =========================
                  TIMELINE NODE
                 ========================= */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  top-6
                  z-20
                  flex
                  h-[20px]
                  w-[20px]
                  items-center
                  justify-center
                  rounded-full
                  border-4
                  border-slate-700
                  bg-[#0A0D12]
                  md:left-[19px]
                "
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
              </div>

              {/* =========================
                  EXPERIENCE CARD
                 ========================= */}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  margin: '-100px',
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                className="
                  relative
                  min-w-0
                  rounded-2xl
                  border
                  border-slate-800
                  bg-[#111722]
                  p-5
                  shadow-xl
                  transition-colors
                  duration-300
                  hover:border-slate-700
                  sm:p-6
                  md:p-8
                "
              >
                {/* Experience Header */}
                <div
                  className="
                    flex
                    min-w-0
                    flex-col
                    justify-between
                    gap-4
                    border-b
                    border-slate-800/80
                    pb-6
                    md:flex-row
                    md:items-center
                  "
                >
                  <div className="min-w-0">
                    <h3
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-3
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      {exp.role}

                      <span
                        className="
                          rounded
                          border
                          border-sky-500/20
                          bg-sky-500/10
                          px-2.5
                          py-1
                          font-mono
                          text-xs
                          font-semibold
                          text-sky-400
                        "
                      >
                        {exp.company}
                      </span>
                    </h3>

                    <p className="mt-2 font-mono text-sm text-slate-400">
                      {exp.location} • {exp.period}
                    </p>
                  </div>
                </div>

                {/* =========================
                    EXPERIENCE CONTENT
                   ========================= */}

                <div className="space-y-6 py-6">
                  <p
                    className="
                      text-balance
                      text-sm
                      leading-relaxed
                      text-slate-300
                    "
                  >
                    {exp.overview}
                  </p>

                  {/* Engineering Challenges */}
                  <div
                    className="
                      grid
                      min-w-0
                      grid-cols-1
                      gap-4
                      md:grid-cols-2
                    "
                  >
                    {exp.challenges.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        className="
                          min-w-0
                          space-y-4
                          rounded-xl
                          border
                          border-slate-800/50
                          bg-[#0B0F16]
                          p-5
                          transition-colors
                          hover:border-slate-700
                        "
                      >
                        {/* Engineering Focus */}
                        <div>
                          <div
                            className="
                              font-mono
                              text-[11px]
                              uppercase
                              tracking-wider
                              text-sky-400
                            "
                          >
                            Engineering Focus
                          </div>

                          <p className="mt-1 text-xs text-slate-300">
                            {c.solution}
                          </p>
                        </div>

                        {/* Verified Impact */}
                        <div className="border-t border-slate-800/60 pt-3">
                          <div
                            className="
                              font-mono
                              text-[11px]
                              uppercase
                              tracking-wider
                              text-emerald-400
                            "
                          >
                            Verified Impact
                          </div>

                          <p className="mt-1 text-xs font-bold text-emerald-300">
                            {c.impact}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* =========================
                    TECHNOLOGIES
                   ========================= */}

                <div
                  className="
                    flex
                    min-w-0
                    flex-wrap
                    gap-2
                    border-t
                    border-slate-800/80
                    pt-4
                  "
                >
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="
                        whitespace-nowrap
                        rounded-md
                        border
                        border-slate-800
                        bg-[#0A0D12]
                        px-3
                        py-1
                        font-mono
                        text-[11px]
                        text-slate-400
                        shadow-inner
                      "
                    >
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