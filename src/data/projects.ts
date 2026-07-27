export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  badge?: string;
}

export const projects: Project[] = [
  {
    title: "Reporte y Explotación Responsable: Intranet Municipal",
    description: "Auditoría de seguridad web independiente realizada al portal intranet de la Municipalidad de Lambayeque. Identificación de vulnerabilidad crítica OWASP Top 10 y coordinación directa con el equipo de TI para su remediación exitosa.",
    technologies: ["OWASP Top 10", "Burp Suite", "Nmap", "Reporte de Vulnerabilidades"],
    featured: true
  },
  {
    title: "Participación Destacada CTF - Hack The Box & UNI",
    description: "Resolución de retos prácticos de ciberseguridad ofensiva y defensiva en escenarios simulados. Especialización en análisis forense de artefactos, ingeniería inversa, esteganografía y explotación web.",
    technologies: ["Kali Linux", "Binwalk", "Steghide", "Exiftool", "Python", "GDB"],
    featured: true
  },
  {
    title: "Blog de Ciberseguridad & Pentesting",
    description: "Plataforma personal orientada al análisis de vulnerabilidades, writeups de retos CTF y divulgación de análisis forense y criptografía.",
    technologies: ["Jekyll", "Ruby", "HTML/CSS", "Git", "JavaScript"],
    featured: false,
    link: "https://x-0wl.github.io/"
  },
  {
    title: "Plataforma Portafolio Personal",
    description: "Sitio web estático moderno de alto rendimiento enfocado en la combinación de desarrollo full-stack con visualización de experiencia en ciberseguridad.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    featured: false,
    badge: "ESTE SITIO DE AQUI!"
  }
];