import React from 'react';
import { motion } from 'framer-motion';
import { 
  AmbientBackground, 
  SpotlightCard, 
  MagicGlowButton, 
  GlowingIcon 
} from './components/ui/Effects';
import { 
  Sparkles, 
  Building2, 
  Scale, 
  Truck, 
  ExternalLink, 
  Cpu, 
  Rocket, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const DEMOS_COMERCIALES = [
  {
    id: 'abogados',
    titulo: 'Valenzuela & Asociados',
    subtitulo: 'Firma Legal Boutique & M&A',
    sector: 'Legal & Corporativo',
    url: 'https://demo-abogados.vercel.app/',
    icon: Scale,
    glow: 'rgba(251, 191, 36, 0.25)',
    badge: 'Alto Margen B2B',
    descripcion: 'Diseño de alto estatus con tipografía serif cinematográfica, agendamiento privado de consultas y presentación de jurisprudencia corporativa.'
  },
  {
    id: 'constructora',
    titulo: 'Constructora RINO S.A.S',
    subtitulo: 'Desarrollos Urbanísticos & Obra Civil',
    sector: 'Construcción e Ingeniería',
    url: 'https://demo-constructora-kappa.vercel.app/',
    icon: Building2,
    glow: 'rgba(0, 242, 254, 0.25)',
    badge: 'Proyectos de Gran Volumen',
    descripcion: 'Vitrina interactiva de proyectos residenciales e industriales, visualizador de avance de obra y cotizador comercial integrado.'
  },
  {
    id: 'logistica',
    titulo: 'LOGIX Cargo & Transport',
    subtitulo: 'Logística de Carga Pesada & Hidrocarburos',
    sector: 'Transporte & Cadena de Suministro',
    url: 'https://demo-logistica-neon.vercel.app/',
    icon: Truck,
    glow: 'rgba(249, 115, 22, 0.25)',
    badge: 'Operación Industrial',
    descripcion: 'Arquitectura orientada a flotas masivas, indicadores operativos en tiempo real y solicitud directa de fletes corporativos.'
  }
];

const STACK_TECNOLOGICO = [
  { nombre: 'React 18 & Vite', desc: 'Single Page Applications de ultra-alta velocidad' },
  { nombre: 'Supabase Cloud', desc: 'Backend Serverless & Base de datos PostgreSQL' },
  { nombre: 'Tailwind CSS & Framer', desc: 'Interfaces Glassmorphism y micro-animaciones' },
  { nombre: 'Vercel Edge Network', desc: 'Despliegue global con respuesta <50ms' }
];

export const App = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans relative overflow-hidden selection:bg-cyan-500 selection:text-black">
      <AmbientBackground />

      {/* NAVBAR */}
      <header className="relative z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2.5 rounded-xl text-black font-black text-xl shadow-lg shadow-cyan-500/20">
              DB
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block">DB Tech Studio</span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Software Architecture</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <a href="#demos" className="hover:text-cyan-400 transition-colors">Portafolio Demos</a>
            <a href="#stack" className="hover:text-cyan-400 transition-colors">Stack Técnico</a>
            <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto Directo</a>
          </div>

          <MagicGlowButton onClick={() => window.open('https://wa.me/573100000000', '_blank')} icon={ArrowRight}>
            Cotizar Proyecto
          </MagicGlowButton>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>DESARROLLO WEB CORPORATIVO DE ALTO RENDIMIENTO</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-5xl mx-auto mb-8"
        >
          Transformamos Empresas B2B con Plataformas Web de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            Estatus Internacional
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Diseñamos y desarrollamos software a la medida para constructoras, firmas boutique de abogados y empresas de logística. Vitrinas digitales de alto impacto preparadas para captar clientes corporativos.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagicGlowButton onClick={() => document.getElementById('demos').scrollIntoView({ behavior: 'smooth' })} icon={Rocket}>
            Explorar Demos Interactivas
          </MagicGlowButton>
        </motion.div>
      </section>

      {/* PORTAFOLIO DE DEMOS INTERACTIVAS */}
      <section id="demos" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">Tridente Comercial B2B</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Plataformas Específicas por Sector</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DEMOS_COMERCIALES.map((demo) => (
            <SpotlightCard key={demo.id} glowColor={demo.glow}>
              <div className="flex items-center justify-between mb-6">
                <GlowingIcon icon={demo.icon} colorClass="text-cyan-400" bgGlow="bg-cyan-500/20" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {demo.badge}
                </span>
              </div>

              <span className="text-xs font-mono text-cyan-400 block mb-1">{demo.sector}</span>
              <h3 className="text-xl font-bold text-white mb-1">{demo.titulo}</h3>
              <p className="text-xs text-slate-400 font-medium mb-4">{demo.subtitulo}</p>
              
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {demo.descripcion}
              </p>

              <a
                href={demo.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-xs font-bold text-cyan-400 flex items-center justify-center gap-2 transition-all group"
              >
                <span>Probar Demo En Vivo</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* STACK TÉCNICO & ESTÁNDARES */}
      <section id="stack" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">Ingeniería Senior</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Arquitectura Moderna sin Costos de Infraestructura Innecesarios
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Implementamos aplicaciones desacopladas utilizando el ecosistema Jamstack. Tu plataforma cargará de forma instantánea, mantendrá disponibilidad del 99.9% y estará protegida contra ataques convencionales.
            </p>

            <div className="space-y-4">
              {STACK_TECNOLOGICO.map((st, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-white block">{st.nombre}</span>
                    <span className="text-xs text-slate-400">{st.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-slate-900/80 border border-white/15 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-8 h-8 text-cyan-400" />
                <div>
                  <h4 className="text-lg font-bold text-white">DB Tech Studio Core</h4>
                  <p className="text-xs text-slate-400 font-mono">Performance Index 100/100</p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5 flex justify-between">
                  <span className="text-slate-400">Tiempo de Carga FCP:</span>
                  <span className="text-emerald-400 font-bold">0.4s</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5 flex justify-between">
                  <span className="text-slate-400">Seguridad SSL & DDoS:</span>
                  <span className="text-cyan-400 font-bold">Grade A+</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5 flex justify-between">
                  <span className="text-slate-400">Infraestructura Serverless:</span>
                  <span className="text-slate-200 font-bold">Vercel + Supabase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="relative z-10 border-t border-white/10 bg-slate-950 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white font-black text-lg">DB</div>
            <div>
              <span className="text-sm font-bold text-white block">DB Tech Studio</span>
              <span className="text-xs text-slate-500">Ing. Dayron Bejarano • Director de Tecnología</span>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} DB Tech Studio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;