import BlurText from "@/components/BlurText"
import FadeContent from "@/components/FadeContent"
import GradientText from "@/components/GradientText"
import CornerBrackets from "@/components/CornerBrackets"
import { workExperience } from "@/data/experience"

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24">
      <BlurText
        text="Experience"
        className="text-4xl md:text-5xl font-bold mb-16 justify-start"
        delay={150}
        animateBy="words"
        direction="top"
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-[#13284a]" />

        <div className="space-y-10">
          {workExperience.map((item, index) => (
            <FadeContent
              key={index}
              blur={true}
              duration={800}
              delay={index * 150}
              threshold={0.1}
            >
              <div className="relative flex items-start gap-8">
                {/* Dot */}
                <div className="absolute left-4 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-400 ring-4 ring-[#060d1f] z-10" />

                {/* Card */}
                <div className="ml-12 flex-1">
                  <CornerBrackets size={10} className="group">
                  <div className="border border-transparent bg-transparent group-hover:border-[#13284a] group-hover:bg-[#091930] p-6 transition-colors duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <GradientText
                          colors={["#a5b4fc", "#d8b4fe", "#a5b4fc"]}
                          animationSpeed={6}
                          className="text-lg font-semibold"
                        >
                          {item.role}
                        </GradientText>
                        <p className="text-sm font-medium text-slate-300 mt-0.5">{item.company}</p>
                      </div>
                      <span className="text-xs font-medium text-indigo-300 bg-indigo-950/60 rounded-full px-2.5 py-0.5 shrink-0">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-[#0a1e38] px-3 py-1 text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  </CornerBrackets>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
