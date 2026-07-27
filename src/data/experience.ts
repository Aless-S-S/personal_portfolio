export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: "Auditor de Seguridad Externo (Voluntario)",
    company: "Municipalidad de Lambayeque",
    location: "Chiclayo, Perú",
    period: "Jul 2026",
    description: [
      "Detección y reporte ético de una vulnerabilidad crítica en la intranet municipal aplicando metodología OWASP Top 10.",
      "Ejecución del ciclo completo de auditoría real: reconocimiento, explotación controlada, documentación y asesoría de remediación."
    ],
    technologies: ["OWASP Top 10", "Burp Suite", "Nmap", "Web Security", "Ethical Hacking"]
  },
  {
    role: "Desarrollador Web & Soporte TI",
    company: "AQN Academy USA",
    location: "Remoto",
    period: "2024 - Presente",
    description: [
      "Desarrollo y mantenimiento de la landing page corporativa.",
      "Gestión integral de servidores web, backups automáticos y optimización de rendimiento.",
      "Soporte técnico remoto especializado para el equipo interno."
    ],
    technologies: ["WordPress", "PHP", "Linux", "Soporte TI", "Optimización Web"]
  },
  {
    role: "Desarrollador Web & Soporte TI",
    company: "SpaceTech: Inspira USA",
    location: "Remoto",
    period: "Abr 2025 - Presente",
    description: [
      "Mantenimiento continuo y desarrollo web de plataformas corporativas.",
      "Administración de infraestructura en la nube, copias de seguridad y seguridad del servidor."
    ],
    technologies: ["WordPress", "HTML/CSS", "JavaScript", "Linux Admin"]
  },
  {
    role: "Informático / Diseñador Web",
    company: "IURISDICTIO S.A.C",
    location: "Chiclayo, Perú",
    period: "Feb 2024 - Ago 2024",
    description: [
      "Construcción e implementación de una plataforma e-learning completa para cursos internos y externos.",
      "Automatización de campañas de correo masivo y difusión en redes a través del blog corporativo.",
      "Análisis de bases de datos de ventas mediante Power BI y Excel."
    ],
    technologies: ["WordPress", "Power BI", "Excel Avanzado", "E-learning", "Email Marketing"]
  },
  {
    role: "Diseñador Web",
    company: "AUTOMAN E.I.R.L / EMYLLECA S.A.C",
    location: "Chiclayo, Perú",
    period: "Dic 2023 - 2024",
    description: [
      "Diseño y despliegue de sitios web corporativos y publicitarios para dos empresas de la región.",
      "Integración de plugins de rendimiento, galerías interactivas y formularios optimizados."
    ],
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"]
  }
];