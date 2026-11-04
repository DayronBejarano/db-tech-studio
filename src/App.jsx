import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  AmbientBackground, 
  SpotlightCard, 
  MagicGlowButton, 
  GlowingIcon,
  ScrollReveal 
} from './components/ui/Effects';
import { NetworkCanvas } from './components/ui/NetworkCanvas';
import { RoiCalculator } from './components/ui/RoiCalculator';
import { QuoteModal } from './components/ui/QuoteModal';
import { uiAudio } from './utils/audio';
import { 
  Building2, Scale, Truck, HeartPulse, ExternalLink, Cpu, 
  Rocket, ArrowRight, Landmark, BrainCircuit, 
  Award, TerminalSquare, Globe2, Sparkles, ShieldCheck, 
  Layers, PhoneCall, Radio, Zap, Volume2, VolumeX
} from 'lucide-react';

import profileImg from './assets/dayron-profile.jpg';

const getSemanticIconClass = (id) => {
  switch (id) {
    case 'abogados': return 'icon-scale-anim';
    case 'constructora': return 'icon-building-anim';
    case 'logistica': return 'icon-truck-anim';
    case 'salud': return 'icon-heart-anim';
    default: return '';
  }
};

const LiveArchitectureDiagram = () => (
  <div className="relative w-full bg-slate-950/90 rounded-3xl border border-cyan-500/30 p-6 md:p-8 overflow-hidden shadow-2xl backdrop-blur-2xl">
    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
      <div className="flex items-center gap-2.5">
        <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
        <span className="font-mono text-xs text-cyan-300 font-bold uppercase tracking-widest">Motor de Orquestación V3.2</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-800 font-semibold">STREAMING LIVE</span>
      </div>
    </div>

    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
      <div 
        onMouseEnter={() => uiAudio.playHover()}
        className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-xl group hover:shadow-cyan-500/10 relative overflow-hidden cursor-pointer"
      >
        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
          <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        </div>
        <div className="animate-float-ui mb-3">
          <div className="p-3 bg-cyan-950/60 border border-cyan-500/40 rounded-xl w-fit text-cyan-400 shadow-md">
            <Layers className="w-6 h-6" />
          </div>
        </div>
        <p className="font-mono text-xs font-bold text-white mb-0.5">Frontend UI Layer</p>
        <p className="text-[10px] text-slate-400">React 18 • Render 60fps</p>
        <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-cyan-300">
          <span>Escaneo UI</span>
          <span className="text-emerald-400 font-bold">Activo</span>
        </div>
      </div>

      <div 
        onMouseEnter={() => uiAudio.playHover()}
        className="p-5 rounded-2xl bg-gradient-to-b from-cyan-950/80 to-slate-950 border border-cyan-400 shadow-2xl shadow-cyan-500/20 relative overflow-hidden cursor-pointer"
      >
        <div className="mb-3">
          <div className="p-3 bg-cyan-500/20 border border-cyan-400 rounded-xl w-fit text-cyan-300 shadow-lg relative">
            <BrainCircuit className="w-6 h-6 animate-spin-neural" />
            <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-md animate-pulse" />
          </div>
        </div>
        <p className="font-mono text-xs font-bold text-cyan-200 mb-0.5">Core de Inteligencia</p>
        <p className="text-[10px] text-cyan-400 font-mono">Python + Supabase Vector</p>
        <div className="mt-3 pt-2 border-t border-cyan-500/20 flex items-center justify-between font-mono text-[9px] text-cyan-300">
          <span>Inferencia IA</span>
          <span className="text-cyan-400 font-bold">Procesando</span>
        </div>
      </div>

      <div 
        onMouseEnter={() => uiAudio.playHover()}
        className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 transition-all shadow-xl group hover:shadow-emerald-500/10 relative overflow-hidden cursor-pointer"
      >
        <div className="mb-3">
          <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl w-fit text-emerald-400 shadow-md animate-radar-pulse">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
        <p className="font-mono text-xs font-bold text-white mb-0.5">Security Gate</p>
        <p className="text-[10px] text-slate-400">SSL Grade A+ • Cifrado TLS</p>
        <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-emerald-400">
          <span>Radar Antiamenazas</span>
          <span className="font-bold">Protegido</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-slate-400 border-t border-white/10 pt-4 text-center">
      <div>Latencia: <strong className="text-emerald-400 font-bold">18ms</strong></div>
      <div>Disponibilidad: <strong className="text-cyan-400 font-bold">99.99%</strong></div>
      <div>Seguridad: <strong className="text-blue-400 font-bold">Encrypted</strong></div>
    </div>
  </div>
);

export const App = () => {
  const { t, i18n } = useTranslation();
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeLanguage = (lng) => {
    uiAudio.playClick();
    i18n.changeLanguage(lng);
  };

  const toggleAudio = () => {
    const muted = uiAudio.toggleMute();
    setIsAudioMuted(muted);
  };

  const DEMOS_COMERCIALES = [
    {
      id: 'abogados',
      titulo: t('demos.abogados.title'),
      subtitulo: t('demos.abogados.subtitle'),
      sector: t('demos.abogados.sector'),
      url: 'https://demo-abogados-brown.vercel.app/',
      icon: Scale,
      glow: 'rgba(251, 191, 36, 0.3)',
      badge: t('demos.abogados.badge'),
      descripcion: t('demos.abogados.desc')
    },
    {
      id: 'constructora',
      titulo: t('demos.constructora.title'),
      subtitulo: t('demos.constructora.subtitle'),
      sector: t('demos.constructora.sector'),
      url: 'https://demo-constructora-kappa.vercel.app/',
      icon: Building2,
      glow: 'rgba(6, 182, 212, 0.3)',
      badge: t('demos.constructora.badge'),
      descripcion: t('demos.constructora.desc')
    },
    {
      id: 'logistica',
      titulo: t('demos.logistica.title'),
      subtitulo: t('demos.logistica.subtitle'),
      sector: t('demos.logistica.sector'),
      url: 'https://demo-logistica-neon.vercel.app/',
      icon: Truck,
      glow: 'rgba(249, 115, 22, 0.3)',
      badge: t('demos.logistica.badge'),
      descripcion: t('demos.logistica.desc')
    },
    {
      id: 'salud',
      titulo: t('demos.salud.title'),
      subtitulo: t('demos.salud.subtitle'),
      sector: t('demos.salud.sector'),
      url: 'https://demo-salud-three.vercel.app/',
      icon: HeartPulse,
      glow: 'rgba(52, 211, 153, 0.3)',
      badge: t('demos.salud.badge'),
      descripcion: t('demos.salud.desc')
    }
  ];

  const STACK_TECNOLOGICO = [
    { 
      icon: TerminalSquare, 
      nombre: 'React 18, Vite & Python Backend', 
      desc: 'Arquitectura Single Page Application de alta velocidad con empaquetamiento ultraligero y cero deuda técnica.' 
    },
    { 
      icon: BrainCircuit, 
      nombre: 'Inteligencia Artificial & Datasets', 
      desc: 'Modelos de lenguaje (LLMs), analítica predictiva de datos, procesadores OCR automatizados y dashboards ejecutivos.' 
    },
    { 
      icon: Landmark, 
      nombre: 'Infraestructura Gubernamental (SECOP)', 
      desc: 'Sistemas con protocolos de alta disponibilidad diseñados para contratación pública y licitaciones del Estado.' 
    },
    { 
      icon: Cpu, 
      nombre: 'IoT, Robótica & Proyectos STEAM', 
      desc: 'Integración hardware-software con microcontroladores (ESP32/Arduino), telemetría en tiempo real e innovación tecnológica.' 
    }
  ];

  const handleContacto = (e) => {
    e.preventDefault();
    uiAudio.playClick();
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const entidad = formData.get('entidad');
    const categoria = formData.get('categoria');
    
    const mensaje = `Hola Ing. Dayron. Soy ${nombre} de ${entidad}.%0A%0AEstoy interesado en la categoría: *${categoria}* [REF: HUB-PORTAFOLIO].%0A%0A¿Podemos agendar una asesoría técnica para revisar los requerimientos de nuestra empresa?`;
    window.open(`https://wa.me/573104208919?text=${mensaje}`, '_blank');
  };

  const currentLang = i18n.language || 'es';

  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 font-sans relative overflow-hidden selection:bg-cyan-500 selection:text-black">
      <AmbientBackground />
      <NetworkCanvas />

      {/* BOTÓN FLOTANTE DE AUDIO HÁPTICO */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-400 shadow-2xl backdrop-blur-xl hover:scale-110 active:scale-95 transition-all"
        title={isAudioMuted ? 'Activar Sonido Háptico' : 'Silenciar Sonido Háptico'}
      >
        {isAudioMuted ? <VolumeX className="w-5 h-5 opacity-50" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
      </button>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <header className="relative z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl px-6 py-4 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl overflow-hidden shadow-xl shadow-cyan-500/20 border border-cyan-500/30 bg-slate-900 flex items-center justify-center shrink-0">
              <img 
                src="/logo.png" 
                alt="DB Tech Studio Logo" 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerText = 'DB';
                  e.target.parentElement.className = "w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-base shrink-0 font-space";
                }}
              />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block leading-none font-space">DB Tech Studio</span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase mt-1 block">Arquitectura & IA B2B</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <a href="#demos" onClick={() => uiAudio.playClick()} className="hover:text-cyan-400 transition-colors">{t('nav.portfolio')}</a>
            <a href="#roi" onClick={() => uiAudio.playClick()} className="hover:text-cyan-400 transition-colors">Simulador ROI</a>
            <a href="#stack" onClick={() => uiAudio.playClick()} className="hover:text-cyan-400 transition-colors">{t('nav.capabilities')}</a>
            <a href="#director" onClick={() => uiAudio.playClick()} className="hover:text-cyan-400 transition-colors">{t('nav.direction')}</a>
            
            <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-full border border-white/10">
              <Globe2 className="w-3.5 h-3.5 text-cyan-400 animate-spin-neural" style={{ animationDuration: '25s' }} />
              <button 
                onClick={() => changeLanguage('es')} 
                className={`transition-colors font-mono font-bold ${currentLang === 'es' || currentLang.startsWith('es') ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}
              >
                ES
              </button>
              <span className="text-slate-700">|</span>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`transition-colors font-mono font-bold ${currentLang === 'en' || currentLang.startsWith('en') ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}
              >
                EN
              </button>
              <span className="text-slate-700">|</span>
              <button 
                onClick={() => changeLanguage('pt')} 
                className={`transition-colors font-mono font-bold ${currentLang === 'pt' || currentLang.startsWith('pt') ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}
              >
                PT
              </button>
            </div>
          </div>

          <MagicGlowButton 
            onClick={() => {
              uiAudio.playClick();
              setIsModalOpen(true);
            }} 
            icon={ArrowRight} 
            className="hidden sm:inline-flex"
          >
            {t('nav.quote')}
          </MagicGlowButton>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] max-w-5xl mx-auto mb-8 font-space">
            {t('hero.title1')} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              {t('hero.title2')}
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-light">
            {t('hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagicGlowButton 
              onClick={() => {
                uiAudio.playClick();
                document.getElementById('demos').scrollIntoView({ behavior: 'smooth' });
              }} 
              icon={Rocket}
            >
              {t('hero.btnDemos')}
            </MagicGlowButton>

            <MagicGlowButton 
              variant="secondary"
              icon={PhoneCall}
              onClick={() => {
                uiAudio.playClick();
                window.open('https://wa.me/573104208919?text=Hola%20Ing.%20Dayron.%20Deseo%20agendar%20una%20asesor%C3%ADa%20técnica%20para%20un%20proyecto%20tecnológico%20[REF:%20HUB-HERO].', '_blank');
              }}
            >
              {t('hero.btnAdvice')}
            </MagicGlowButton>
          </div>
        </ScrollReveal>
      </section>

      <section id="demos" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2 font-bold">{t('demos.tag')}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-space">{t('demos.title')}</h2>
            <p className="text-slate-400 text-sm mt-3 font-light max-w-xl mx-auto">
              {t('demos.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEMOS_COMERCIALES.map((demo) => {
              const IconComp = demo.icon;
              const animClass = getSemanticIconClass(demo.id);

              return (
                <SpotlightCard 
                  key={demo.id} 
                  glowColor={demo.glow} 
                  className="p-6 flex flex-col h-full group"
                  onClick={() => uiAudio.playHover()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-md group-hover:scale-125 transition-transform duration-300" />
                      <div className={`relative p-3.5 bg-slate-900 border border-white/10 rounded-2xl text-cyan-400 shadow-xl ${animClass}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {demo.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-cyan-400 block mb-1 font-bold">{demo.sector}</span>
                  <h3 className="text-xl font-bold text-white mb-1 font-space">{demo.titulo}</h3>
                  <p className="text-xs text-slate-400 font-medium mb-4">{demo.subtitulo}</p>
                  
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                    {demo.descripcion}
                  </p>

                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => uiAudio.playClick()}
                    className="w-full mt-auto py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-xs font-bold text-cyan-400 flex items-center justify-center gap-2 transition-all group-hover:shadow-lg"
                  >
                    <span>{t('demos.btnTest')}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </SpotlightCard>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* SECCIÓN DEL SIMULADOR DE ROI B2B */}
      <section id="roi" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
        <ScrollReveal>
          <RoiCalculator />
        </ScrollReveal>
      </section>

      <section id="stack" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">{t('stack.tag')}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-space">
                {t('stack.title')}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {t('stack.desc')}
              </p>

              <div className="space-y-4 pt-2">
                {STACK_TECNOLOGICO.map((st, i) => {
                  const Icon = st.icon;
                  return (
                    <div 
                      key={i} 
                      onMouseEnter={() => uiAudio.playHover()}
                      className="flex items-start gap-4 bg-slate-900/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md hover:border-cyan-500/30 transition-colors group cursor-pointer"
                    >
                      <div className="bg-slate-950 p-3 rounded-xl border border-white/10 shrink-0 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block mb-0.5">{st.nombre}</span>
                        <span className="text-xs text-slate-400 leading-relaxed font-light">{st.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6">
              <LiveArchitectureDiagram />
            </div>

          </div>
        </ScrollReveal>
      </section>

      <section id="director" className="relative z-10 bg-slate-950/90 border-t border-white/10 py-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <div className="inline-flex items-center gap-2 mb-8">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                  {t('director.tag')}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-8 text-center sm:text-left">
                <div className="relative shrink-0 w-48 sm:w-56">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-2xl animate-pulse" />
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 bg-slate-900">
                    <img 
                      src={profileImg} 
                      alt="Ing. Dayron Bejarano" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950 to-transparent" />
                  </div>
                </div>

                <div className="sm:pt-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2 font-space">
                    {t('director.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('director.title2')}</span>
                  </h2>
                  <p className="text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4 font-bold">
                    Ing. Dayron Andrés Bejarano Pérez
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {t('director.bio')}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Desarrollo Web Enterprise', 'Inteligencia Artificial', 'Robótica & IoT', 'Analítica de Datos', 'SECOP & Contratación Pública', 'Plataformas SaaS'].map((skill, idx) => (
                  <span key={idx} className="bg-slate-900 border border-slate-800 text-cyan-300 py-1.5 px-4 rounded-full text-xs font-medium font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <SpotlightCard className="!p-8 lg:!p-10" glowColor="rgba(6, 182, 212, 0.2)">
              <h3 className="text-2xl font-bold text-white mb-2 font-space">{t('director.formTitle')}</h3>
              <p className="text-xs text-slate-400 mb-8 font-light">{t('director.formDesc')}</p>
              
              <form className="space-y-4" onSubmit={handleContacto}>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider font-mono">{t('director.nameLabel')}</label>
                  <input type="text" name="nombre" required placeholder="Ej. Ing. Carlos Rodríguez (CTO)" className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider font-mono">{t('director.companyLabel')}</label>
                  <input type="text" name="entidad" required placeholder="Ej. Constructora RINO / Firma Legal" className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider font-mono">{t('director.categoryLabel')}</label>
                  <select name="categoria" className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer">
                    <option value="Desarrollo Web Corporativo B2B">🌐 Desarrollo Web Corporativo B2B</option>
                    <option value="Plataforma Médica / Salud">🏥 Plataforma Médica / Salud Multi-Especialidad</option>
                    <option value="Firma Legal / M&A Boutique">⚖️ Firma Legal / M&A Boutique</option>
                    <option value="Constructora / Obra Civil">🏗️ Constructora / Desarrollo Inmobiliario</option>
                    <option value="Logística / Cadena de Suministro">🚚 Logística / Cadena de Suministro</option>
                    <option value="IA & Automatización Empresarial">🤖 IA & Automatización Empresarial</option>
                    <option value="Licitación Pública (SECOP)">🏛️ Licitación Pública / Estado (SECOP)</option>
                  </select>
                </div>
                
                <MagicGlowButton className="w-full mt-4 !py-4" icon={ArrowRight}>
                  {t('director.btnSubmit')}
                </MagicGlowButton>
              </form>
            </SpotlightCard>

          </div>
        </ScrollReveal>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="DB Tech Studio Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block font-space">DB Tech Studio</span>
              <span className="text-xs text-slate-400">Ing. Dayron Bejarano • Director de Tecnología</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} DB Tech Studio. Plataformas B2B con estándares de ingeniería de software.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;