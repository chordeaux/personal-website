import BlurText from "@/components/BlurText"
import FadeContent from "@/components/FadeContent"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <FadeContent blur={true} duration={1000} threshold={0.2}>
        <BlurText
          text="Say Hello!"
          className="text-5xl md:text-6xl font-bold mb-6 justify-center"
          delay={150}
          animateBy="words"
          direction="top"
        />
        <p className="text-ash-700 text-base mb-2 max-w-lg mx-auto">
          I'm currently looking for <span className="text-ink">2026 Winter</span> and{" "}
          <span className="text-ink">2027 Summer</span> internship opportunities in{" "}
          <span className="text-ink">NLP Research</span> or{" "}
          <span className="text-ink">SWE / ML Engineering</span>.
        </p>
        <p className="text-ash-500 text-sm mb-10">
          Open to any conversation — don't hesitate to reach out.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:dimas@deffi.eu"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-rouge-700 border border-rouge-700 text-bone-50 text-sm font-medium hover:bg-rouge-800 hover:border-rouge-800 transition-colors"
          >
            <Mail size={16} />
            dimas@deffi.eu
          </a>
          <a
            href="https://linkedin.com/in/dimas-deffieux"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-bone-300 text-ink-soft text-sm font-medium hover:border-rouge-700/50 hover:text-rouge-700 transition-colors"
          >
            <Linkedin size={16} />
            linkedin.com/in/dimas-deffieux
          </a>
        </div>
      </FadeContent>
    </section>
  )
}
