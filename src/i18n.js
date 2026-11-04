import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        portfolio: "Portafolio",
        capabilities: "Capacidades",
        direction: "Dirección Técnica",
        quote: "Cotizar Proyecto"
      },
      hero: {
        badge: "Software de Ingeniería & Licitaciones B2B",
        title1: "Plataformas de Estatus Enterprise e",
        title2: "Inteligencia Artificial Aplicada.",
        desc: "Diseñamos y desplegamos ecosistemas digitales customizables para empresas del sector privado e infraestructura del sector público (SECOP).",
        btnDemos: "Explorar Demos en Vivo",
        btnAdvice: "Asesoría Directa"
      },
      demos: {
        tag: "Ecosistema de Prospección B2B",
        title: "Soluciones Verticales por Sector",
        subtitle: "Demostraciones completamente operativas, optimizadas para captación de clientes corporativos e integración inmediata.",
        btnTest: "Probar Demo En Vivo",
        abogados: {
          title: "Valenzuela & Asociados",
          subtitle: "Firma Legal Boutique & M&A",
          sector: "Legal & Corporativo",
          badge: "Alto Margen B2B",
          desc: "Diseño de alto estatus con selector dinámico de paletas (Oro Imperial, Zafiro, Esmeralda Judicial), agendamiento privado y jurisprudencia corporativa."
        },
        constructora: {
          title: "Constructora RINO S.A.S",
          subtitle: "Desarrollos Urbanísticos & Obra Civil",
          sector: "Construcción e Ingeniería",
          badge: "Proyectos de Gran Volumen",
          desc: "Vitrina interactiva de desarrollos inmobiliarios, visualizador BIM vectorial de avances de obra y cotizador comercial paramétrico en tiempo real."
        },
        logistica: {
          title: "LOGIX Cargo & Transport",
          subtitle: "Logística de Carga Pesada & Hidrocarburos",
          sector: "Transporte & Cadena de Suministro",
          badge: "Operación Industrial",
          desc: "Arquitectura orientada a flotas masivas, rastreo satelital simulado en tiempo real, cálculo de cubicaje y tarificación directa de fletes corporativos."
        },
        salud: {
          title: "SANATIS Red Médica",
          subtitle: "Ecosistema de Salud, Odontología & Droguería",
          sector: "Salud & Medicina Boutique",
          badge: "Multi-Especialidad",
          desc: "Plataforma médica con motor de marca blanca de 4 especialidades, agendamiento adaptativo, portal de paciente encriptado e integración a droguería express."
        }
      },
      stack: {
        tag: "Capacidad Técnica de Producción",
        title: "Arquitectura de Software & Procesos de IA Avanzados",
        desc: "Nuestros desarrollos integran motores de base de datos distribuidas, autenticación cifrada, consumo de APIs en tiempo real y conectividad con plataformas de pagos y mensajería."
      },
      director: {
        tag: "Dirección Tecnológica & Liderazgo",
        title1: "Ingeniería de Software con",
        title2: "Visión de Negocio",
        bio: "Ingeniero de Sistemas especialista en Desarrollo Full Stack, Inteligencia Artificial y Arquitectura de Software para clientes corporativos e internacionales.",
        formTitle: "Solicitar Requerimiento Técnico",
        formDesc: "Complete sus datos para agendar una sesión de consultoría técnica o cotización formal.",
        nameLabel: "Tu Nombre / Cargo",
        companyLabel: "Empresa / Entidad",
        categoryLabel: "Categoría del Proyecto",
        btnSubmit: "Enviar Solicitud a WhatsApp Directo"
      }
    }
  },
  en: {
    translation: {
      nav: {
        portfolio: "Portfolio",
        capabilities: "Capabilities",
        direction: "Technical Direction",
        quote: "Get a Quote"
      },
      hero: {
        badge: "Engineering Software & B2B Tenders",
        title1: "Enterprise Status Platforms &",
        title2: "Applied Artificial Intelligence.",
        desc: "We design and deploy customizable digital ecosystems for private sector companies and public sector infrastructure.",
        btnDemos: "Explore Live Demos",
        btnAdvice: "Direct Advisory"
      },
      demos: {
        tag: "B2B Prospecting Ecosystem",
        title: "Industry Vertical Solutions",
        subtitle: "Fully operational demonstrations optimized for corporate client acquisition and immediate integration.",
        btnTest: "Try Live Demo",
        abogados: {
          title: "Valenzuela & Associates",
          subtitle: "Boutique Law Firm & M&A",
          sector: "Legal & Corporate",
          badge: "High Margin B2B",
          desc: "High-status design with dynamic color palette selector (Imperial Gold, Sapphire, Judicial Emerald), private scheduling, and corporate jurisprudence."
        },
        constructora: {
          title: "RINO Construction Corp",
          subtitle: "Urban Development & Civil Works",
          sector: "Construction & Engineering",
          badge: "High Volume Projects",
          desc: "Interactive real estate showcase, vector BIM work progress viewer, and real-time parametric commercial calculator."
        },
        logistica: {
          title: "LOGIX Cargo & Transport",
          subtitle: "Heavy Freight & Energy Logistics",
          sector: "Transport & Supply Chain",
          badge: "Industrial Operation",
          desc: "Architecture oriented towards massive fleets, real-time simulated satellite tracking, volume calculation, and direct corporate freight pricing."
        },
        salud: {
          title: "SANATIS Medical Network",
          subtitle: "Healthcare, Dentistry & Pharmacy",
          sector: "Health & Boutique Medicine",
          badge: "Multi-Specialty",
          desc: "White-label medical platform across 4 specialties, adaptive scheduling, encrypted patient portal, and express pharmacy e-commerce."
        }
      },
      stack: {
        tag: "Production Technical Capacity",
        title: "Software Architecture & Advanced AI Processes",
        desc: "Our developments integrate distributed database engines, encrypted authentication, real-time API consumption, and payment platform connectivity."
      },
      director: {
        tag: "Technology Leadership & Direction",
        title1: "Software Engineering with",
        title2: "Business Vision",
        bio: "Systems Engineer specialized in Full Stack Development, Artificial Intelligence, and Software Architecture for corporate and international clients.",
        formTitle: "Request Technical Consultation",
        formDesc: "Fill in your details to schedule a technical consulting session or formal proposal.",
        nameLabel: "Your Name / Position",
        companyLabel: "Company / Entity",
        categoryLabel: "Project Category",
        btnSubmit: "Send Request to Direct WhatsApp"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        portfolio: "Portfólio",
        capabilities: "Capacidades",
        direction: "Direção Técnica",
        quote: "Solicitar Cotação"
      },
      hero: {
        badge: "Software de Engenharia & Licitações B2B",
        title1: "Plataformas de Status Enterprise e",
        title2: "Inteligência Artificial Aplicada.",
        desc: "Projetamos e implantamos ecossistemas digitais personalizáveis para empresas do setor privado e infraestrutura do setor público.",
        btnDemos: "Explorar Demos Ao Vivo",
        btnAdvice: "Consultoria Direta"
      },
      demos: {
        tag: "Ecossistema de Prospecção B2B",
        title: "Soluções Verticais por Setor",
        subtitle: "Demonstrações totalmente operacionais otimizadas para captação de clientes corporativos e integração imediata.",
        btnTest: "Testar Demo Ao Vivo",
        abogados: {
          title: "Valenzuela & Associados",
          subtitle: "Escritório de Advocacia Boutique & M&A",
          sector: "Jurídico & Corporativo",
          badge: "Alto Margem B2B",
          desc: "Design de alto status com seletor dinâmico de paletas de cores, agendamento privado e jurisprudência corporativa."
        },
        constructora: {
          title: "Construtora RINO S.A.S",
          subtitle: "Desenvolvimento Urbano & Obras Civis",
          sector: "Construção & Engenharia",
          badge: "Projetos de Grande Volume",
          desc: "Vitrine imobiliária interativa, visualizador BIM vetorial do avanço de obras e calculador comercial paramétrico em tempo real."
        },
        logistica: {
          title: "LOGIX Cargo & Transport",
          subtitle: "Logística de Carga Pesada & Combustíveis",
          sector: "Transporte & Cadeia de Suprimentos",
          badge: "Operação Industrial",
          desc: "Arquitetura voltada para grandes frotas, rastreamento via satélite simulado em tempo real e cálculo de frete corporativo."
        },
        salud: {
          title: "SANATIS Rede Médica",
          subtitle: "Ecossistema de Saúde, Odontologia & Farmácia",
          sector: "Saúde & Medicina Boutique",
          badge: "Multi-Especialidade",
          desc: "Plataforma médica com motor white label de 4 especialidades, agendamento adaptativo e portal do paciente criptografado."
        }
      },
      stack: {
        tag: "Capacidade Técnica de Produção",
        title: "Arquitetura de Software & Processos Avançados de IA",
        desc: "Nossos desenvolvimentos integram motores de banco de dados distribuídos, autenticação criptografada e consumo de APIs em tempo real."
      },
      director: {
        tag: "Liderança & Direção Tecnológica",
        title1: "Engenharia de Software com",
        title2: "Visão de Negócios",
        bio: "Engenheiro de Sistemas especializado em Desenvolvimento Full Stack, Inteligência Artificial e Arquitetura de Software para clientes corporativos.",
        formTitle: "Solicitar Requerimento Técnico",
        formDesc: "Preencha seus dados para agendar uma sessão de consultoria técnica ou orçamento formal.",
        nameLabel: "Seu Nome / Cargo",
        companyLabel: "Empresa / Entidade",
        categoryLabel: "Categoria do Projeto",
        btnSubmit: "Enviar Solicitação no WhatsApp Direto"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;