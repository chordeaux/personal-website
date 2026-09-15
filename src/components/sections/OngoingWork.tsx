import BlurText from "@/components/BlurText"
import SpotlightCard from "@/components/SpotlightCard"
import FadeContent from "@/components/FadeContent"
import CornerBrackets from "@/components/CornerBrackets"
import { ongoingWork } from "@/data/experience"

export default function OngoingWork() {
  return (
    <section id="ongoing" className="py-24">
      <BlurText
        text="Ongoing Work"
        className="text-4xl md:text-5xl font-bold mb-16 justify-start"
        delay={150}
        animateBy="words"
        direction="top"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ongoingWork.map((item, index) => (
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
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-ink group-hover:text-rouge-700 transition-colors">
                  {item.title}
                </h3>
                <span className="ml-3 shrink-0 rounded-full border border-rouge-700/25 bg-rouge-700/10 px-2.5 py-0.5 text-xs font-medium text-rouge-700">
                  {item.status}
                </span>
              </div>

              <p className="text-ash-700 text-sm mb-5 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-bone-200 px-3 py-1 text-xs text-ash-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
            </CornerBrackets>
          </FadeContent>
        ))}
      </div>
    </section>
  )
}
