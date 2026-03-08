import GradientText from "@/components/GradientText"
import { Github, Linkedin, Mail, FileDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const sections = [
  { label: "Ongoing Work", id: "ongoing" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
]

const scrollTo = (id: string, onDone?: () => void) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  onDone?.()
}

const scrollToTop = (onDone?: () => void) => () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
  onDone?.()
}

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-[#091930] border border-[#13284a] text-slate-400 hover:text-indigo-300 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 flex flex-col px-10 py-12 border-r border-[#13284a] bg-[#060d1f] z-50 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Mobile close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 md:hidden p-1.5 text-slate-500 hover:text-indigo-300 transition-colors"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>

        {/* Name — clicks to top */}
        <div className="mb-6">
          <button onClick={scrollToTop(close)} className="text-left block">
            <GradientText
              colors={["#a5b4fc", "#d8b4fe", "#a5b4fc"]}
              animationSpeed={6}
              className="cursor-pointer text-4xl font-bold leading-tight !mx-0"
            >
              Dimas Deffieux
            </GradientText>
          </button>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            I build projects that merge technology with human language
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Contact links */}
        <div className="mb-8 flex flex-col gap-3">
          <a
            href="https://github.com/chordeaux"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-indigo-300 transition-colors"
          >
            <Github size={15} />
            github.com/chordeaux
          </a>
          <a
            href="https://linkedin.com/in/dimas-deffieux"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-indigo-300 transition-colors"
          >
            <Linkedin size={15} />
            linkedin.com/in/dimas-deffieux
          </a>
          <a
            href="mailto:dadeffieux@gmail.com"
            className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-indigo-300 transition-colors"
          >
            <Mail size={15} />
            dadeffieux@gmail.com
          </a>
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-lg border border-indigo-400/30 text-sm font-medium text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400/60 transition-colors"
        >
          <FileDown size={15} />
          Resume
        </a>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={scrollTo(s.id, close)}
              className={`group cursor-pointer text-left text-sm transition-colors py-1 flex items-center gap-2 ${
                activeId === s.id
                  ? "text-indigo-300"
                  : "text-slate-500 hover:text-indigo-300"
              }`}
            >
              <span
                className={`h-px transition-all duration-300 bg-indigo-400 ${
                  activeId === s.id
                    ? "w-6 opacity-100"
                    : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-40"
                }`}
              />
              {s.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
