import BlurText from "@/components/BlurText"
import SpotlightCard from "@/components/SpotlightCard"
import GradientText from "@/components/GradientText"
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
            <CornerBrackets size={10} color="rgba(165,180,252,0.2)" className="h-full group">
            <SpotlightCard
              className="h-full !rounded-none !border-transparent !bg-transparent group-hover:!border-[#13284a] group-hover:!bg-[#091930] !p-6 !shadow-none transition-colors duration-200"
              spotlightColor="rgba(165, 180, 252, 0.08)"
            >
              <GradientText
                colors={["#a5b4fc", "#d8b4fe", "#a5b4fc"]}
                animationSpeed={6}
                className="text-xl font-semibold mb-3"
              >
                {project.title}
              </GradientText>

              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-[#0a1e38] px-3 py-1 text-xs text-slate-400"
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
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-300 transition-colors"
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
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-300 transition-colors"
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
