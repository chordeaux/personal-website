export interface Project {
  title: string
  description: string
  tags: string[]
  url?: string
  github?: string
}

export const cppNeuralNetwork: Project = {
  title: "C++ Neural Network",
  description:
    "Collaborating with a classmate to develop a modular neural network from scratch in C++, implementing backpropagation, as well as other algorithms and functions related to networks. Designing the system in a way facilitate easy additions of different types of layers and activations to maximize versatility",
  tags: ["C++", "Eigen", "CUDA"]
}

export const bdbWebOverhaul: Project = {
  title: "Bureau des Bachelors Web Overhaul (ON HOLD)",
  description:
    "Full backend overhaul of the Bureau des Bachelors web infrastructure, migrating from a fragmented PHP setup to a modular Next.js backend to reduce separately hosted sites from 4 to 2. Includes a redesigned website with event signups, member subscription management, and admin functionalities, with improved documentation to enable smooth developer handoffs.",
  tags: ["Next.js", "TypeScript", "PHP", "PostgreSQL"],
  url: "https://www.bdbcs.fr/"
}

export const transformerTranslation: Project = {
  title: "Transformer Translation LLM",
  description:
    "Engineered an LLM from scratch using Transformer architecture in PyTorch to translate languages, covering the full pipeline from data preprocessing with HuggingFace datasets and tokenizers to training and evaluation. Built as a deep dive into understanding model architecture.",
  tags: ["Python", "PyTorch", "HuggingFace", "NLP", "Transformers"],
}

export const mnistDigitRecognition: Project = {
  title: "MNIST Digit Recognition",
  description:
    "Engineered and trained neural networks and CNNs in TensorFlow/Keras to classify handwritten MNIST digits, achieving 97% accuracy. Applied dropout, batch normalization, and hyperparameter tuning, and refined the CNN to 35,000 parameters (down from 38M) while maintaining accuracy.",
  tags: ["Python", "TensorFlow", "Keras", "scikit-learn", "CNNs"],
  github: "https://github.com/chordeaux/vhs-intro-ai/tree/main/handwriting_recognition",
}

export const automatantsWebsite: Project = {
  title: "Automatants Website",
  description:
    "Maintaining and improving the website for Automatants, the AI student club at CentraleSupélec. Covers club projects, events, and learning resources for students interested in AI.",
  tags: ["Next.js", "Tailwind CSS"],
  url: "https://automatants.cs-campus.fr/",
}

export const projects: Project[] = [
  cppNeuralNetwork,
  bdbWebOverhaul,
  transformerTranslation,
  mnistDigitRecognition,
  automatantsWebsite,
]
