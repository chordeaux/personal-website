import BlurText from "@/components/BlurText"
import SpotlightCard from "@/components/SpotlightCard"
import FadeContent from "@/components/FadeContent"
import CornerBrackets from "@/components/CornerBrackets"
import { projects } from "@/data/projects"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <BlurText
        text="Featured Projects"
        className="text-4xl md:text-5xl font-bold mb-16 justify-start"
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
            <CornerBrackets size={10} color="rgba(179,35,42,0.28)" className="h-full group">
            <SpotlightCard
              className="h-full !rounded-none !border-transparent !bg-transparent group-hover:!border-bone-300 group-hover:!bg-bone-50 !p-6 !shadow-none transition-colors duration-200"
              spotlightColor="rgba(179, 35, 42, 0.06)"
            >
              <h3 className="text-xl font-semibold mb-3 text-ink group-hover:text-rouge-700 transition-colors">
                {project.title}
              </h3>

              <p className="text-ash-700 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-bone-200 px-3 py-1 text-xs text-ash-700"
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
                    className="flex items-center gap-1.5 text-sm text-ash-500 hover:text-rouge-700 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Link
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-ash-500 hover:text-rouge-700 transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
              </div>
            </SpotlightCard>
            </CornerBrackets>
          </FadeContent>
        ))}
      </div>
    </section>
  )
}
