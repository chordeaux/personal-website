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

function App() {
  return (
    <div className="relative flex min-h-screen bg-[#060d1f] text-slate-100">
      <GridBackground />
      <CursorGlow />
      {/* Page-level corner brackets (main content area only) */}
      <div className="pointer-events-none absolute inset-0 z-50">
        <span className="absolute top-5 left-5 md:left-[calc(18rem+20px)]" style={{ width: 22, height: 22, borderTop: "1px solid rgba(165,180,252,0.25)", borderLeft: "1px solid rgba(165,180,252,0.25)" }} />
        <span className="absolute top-5 right-5"                            style={{ width: 22, height: 22, borderTop: "1px solid rgba(165,180,252,0.25)", borderRight: "1px solid rgba(165,180,252,0.25)" }} />
        <span className="absolute bottom-5 left-5 md:left-[calc(18rem+20px)]" style={{ width: 22, height: 22, borderBottom: "1px solid rgba(165,180,252,0.25)", borderLeft: "1px solid rgba(165,180,252,0.25)" }} />
        <span className="absolute bottom-5 right-5"                          style={{ width: 22, height: 22, borderBottom: "1px solid rgba(165,180,252,0.25)", borderRight: "1px solid rgba(165,180,252,0.25)" }} />
      </div>
      <Sidebar />
      <main className="ml-0 md:ml-72 flex-1 px-6 md:px-12 py-12">
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
