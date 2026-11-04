import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Fondo Ambiental Corporativo
export const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 bg-[#06080d]">
    {/* Malla de cuadrícula técnica */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem]" />
    
    {/* Luces de neón difusas */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-cyan-500/10 blur-[160px] rounded-full mix-blend-screen" />
    <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full mix-blend-screen" />
    <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] bg-indigo-600/10 blur-[180px] rounded-full mix-blend-screen" />
  </div>
);

// Tarjeta Spotlight con seguimiento de cursor
export const SpotlightCard = ({ children, className = "", glowColor = "rgba(6, 182, 212, 0.2)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

// Botón de Acción con Borde Luminoso
export const MagicGlowButton = ({ children, onClick, icon: Icon, className = "" }) => (
  <button
    onClick={onClick}
    className={`relative group inline-flex items-center justify-center p-[1px] font-bold overflow-hidden rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 ${className}`}
  >
    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity" />
    <span className="relative z-10 inline-flex items-center justify-center gap-2.5 rounded-[11px] bg-slate-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-slate-900">
      {children}
      {Icon && <Icon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />}
    </span>
  </button>
);

// Ícono con Resplandor Sutil
export const GlowingIcon = ({ icon: Icon, colorClass = "text-cyan-400", bgGlow = "bg-cyan-500/20" }) => (
  <div className="relative inline-flex items-center justify-center">
    <div className={`absolute inset-0 rounded-xl ${bgGlow} blur-md`} />
    <div className="relative bg-slate-950 p-3 rounded-xl border border-white/10">
      <Icon className={`w-6 h-6 ${colorClass}`} />
    </div>
  </div>
);

// Componente de Animación al Hacer Scroll
export const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);