import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Contact from "@/components/sections/Contact"
import Navigation from "@/components/layout/Navigation"
import Blur from "@/components/sections/Blur"

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Blur />

      </main>
      {/* Gradual blur overlays at top and bottom of viewport */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-36 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-40 backdrop-blur-md [mask-image:linear-gradient(to_top,black,transparent)]" />
    </div>
  )
}

export default App
