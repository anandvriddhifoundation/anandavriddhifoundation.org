import { Open_Sans, Jost } from 'next/font/google';

/**
 * Fonts in use:
 *  - Times New Roman MT  → system serif (web-safe, no Google Fonts required)
 *  - Futura              → Jost (closest geometric sans-serif on Google Fonts)
 *  - Open Sans           → Google Fonts
 */

// Open Sans — body / general text
export const openSansFont = Open_Sans({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  preload: true,
  variable: '--font-open-sans',
  fallback: ['Arial', 'Helvetica Neue', 'sans-serif'],
});

// Jost — geometric sans-serif (closest freely available Futura substitute)
export const futuraFont = Jost({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  preload: true,
  variable: '--font-futura',
  fallback: ['Trebuchet MS', 'Arial', 'sans-serif'],
});

// Times New Roman MT — web-safe system serif, no import needed.
// Use via CSS: font-family: var(--font-times), 'Times New Roman', Times, serif;
export const timesFont = {
  style: {
    fontFamily: "'Times New Roman MT', 'Times New Roman', Times, serif",
  },
  variable: '--font-times',
};

// Keep ubuntu for backwards compat (used in layout)
export { openSansFont as ubuntuFont };
