import React from 'react';
import { Terminal, Database, Cpu, ChevronRight, CheckCircle2, Code2, Rocket, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from './assets/dayron-profile.jpg'; // Importación de tu fotografía profesional

const App = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white overflow-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Terminal className="text-slate-900 w-8 h-8" />
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">DB Tech Studio</span>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })} 
            className="hidden md:flex bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-bold transition-colors shadow-md shadow-emerald-200 items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Agendar Asesoría
          </motion.button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-32 relative bg-white">
        <motion.div 
          className="max-w-5xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-bold mb-8 uppercase tracking-wide">
            <Rocket className="w-4 h-4 text-emerald-600" />
            <span>Consultoría y Desarrollo Tecnológico</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
            Digitalizamos su empresa para <br className="hidden md:block" />
            <span className="text-emerald-600">
              multiplicar su rentabilidad
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Diseñamos ecosistemas digitales interactivos, automatizamos procesos y creamos plataformas a medida para que deje de operar manualmente y empiece a escalar.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })} 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-emerald-200"
            >
              Iniciar Proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })} 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              Ver Soluciones
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">El costo operativo de la tecnología obsoleta</h2>
            <p className="text-slate-600 text-lg md:text-xl">Si su empresa enfrenta estos cuellos de botella, está perdiendo capital y tiempo diariamente.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3 pb-4 border-b border-slate-100">
                <span className="bg-red-50 text-red-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold">✕</span>
                Modelo Tradicional
              </h3>
              <ul className="space-y-5">
                {['Procesos manuales que consumen horas de su equipo directivo', 'Sistemas desconectados que generan doble trabajo operativo', 'Pérdida de clientes por una experiencia web deficiente', 'Decisiones basadas en intuición, sin tableros de datos reales'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-lg">
                    <div className="w-2 h-2 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl text-white"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 pb-4 border-b border-slate-800">
                <span className="bg-emerald-500/20 text-emerald-400 w-10 h-10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </span>
                La Solución Tecnológica
              </h3>
              <ul className="space-y-5">
                {['Automatización inteligente de flujos de trabajo corporativos', 'Ecosistemas integrados (APIs, Bases de Datos centralizadas)', 'Plataformas web fluidas, rápidas y orientadas a la conversión', 'Arquitecturas escalables para analítica y control total'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium text-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" /> 
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">Infraestructura Digital a Medida</h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">Desarrollo de software diseñado exclusivamente para resolver problemas de negocio y aumentar su margen operativo.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Code2 className="w-8 h-8 text-indigo-900" />,
                title: "Desarrollo Web & Plataformas",
                desc: "Aplicaciones modernas y ágiles que responden al instante. Optimizadas para retener a sus clientes y generar ventas."
              },
              {
                icon: <Database className="w-8 h-8 text-indigo-900" />,
                title: "Bases de Datos & Analítica",
                desc: "Arquitectura de datos y paneles de control (Dashboards) en tiempo real para decisiones directivas inteligentes."
              },
              {
                icon: <Cpu className="w-8 h-8 text-indigo-900" />,
                title: "Automatización Industrial",
                desc: "Soluciones de software interconectado para reducir la dependencia del trabajo manual y optimizar recursos."
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group cursor-pointer"
              >
                <div className="bg-white border border-slate-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">{service.desc}</p>
                <div className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Solicitar evaluación <ChevronRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOBRE MÍ & CONTACTO */}
      <section id="contacto" className="bg-indigo-950 text-white py-24 px-6 border-t-8 border-emerald-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: FOTO Y BIO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4">Dirección Tecnológica</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-2">Ingeniería de Software con <span className="text-emerald-400">Visión de Negocios</span></h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              <img 
                src={profileImg} 
                alt="Ing. Dayron Bejarano" 
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover object-top rounded-2xl shadow-2xl border-4 border-indigo-900/50 shrink-0"
              />
              <div className="flex-1 text-center sm:text-left">
                <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                  Soy <strong>Dayron Bejarano</strong>, Ingeniero de Sistemas especializado en Desarrollo Tecnológico Empresarial, Analítica de Datos y automatización operativa.
                </p>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  Fundé <strong>DB Tech Studio</strong> para estructurar soluciones sólidas que dejen de ser un gasto y se conviertan en el principal activo de crecimiento de su organización.
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {['React / Node.js', 'Arquitectura Cloud', 'Bases de Datos', 'Consultoría IT'].map((tech, index) => (
                    <span key={index} className="bg-indigo-900/80 border border-indigo-700 text-indigo-100 py-1.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-slate-900 border border-slate-200 w-full"
          >
            <h3 className="text-2xl font-extrabold mb-2 text-slate-900">Agende su Diagnóstico</h3>
            <p className="text-slate-600 mb-8 text-lg">Contacto directo a mi WhatsApp corporativo para evaluar la viabilidad técnica de su proyecto.</p>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const project = e.target.project.value;
              const message = `Estimado Ing. Dayron, le saludo de parte de ${name}. Me interesa evaluar una solución enfocada en: ${project}. ¿Podemos agendar una reunión ejecutiva?`;
              window.open(`https://wa.me/573104208919?text=${encodeURIComponent(message)}`, '_blank');
            }}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Su Nombre o Empresa</label>
                <input type="text" name="name" required className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all font-medium" placeholder="Ej. Carlos Martínez - Constructora" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Área de Interés Principal</label>
                <select name="project" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all font-medium">
                  <option value="Plataforma Web / E-commerce">Plataforma Web Institucional</option>
                  <option value="Automatización de Procesos Internos">Automatización de Procesos Internos</option>
                  <option value="Desarrollo de Software a Medida">Desarrollo de Software a Medida</option>
                  <option value="Consultoría / Auditoría Tecnológica">Consultoría / Auditoría Tecnológica</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors mt-4 shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Contactar por WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default App;