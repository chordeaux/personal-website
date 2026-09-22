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
    title: "Bureau des Bachelors Web Overhaul",
    description:
      "Full-stack overhaul of the Bureau des Bachelors web infrastructure, migrating from a fragmented PHP setup to a modular Next.js backend to reduce separately hosted sites from 4 to 2. Includes a redesigned website with event signups, member subscription management, and admin functionalities, with improved documentation to enable smooth developer handoffs.",
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
      "First-year engineering student in a dual-degree program split between France and Canada. At CentraleSupélec, rebuilt Automatants' web infrastructure as a member of the AI club, and served as VP Tech for the Bureau des Bachelors. Competed in a Coding Week building a ski GPS pathfinding app, completed a Modeling Week implementing an epidemiological simulation, and participated in the Bachelor Debate Club. Now participating in the Game Development club, creating games in collaboration with other associations on campus.",
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
    company: "CStudio",
    role: "Developer",
    period: "September 2026 – Present",
    description:
      "Starting to work as part of the CStudio club at my school, which develops games in Unity",
    tags: ["C#"],
  },
  {
    company: "SLB",
    role: "Software Engineering Intern",
    period: "June 2026 – July 2026",
    description:
      "Building an internal SharePoint chatbot using RAG for the Electrical Métier division.",
    tags: ["RAG", "SharePoint", "Python"],
  },
  {
    company: "Automatants",
    role: "Web Developer & Member",
    period: "2025 – Present",
    description:
      "Active member of the CentraleSupélec AI club. Developing and maintaining the club website and participating in AI workshops and project collaborations.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Jupyter", "PyTorch", "Pandas"],
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
