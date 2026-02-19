export interface Project {
  title: string
  description: string
  tags: string[]
  url?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: "ViaRezo Support Chatbot",
    description:
      "A full-stack web application built with React and Node.js for real-time data visualization and analytics dashboards.",
    tags: ["React", "Node.js", "TypeScript", "D3.js"],
    url: "https://example.com",
    github: "https://github.com/example/project-alpha",
  },
  {
    title: "FR-EN Translation Transformer",
    description:
      "An AI-powered tool that streamlines workflow automation for development teams using natural language commands.",
    tags: ["Python", "React", "OpenAI", "PostgreSQL"],
    github: "https://github.com/example/project-beta",
  },
  {
    title: "Project Gamma",
    description:
      "A modern e-commerce platform with seamless payment integration, real-time inventory tracking, and admin dashboard.",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    url: "https://example.com",
  },
  {
    title: "Project Delta",
    description:
      "A collaborative design tool that enables real-time editing and version control for creative teams.",
    tags: ["React", "WebSocket", "Canvas API", "Redis"],
    github: "https://github.com/example/project-delta",
  },
]
