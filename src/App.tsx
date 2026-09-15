import Sidebar, { MobileHeader } from "@/components/layout/Sidebar"
import CursorGlow from "@/components/CursorGlow"
import GridBackground from "@/components/GridBackground"
import About from "@/components/sections/About"
import OngoingWork from "@/components/sections/OngoingWork"
import Projects from "@/components/sections/Projects"
import WorkExperience from "@/components/sections/WorkExperience"
import Education from "@/components/sections/Education"
import Skills from "@/components/sections/Skills"
import Contact from "@/components/sections/Contact"
import { Analytics } from "@vercel/analytics/react"

const bracket = "rgba(25,24,21,0.2)"

function App() {
  return (
    <div className="relative flex min-h-screen bg-bone-100 text-ink">
      <GridBackground />
      <CursorGlow />
      {/* Page-level corner brackets (main content area only) */}
      <div className="pointer-events-none absolute inset-0 z-50">
        <span className="absolute top-5 left-5 md:left-[calc(18rem+20px)]" style={{ width: 22, height: 22, borderTop: `1px solid ${bracket}`, borderLeft: `1px solid ${bracket}` }} />
        <span className="absolute top-5 right-5"                            style={{ width: 22, height: 22, borderTop: `1px solid ${bracket}`, borderRight: `1px solid ${bracket}` }} />
        <span className="absolute bottom-5 left-5 md:left-[calc(18rem+20px)]" style={{ width: 22, height: 22, borderBottom: `1px solid ${bracket}`, borderLeft: `1px solid ${bracket}` }} />
        <span className="absolute bottom-5 right-5"                          style={{ width: 22, height: 22, borderBottom: `1px solid ${bracket}`, borderRight: `1px solid ${bracket}` }} />
      </div>
      <Sidebar />
      <main className="relative z-10 ml-0 md:ml-72 flex-1 px-6 md:px-12 py-12">
        <MobileHeader />
        <About />
        <OngoingWork />
        <Projects />
        <WorkExperience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Analytics />
    </div>
  )
}

export default App
