export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  badge?: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    title: "Certified Red Team Analyst (CRTA)",
    issuer: "CyberWarfare Labs",
    date: "2026",
    link: "https://labs.cyberwarfare.live/credential/achievement/6a42ef8a265336623faf3b72",
    description: "Certificación práctica enfocada en ciberseguridad ofensiva, operaciones de Red Team y técnicas avanzadas de intrusión."
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2026",
    link: "https://www.credly.com/badges/80486c81-413c-4445-ac5d-aabda79949a9",
    description: "Configuración de switches/routers, protocolos TCP/IP, modelos OSI/Ethernet y buenas prácticas de seguridad en red."
  },
  {
    title: "Top 10 - HxPloit Summit 2026",
    issuer: "Hack The Box",
    date: "Feb 2026",
    link: "https://media.licdn.com/dms/image/v2/D4E1FAQGhb5EyEdkHLw/feedshare-document-images_1920/B4EZysgcliI4Ao-/1/1772420714836?e=1785974400&v=beta&t=YhABFlWDkEsuMcvuBL4Bumw0w-OIMGy4zeLxpfxKNVg",
    description: "Clasificación en el puesto 10 de 101 equipos internacionales. Resolución de 32/33 desafíos en Criptografía, Forense, Binary y Web Exploitation."
  },
  {
    title: "Top 10 CTF Nacional",
    issuer: "Universidad Nacional de Ingeniería (UNI)",
    date: "Jul 2025",
    link: "https://www.linkedin.com/posts/alessandro-salazar-62b763284_ctf-ciberseguridad-cybersecurity-ugcPost-7348482759566262272-2M0J/",
    description: "Top 10 en competencia nacional resolviendo retos de esteganografía, análisis forense, criptografía y OSINT."
  },
  {
    title: "Análisis de Datos con Power BI",
    issuer: "UPC / Becas Grupo Romero",
    date: "Jul 2025",
    link: "https://www.linkedin.com/in/alessandro-salazar-62b763284/overlay/Certifications/1305318646/treasury/?profileId=ACoAAEUq0cMBF1AbA7HA4AwoieaPDuqRn2gaSyg",
    description: "Modelado de datos, creación de cuadros de mando interactivos y análisis analítico de información comercial."
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/ff8b1c29-43ae-4c7f-85e2-e93dafafad4c",
    date: "2024",
    description: "Metodologías de pruebas de penetración, escaneo de vulnerabilidades y elaboración de reportes de auditoría."
  },
  {
    title: "Técnico en Seguridad Informática",
    issuer: "Fundación Carlos Slim",
    date: "2024"
  },
  {
    title: "Introducción a Sistemas Linux",
    issuer: "Hack4u",
    date: "2024",
    link: "https://hack4u.io/certificate/0544-4566-0746-5672",
    description: "Administración del sistema de archivos, permisos, scripting en Bash y gestión de entorno CLI."
  }
];