import { useEffect, useRef } from "react"

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX}px`
      glowRef.current.style.top = `${e.clientY}px`
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "400px",
        height: "400px",
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--color-brand-700) 7%, transparent) 0%, color-mix(in srgb, var(--color-brand-700) 2%, transparent) 40%, transparent 70%)",
        borderRadius: "50%",
        transition: "left 0.06s ease-out, top 0.06s ease-out",
      }}
    />
  )
}
