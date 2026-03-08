import type { ReactNode } from "react"

interface CornerBracketsProps {
  children: ReactNode
  className?: string
  size?: number
  color?: string
}

export default function CornerBrackets({
  children,
  className = "",
  size = 14,
  color = "rgba(165,180,252,0.3)",
}: CornerBracketsProps) {
  const border = `1px solid ${color}`
  const dim = { width: size, height: size }

  return (
    <div className={`relative ${className}`}>
      {children}
      <span className="absolute pointer-events-none " style={{ ...dim, top: 0, left: 0, borderTop: border, borderLeft: border }} />
      <span className="absolute pointer-events-none " style={{ ...dim, top: 0, right: 0, borderTop: border, borderRight: border }} />
      <span className="absolute pointer-events-none " style={{ ...dim, bottom: 0, left: 0, borderBottom: border, borderLeft: border }} />
      <span className="absolute pointer-events-none " style={{ ...dim, bottom: 0, right: 0, borderBottom: border, borderRight: border }} />
    </div>
  )
}
