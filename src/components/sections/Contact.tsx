import BlurText from "@/components/BlurText"
import GradientText from "@/components/GradientText"
import FadeContent from "@/components/FadeContent"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-3xl mx-auto text-center">
      <BlurText
        text="Get In Touch"
        className="text-4xl md:text-5xl font-bold mb-8 justify-center"
        delay={150}
        animateBy="words"
        direction="top"
      />

      <FadeContent blur={true} duration={1000} threshold={0.2}>
        <p className="text-lg text-zinc-500 mb-10">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a great conversation. Feel free to reach out!
        </p>

        <a
          href="mailto:hello@example.com"
          className="inline-block rounded-full border border-indigo-500/50 px-8 py-3 transition-all hover:bg-indigo-500/10 hover:border-indigo-400"
        >
          <GradientText
            colors={["#818cf8", "#c084fc", "#f472b6", "#818cf8"]}
            animationSpeed={5}
            className="text-lg font-semibold"
          >
            Say Hello
          </GradientText>
        </a>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-8">
          <a
            href="https://github.com/chordeaux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-600 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/dimas-deffieux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-600 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:dadeffieux@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-600 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </FadeContent>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-zinc-200 text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Dimas Deffieux. Built with React &
        Vite.
      </footer>
    </section>
  )
}
