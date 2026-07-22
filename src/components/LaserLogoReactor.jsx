import React, { useState } from 'react';
import { Sparkles, Zap } from 'lucide-react';

export default function LaserLogoReactor() {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div 
      className="relative inline-flex items-center justify-center group cursor-pointer"
      onMouseEnter={() => setIsScanning(true)}
      onMouseLeave={() => setIsScanning(false)}
    >
      {/* 3D Laser Rotating Reactor Ring */}
      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#FF5500] via-[#00D2FF] to-[#FF5500] opacity-75 blur-md group-hover:opacity-100 transition-opacity animate-spin duration-1000"></div>

      {/* Laser Scan Sweep Line */}
      {isScanning && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-full">
          <div className="w-full h-1 bg-[#00D2FF] shadow-[0_0_15px_#00D2FF] animate-pulse"></div>
        </div>
      )}

      {/* Official Transparent Logo Image */}
      <div className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF5500] bg-[#0A192F] p-0.5 shadow-xl shadow-[#FF5500]/50 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <img 
          src="/digizier_logo.png" 
          alt="Digizier Official Holographic Logo" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
