import React, { useState, useRef, useEffect } from 'react';

// FONDOS DE LUZ AMBIENTAL EN VIVO CON MESH ORBITAL
export const AmbientBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070c]">
    <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-cyan-600/15 rounded-full blur-[140px] animate-pulse" />
    <div className="absolute top-1/3 -right-32 w-[750px] h-[750px] bg-blue-600/15 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '7s' }} />
    <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '9s' }} />
    <div className="absolute inset-0 bg-noise opacity-40" />
  </div>
);

// TARJETA DE SPOTLIGHT CON RASTREO DINÁMICO DE CURSOR
export const SpotlightCard = ({ children, className = '', glowColor = 'rgba(6, 182, 212, 0.25)', onClick }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl bg-slate-950/80 border border-white/10 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}
    >
      {/* Luz Radial Siguiendo el Puntero */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`
        }}
      />
      
      {/* Borde sutil de destello */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-3xl border border-white/15 opacity-0 transition-opacity duration-300 z-20"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className="relative z-30">{children}</div>
    </div>
  );
};

// BOTÓN CON RESPLANDOR NEÓN & EFECTO PULSO
export const MagicGlowButton = ({ children, icon: Icon, onClick, className = '', variant = 'primary' }) => {
  if (variant === 'secondary') {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3.5 rounded-xl border border-white/15 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:border-cyan-500/40 active:scale-95 ${className}`}
      >
        {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
        <span>{children}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`relative group inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px] font-bold text-xs uppercase tracking-wider focus:outline-none active:scale-95 transition-all shadow-xl shadow-cyan-500/20 ${className}`}
    >
      {/* Anillo Orbital giratorio */}
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#06b6d4_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />
      
      <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-[11px] bg-slate-950 px-6 py-3.5 text-white transition-colors group-hover:bg-slate-900">
        {Icon && <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />}
        <span>{children}</span>
      </span>
    </button>
  );
};

// CONTENEDOR DE ICONOS CON AURA MULTICAPA
export const GlowingIcon = ({ icon: Icon, colorClass = 'text-cyan-400', bgGlow = 'bg-cyan-500/20' }) => (
  <div className="relative flex items-center justify-center">
    <div className={`absolute inset-0 ${bgGlow} rounded-2xl blur-lg animate-pulse`} />
    <div className="relative p-3.5 bg-slate-900 border border-white/10 rounded-2xl shadow-xl">
      <Icon className={`w-6 h-6 ${colorClass}`} />
    </div>
  </div>
);

// CONTENEDOR CON REVELADO EN SCROLL Y PROFUNDIDAD
export const ScrollReveal = ({ children, className = '' }) => (
  <div className={`transition-all duration-700 ease-out ${className}`}>
    {children}
  </div>
);