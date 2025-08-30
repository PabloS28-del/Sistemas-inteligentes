// @ts-check
import { defineConfig } from "astro/config";


import vue from "@astrojs/vue";


import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  base: "SI-FISI-G4-2025/",
  vite: {
    plugins: [tailwindcss()],
  }
});