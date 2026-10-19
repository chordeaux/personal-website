// Accent colour schemes. The neutrals (bone/ash/ink) stay the same across themes;
// only the accent ramp changes.
//   500: full-saturation hero colour (name, timeline dots, cursor)
//   600: mid step
//   700: main accent (links, buttons, badges, hover states). Needs to be readable on bone-100
//   800: hover/pressed state of 700

export interface AccentTheme {
  label: string
  500: string
  600: string
  700: string
  800: string
}

export const themes = {
  // Original. Dropped because names written in red are bad luck in many Asian cultures.
  red: {
    label: "Rouge",
    500: "#f2262b",
    600: "#d8333a",
    700: "#b3232a",
    800: "#8e1a20",
  },
  // Built from coral orange #FE654F.
  orange: {
    label: "Coral orange",
    500: "#fe654f",
    600: "#e8553f",
    700: "#cc4430",
    800: "#a03321",
  },
  // Built from malachite #04E762 (500 darkened slightly to #03CC57). 700 is a saturated, darker green so text stays readable on the ivory background.
  malachite: {
    label: "Malachite",
    500: "#03cc57",
    600: "#00b04a",
    700: "#008c3a",
    800: "#006b2c",
  },
  // Built from muted slate blue #6D72C3.
  slate: {
    label: "Slate blue",
    500: "#6d72c3",
    600: "#6368bc",
    700: "#5a5fb5",
    800: "#464a93",
  },
  // Built from vibrant royal blue #3C67E7.
  royal: {
    label: "Royal blue",
    500: "#3c67e7",
    600: "#3560dc",
    700: "#2f56d0",
    800: "#2443a6",
  },
} satisfies Record<string, AccentTheme>

export type ThemeName = keyof typeof themes

// Change this to switch the whole site's accent.
// Everything follows it, including the favicon (rebuilt in applyTheme) and the school logo divider.
export const activeTheme: ThemeName = "royal"

const isThemeName = (name: string | null): name is ThemeName =>
  name !== null && name in themes

// In dev, ?theme=<name> previews another scheme without editing activeTheme.
function previewTheme(): ThemeName | null {
  if (!import.meta.env.DEV) return null
  const name = new URLSearchParams(window.location.search).get("theme")
  return isThemeName(name) ? name : null
}

// Mirrors public/files/favicon.svg, which keeps a neutral ink divider as the
// pre-JS fallback (the PNG favicons match that neutral version).
function faviconSvg(accent: string) {
  const letter = (x: number) =>
    `<text x="${x}" y="82" text-anchor="middle" font-family="'JetBrains Mono', Consolas, monospace" font-weight="700" font-size="58" fill="#191815">D</text>`
  return `<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">` +
    `<rect width="128" height="128" rx="20" fill="#edeae3"/>` +
    letter(38) +
    `<line x1="64" y1="28" x2="64" y2="100" stroke="${accent}" stroke-width="3"/>` +
    letter(90) +
    `</svg>`
}

export function applyTheme(name: ThemeName = previewTheme() ?? activeTheme) {
  const theme = themes[name]
  const root = document.documentElement.style
  for (const step of [500, 600, 700, 800] as const) {
    root.setProperty(`--color-brand-${step}`, theme[step])
  }

  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/svg+xml"]')
  if (favicon) {
    favicon.href = `data:image/svg+xml,${encodeURIComponent(faviconSvg(theme[500]))}`
  }
}
