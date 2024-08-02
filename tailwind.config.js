/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      blue: "#1fb6ff",
      "blue-dark": "#222e3c",
      "purple-light": "#E6E6FA",
      purple: "#7e5bef",
      pink: "#ff49db",
      "pink-light": "#FFB6C1",
      orange: "#ff7849",
      "orange-dark": "#D2691E",
      "green-dark": "#228B22",
      green: "#13ce66",
      "green-light": "#98FB98",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#F0F0F0",
      "off-white": "#F5DEB3",
      "text-main": "#333333",
      brown: "#8B4513",
      red: "#FF0000",
      white: "#fff",
      black: "#000",
      "bg-blue": "#6495ED",
      "yellow-dark": "#B8860B",
      "bg-main": "#f7e5c2",
      "bg-admin": "#F4F5F9",
    },

    extend: {
      colors: {
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "banner-0": "url('@/images/banner-0.jpg')",
        "banner-1": "url('@/images/banner-1.jpg')",
        "banner-2": "url('@/images/banner-2.jpg')",
        "banner-3": "url('@/images/banner-3.jpg')",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        nunito: ["Nunito", "serif"],
      },
      width: {
        desktop: "1200px",
      },
      screens: {
        mobile: "560px",
        tablet: "800px",
        laptop: "1000px",
        desktop: "1200px",
        "2xl": "1500px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-thin": {
          "::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
          },
        },
        ".scrollbar-thumb": {
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#ffc82c", // Màu của thumb
            borderRadius: "10px",
          },
        },
        ".scrollbar-track": {
          "::-webkit-scrollbar-track": {
            backgroundColor: "transparent", // Màu của track
            borderRadius: "10px",
          },
        },
        ".scrollbar-thumb:hover": {
          "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#cd9b32", // Màu của thumb khi hover
          },
        },
      });
    },
  ],
};
