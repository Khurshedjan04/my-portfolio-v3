import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        primary: "#e2e8f0",
        secondary: "#94a3b8",
        tertiary: "#6c798c",
      },
      backgroundColor: {
        tertiary: "#6c798c",
      }
    },
  },
  plugins: [],
} satisfies Config;
