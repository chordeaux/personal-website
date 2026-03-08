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
        <p className="text-slate-400 text-base mb-2 max-w-lg mx-auto">
          I'm currently looking for <span className="text-slate-200">2026 Winter</span> and{" "}
          <span className="text-slate-200">2027 Summer</span> internship opportunities in{" "}
          <span className="text-slate-200">NLP Research</span> or{" "}
          <span className="text-slate-200">SWE / ML Engineering</span>.
        </p>
        <p className="text-slate-500 text-sm mb-10">
          Open to any conversation — don't hesitate to reach out.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:dadeffieux@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-sm font-medium hover:bg-indigo-500/30 hover:border-indigo-400/70 transition-colors"
          >
            <Mail size={16} />
            dadeffieux@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/dimas-deffieux"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#13284a] text-slate-300 text-sm font-medium hover:border-indigo-400/40 hover:text-indigo-300 transition-colors"
          >
            <Linkedin size={16} />
            linkedin.com/in/dimas-deffieux
          </a>
        </div>
      </FadeContent>
    </section>
  )
}
