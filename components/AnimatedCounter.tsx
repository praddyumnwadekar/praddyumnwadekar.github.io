'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function AnimatedCounter({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Extract number and suffix (e.g., "95%" -> number: 95, suffix: "%")
  const numericMatch = text.match(/[\d.]+/);
  const number = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = text.replace(/[\d.]+/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, motionValue, number]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Handle decimals if the original number had them (like 8.83)
        const isDecimal = number % 1 !== 0;
        ref.current.textContent = isDecimal ? latest.toFixed(2) : Math.floor(latest).toString();
      }
    });
  }, [springValue, number]);

  return (
    <span className="flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}