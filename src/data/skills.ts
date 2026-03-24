export const stats = [
  { value: 4, suffix: "+", label: "Years Coding" },
  { value: 4, suffix: "", label: "Languages Spoken" },
  { value: 7, suffix: "", label: "Countries Lived In" },
  { value: 25, suffix: "+", label: "Technologies" },
]

export type TechCategory = "languages" | "ml" | "web" | "tools" | "spoken languages"

export const technologies: { name: string; category: TechCategory }[] = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "HTML/CSS", category: "languages" },
  { name: "PHP", category: "languages" },
  { name: "SQL", category: "languages" },
  // ML/AI
  { name: "PyTorch", category: "ml" },
  { name: "TensorFlow", category: "ml" },
  { name: "Keras", category: "ml" },
  { name: "HuggingFace", category: "ml" },
  { name: "Transformers", category: "ml" },
  { name: "scikit-learn", category: "ml" },
  { name: "Ollama", category: "ml" },
  { name: "ChromaDB", category: "ml" },
  { name: "RAG", category: "ml" },
  { name: "Pandas", category: "ml" },
  { name: "NumPy", category: "ml" },
  { name: "matplotlib", category: "ml" },
  // Web & Backend
  { name: "Next.js", category: "web" },
  { name: "React", category: "web" },
  { name: "FastAPI", category: "web" },
  { name: "Jakarta Servlet", category: "web" },
  { name: "MySQL", category: "web" },
  { name: "PostgreSQL", category: "web" },
  { name: "Redis", category: "web" },
  { name: "Tailwind CSS", category: "web" },
  // Tools
  { name: "Git", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Jupyter Notebooks", category: "tools" },
  //Spoken Languages
  {name: "English", category: "spoken languages"},
  {name: "French", category: "spoken languages"},
  {name: "Korean", category: "spoken languages"},
  {name: "Japanese", category: "spoken languages"},
  
]
