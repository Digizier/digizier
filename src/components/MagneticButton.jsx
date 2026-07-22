import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function MagneticButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  icon: Icon = Sparkles
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic pull strength
    setPosition({
      x: distanceX * 0.25,
      y: distanceY * 0.25
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-extrabold text-xs sm:text-sm tracking-wide transition-transform duration-200 ease-out shadow-2xl group border overflow-hidden select-none cursor-pointer";
  
  const variantStyles = variant === 'primary'
    ? "bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#FF5500] text-white border-[#FF5500]/50 shadow-[#FF5500]/30 hover:shadow-[#FF5500]/50"
    : variant === 'cyan'
    ? "bg-gradient-to-r from-[#00D2FF] to-blue-600 text-slate-950 border-[#00D2FF]/50 shadow-[#00D2FF]/30 hover:shadow-[#00D2FF]/50"
    : "glass-panel text-slate-200 border-white/20 hover:bg-white/10";

  const Content = (
    <span 
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transformStyle: 'preserve-3d',
      }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {/* Radial Energy Halo */}
      <span className="absolute -inset-2 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-md pointer-events-none"></span>

      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300 shrink-0" />}
      <span className="relative z-10">{children}</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {Content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {Content}
    </button>
  );
}
