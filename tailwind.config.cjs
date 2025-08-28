import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  theme: {
    extend: {
      colors: {
        tinta: "#0D1321",
        marfil: "#F5F1E8",
        carmin: "#C1121F",
        pizarra: "#3A3A3A",
        oliva: "#556B2F",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
});
