'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Tilt3DCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values track the mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs create the smooth physics (Apple-like feel)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform mouse position (-0.5 to 0.5) into rotation angles (-8deg to 8deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize position between -0.5 and 0.5
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseLeave = () => {
    // Snap back to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // perspective is required on the parent to create 3D space
      style={{ perspective: 1200 }} 
      className={`relative group z-10 ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full rounded-2xl bg-[#111722] border border-slate-800 shadow-2xl relative transition-colors duration-300 group-hover:border-slate-600 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Subtle Glare Effect that tracks the mouse slightly */}
        <motion.div 
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(56,189,248,0.05) 25%, transparent 30%)",
            transform: "translateZ(1px)"
          }}
        />

        {/* Content Container - Pushed outward in Z-space for a parallax 3D effect */}
        <div 
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} 
          className="h-full w-full relative z-20"
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}