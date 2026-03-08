export interface Project {
  title: string
  description: string
  tags: string[]
  url?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: "ViaRezo WiFi Support Chatbot",
    description:
      "Generative AI chatbot built with FastAPI and Ollama to automate WiFi support for ViaRezo, a student-led ISP serving 2,000+ users. Uses a RAG pipeline with ChromaDB grounded in the association's technical wiki, a custom async job queue built on Redis and ARQ, and replaced a legacy email workflow where response times often exceeded 24 hours.",
    tags: ["Ollama", "FastAPI", "Python", "RAG", "ChromaDB", "Redis", "ARQ"],
  },
  {
    title: "Bureau des Bachelors Web Overhaul",
    description:
      "Full backend overhaul of the Bureau des Bachelors web infrastructure, migrating from a fragmented PHP setup to a modular Next.js backend to reduce separately hosted sites from 4 to 2. Includes a redesigned website with event signups, member subscription management, and admin functionalities, with improved documentation to enable smooth developer handoffs.",
    tags: ["Next.js", "TypeScript", "PHP", "PostgreSQL"],
  },
  {
    title: "Transformer Translation LLM",
    description:
      "Engineered an LLM from scratch using Transformer architecture in PyTorch to translate languages, covering the full pipeline from data preprocessing with HuggingFace datasets and tokenizers to training and evaluation. Built as a deep dive into understanding model architecture.",
    tags: ["Python", "PyTorch", "HuggingFace", "NLP", "Transformers"],
  },
  {
    title: "MNIST Digit Recognition",
    description:
      "Engineered and trained neural networks and CNNs in TensorFlow/Keras to classify handwritten MNIST digits, achieving 97% accuracy. Applied dropout, batch normalization, and hyperparameter tuning, and refined the CNN to 35,000 parameters (down from 38M) while maintaining accuracy.",
    tags: ["Python", "TensorFlow", "Keras", "scikit-learn", "CNNs"],
    github: "https://github.com/chordeaux/vhs-intro-ai/tree/main/handwriting_recognition",
  },
  {
    title: "Automatants Website",
    description:
      "Maintaining and improving the website for Automatants, the AI student club at CentraleSupélec. Covers club projects, events, and learning resources for students interested in AI.",
    tags: ["Next.js", "Tailwind CSS"],
    url: "https://automatants.cs-campus.fr/",
  },
]
