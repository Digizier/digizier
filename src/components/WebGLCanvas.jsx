import React from 'react';

export default function WebGLCanvas() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF5500]/10 blur-[120px]" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00D2FF]/8 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[130px]" />
      
      {/* Sleek Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
