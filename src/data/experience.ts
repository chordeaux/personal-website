export interface OngoingItem {
  title: string
  description: string
  tags: string[]
  status: string
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  location?: string
  description?: string
}

export interface WorkItem {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
}

export const ongoingWork: OngoingItem[] = [
  {
    title: "ViaRezo WiFi Support Chatbot",
    description:
      "Generative AI chatbot built with FastAPI and Ollama to automate WiFi support for ViaRezo, a student-led ISP serving 2,000+ users. Uses a RAG pipeline with ChromaDB grounded in the association's technical wiki, a custom async job queue built on Redis and ARQ, and replaced a legacy email workflow where response times often exceeded 24 hours.",
    tags: ["Ollama", "FastAPI", "Python", "RAG", "ChromaDB", "Redis"],
    status: "Active",
  },
  {
    title: "Bureau des Bachelors Web Overhaul",
    description:
      "Full backend overhaul of the Bureau des Bachelors web infrastructure, migrating from a fragmented PHP setup to a modular Next.js backend to reduce separately hosted sites from 4 to 2. Includes a redesigned website with event signups, member subscription management, and admin functionalities, with improved documentation to enable smooth developer handoffs.",
    tags: ["Next.js", "TypeScript", "PHP", "PostgreSQL"],
    status: "Active",
  },
]

export const education: EducationItem[] = [
  {
    institution: "CentraleSupélec & McGill",
    degree: "Bachelor of Global Engineering (BoGE) Dual-Degree",
    period: "2025 – Present",
    location: "Paris, France & Montreal, Canada",
    description:
      "First-year engineering student in a dual-degree program split between France and Canada. At CentraleSupélec, contributed to ViaRezo (student-run ISP, 2,000+ users) by building an AI support chatbot, rebuilt Automatants' web infrastructure as a member of the AI club, and served as VP Tech for the Bureau des Bachelors. Competed in a Coding Week building a ski GPS pathfinding app, completed a Modeling Week implementing an epidemiological simulation, and participated in the Bachelor Debate Club.",
  },
  {
    institution: "The Village School",
    degree: "IB Diploma",
    period: "2021 – 2025",
    location: "Houston, Texas",
    description:
      "Completed the IB Diploma with HL Computer Science, Physics, Mathematics (AA), and History. Took CS coursework every year, culminating in IB CS HL with an IA building a financial manager to analyze and visualize credit card statements, and an Extended Essay evaluating the performance of pathfinding algorithms. Founded the Coding Club, earned 2× Best Programmer (CS Honors Society) and the French Excellence Award, and made the Honor Roll in grades 11 and 12. Also competed in TAPPS Math and participated in Aeronautics Club.",
  }
]

export const workExperience: WorkItem[] = [
  {
    company: "ViaRezo",
    role: "Technical Member",
    period: "2025 – Present",
    description:
      "Contributing to the student-run ISP serving the CentraleSupélec campus. Building internal tools and the AI support chatbot to reduce load on human support staff.",
    tags: ["Python", "FastAPI", "Ollama", "Linux", "Redis + ARQ"],
  },
  {
    company: "Automatants",
    role: "Web Developer & Member",
    period: "2025 – Present",
    description:
      "Active member of the CentraleSupélec AI club. Developing and maintaining the club website and participating in AI workshops and project collaborations.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Jupyter", "PyTorch", "pandas"],
  },
  {
    company: "Bureau des Bachelors",
    role: "VP of IT",
    period: "2026 – Present",
    description:
      "Selected Vice President of IT. Overseeing the web presence and infrastructure of the association, as well as integrating with current school systems. Currently handling the overhaul of the website infrastructure.",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "PHP"],
  },
]
