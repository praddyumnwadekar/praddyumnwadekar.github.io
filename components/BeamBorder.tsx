'use client';
import React from 'react';

export default function BeamBorder({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl p-[1px] ${className}`}>
      {/* The spinning conic gradient */}
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0A0D12_0%,#38BDF8_50%,#0A0D12_100%)] opacity-70" />
      
      {/* The inner card background that masks the center of the gradient */}
      <div className="relative h-full w-full rounded-xl bg-[#0F141C] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}