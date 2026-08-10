// ---------------------------------------------------------------------------
// Central content source for the portfolio.
// Edit this file to update any information shown on the site — no other
// file needs to change when your CV details change.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Faisal Ilyas",
  title: "Senior Software Engineer",
  location: "Karachi, Sindh, Pakistan",
  email: "faisalilyasb@gmail.com",
  phone: "+92 303 3789618",
  linkedin: "https://linkedin.com/in/faisal-ilyas-bhatti-436780189",
  avatar: "/images/profile.webp",
  roles: [
    "Senior Software Engineer",
    "Java · Spring Boot · Quarkus",
    "Core Banking & ATM Channel Systems",
  ],
  summary:
    "Senior Software Engineer with strong hands-on expertise in Java, J2EE, Spring Boot, and Quarkus, building scalable, high-performance backend systems for banking and financial services. Proven experience designing and integrating core banking and ATM channel services, including real-time financial and non-financial transaction processing.",
  about: [
    "I'm a backend-focused engineer who has spent my career close to the systems banks and fintechs actually run on — ATM channel platforms, core banking integrations, and the real-time transaction processing behind them.",
    "My day-to-day is Java, Spring Boot, and Quarkus: designing RESTful APIs and microservices, modeling data in DB2 and Oracle, and making sure financial transactions process reliably under real banking constraints.",
    "I care about systems that stay observable and maintainable in production — from API integration work with WSO2 to building Elastic/Kibana dashboards that keep the people on-call informed.",
  ],
} as const;

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Java Core", "J2EE", "JavaScript"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Spring MVC", "Quarkus", "Angular"],
  },
  {
    category: "Databases",
    items: ["DB2", "Oracle", "MySQL"],
  },
  {
    category: "Integration & Banking",
    items: [
      "OBDX (Oracle Banking Digital Experience)",
      "WSO2 API Manager",
      "WSO2 Identity Server",
      "WSO2 Integration Studio",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "Git", "CI/CD", "AWS"],
  },
  {
    category: "Monitoring",
    items: ["Elastic Stack", "Kibana"],
  },
  {
    category: "Markup & Tools",
    items: ["HTML", "CSS", "Jira", "Microsoft Visio"],
  },
] as const;

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  stack?: string[];
  highlights: string[];
  logo?: string;
};

export const experience: Experience[] = [
  {
    id: "teresol",
    role: "Senior Software Engineer",
    company: "Teresol Private Limited",
    location: "Karachi Division, Sindh, Pakistan",
    start: "Apr 2024",
    end: "Present",
    current: true,
    logo: "/images/teresol.png",
    stack: ["Java", "Quarkus", "DB2", "OBDX"],
    highlights: [
      "Designed and implemented an ATM thread system integrating financial and non-financial services — mini-statements, fund transfers, cheque book requests, bill payments, and cash withdrawals.",
      "Integrated real-time financial transaction processing, enabling seamless fund transfers, bill payments, and other core banking services directly through the ATM interface.",
      "Built cardless transaction functionality for ATM channels, enabling secure cash withdrawal and fund transfer without a physical card.",
      "Integrated ATM channel services with OBDX (Oracle Banking Digital Experience) for seamless interaction between the ATM platform and digital banking services.",
      "Worked on core banking functionality within OBDX — account inquiries, transaction processing, and service orchestration for digital banking channels.",
      "Contributed to the RDA (Rapid Deployment Application) backend services project, developing and maintaining backend components in Java and Quarkus.",
      "Collaborated with cross-functional teams to design DB2-based data models supporting high-volume, real-time banking transactions.",
      "Built and maintained Elastic Stack (Kibana) dashboards for monitoring application performance, transaction logs, and system health.",
    ],
  },
  {
    id: "techaccess",
    role: "Software Engineer (IDM)",
    company: "Techaccess Pakistan Private Limited",
    location: "Karachi, Sindh, Pakistan",
    start: "Sep 2023",
    end: "Apr 2024",
    logo: "/images/techaccess.png",
    stack: ["Java", "Oracle", "OIM"],
    highlights: [
      "Integrated the application with OIM (Oracle Identity Management).",
      "Worked as SQL developer on Oracle Database.",
      "Integrated the JAZZ SMS Gateway API.",
      "Connected Active Directory with Java code.",
    ],
  },
  {
    id: "evantagesoft",
    role: "Software Engineer",
    company: "Evantagesoft Private Limited",
    location: "Karachi, Sindh, Pakistan",
    start: "Jun 2022",
    end: "Sep 2023",
    logo: "/images/evantagesoft.png",
    stack: ["Java Spring Boot", "Angular", "WSO2"],
    highlights: [
      "Built full-stack applications with a focus on backend development in Java Spring Boot and frontend development in Angular.",
      "Designed and developed backend solutions with Java Spring Boot, including RESTful APIs, microservices, and data security measures.",
      "Worked with WSO2 API Manager and Identity Server, integrating and managing APIs for prominent projects including UBank and Zong.",
      "Developed and published RESTful APIs through WSO2 API Manager to enable real-time processing of Zong and UBank APIs.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  contribution: string;
  stack: string[];
  source: string; // which role this work came from
};

// Drawn directly from the initiatives described under Experience above —
// no separate "Projects" section existed in the CV, so these surface the
// most concrete, project-shaped work from each role.
export const projects: Project[] = [
  {
    id: "atm-cardless",
    title: "ATM Cardless Transactions",
    description:
      "Cardless cash withdrawal and fund transfer flow for ATM channels, removing the physical card requirement while preserving secure transaction handling.",
    contribution:
      "Designed and built the transaction flow as part of the broader ATM thread system at Teresol.",
    stack: ["Java", "Quarkus", "DB2"],
    source: "Teresol Private Limited",
  },
  {
    id: "obdx-integration",
    title: "OBDX Core Banking Integration",
    description:
      "Integration between ATM channel services and OBDX (Oracle Banking Digital Experience), covering account inquiries, transaction processing, and service orchestration for digital banking.",
    contribution:
      "Implemented the ATM-to-OBDX integration and supporting core banking functionality.",
    stack: ["Java", "Quarkus", "OBDX", "DB2"],
    source: "Teresol Private Limited",
  },
  {
    id: "rda-backend",
    title: "RDA Backend Services",
    description:
      "Backend services for the RDA (Rapid Deployment Application) platform, supporting banking application deployment workflows.",
    contribution:
      "Developed and maintained backend components using Java and Quarkus.",
    stack: ["Java", "Quarkus"],
    source: "Teresol Private Limited",
  },
  {
    id: "wso2-ubank-zong",
    title: "WSO2 API Integration — UBank & Zong",
    description:
      "API management and identity integration for two prominent client projects, publishing RESTful APIs for real-time processing.",
    contribution:
      "Integrated and managed APIs through WSO2 API Manager and Identity Server, and facilitated the Zong API integration.",
    stack: ["Java Spring Boot", "WSO2 API Manager", "WSO2 Identity Server"],
    source: "Evantagesoft Private Limited",
  },
];

export const education = {
  degree: "BS, Information Technology",
  institution: "Sindh Agricultural University",
  start: "Jan 2018",
  end: "Feb 2022",
  detail: "CGPA: 3.70",
};

export const certifications = [
  { name: "WSO2 Certified API Manager Practitioner V4", date: "Sep 2022" },
  { name: "Quarkus Framework Certification", date: "" },
  { name: "National Financial Literacy Certificate", date: "Nov 2021" },
  { name: "Computer Networking", date: "Sep 2020" },
];

export const languages = ["English", "Urdu", "Sindhi"];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
