import BlurText from "@/components/BlurText"
import SpotlightCard from "@/components/SpotlightCard"
import GradientText from "@/components/GradientText"
import FadeContent from "@/components/FadeContent"
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
            <SpotlightCard
              className="h-full !rounded-2xl !border-[#13284a] !bg-[#091930] !p-6 shadow-sm"
              spotlightColor="rgba(165, 180, 252, 0.08)"
            >
              <div className="flex items-start justify-between mb-3">
                <GradientText
                  colors={["#a5b4fc", "#d8b4fe", "#a5b4fc"]}
                  animationSpeed={6}
                  className="text-xl font-semibold"
                >
                  {item.title}
                </GradientText>
                <span className="ml-3 shrink-0 rounded-full bg-emerald-950/50 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                  {item.status}
                </span>
              </div>

              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-[#0a1e38] px-3 py-1 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </FadeContent>
        ))}
      </div>
    </section>
  )
}
