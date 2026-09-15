import { useEffect, useRef } from "react"

export default function GridBackground() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const clientPos = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const setMask = (clientX: number, clientY: number) => {
      const x = clientX + window.scrollX
      const y = clientY + window.scrollY
      overlay.style.maskImage = `radial-gradient(circle 280px at ${x}px ${y}px, black, transparent)`
      overlay.style.webkitMaskImage = `radial-gradient(circle 280px at ${x}px ${y}px, black, transparent)`
    }

    const move = (e: MouseEvent) => {
      clientPos.current = { x: e.clientX, y: e.clientY }
      setMask(e.clientX, e.clientY)
    }

    const onScroll = () => setMask(clientPos.current.x, clientPos.current.y)

    window.addEventListener("mousemove", move)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="absolute -top-48 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.75), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-48 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(179,35,42,0.06), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-1/3 -left-24 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(138,134,124,0.16), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Base grid — always visible, very subtle */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(25,24,21,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(25,24,21,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Highlighted grid — revealed only under cursor via mask */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(179,35,42,0.20) 1px, transparent 1px),
            linear-gradient(90deg, rgba(179,35,42,0.20) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle 280px at -1000px -1000px, black, transparent)",
          WebkitMaskImage: "radial-gradient(circle 280px at -1000px -1000px, black, transparent)",
        }}
      />
    </div>
  )
}
