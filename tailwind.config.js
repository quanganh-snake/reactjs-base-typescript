const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
}

const COLORS = {
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  baseBgr: 'var(--bgr-base)',
  secondaryBgr: 'var(--bgr-secondary)'

  // ---------- GRAY ---------- //
  // ---------- INFO ---------- //
  // ---------- WARNING ---------- //
  // ---------- ERROR ---------- //
  // ---------- SUCCESS ---------- //
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: COLORS,
    extend: {}
  },
  plugins: []
}
