import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react";

const config = {
  darkMode: ["class"],
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // shadcn / Radix UI system tokens (CSS variable driven)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // ── AVF Brand Palette ──────────────────────────────
        brand: {
          teal:  "#1d6677",   // primary dark teal
          gold:  "#f4ac0d",   // amber/gold accent
          green: "#a7d76c",   // lime green
          cyan:  "#51bad2",   // light cyan
          dark:  "#0f3238",   // deep teal / dark bg
          white: "#ffffff",
          black: "#000000",
        },
      },

      fontFamily: {
        // Times New Roman MT (web-safe system font)
        times: ["'Times New Roman MT'", "'Times New Roman'", "Times", "serif"],
        // Futura substitute via CSS variable loaded by next/font/google (Jost)
        futura: ["var(--font-futura)", "'Trebuchet MS'", "Arial", "sans-serif"],
        // Open Sans via CSS variable loaded by next/font/google
        sans: ["var(--font-open-sans)", "Arial", "sans-serif"],
        // Alias for serif headings
        serif: ["'Times New Roman MT'", "'Times New Roman'", "Times", "serif"],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%" }
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        "accordion-down": "accordion-down 1s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("flowbite/plugin"),
    require("@headlessui/tailwindcss"),
    require('tailwindcss-react-aria-components'),
    require("tailwindcss-animate"),
    nextui()
  ],
} satisfies Config

export default config