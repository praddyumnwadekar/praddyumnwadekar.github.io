'use client';
import { useEffect, useState, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#01';

export default function ScrambleText({ text, className = "" }: { text: string, className?: string }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    const maxIterations = text.length;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      
      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current!);
      }
      iteration += 1 / 3; // Controls the decoding speed
    }, 30);
  };

  useEffect(() => {
    scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span 
      onMouseEnter={scramble} 
      className={`cursor-crosshair transition-colors duration-300 hover:text-sky-300 ${className}`}
    >
      {displayText}
    </span>
  );
}