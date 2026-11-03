import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[160px] animate-pulse" />
    <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[180px] animate-pulse" style={{ animationDelay: '2.5s' }} />
    <div className="absolute -bottom-40 left-1/3 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[160px]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

export const SpotlightCard = ({ children, className = "", glowColor = "rgba(0, 242, 254, 0.25)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-2xl p-6 shadow-2xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)] ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};

export const MagicGlowButton = ({ children, onClick, icon: Icon, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative group inline-flex items-center justify-center overflow-hidden rounded-xl p-[1.5px] font-bold shadow-2xl focus:outline-none ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00F2FE_0%,#3B82F6_50%,#00F2FE_100%)]" />
      <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-slate-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-900 group-hover:text-cyan-300">
        {children}
        {Icon && <Icon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />}
      </span>
    </motion.button>
  );
};

export const GlowingIcon = ({ icon: Icon, colorClass = "text-cyan-400", bgGlow = "bg-cyan-500/20" }) => (
  <div className="relative inline-flex items-center justify-center p-3 rounded-xl bg-slate-900 border border-white/10 group">
    <div className={`absolute inset-0 rounded-xl ${bgGlow} blur-md group-hover:blur-lg transition-all opacity-60 group-hover:opacity-100`} />
    <Icon className={`relative z-10 w-6 h-6 ${colorClass} transition-transform group-hover:scale-110`} />
  </div>
);