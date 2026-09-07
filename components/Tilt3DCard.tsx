'use client';

import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

export default function Tilt3DCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 300,
    damping: 30,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 300,
    damping: 30,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['8deg', '-8deg']
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-8deg', '8deg']
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className={`relative z-10 w-full min-w-0 ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="
          relative
          w-full
          min-w-0
          rounded-2xl
          border
          border-slate-800
          bg-[#111722]
          shadow-2xl
          transition-colors
          duration-300
          group-hover:border-slate-600
          group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        "
      >
        {/* Subtle glare */}
        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
          style={{
            background:
              'linear-gradient(105deg, transparent 20%, rgba(56,189,248,0.05) 25%, transparent 30%)',
            transform: 'translateZ(1px)',
          }}
        />

        {/* Content */}
        <div className="relative z-20 w-full min-w-0">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}