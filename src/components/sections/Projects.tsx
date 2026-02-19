import BlurText from "@/components/BlurText"
import SpotlightCard from "@/components/SpotlightCard"
import GradientText from "@/components/GradientText"
import FadeContent from "@/components/FadeContent"
import { projects } from "@/data/projects"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <BlurText
        text="Featured Projects"
        className="text-4xl md:text-5xl font-bold mb-16 justify-center"
        delay={150}
        animateBy="words"
        direction="top"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <FadeContent
            key={index}
            blur={true}
            duration={800}
            delay={index * 150}
            threshold={0.1}
          >
            <SpotlightCard
              className="h-full !rounded-2xl !border-zinc-200 !bg-white !p-6 shadow-sm"
              spotlightColor="rgba(99, 102, 241, 0.15)"
            >
              <GradientText
                colors={["#818cf8", "#c084fc", "#818cf8"]}
                animationSpeed={6}
                className="text-xl font-semibold mb-3"
              >
                {project.title}
              </GradientText>

              <p className="text-zinc-500 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
              </div>
            </SpotlightCard>
          </FadeContent>
        ))}
      </div>
    </section>
  )
}
