import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, ShieldAlert, Sparkles } from 'lucide-react';
import { uiAudio } from '../../utils/audio';

export const RoiCalculator = () => {
  const [sector, setSector] = useState('legal');
  const [volumen, setVolumen] = useState(25); // transacciones o casos por mes
  const [valorPromedio, setValorPromedio] = useState(1500); // USD por operación

  const factores = {
    legal: { ahorroHoras: 14, incrementoConversion: 0.28, labelVolumen: "Casos o Contratos M&A / Mes" },
    constructora: { ahorroHoras: 22, incrementoConversion: 0.35, labelVolumen: "Cotizaciones o Proyectos / Mes" },
    logistica: { ahorroHoras: 18, incrementoConversion: 0.30, labelVolumen: "Fletes Corporativos / Mes" },
    salud: { ahorroHoras: 10, incrementoConversion: 0.25, labelVolumen: "Citas o Servicios Médicos / Mes" }
  };

  const configActual = factores[sector];
  
  // Cálculos dinámicos
  const ahorroHorasMes = Math.round(volumen * configActual.ahorroHoras);
  const ingresoAdicionalEst = Math.round(volumen * valorPromedio * configActual.incrementoConversion);
  const roiPorcentaje = Math.round(((ingresoAdicionalEst * 12) / 3500) * 100);

  return (
    <div className="bg-slate-950/90 border border-cyan-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950 border border-cyan-500/40 rounded-xl text-cyan-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-space">Simulador de ROI & Impacto Operativo</h3>
            <p className="text-xs text-slate-400">Proyección estimada de eficiencia al implementar nuestro software</p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800 font-bold">
          LIVE METRICS
        </span>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Controles del Simulador */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
              Sector de Negocio
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'legal', label: '⚖️ Legal & M&A' },
                { id: 'constructora', label: '🏗️ Constructora' },
                { id: 'logistica', label: '🚚 Logística' },
                { id: 'salud', label: '🏥 Salud & Medicina' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    uiAudio.playClick();
                    setSector(item.id);
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-left border ${
                    sector === item.id
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-slate-300">{configActual.labelVolumen}</span>
              <span className="text-cyan-400 font-bold">{volumen} operaciones</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              value={volumen}
              onChange={(e) => {
                uiAudio.playHover();
                setVolumen(Number(e.target.value));
              }}
              className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-slate-300">Valor Ticket Promedio (USD)</span>
              <span className="text-cyan-400 font-bold">${valorPromedio.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min="200"
              max="10000"
              step="100"
              value={valorPromedio}
              onChange={(e) => {
                uiAudio.playHover();
                setValorPromedio(Number(e.target.value));
              }}
              className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>

        {/* Resultados Proyectados */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-slate-300">Ahorro de Tiempo Operativo</span>
            </div>
            <span className="font-mono text-sm font-bold text-white">{ahorroHorasMes} hrs/mes</span>
          </div>

          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-slate-300">Incremento de Ingresos Est.</span>
            </div>
            <span className="font-mono text-sm font-bold text-emerald-400">+${ingresoAdicionalEst.toLocaleString()} USD/mes</span>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-center">
            <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest block mb-1">
              Retorno de Inversión Proyectado (Anual)
            </span>
            <span className="text-3xl font-extrabold text-cyan-400 font-space">{roiPorcentaje}% ROI</span>
          </div>
        </div>
      </div>
    </div>
  );
};