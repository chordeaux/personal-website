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

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`relative px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              active === f.value
                ? "bg-rouge-700 border-rouge-700 text-bone-50"
                : "bg-bone-50 border-bone-300 text-ash-600 hover:border-rouge-700/40 hover:text-ink"
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
            <CornerBrackets size={8} color="rgba(179,35,42,0.28)">
              <div className="flex items-center justify-center gap-3 border border-bone-300 bg-bone-50 p-4">
                <span className="text-ink-soft text-sm font-medium">
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
