import BlurText from "@/components/BlurText"
import CountUp from "@/components/CountUp"
import FadeContent from "@/components/FadeContent"
import { stats, technologies } from "@/data/skills"

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <BlurText
        text="Skills & Experience"
        className="text-4xl md:text-5xl font-bold mb-16 justify-center"
        delay={150}
        animateBy="words"
        direction="top"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, index) => (
          <FadeContent
            key={index}
            blur={true}
            duration={800}
            delay={index * 150}
            threshold={0.2}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={2.5}
                  separator=","
                />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-zinc-500 text-sm">{stat.label}</p>
            </div>
          </FadeContent>
        ))}
      </div>

      {/* Technologies */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <FadeContent
            key={index}
            blur={false}
            duration={600}
            delay={index * 80}
            threshold={0.1}
          >
            <div className="flex items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-colors hover:border-indigo-400/40">
              <span className="text-zinc-700 text-sm font-medium">
                {tech.name}
              </span>
            </div>
          </FadeContent>
        ))}
      </div>
    </section>
  )
}
