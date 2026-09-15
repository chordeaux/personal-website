import BlurText from "@/components/BlurText"
import FadeContent from "@/components/FadeContent"
import CornerBrackets from "@/components/CornerBrackets"
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
        <div className="absolute left-4 top-2 bottom-2 w-px bg-bone-300 md:left-1/2" />

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
                <div className="absolute left-[10px] top-2 w-3 h-3 rounded-full bg-rouge-500 ring-4 ring-bone-100 md:left-[calc(50%-6px)]" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <CornerBrackets size={10} className="group">
                  <div className="border border-transparent bg-transparent group-hover:border-bone-300 group-hover:bg-bone-50 p-6 transition-colors duration-200">
                    <span className="text-xs font-medium text-rouge-700 bg-rouge-700/10 rounded-full px-2.5 py-0.5">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-semibold mt-3 mb-1 text-ink group-hover:text-rouge-700 transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-medium text-ink-soft mb-1">{item.degree}</p>
                    {item.location && (
                      <p className="text-xs text-ash-500 mb-2">{item.location}</p>
                    )}
                    {item.description && (
                      <p className="text-sm text-ash-700 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                  </CornerBrackets>
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
