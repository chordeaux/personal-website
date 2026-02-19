"use client"

import { useState } from "react"
import Iridescence from "@/components/Iridescence"
import SplitText from "@/components/SplitText"
import RotatingText from "@/components/RotatingText"

const texts = [
  "NLP Developer",
  "ML/AI Enthusiast",
  "Full Stack Developer",
  "Problem Solver",
  "Creative Coder",
  "Engineering Student",
]

function needsAn(text: string): boolean {
  const firstWord = text.split(/[\s/]/)[0]
  const firstChar = firstWord[0].toUpperCase()
  // Abbreviations (all-caps): check if the letter name starts with a vowel sound
  if (firstWord === firstWord.toUpperCase() && firstWord.length > 1) {
    return "AEFHILMNORSX".includes(firstChar)
  }
  // Regular words: check if it starts with a vowel
  return "AEIOU".includes(firstChar)
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const article = needsAn(texts[currentIndex]) ? "an" : "a"

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Iridescence WebGL background */}
      <div className="absolute inset-0 z-0">
        <Iridescence
          color={[0.9, 0.9, 0.9]}
          speed={0.8}
          amplitude={0.12}
          mouseReact={true}
        />
      </div>

      {/* Light overlay for text readability */}
      <div className="absolute inset-0 z-[5] bg-white/20" />

      {/* Centered hero content */}
      <div className="relative z-[15] flex h-full flex-col items-center justify-center px-4">
        <SplitText
          text="Dimas Deffieux"
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white drop-shadow-lg"
          delay={80}
          duration={1.0}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          textAlign="center"
          tag="h1"
        />

        <div className="mt-6 flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-md">
          <span>I'm {article}</span>
          <RotatingText
            texts={texts}
            onNext={setCurrentIndex}
            rotationInterval={3000}
            splitBy="characters"
            staggerDuration={0.03}
            staggerFrom="first"
            mainClassName="font-semibold text-white drop-shadow-md"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-32 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60 drop-shadow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Curved fade overlay — organic dissolve into page background */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
        {/* Soft radial glow that feathers the edges */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[350px]"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 50% 100%, #fafafa 30%, transparent 70%)",
          }}
        />
        {/* SVG wave for an organic, non-straight edge */}
        <svg
          className="relative block w-full"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          style={{ height: "120px" }}
        >
          <defs>
            <linearGradient id="waveFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fafafa" stopOpacity="0" />
              <stop offset="40%" stopColor="#fafafa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fafafa" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 C240,20 480,140 720,80 C960,20 1200,130 1440,70 L1440,180 L0,180 Z"
            fill="url(#waveFade)"
          />
          <path
            d="M0,100 C320,50 600,150 960,90 C1150,65 1300,110 1440,85 L1440,180 L0,180 Z"
            fill="#fafafa"
          />
        </svg>
      </div>
    </section>
  )
}
