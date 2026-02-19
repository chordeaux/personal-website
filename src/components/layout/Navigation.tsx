import Dock from "@/components/Dock"
import type { DockItemData } from "@/components/Dock"
import { Home, User, FolderOpen, Code2, Mail } from "lucide-react"

const scrollTo = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

const navItems: DockItemData[] = [
  {
    icon: <Home size={18} className="text-zinc-600" />,
    label: "Home",
    onClick: scrollTo("hero"),
  },
  {
    icon: <User size={18} className="text-zinc-600" />,
    label: "About",
    onClick: scrollTo("about"),
  },
  {
    icon: <FolderOpen size={18} className="text-zinc-600" />,
    label: "Projects",
    onClick: scrollTo("projects"),
  },
  {
    icon: <Code2 size={18} className="text-zinc-600" />,
    label: "Skills",
    onClick: scrollTo("skills"),
  },
  {
    icon: <Mail size={18} className="text-zinc-600" />,
    label: "Contact",
    onClick: scrollTo("contact"),
  },
]

export default function Navigation() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock
        items={navItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        distance={200}
        spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
      />
    </nav>
  )
}
