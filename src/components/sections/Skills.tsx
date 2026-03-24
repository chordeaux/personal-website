"use client"

import { useState } from "react"
import BlurText from "@/components/BlurText"
import CountUp from "@/components/CountUp"
import FadeContent from "@/components/FadeContent"
import CornerBrackets from "@/components/CornerBrackets"
import { stats, technologies, type TechCategory } from "@/data/skills"

const filters: { label: string; value: TechCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Programming Languages", value: "languages" },
  { label: "ML / AI", value: "ml" },
  { label: "Web & Backend", value: "web" },
  { label: "Tools", value: "tools" },
  { label: "Spoken Languages", value: "spoken languages" },

]

export default function Skills() {
  const [active, setActive] = useState<TechCategory | "all">("all")

  const filtered =
    active === "all" ? technologies : technologies.filter((t) => t.category === active)

  return (
    <section id="skills" className="py-24">
      <BlurText
        text="Skills & Experience"
        className="text-4xl md:text-5xl font-bold mb-16 justify-start"
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
            <CornerBrackets size={10} className="p-4">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-300 mb-2">
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={2.5}
                  separator=","
                />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
            </CornerBrackets>
          </FadeContent>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              active === f.value
                ? "bg-indigo-500/20 border-indigo-400/60 text-indigo-300"
                : "border-[#13284a] text-slate-400 hover:border-indigo-400/30 hover:text-slate-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Skill */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((tech, index) => (
          <FadeContent
            key={tech.name}
            blur={false}
            duration={600}
            delay={index * 50}
            threshold={0.1}
          >
            <CornerBrackets size={8} color="rgba(165,180,252,0.2)">
              <div className="flex items-center justify-center gap-3 border border-[#13284a] bg-[#091930] p-4">
                <span className="text-slate-300 text-sm font-medium">
                  {tech.name}
                </span>
              </div>
            </CornerBrackets>
          </FadeContent>
        ))}
      </div>
    </section>
  )
}
