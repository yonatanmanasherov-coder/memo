/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    'C:/Users/Matrix/Desktop/memo app/memo/index.html',
    'C:/Users/Matrix/Desktop/memo app/memo/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // App chrome — clean, modern, restrained
        ink: '#1c1a17',
        chrome: {
          bg: '#f4f3f1',
          card: '#ffffff',
          line: '#e6e3de',
          muted: '#8a847b',
        },
        accent: {
          DEFAULT: '#1f6f5c', // deep emerald — jewelry-trade, not techy blue
          soft: '#e7f1ee',
        },
        // Status
        active: '#2563eb',
        overdue: '#dc2626',
        duesoon: '#d97706',
        settled: '#16a34a',
        // The memo "paper" register
        paper: {
          DEFAULT: '#f7f2e7',
          line: '#d8cdb4',
          ink: '#2a2418',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        frame: '0 24px 60px -20px rgba(0,0,0,0.35)',
        card: '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px -6px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
