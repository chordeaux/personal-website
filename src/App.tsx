import Sidebar from "@/components/layout/Sidebar"
import CursorGlow from "@/components/CursorGlow"
import About from "@/components/sections/About"
import OngoingWork from "@/components/sections/OngoingWork"
import Projects from "@/components/sections/Projects"
import WorkExperience from "@/components/sections/WorkExperience"
import Education from "@/components/sections/Education"
import Skills from "@/components/sections/Skills"
import Contact from "@/components/sections/Contact"

function App() {
  return (
    <div className="flex min-h-screen bg-[#060d1f] text-slate-100">
      <CursorGlow />
      <Sidebar />
      <main className="ml-72 flex-1 px-12 py-12">
        <About />
        <OngoingWork />
        <Projects />
        <WorkExperience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
