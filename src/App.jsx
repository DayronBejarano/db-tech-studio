import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  AmbientBackground, 
  SpotlightCard, 
  MagicGlowButton, 
  GlowingIcon,
  ScrollReveal 
} from './components/ui/Effects';
import { 
  Building2, Scale, Truck, HeartPulse, ExternalLink, Cpu, 
  Rocket, ArrowRight, Landmark, BrainCircuit, 
  Award, TerminalSquare, Globe2
} from 'lucide-react';

import profileImg from './assets/dayron-profile.jpg';

const DEMOS_COMERCIALES = [
  {
    id: 'abogados',
    titulo: 'Valenzuela & Asociados',
    subtitulo: 'Firma Legal Boutique & M&A',
    sector: 'Legal & Corporativo',
    url: 'https://demo-abogados-brown.vercel.app/',
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
    glow: 'rgba(6, 182, 212, 0.25)',
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
    descripcion: 'Arquitectura orientada a flotas masivas, rastreo satelital simulado en tiempo real y solicitud directa de fletes corporativos.'
  },
  {
    id: 'salud',
    titulo: 'SANATIS Red Médica',
    subtitulo: 'Ecosistema de Salud, Odontología & Droguería',
    sector: 'Salud & Medicina Boutique',
    url: 'https://demo-salud-three.vercel.app/',
    icon: HeartPulse,
    glow: 'rgba(52, 211, 153, 0.25)',
    badge: 'Multi-Especialidad',
    descripcion: 'Plataforma médica con motor de marca blanca (Clínica, Estética, Pharma), agendamiento dinámico, portal de paciente e integración a droguería express.'
  }
];

const STACK_TECNOLOGICO = [
  { icon: TerminalSquare, nombre: 'React 18, Vite & Python', desc: 'Desarrollo Full Stack y Single Page Applications de ultra-alta velocidad.' },
  { icon: BrainCircuit, nombre: 'Inteligencia Artificial & Datos', desc: 'Automatización con IA, Machine Learning, Analítica Predictiva y Dashboards.' },
  { icon: Landmark, nombre: 'Infraestructura Gubernamental', desc: 'Sistemas seguros adaptados para licitaciones y contratación pública (SECOP I+D).' },
  { icon: Cpu, nombre: 'IoT & Proyectos STEAM', desc: 'Prototipado electrónico (Arduino/ESP32), robótica e innovación tecnológica.' }
];

export const App = () => {
  const { t, i18n } = useTranslation();

  const handleContacto = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const entidad = formData.get('entidad');
    const categoria = formData.get('categoria');
    
    const mensaje = `Hola Ing. Dayron. Soy ${nombre} de ${entidad}.%0A%0AEstoy interesado en la categoría: *${categoria}* [REF: HUB-PORTAFOLIO].%0A%0A¿Podemos agendar una asesoría técnica para revisar los requerimientos?`;
    window.open(`https://wa.me/573104208919?text=${mensaje}`, '_blank');
  };

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 font-sans relative overflow-hidden selection:bg-cyan-500 selection:text-black">
      <AmbientBackground />

      <header className="relative z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl px-6 py-4 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-white/10 bg-slate-900 flex items-center justify-center">
              <img src="/logo.png" alt="DB Tech Studio Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block">DB Tech Studio</span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Arquitectura & IA</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <a href="#demos" className="hover:text-cyan-400 transition-colors">{t('nav.portfolio', 'Portafolio')}</a>
            <a href="#stack" className="hover:text-cyan-400 transition-colors">{t('nav.stack', 'Capacidades')}</a>
            <a href="#director" className="hover:text-cyan-400 transition-colors">{t('nav.director', 'Dirección')}</a>
            
            <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-white/10">
              <Globe2 className="w-3.5 h-3.5 text-cyan-500" />
              <button onClick={() => changeLanguage('es')} className={`transition-colors font-bold ${i18n.language === 'es' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>ES</button>
              <span className="text-slate-700">|</span>
              <button onClick={() => changeLanguage('en')} className={`transition-colors font-bold ${i18n.language === 'en' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>EN</button>
              <span className="text-slate-700">|</span>
              <button onClick={() => changeLanguage('pt')} className={`transition-colors font-bold ${i18n.language === 'pt' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>PT</button>
            </div>
          </div>

          <MagicGlowButton onClick={() => document.getElementById('director').scrollIntoView({ behavior: 'smooth' })} icon={ArrowRight} className="hidden md:inline-flex">
            {t('nav.quote', 'Cotizar Proyecto')}
          </MagicGlowButton>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md">
            <Landmark className="w-4 h-4 text-cyan-400" />
            <span>{t('hero.badge', 'Software de Ingeniería & Licitaciones B2B')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-5xl mx-auto mb-8">
            {t('hero.title1', 'Transformamos Industrias Complejas con ')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 block sm:inline">
              {t('hero.title2', 'Software de Alto Impacto e IA.')}
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            {t('hero.desc', 'Desarrollo de ecosistemas digitales, automatizaciones inteligentes e infraestructura de software para corporaciones y sector público.')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagicGlowButton onClick={() => document.getElementById('demos').scrollIntoView({ behavior: 'smooth' })} icon={Rocket}>
              {t('hero.btn', 'Explorar Portafolio B2B')}
            </MagicGlowButton>
          </div>
        </ScrollReveal>
      </section>

      <section id="demos" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">Ecosistema de Prospección B2B</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Plataformas Específicas por Sector</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEMOS_COMERCIALES.map((demo) => {
              const IconComp = demo.icon;
              return (
                <SpotlightCard key={demo.id} glowColor={demo.glow} className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <GlowingIcon icon={IconComp} colorClass="text-cyan-400" bgGlow="bg-cyan-500/20" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {demo.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-cyan-400 block mb-1">{demo.sector}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{demo.titulo}</h3>
                  <p className="text-xs text-slate-400 font-medium mb-4">{demo.subtitulo}</p>
                  
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                    {demo.descripcion}
                  </p>

                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full mt-auto py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-xs font-bold text-cyan-400 flex items-center justify-center gap-2 transition-all group"
                  >
                    <span>Probar Demo En Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </SpotlightCard>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      <section id="stack" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">Ingeniería Senior</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Arquitectura Moderna & Procesos de IA
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Nuestras soluciones escalan desde portales corporativos hasta sistemas de Inteligencia Artificial para el análisis de datos gubernamentales, garantizando disponibilidad y máxima seguridad.
              </p>

              <div className="space-y-4">
                {STACK_TECNOLOGICO.map((st, i) => {
                  const Icon = st.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 bg-slate-900/50 p-4 rounded-xl border border-white/10 backdrop-blur-md transition-colors hover:bg-slate-900/80">
                      <div className="bg-slate-950 p-2 rounded-lg border border-white/5">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block mb-0.5">{st.nombre}</span>
                        <span className="text-xs text-slate-400 leading-relaxed">{st.desc}</span>
                      </div>
                    </div>
                  );
                })}
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
                  <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Modelos Base de IA:</span>
                    <span className="text-blue-400 font-bold">NLP & Machine Learning</span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Seguridad Institucional:</span>
                    <span className="text-cyan-400 font-bold">Grade A+ SSL / Encriptación</span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Stack Base de Datos:</span>
                    <span className="text-slate-200 font-bold">PostgreSQL / Supabase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section id="director" className="relative z-10 bg-slate-950/80 border-t border-white/10 py-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-8">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Dirección Tecnológica
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-8 text-center sm:text-left">
                <div className="relative shrink-0 w-48 sm:w-56">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-2xl animate-pulse" />
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/20 bg-slate-900">
                    <img 
                      src={profileImg} 
                      alt="Ing. Dayron Bejarano" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900 to-transparent" />
                  </div>
                </div>

                <div className="sm:pt-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                    Ingeniería de Software con <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Visión de Negocio</span>
                  </h2>
                  <p className="text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
                    Ing. Dayron Andrés Bejarano Pérez
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Especialista en Desarrollo Full Stack, Analítica Predictiva de Datos y ecosistemas de Innovación.
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
                DB Tech Studio nace con la capacidad operativa, técnica y legal para ejecutar proyectos del sector privado y licitaciones del gobierno nacional, integrando estándares internacionales de ingeniería.
              </p>

              <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start">
                {['Desarrollo Web & SaaS', 'Inteligencia Artificial', 'Robótica & IoT', 'Analítica de Datos', 'Proyectos STEAM', 'Contratación Pública'].map((skill, idx) => (
                  <span key={idx} className="bg-slate-900 border border-slate-800 text-cyan-300 py-1.5 px-4 rounded-full text-xs font-medium hover:bg-slate-800 hover:text-white cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <SpotlightCard className="!p-8 lg:!p-10" glowColor="rgba(0, 242, 254, 0.15)">
              <h3 className="text-2xl font-bold text-white mb-2">Solicitar Requerimiento</h3>
              <p className="text-sm text-slate-400 mb-8 font-light">Selecciona la categoría de desarrollo o licitación para agendar una consultoría técnica.</p>
              
              <form className="space-y-5" onSubmit={handleContacto}>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Tu Nombre</label>
                  <input type="text" name="nombre" required placeholder="Ej. Ing. Carlos Rodríguez" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Empresa / Entidad</label>
                  <input type="text" name="entidad" required placeholder="Ej. Ministerio / Alcaldía / Corporación XYZ" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Categoría del Proyecto</label>
                  <select name="categoria" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer appearance-none">
                    <option value="Desarrollo Web / E-commerce">🌐 Desarrollo Web Institucional / E-commerce</option>
                    <option value="Plataforma Médica / Salud">🏥 Plataforma Médica / Salud / Droguería</option>
                    <option value="Automatización e IA Empresarial">🤖 Automatización e IA Empresarial</option>
                    <option value="Software a Medida / SaaS">💻 Desarrollo de Software a Medida / SaaS</option>
                    <option value="Tecnología Educativa / STEAM">🎓 Tecnología Educativa / Proyectos STEAM</option>
                    <option value="Licitación / Contratación Pública">🏛️ Licitación / Requerimiento Público (SECOP)</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full relative group inline-flex items-center justify-center overflow-hidden rounded-xl p-[1.5px] font-bold shadow-2xl focus:outline-none mt-4">
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#047857_50%,#10B981_100%)]" />
                  <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-slate-950 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-emerald-950/80">
                    Enviar a WhatsApp Directo
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center">
              <img src="/logo.png" alt="DB Tech Studio Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">DB Tech Studio</span>
              <span className="text-xs text-slate-500">Ing. Dayron Bejarano • Director de Tecnología</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} DB Tech Studio. Capacitados para licitaciones públicas y corporativas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;