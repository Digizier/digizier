import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Button3D({ 
  children, 
  href, 
  onClick, 
  variant = 'orange',
  icon: Icon = Sparkles,
  className = ''
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -15;
    const rY = ((x - centerX) / centerX) * 15;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsPressed(false);
  };

  const variantBg = variant === 'orange'
    ? 'bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#FF5500] border-[#FF5500]/60 shadow-[#FF5500]/40 text-white'
    : variant === 'cyan'
    ? 'bg-gradient-to-r from-[#00D2FF] via-cyan-400 to-[#00D2FF] border-[#00D2FF]/60 shadow-[#00D2FF]/40 text-slate-950 font-bold'
    : 'glass-panel border-white/20 text-slate-200 hover:bg-white/10';

  const Content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className="perspective-1000 inline-block group select-none cursor-pointer"
    >
      <div
        className={`relative rounded-2xl p-[2px] transition-transform duration-150 ease-out border shadow-2xl ${variantBg} ${className}`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isPressed ? 'translateZ(-8px)' : 'translateZ(12px)'}`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer 1: Outer Holographic Glow Ring */}
        <div className="absolute -inset-1 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        {/* Layer 2: Glassmorphic Core Container */}
        <div className="relative rounded-[14px] px-7 py-3.5 sm:px-8 sm:py-4 flex items-center justify-center gap-2.5 backdrop-blur-md overflow-hidden">
          
          {/* Layer 3: Floating Icon */}
          {Icon && (
            <Icon 
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12 shrink-0" 
              style={{ transform: 'translateZ(15px)' }}
            />
          )}

          {/* Layer 4: Text Stack */}
          <span 
            className="font-heading font-extrabold text-xs sm:text-sm tracking-wide"
            style={{ transform: 'translateZ(20px)' }}
          >
            {children}
          </span>

          <ArrowRight 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" 
            style={{ transform: 'translateZ(15px)' }}
          />

        </div>
      </div>
    </div>
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
