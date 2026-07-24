import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Koyu lacivert / navy ana palet (metin + koyu bölümler)
        navy: {
          50: "#f4f6fb",
          100: "#e7ecf5",
          200: "#d0daec",
          300: "#a9bcdb",
          400: "#7793c2",
          500: "#5570a6",
          600: "#3f568a",
          700: "#334670",
          800: "#22345b",
          900: "#12213f",
          950: "#0b1428",
        },
        // Marka mavisi (logodan türetilmiş royal blue) — tek vurgu rengi
        accent: {
          50: "#eff5ff",
          100: "#dbe8fe",
          200: "#bfd7fe",
          300: "#93bbfd",
          400: "#609afa",
          500: "#3b78f0",
          600: "#2563eb",
          700: "#1d4fd0",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        // Yumuşak, düşük kontrastlı gölgeler (havadar minimal his)
        card: "0 1px 2px rgba(18, 33, 63, 0.04), 0 4px 16px rgba(18, 33, 63, 0.05)",
        "card-hover":
          "0 2px 4px rgba(18, 33, 63, 0.05), 0 14px 30px rgba(18, 33, 63, 0.09)",
        soft: "0 1px 3px rgba(18, 33, 63, 0.06)",
        // Premium katmanlı gölgeler (derinlik hissi)
        lift: "0 1px 2px rgba(18, 33, 63, 0.04), 0 10px 24px -8px rgba(18, 33, 63, 0.12), 0 24px 48px -16px rgba(18, 33, 63, 0.10)",
        "lift-hover":
          "0 2px 4px rgba(18, 33, 63, 0.05), 0 18px 36px -10px rgba(37, 99, 235, 0.16), 0 36px 64px -20px rgba(18, 33, 63, 0.16)",
        panel:
          "0 2px 8px rgba(18, 33, 63, 0.06), 0 30px 70px -20px rgba(18, 33, 63, 0.28)",
        "glow-accent": "0 10px 40px -8px rgba(37, 99, 235, 0.35)",
      },
      backgroundImage: {
        // Hero için ferah, çok katmanlı gradyan mesh (ince derinlik)
        "mesh-hero":
          "radial-gradient(42rem 30rem at 12% -8%, rgba(37, 99, 235, 0.12), transparent 60%), radial-gradient(38rem 28rem at 88% 4%, rgba(96, 154, 250, 0.10), transparent 58%)",
        // Açık zeminler için çok hafif mavi aydınlanma
        "hero-glow":
          "radial-gradient(48rem 26rem at 50% -6rem, rgba(37, 99, 235, 0.10), transparent 70%)",
        // Koyu CTA/footer için hafif derinlik
        "dark-glow":
          "radial-gradient(44rem 24rem at 80% -20%, rgba(37, 99, 235, 0.35), transparent 62%), radial-gradient(30rem 20rem at 10% 120%, rgba(96, 154, 250, 0.18), transparent 60%)",
        // İnce nokta ızgarası (dokusal derinlik)
        "dot-grid":
          "radial-gradient(rgba(37, 99, 235, 0.10) 1px, transparent 1px)",
        // Vurgu için ince mavi gradyan (metin/çizgi)
        "accent-line":
          "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.6), transparent)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
