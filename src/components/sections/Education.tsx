import BlurText from "@/components/BlurText"
import FadeContent from "@/components/FadeContent"
import GradientText from "@/components/GradientText"
import { education } from "@/data/experience"

export default function Education() {
  return (
    <section id="education" className="py-24">
      <BlurText
        text="Education"
        className="text-4xl md:text-5xl font-bold mb-16 justify-start"
        delay={150}
        animateBy="words"
        direction="top"
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-[#13284a] md:left-1/2" />

        <div className="space-y-12">
          {education.map((item, index) => (
            <FadeContent
              key={index}
              blur={true}
              duration={800}
              delay={index * 150}
              threshold={0.1}
            >
              <div className={`relative flex items-start gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-4 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-400 ring-4 ring-[#060d1f] md:left-1/2 z-10" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="rounded-2xl border border-[#13284a] bg-[#091930] p-6 shadow-sm">
                    <span className="text-xs font-medium text-indigo-300 bg-indigo-950/60 rounded-full px-2.5 py-0.5">
                      {item.period}
                    </span>
                    <GradientText
                      colors={["#a5b4fc", "#d8b4fe", "#a5b4fc"]}
                      animationSpeed={6}
                      className="text-lg font-semibold mt-3 mb-1"
                    >
                      {item.institution}
                    </GradientText>
                    <p className="text-sm font-medium text-slate-300 mb-1">{item.degree}</p>
                    {item.location && (
                      <p className="text-xs text-slate-500 mb-2">{item.location}</p>
                    )}
                    {item.description && (
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
