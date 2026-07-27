export interface Skill {
    name: string;
    type: "Language" | "Framework" | "Tool" | "CMS" | "DBS" | "Cybersecurity" | "Networking";
}

export const skills: Skill[] = [
    // --- Ciberseguridad Ofensiva & Redes ---
    {
        name: "Burp Suite & Nmap",
        type: "Cybersecurity"
    },
    {
        name: "OWASP Top 10",
        type: "Cybersecurity"
    },
    {
        name: "Wireshark & Binwalk",
        type: "Cybersecurity"
    },
    {
        name: "Kali Linux / OSINT",
        type: "Cybersecurity"
    },
    {
        name: "CCNA / TCP/IP",
        type: "Networking"
    },

    // --- Lenguajes & Scripting ---
    {
        name: "Python",
        type: "Language"
    },
    {
        name: "TypeScript & React",
        type: "Language"
    },
    {
        name: "Bash",
        type: "Language"
    },
    {
        name: "Java",
        type: "Language"
    },
    {
        name: "C++",
        type: "Language"
    },

    // --- Frameworks & CMS ---
    {
        name: "Astro",
        type: "Framework"
    },
    {
        name: "WordPress",
        type: "CMS"
    },

    // --- Bases de Datos ---
    {
        name: "PostgreSQL",
        type: "DBS"
    },
    {
        name: "MariaDB",
        type: "DBS"
    },
    {
        name: "MongoDB",
        type: "DBS"
    },

    // --- Herramientas & DevOps ---
    {
        name: "Docker",
        type: "Tool"
    },
    {
        name: "Git",
        type: "Tool"
    }
];