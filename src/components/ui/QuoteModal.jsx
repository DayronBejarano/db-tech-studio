import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Layers, Cpu, Database, Server } from 'lucide-react';
import { uiAudio } from '../../utils/audio';

export const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedStack, setSelectedStack] = useState(['frontend', 'backend', 'auth']);
  const [plazo, setPlazo] = useState('4_semanas');

  const componentes = [
    { id: 'frontend', name: 'Frontend React 18 + Tailwind UI', icon: Layers, base: 800 },
    { id: 'backend', name: 'Backend API REST Python / Node.js', icon: Server, base: 900 },
    { id: 'auth', name: 'Seguridad & Autenticación Cifrada', icon: ShieldCheck, base: 400 },
    { id: 'database', name: 'Base de Datos PostgreSQL / Supabase', icon: Database, base: 500 },
    { id: 'ia', name: 'Motor de Inteligencia Artificial (LLM/OCR)', icon: Cpu, base: 1100 }
  ];

  const toggleStack = (id) => {
    uiAudio.playClick();
    if (selectedStack.includes(id)) {
      if (selectedStack.length > 1) {
        setSelectedStack(selectedStack.filter(item => item !== id));
      }
    } else {
      setSelectedStack([...selectedStack, id]);
    }
  };

  const totalEstimado = componentes
    .filter(c => selectedStack.includes(c.id))
    .reduce((acc, curr) => acc + curr.base, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    uiAudio.playClick();
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const empresa = formData.get('empresa');
    
    const stackNombres = componentes
      .filter(c => selectedStack.includes(c.id))
      .map(c => c.name)
      .join(', ');

    const mensaje = `Hola Ing. Dayron. Soy ${nombre} de ${empresa}.%0A%0AHe configurado una propuesta comercial en el Hub de DB Tech Studio:%0A- *Componentes:* ${stackNombres}%0A- *Inversión Estimada:* ~$${totalEstimado} USD%0A- *Plazo Deseado:* ${plazo.replace('_', ' ')}%0A%0A¿Podemos agendar una reunión técnica para validar el alcance?`;
    
    window.open(`https://wa.me/573104208919?text=${mensaje}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-950 border border-cyan-500/40 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white font-space">Configurador de Arquitectura B2B</h3>
            <p className="text-xs text-slate-400">Seleccione los módulos técnicos requeridos para su plataforma</p>
          </div>
          <button 
            onClick={() => {
              uiAudio.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
              1. Componentes de Arquitectura
            </label>
            <div className="space-y-2">
              {componentes.map((comp) => {
                const isSelected = selectedStack.includes(comp.id);
                const Icon = comp.icon;
                return (
                  <div
                    key={comp.id}
                    onClick={() => toggleStack(comp.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-md'
                        : 'bg-slate-900/60 border-white/10 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-950 text-slate-500'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold">{comp.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-slate-400">+${comp.base} USD</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${isSelected ? 'bg-cyan-400 border-cyan-400 text-slate-950' : 'border-slate-700'}`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Tu Nombre / Cargo</label>
              <input type="text" name="nombre" required placeholder="Ing. Carlos Rodríguez" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Empresa / Entidad</label>
              <input type="text" name="empresa" required placeholder="Constructora RINO / Firma Legal" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Inversión Estimada</span>
              <span className="text-2xl font-extrabold text-cyan-400 font-space">${totalEstimado} USD</span>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-xl shadow-cyan-500/20 flex items-center gap-2 active:scale-95"
            >
              <span>Generar Propuesta en WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};